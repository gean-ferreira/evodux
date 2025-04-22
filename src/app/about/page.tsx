import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a Evodux, uma empresa de tecnologia especializada em soluções digitais inovadoras.",
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-indigo-900 py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-purple-900 opacity-80"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sobre a Evodux
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100">
              Conheça nossa história, missão e valores que nos guiam na criação
              de soluções digitais inovadoras.
            </p>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nossa História
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                A Evodux nasceu da visão de criar soluções tecnológicas que
                realmente transformam negócios. Fundada por especialistas em
                tecnologia apaixonados por inovação, nossa empresa tem como
                missão oferecer produtos digitais de alta qualidade que
                impulsionam o crescimento de nossos clientes.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Ao longo dos anos, desenvolvemos uma abordagem única que combina
                expertise técnica com um profundo entendimento das necessidades
                de negócio, resultando em soluções que não apenas resolvem
                problemas imediatos, mas também estabelecem bases sólidas para o
                futuro.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-indigo-600 bg-opacity-90 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <h3 className="text-2xl font-bold mb-4">Evodux</h3>
                    <p className="text-lg mb-4">
                      Soluções digitais baseadas em tecnologia
                    </p>
                    <div className="h-px w-24 bg-white/50 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nossa Missão e Valores
            </h2>
            <p className="text-lg text-gray-700">
              Na Evodux, acreditamos no poder da tecnologia para transformar
              negócios e melhorar vidas. Nossa missão é desenvolver soluções
              digitais inovadoras que impulsionam o crescimento sustentável de
              nossos clientes, sempre guiados por nossos valores fundamentais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow border-t-4 border-indigo-600">
              <div className="text-indigo-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Inovação</h3>
              <p className="text-gray-700">
                Estamos constantemente buscando novas tecnologias e abordagens
                para oferecer soluções que antecipam as necessidades do mercado
                e proporcionam vantagens competitivas aos nossos clientes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow border-t-4 border-indigo-600">
              <div className="text-indigo-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Agilidade</h3>
              <p className="text-gray-700">
                Adotamos metodologias ágeis para entregar valor rapidamente,
                adaptando-nos às mudanças e garantindo que nossos clientes
                obtenham resultados concretos em prazos competitivos.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow border-t-4 border-indigo-600">
              <div className="text-indigo-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Confiabilidade</h3>
              <p className="text-gray-700">
                Construímos relações duradouras baseadas em transparência e
                resultados consistentes, honrando nossos compromissos e
                oferecendo um suporte contínuo aos nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Estamos prontos para entender seu negócio e desenvolver soluções
            digitais que impulsionem seu crescimento.
          </p>
          <Link
            href="/contact"
            className="btn bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3"
          >
            Entre em Contato
          </Link>
        </div>
      </section>
    </>
  );
}
