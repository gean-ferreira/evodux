import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Evodux',
    default: 'Evodux | Soluções Digitais Baseadas em Tecnologia',
  },
  description:
    'Soluções digitais baseadas em tecnologia para acelerar seu negócio',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.evodux.com.br/',
    siteName: 'Evodux',
    images: [
      {
        url: 'https://www.evodux.com.br/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Evodux Soluções Digitais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@evodux',
    creator: '@evodux',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR' className='scroll-smooth'>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className='pt-16'>{children}</main>
        <footer className='bg-gray-900 text-white py-12'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='flex flex-col md:flex-row md:justify-between'>
              <div className='mb-6 md:mb-0'>
                <h2 className='text-2xl font-bold text-indigo-400 mb-2'>
                  Evodux
                </h2>
                <p className='max-w-md text-gray-400'>
                  Soluções digitais baseadas em tecnologia para acelerar seu
                  negócio.
                </p>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-4 text-indigo-400'>
                  Contato
                </h3>
                <p className='text-gray-400'>email@evodux.com</p>
                <p className='text-gray-400'>(XX) XXXX-XXXX</p>
              </div>
            </div>
            <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-500'>
              <p>
                &copy; {new Date().getFullYear()} Evodux. Todos os direitos
                reservados.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
