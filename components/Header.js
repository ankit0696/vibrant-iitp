import React from 'react'

export default function Header() {
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
              <a
                href='javascript:void(0)'
                className='inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-orange-600 hover:text-orange-400'
              >
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
              {/* END Logo */}
              {/* Mega Menu visible on large screens */}

              <ul className='hidden lg:flex items-center'>
                <li className='relative group'>
                  <a
                    href='javascript:void(0)'
                    className='font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:text-orange-500 text-gray-900 hover:text-gray-500'
                  >
                    <span>Team</span>
                  </a>
                </li>
                <li className='relative group'>
                  <a
                    href='javascript:void(0)'
                    className='font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:text-orange-500 text-gray-900 hover:text-gray-500'
                  >
                    <span>Guidelines</span>
                  </a>
                </li>
                <li className='relative group'>
                  <a
                    href='javascript:void(0)'
                    className='font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:text-orange-500 text-gray-900 hover:text-gray-500'
                  >
                    <span>About</span>
                  </a>
                </li>
                <li className='relative group'>
                  <a
                    href='javascript:void(0)'
                    className='font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:text-orange-500 text-gray-900 hover:text-gray-500'
                  >
                    <span>Apply Now</span>
                  </a>
                </li>
              </ul>
              {/* END Mega Menu visible on large screens */}
              {/* Actions */}
              <div className='flex lg:hidden items-center justify-center space-x-1 sm:space-x-2'>
                {/* Toggle Button for navigation on smaller screens */}
                <button
                  type='button'
                  className='inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-orange-700 bg-orange-700 text-white hover:text-white hover:bg-orange-800 hover:border-orange-800 focus:ring focus:ring-orange-500 focus:ring-opacity-50 active:bg-orange-700 active:border-orange-700'
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
            <div className='lg:hidden'>
              <div className='grid grid-cols-1 sm:grid-cols-3 border rounded-xl mt-5'>
                <div className='col-span-2 p-3 space-y-6'>
                  <h4 className='px-3 pt-3 text-xs uppercase font-semibold tracking-wider text-orange-800'>
                    Featured Products
                  </h4>
                  <nav className='flex flex-col space-y-1'>
                    <a
                      href='javascript:void(0)'
                      className='p-3 rounded-xl flex items-center space-x-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium text-sm'
                    >
                      <div className='flex-none flex items-center justify-center w-16 h-16 bg-blue-100 rounded-3xl'>
                        <div className='flex items-center justify-center w-12 h-12 bg-blue-500 rounded-2xl transform rotate-3'>
                          <svg
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                            className='text-white hi-solid hi-code inline-block w-5 h-5'
                          >
                            <path
                              fillRule='evenodd'
                              d='M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </div>
                      </div>
                      <div className='space-y-1'>
                        <h5 className='font-semibold'>HTML Editor</h5>
                        <p className='opacity-75'>
                          Write and manipulate your markup directly in your
                          browser
                        </p>
                      </div>
                    </a>
                    <a
                      href='javascript:void(0)'
                      className='p-3 rounded-xl flex items-center space-x-3 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 font-medium text-sm'
                    >
                      <div className='flex-none flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-3xl'>
                        <div className='flex items-center justify-center w-12 h-12 bg-emerald-500 rounded-2xl transform rotate-3'>
                          <svg
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                            className='text-white hi-solid hi-color-swatch inline-block w-5 h-5'
                          >
                            <path
                              fillRule='evenodd'
                              d='M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </div>
                      </div>
                      <div className='space-y-1'>
                        <h5 className='font-semibold'>CSS Editor</h5>
                        <p className='opacity-75'>
                          Style your markup code with smart tools supporting
                          Sass
                        </p>
                      </div>
                    </a>
                    <a
                      href='javascript:void(0)'
                      className='p-3 rounded-xl flex items-center space-x-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 font-medium text-sm'
                    >
                      <div className='flex-none flex items-center justify-center w-16 h-16 bg-orange-100 rounded-3xl'>
                        <div className='flex items-center justify-center w-12 h-12 bg-orange-500 rounded-2xl transform rotate-3'>
                          <svg
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                            className='text-white hi-solid hi-puzzle inline-block w-5 h-5'
                          >
                            <path d='M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z' />
                          </svg>
                        </div>
                      </div>
                      <div className='space-y-1'>
                        <h5 className='font-semibold'>Web Page Builder</h5>
                        <p className='opacity-75'>
                          Explore all available components and build your
                          website
                        </p>
                      </div>
                    </a>
                  </nav>
                </div>
                <div className='p-6 space-y-6'>
                  <h4 className='text-xs uppercase font-semibold tracking-wider text-orange-800'>
                    Learn
                  </h4>
                  <nav className='flex flex-col space-y-3'>
                    <a
                      href='javascript:void(0)'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'
                    >
                      Resource Center
                    </a>
                    <a
                      href='javascript:void(0)'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'
                    >
                      Developer
                    </a>
                    <a
                      href='javascript:void(0)'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'
                    >
                      User Guides
                    </a>
                  </nav>
                  <h4 className='text-xs uppercase font-semibold tracking-wider text-orange-800'>
                    More
                  </h4>
                  <nav className='flex flex-col space-y-3'>
                    <a
                      href='javascript:void(0)'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'
                    >
                      Pricing
                    </a>
                    <a
                      href='javascript:void(0)'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'
                    >
                      About
                    </a>
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
