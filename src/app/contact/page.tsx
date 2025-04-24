'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { CONTACT_INFO } from '@/utils/constants/contact.const'
import { FAQ_DATA } from '@/utils/data/faq.data'
import { contactSchema, type FormValues } from '@/schemas/contact.schema'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    setIsError(false)

    try {
      // Simulando envio do formulário
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log('Form data:', data)
      setIsSuccess(true)
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className='relative bg-indigo-900 py-24 md:py-32'>
        <div className='absolute inset-0 bg-gradient-to-r from-indigo-800 to-purple-900 opacity-80'></div>
        <div className='container relative z-10 mx-auto px-4 md:px-6 text-white'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              Fale Conosco
            </h1>
            <p className='text-xl md:text-2xl text-indigo-100'>
              Estamos prontos para ajudar a impulsionar seu negócio com soluções
              digitais inovadoras.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className='section bg-white'>
        <div className='container'>
          <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div>
              <h2 className='text-3xl font-bold mb-6 text-gray-900'>
                Entre em Contato
              </h2>
              <p className='text-lg text-gray-700 mb-8'>
                Preencha o formulário ao lado ou use os dados de contato abaixo
                para falar conosco. Estamos ansiosos para entender seu projeto e
                discutir como podemos ajudar.
              </p>

              <div className='space-y-6'>
                <div className='flex items-start items-center'>
                  <div className='flex-shrink-0 bg-indigo-100 rounded-full p-3 mr-4'>
                    <svg
                      className='h-6 w-6 text-indigo-600'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-1 text-gray-900'>
                      Email
                    </h3>
                    <p className='text-gray-600'>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className='hover:text-indigo-600 transition-colors'
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className='flex items-start items-center'>
                  <div className='flex-shrink-0 bg-indigo-100 rounded-full p-3 mr-4'>
                    <svg
                      className='h-6 w-6 text-indigo-600'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-1 text-gray-900'>
                      Telefone
                    </h3>
                    <p className='text-gray-600'>
                      <a
                        href={`https://wa.me/${CONTACT_INFO.phone.replace(/\D/g, '')}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-indigo-600 transition-colors'
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className='flex items-start items-center'>
                  <div className='flex-shrink-0 bg-indigo-100 rounded-full p-3 mr-4'>
                    <svg
                      className='h-6 w-6 text-indigo-600'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-1 text-gray-900'>
                      Endereço
                    </h3>
                    <p className='text-gray-600'>Rio de Janeiro, RJ - Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className='bg-gray-50 p-8 rounded-lg shadow-sm'>
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='text-center py-12'
                  >
                    <div className='bg-green-100 text-green-700 rounded-full p-4 inline-flex mb-6'>
                      <svg
                        className='h-12 w-12'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                    </div>
                    <h3 className='text-2xl font-bold mb-4 text-gray-900'>
                      Mensagem Enviada!
                    </h3>
                    <p className='text-gray-600 mb-6'>
                      Obrigado por entrar em contato. Retornaremos em breve.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className='btn btn-primary'
                    >
                      Enviar Outra Mensagem
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-gray-700 font-medium mb-2'
                      >
                        Nome
                      </label>
                      <input
                        id='name'
                        type='text'
                        className={`form-control ${
                          errors.name ? 'ring-red-500' : ''
                        }`}
                        placeholder='Seu nome'
                        {...register('name')}
                      />
                      {errors.name && (
                        <p className='mt-1 text-sm text-red-600'>
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor='email'
                        className='block text-gray-700 font-medium mb-2'
                      >
                        Email
                      </label>
                      <input
                        id='email'
                        type='text'
                        inputMode='email'
                        autoComplete='email'
                        className={`form-control ${
                          errors.email ? 'ring-red-500' : ''
                        }`}
                        placeholder='seu@email.com'
                        {...register('email')}
                      />
                      {errors.email && (
                        <p className='mt-1 text-sm text-red-600'>
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor='message'
                        className='block text-gray-700 font-medium mb-2'
                      >
                        Mensagem
                      </label>
                      <textarea
                        id='message'
                        rows={5}
                        className={`form-control ${
                          errors.message ? 'ring-red-500' : ''
                        }`}
                        placeholder='Como podemos ajudar?'
                        {...register('message')}
                      />
                      {errors.message && (
                        <p className='mt-1 text-sm text-red-600'>
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {isError && (
                      <div className='bg-red-50 text-red-700 p-4 rounded-md'>
                        Ocorreu um erro ao enviar sua mensagem. Por favor, tente
                        novamente.
                      </div>
                    )}

                    <button
                      type='submit'
                      className='btn btn-primary w-full'
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className='flex items-center justify-center'>
                          <svg
                            className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                            fill='none'
                            viewBox='0 0 24 24'
                          >
                            <circle
                              className='opacity-25'
                              cx='12'
                              cy='12'
                              r='10'
                              stroke='currentColor'
                              strokeWidth='4'
                            ></circle>
                            <path
                              className='opacity-75'
                              fill='currentColor'
                              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                            ></path>
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        'Enviar Mensagem'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='bg-gray-50 py-16'>
        <div className='container'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl font-bold mb-12 text-center text-gray-900'>
              Perguntas Frequentes
            </h2>
            <div className='space-y-6'>
              {FAQ_DATA.map((item, index) => (
                <div key={index} className='bg-white p-6 rounded-lg shadow-sm'>
                  <h3 className='text-xl font-semibold mb-3 text-gray-900'>
                    {item.question}
                  </h3>
                  <p className='text-gray-600'>{item.answer}</p>
                </div>
              ))}
            </div>
            <div className='mt-12 text-center'>
              <p className='text-gray-600 mb-6'>
                Não encontrou o que procurava? Entre em contato direto conosco!
              </p>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className='btn btn-primary'
              >
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
