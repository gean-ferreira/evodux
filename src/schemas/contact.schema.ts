import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Nome muito curto').max(50, 'Nome muito longo'),
  email: z.string().email('Email inválido'),
  message: z
    .string()
    .min(10, 'Mensagem muito curta')
    .max(500, 'Mensagem muito longa'),
})

export type FormValues = z.infer<typeof contactSchema>
