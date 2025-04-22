import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evodux | Soluções Digitais Baseadas em Tecnologia",
  description:
    "Soluções digitais baseadas em tecnologia para acelerar seu negócio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 shadow-sm">
          <div className="container mx-auto px-4 md:px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-indigo-600">
                Evodux
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  Sobre
                </Link>
                <Link
                  href="/services"
                  className="text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  Serviços
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  Contato
                </Link>
              </nav>
              <button className="md:hidden text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>
        <main className="pt-20">{children}</main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold text-indigo-400 mb-2">
                  Evodux
                </h2>
                <p className="max-w-md text-gray-400">
                  Soluções digitais baseadas em tecnologia para acelerar seu
                  negócio.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-indigo-400">
                  Contato
                </h3>
                <p className="text-gray-400">email@evodux.com</p>
                <p className="text-gray-400">(XX) XXXX-XXXX</p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
              <p>
                &copy; {new Date().getFullYear()} Evodux. Todos os direitos
                reservados.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
