import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactSchema, FormValues } from '@/schemas/contact.schema'

const ipRequestTimes = new Map<string, number>()
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    // Pega o IP do usuário
    const ip = request.headers.get('x-forwarded-for') || 'unknown'

    const currentTime = Date.now()
    const lastRequestTime = ipRequestTimes.get(ip) || 0

    if (currentTime - lastRequestTime < 30 * 1000) {
      // 30 segundos
      return NextResponse.json(
        {
          success: false,
          error:
            'Muitas requisições recentes. Por favor, tente novamente mais tarde.',
        },
        { status: 429 }
      )
    }

    // Atualiza o tempo da última requisição
    ipRequestTimes.set(ip, currentTime)

    let body: unknown

    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { success: false, error: 'Corpo da requisição inválido' },
        { status: 400 }
      )
    }

    const result = contactSchema.safeParse(body as FormValues)

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Dados inválidos',
          issues: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      )
    }

    const { name, email, message } = result.data

    await resend.emails.send({
      from: 'ferreira@evodux.com.br', // Remetente
      to: 'ferreira@evodux.com.br', // Destinatário
      subject: `Nova mensagem de contato de ${name}`,
      html: `
                <h2>Nova Mensagem de Contato</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensagem:</strong><br/>${message}</p>
            `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 })
  }
}
