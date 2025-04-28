import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className='relative min-h-[calc(100vh-64px)] flex items-center bg-gradient-to-r from-indigo-900 to-purple-800'>
        <div className='absolute inset-0 bg-black opacity-40'></div>
        <div className='container relative z-10 mx-auto px-4 md:px-6 text-white'>
          <div className='max-w-3xl'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4'>
              <span className='text-indigo-300'>Evodux</span>
            </h1>
            <p className='text-xl md:text-2xl mb-8 text-gray-200'>
              Soluções digitais baseadas em tecnologia para acelerar seu
              negócio.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Link href='/contact' className='btn btn-primary'>
                Fale Conosco
              </Link>
              <Link href='/services' className='btn btn-secondary'>
                Conheça Nossos Serviços
              </Link>
            </div>
          </div>
        </div>
        <div className='hidden lg:block absolute right-0 bottom-0 w-1/3 h-full'>
          <div className='relative h-full w-full'>
            <div className='absolute bottom-0 right-0 w-full h-4/5 bg-gradient-to-tr from-transparent to-indigo-600/30 rounded-tl-full'></div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className='section bg-white'>
        <div className='container'>
          <h2 className='section-title'>Quem Somos</h2>
          <div className='flex flex-col md:flex-row items-center gap-12'>
            <div className='flex-1 order-2 md:order-1'>
              <p className='text-lg text-gray-700 mb-6'>
                A Evodux é uma empresa de tecnologia que desenvolve soluções
                digitais inovadoras com foco em eficiência, agilidade e
                experiência do usuário.
              </p>
              <div className='grid xl:grid-cols-3 gap-6 mb-8'>
                <div className='bg-indigo-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-semibold text-indigo-700 mb-2'>
                    Inovação
                  </h3>
                  <p className='text-gray-600'>
                    Buscamos constantemente novas tecnologias e abordagens.
                  </p>
                </div>
                <div className='bg-indigo-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-semibold text-indigo-700 mb-2'>
                    Agilidade
                  </h3>
                  <p className='text-gray-600'>
                    Entregas rápidas e eficientes para seu negócio.
                  </p>
                </div>
                <div className='bg-indigo-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-semibold text-indigo-700 mb-2'>
                    Confiabilidade
                  </h3>
                  <p className='text-gray-600'>
                    Compromisso com resultados e suporte contínuo.
                  </p>
                </div>
              </div>
              <Link href='/about' className='btn btn-primary'>
                Saiba Mais
              </Link>
            </div>
            <div className='flex-1 order-1 md:order-2 w-full'>
              <div className='relative h-80 md:h-96 w-full'>
                <div className='absolute inset-0 bg-indigo-200 rounded-lg transform rotate-3'></div>
                <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center'>
                  <div className='text-white text-center p-6'>
                    <h3 className='text-xl md:text-2xl font-bold mb-3'>
                      Nossa Essência
                    </h3>
                    <p className='text-base md:text-lg mb-4'>
                      Transformamos ideias em soluções que impulsionam o futuro
                      digital
                    </p>
                    <div className='h-px w-20 bg-white/50 mx-auto mb-4'></div>
                    <p className='text-sm md:text-base text-indigo-100 italic'>
                      &ldquo;A inovação está no DNA de cada projeto que
                      entregamos&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className='section bg-gray-50'>
        <div className='container'>
          <h2 className='section-title'>Nossos Serviços</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
              <div className='bg-indigo-100 text-indigo-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-3 text-gray-900'>
                Desenvolvimento de Produtos Digitais
              </h3>
              <p className='text-gray-600 mb-4'>
                Criamos produtos digitais personalizados que atendem
                precisamente às necessidades do seu negócio.
              </p>
              <Link
                href='/services'
                className='text-indigo-600 hover:text-indigo-800 font-medium'
              >
                Saiba mais →
              </Link>
            </div>
            <div className='bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
              <div className='bg-indigo-100 text-indigo-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-3 text-gray-900'>
                Integração de Sistemas
              </h3>
              <p className='text-gray-600 mb-4'>
                Conectamos seus sistemas existentes para criar fluxos de
                trabalho eficientes e automatizados.
              </p>
              <Link
                href='/services'
                className='text-indigo-600 hover:text-indigo-800 font-medium'
              >
                Saiba mais →
              </Link>
            </div>
            <div className='bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
              <div className='bg-indigo-100 text-indigo-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-3 text-gray-900'>
                Consultoria Especializada
              </h3>
              <p className='text-gray-600 mb-4'>
                Oferecemos consultoria em UX, DevOps e arquitetura escalável
                para otimizar seus projetos.
              </p>
              <Link
                href='/services'
                className='text-indigo-600 hover:text-indigo-800 font-medium'
              >
                Saiba mais →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-indigo-600'>
        <div className='container text-center text-white'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Pronto para acelerar seu negócio?
          </h2>
          <p className='text-lg text-indigo-100 mb-8 max-w-2xl mx-auto'>
            Entre em contato conosco hoje mesmo para discutir como podemos
            ajudar a transformar sua empresa com soluções digitais inovadoras.
          </p>
          <Link href='/contact' className='btn btn-white'>
            Fale Conosco
          </Link>
        </div>
      </section>
    </>
  )
}
