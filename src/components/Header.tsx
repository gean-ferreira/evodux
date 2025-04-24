'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAVIGATION_DATA } from '@/utils/data/navigation.data'

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const svgProps = {
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    fill: 'none',
    className: 'h-6 w-6',
    strokeWidth: 2,
    strokeLinecap: 'round',
  }

  /* variantes para o painel */
  const panel = {
    closed: { height: 0, opacity: 0, transition: { when: 'afterChildren' } },
    open: {
      height: 'auto',
      opacity: 1,
      transition: { when: 'beforeChildren', staggerChildren: 0.05 },
    },
  }

  /* variantes para cada item */
  const item = {
    closed: { y: -8, opacity: 0 },
    open: { y: 0, opacity: 1 },
  }

  /* variantes para os links */
  const linkVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.04, transition: { duration: 0.2 } },
  }

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-white/95 shadow-sm'>
      <div className='container mx-auto flex items-center justify-between px-4 md:px-6 py-4'>
        <Link href='/' className='text-2xl font-bold text-indigo-600'>
          Evodux
        </Link>

        {/* nav desktop */}
        <nav className='hidden md:flex gap-8'>
          {NAVIGATION_DATA.map(({ href, label }) => {
            const isActive = pathname === href

            return (
              <motion.div
                key={href}
                variants={linkVariants}
                initial='idle'
                whileHover={isActive ? 'idle' : 'hover'}
                className='relative'
              >
                {isActive ? (
                  <span className='text-indigo-600 font-medium cursor-default'>
                    {label}
                    <motion.div
                      className='absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600'
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: 0.2,
                        ease: 'easeOut',
                      }}
                    />
                  </span>
                ) : (
                  <Link
                    href={href}
                    className='text-gray-700 hover:text-indigo-600 transition-colors duration-300'
                  >
                    {label}
                  </Link>
                )}
              </motion.div>
            )
          })}
        </nav>

        {/* toggle */}
        <button
          onClick={() => setOpen(!open)}
          className='md:hidden text-gray-700'
        >
          <AnimatePresence initial={false} mode='wait'>
            {open ? (
              <motion.svg
                key='close'
                {...svgProps}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <motion.line x1='6' y1='6' x2='18' y2='18' />
                <motion.line x1='6' y1='18' x2='18' y2='6' />
              </motion.svg>
            ) : (
              <motion.svg
                key='menu'
                {...svgProps}
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <motion.path d='M4 6h16M4 12h16M4 18h16' />
              </motion.svg>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* painel mobile animado */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            key='mobile-nav'
            className='md:hidden overflow-hidden border-t border-gray-100 bg-white shadow-sm'
            initial='closed'
            animate='open'
            exit='closed'
            variants={panel}
          >
            <ul className='flex flex-col px-6 py-4 text-gray-700'>
              {links.map(({ href, label }) => {
                const isActive = pathname === href

                return (
                  <motion.li
                    key={href}
                    variants={item}
                    onClick={() => setOpen(false)}
                  >
                    {isActive ? (
                      <span className='block py-2 text-indigo-600 font-medium cursor-default relative inline-block'>
                        {label}
                        <motion.div
                          className='absolute -bottom-0.5 left-0 w-full h-0.5 bg-indigo-600'
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            duration: 0.2,
                            ease: 'easeOut',
                          }}
                        />
                      </span>
                    ) : (
                      <Link
                        href={href}
                        className='block py-2 transition-colors duration-300 hover:text-indigo-600'
                      >
                        {label}
                      </Link>
                    )}
                  </motion.li>
                )
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
