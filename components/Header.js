import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      {/* Main Header Section: With Mega Menu Alternate */}
      <div className='bg-white'>
        {/* Header */}
        <header
          id='page-header'
          className='flex flex-none items-center bg-white py-10'
        >
          <div className='container xl:max-w-7xl mx-auto px-4 lg:px-10'>
            <div className='flex items-center justify-between'>
              {/* Logo */}
              <Link href='/'>
                <a className='inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-orange-600 hover:text-orange-400'>
                  <svg
                    class='hi-solid hi-academic-cap inline-block w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z' />
                  </svg>
                  <span>Vibrant | IIT Patna</span>
                </a>
              </Link>
              {/* END Logo */}
              {/* Mega Menu visible on large screens */}

              <ul className='hidden lg:flex items-center'>
                <li className='relative group'>
                  <a
                    href='#'
                    className='font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:text-orange-500 text-gray-900 hover:text-gray-500'
                  >
                    <span>Guidelines</span>
                  </a>
                </li>
                <li className='relative group'>
                  <Link href='/about'>
                    <a className='font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:text-orange-500 text-gray-900 hover:text-gray-500'>
                      <span>About</span>
                    </a>
                  </Link>
                </li>
                <li className='relative group'>
                  <Link href='/account/login'>
                    <a className='font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:text-orange-500 text-gray-900 hover:text-gray-500'>
                      <span>Apply Now</span>
                    </a>
                  </Link>
                </li>
              </ul>
              {/* END Mega Menu visible on large screens */}
              {/* Actions */}
              <div className='flex lg:hidden items-center justify-center space-x-1 sm:space-x-2'>
                {/* Toggle Button for navigation on smaller screens */}
                <button
                  type='button'
                  className='inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-orange-700 bg-orange-700 text-white hover:text-white hover:bg-orange-800 hover:border-orange-800 focus:ring focus:ring-orange-500 focus:ring-opacity-50 active:bg-orange-700 active:border-orange-700'
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                    className='hi-solid hi-menu inline-block w-5 h-5'
                  >
                    <path
                      fillRule='evenodd'
                      d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                {/* END Toggle Button for navigation on smaller screens */}
              </div>
              {/* END Actions */}
            </div>
            {/* Navigation on smaller screens */}
            {/*
  Visibility
    Closed        'hidden'
    Opened        '' (no class)
*/}
            <div className={`lg:hidden ${isOpen ? '' : 'hidden'}`}>
              <div className='grid grid-cols-1 sm:grid-cols-3 border rounded-xl mt-5'>
                <div className='p-6 space-y-6'>
                  <h4 className='text-xs uppercase font-semibold tracking-wider text-orange-800'>
                    Menu
                  </h4>
                  <nav className='flex flex-col space-y-3'>
                    <a
                      href='#'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'
                    >
                      Guidelines
                    </a>
                    <Link href='/about'>
                      <a className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                        About
                      </a>
                    </Link>
                    <Link href='/account/login'>
                      <a className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                        Apply Now
                      </a>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
            {/* END Navigation on smaller screens */}
          </div>
        </header>
      </div>
    </div>
  )
}
