import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços | Evodux",
  description:
    "Conheça os serviços oferecidos pela Evodux: desenvolvimento de produtos digitais, integração de sistemas e consultoria especializada.",
};

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-indigo-900 py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-purple-900 opacity-80"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100">
              Soluções digitais personalizadas para impulsionar seu negócio para
              o próximo nível.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Como Podemos Ajudar
            </h2>
            <p className="text-lg text-gray-700">
              Na Evodux, oferecemos um conjunto completo de serviços digitais
              para atender às diversas necessidades do seu negócio. Nossa
              abordagem é sempre personalizada, focando em resultados concretos.
            </p>
          </div>

          {/* Service 1 */}
          <div className="flex flex-col md:flex-row gap-12 mb-20 items-center">
            <div className="flex-1 order-2 md:order-1">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                Desenvolvimento de Produtos Digitais
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Transformamos suas ideias em produtos digitais robustos e
                escaláveis, seguindo as melhores práticas de desenvolvimento e
                design de experiência do usuário.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Aplicativos web e mobile de alta performance
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Plataformas e sistemas personalizados
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Interfaces intuitivas e atraentes
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Soluções que evoluem com seu negócio
                  </span>
                </li>
              </ul>
              <Link href="/contact" className="btn btn-primary">
                Solicitar Orçamento
              </Link>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-6 rounded-lg">
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-center mb-4">
                    Desenvolvimento Ágil
                  </h4>
                  <p className="text-gray-600 text-center">
                    Utilizamos metodologias ágeis para entregar resultados
                    rapidamente, com ciclos de feedback contínuo para garantir a
                    qualidade.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col md:flex-row gap-12 mb-20 items-center">
            <div className="flex-1">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-6 rounded-lg">
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-center mb-4">
                    Integração Perfeita
                  </h4>
                  <p className="text-gray-600 text-center">
                    Criamos conexões eficientes entre seus sistemas, eliminando
                    silos de dados e automatizando processos.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                Integração de Sistemas e Automações
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Conectamos seus sistemas e ferramentas para criar fluxos de
                trabalho eficientes e automatizados, eliminando redundâncias e
                aumentando a produtividade da sua equipe.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Integração entre sistemas legados e novas tecnologias
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    APIs robustas e bem documentadas
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Automação de processos de negócio
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Fluxos de dados sincronizados e confiáveis
                  </span>
                </li>
              </ul>
              <Link href="/contact" className="btn btn-primary">
                Solicitar Orçamento
              </Link>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 order-2 md:order-1">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                Consultoria Especializada
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Oferecemos consultoria técnica especializada para ajudar sua
                equipe a tomar decisões estratégicas e implementar as melhores
                práticas em desenvolvimento e infraestrutura.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Design de experiência do usuário (UX)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Implementação de práticas DevOps
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Arquitetura de sistemas escaláveis
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Segurança e conformidade de dados
                  </span>
                </li>
              </ul>
              <Link href="/contact" className="btn btn-primary">
                Solicitar Orçamento
              </Link>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-6 rounded-lg">
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-center mb-4">
                    Expertise Técnica
                  </h4>
                  <p className="text-gray-600 text-center">
                    Nossa equipe de especialistas compartilha conhecimentos e
                    melhores práticas para fortalecer seu time e projeto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Entre em contato para uma avaliação personalizada das suas
            necessidades e descubra como podemos ajudar.
          </p>
          <Link
            href="/contact"
            className="btn bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3"
          >
            Fale Conosco
          </Link>
        </div>
      </section>
    </>
  );
}
