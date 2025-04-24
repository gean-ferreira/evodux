import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/css/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
  },
  icons: {
    other: {
      rel: 'icon',
      url: 'data:,',
    },
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
        <Footer />
      </body>
    </html>
  )
}
