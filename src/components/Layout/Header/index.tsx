'use client'

import { useState } from 'react'
import { Button } from '@/components/UI/Button'
import { headerLinks } from '@/content'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <header
        className={`w-full z-100 top-0 start-0 bg-white backdrop-blur-md ${open ? 'fixed shadow-md' : ''} `}
      >
        <div className='px-6 md:px-12 py-4 flex justify-between items-center'>
          {/* Logo */}
          <Link
            href='/'
            aria-label='Home'
            className='text-xl font-semibold text-blue-600'
          >
            TradeSphere
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:block'>
            <ul className='flex gap-6'>
              {headerLinks?.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    aria-label={item.title}
                    className={`
                      text-sm font-medium text-[#565D6DFF] hover:text-blue-700 active:text-blue-700
                      ${pathname === item.href ? 'text-blue-700' : ''}
                    `}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Buttons */}
          <nav className='hidden md:block'>
            <ul className='flex gap-4'>
              <li>
                <Link href='/login' aria-label='Login'>
                  <Button variant='outline'>Login</Button>
                </Link>
              </li>
              <li>
                <Link href='/sign-up' aria-label='Signup'>
                  <Button variant='default'>Sign Up</Button>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className='md:hidden text-blue-500'
            onClick={() => setOpen(!open)}
            aria-label='Toggle Menu'
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className='md:hidden px-6 pb-6 z-100 animate-in fade-in slide-in-from-top-2'>
            {/* Nav links */}
            <nav>
              <ul className='flex flex-col gap-4'>
                {headerLinks?.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      aria-label={item.title}
                      className='text-sm font-medium text-[#565D6DFF] hover:text-blue-700'
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Buttons */}
            <div className='mt-6 flex flex-col gap-3'>
              <Link
                href='/login'
                aria-label='Login'
                onClick={() => setOpen(false)}
              >
                <Button variant='outline' className='w-full'>
                  Login
                </Button>
              </Link>

              <Link
                href='/sign-up'
                aria-label='Signup'
                onClick={() => setOpen(false)}
              >
                <Button variant='default' className='w-full'>
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
