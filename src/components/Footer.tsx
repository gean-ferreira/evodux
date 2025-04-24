import { CONTACT_INFO } from '@/utils/constants/contact.const'

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <h2 className='text-2xl font-bold text-indigo-400 mb-2'>Evodux</h2>
            <p className='max-w-md text-gray-400'>
              Soluções digitais baseadas em tecnologia para acelerar seu
              negócio.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4 text-indigo-400'>
              Contato
            </h3>
            <p className='text-gray-400'>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className='hover:text-indigo-300 transition-colors'
              >
                {CONTACT_INFO.email}
              </a>
            </p>
            <p className='text-gray-400'>
              <a
                href={`https://wa.me/${CONTACT_INFO.phone.replace(/\D/g, '')}`}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-indigo-300 transition-colors'
              >
                {CONTACT_INFO.phone}
              </a>
            </p>
          </div>
        </div>
        <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-500'>
          <p>&copy; 2025 Evodux. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
