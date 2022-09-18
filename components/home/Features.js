import React from 'react'

export default function Features() {
  return (
    <div>
      {/* Features Section: Vertical Cards */}
      <div className='bg-white overflow-hidden'>
        <div className='container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32'>
          <div className='flex flex-col lg:flex-row lg:items-center space-y-12 lg:space-y-0 lg:space-x-20'>
            {/* Heading */}
            <div className='lg:w-5/12 xl:w-5/12 md:py-12 space-y-10'>
              <div>
                <div className='text-sm uppercase font-bold tracking-wider mb-1 text-orange-700'>
                  It’s time to grow
                </div>
                <h2 className='text-3xl md:text-4xl font-extrabold mb-4'>
                  Amazing features packed in a neat package
                </h2>
                <h3 className='text-lg md:text-xl md:leading-relaxed font-medium text-gray-600'>
                  You will love working with your newly updated and customized
                  dashboard.
                </h3>
              </div>
            </div>
            {/* END Heading */}
            {/* Features in Cards */}
            <div className='lg:w-7/12 xl:w-7/12 flex-none relative'>
              <div className='pattern-dots-xl opacity-10 absolute top-0 left-0 w-48 h-64 md:mt-20 transform -translate-x-10 -translate-y-10' />
              <div className='pattern-dots-xl opacity-10 absolute bottom-0 right-0 w-48 h-64 md:mb-20 transform translate-x-10 translate-y-10' />
              <div className='relative flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0'>
                <div className='md:w-1/2 md:mt-24 space-y-6'>
                  <div className='group bg-white p-5 transition ease-out duration-200 border-2 border-gray-200 rounded-2xl hover:border-orange-300'>
                    <div className='inline-flex items-center justify-center w-10 h-10 m-2 mb-6 relative'>
                      <div className='absolute inset-0 rounded-3xl -m-2 transform rotate-6 bg-orange-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105' />
                      <div className='absolute inset-0 rounded-2xl transform -rotate-6 bg-orange-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105' />
                      <svg
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                        className='text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-solid hi-adjustments inline-block w-5 h-5'
                      >
                        <path d='M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z' />
                      </svg>
                    </div>
                    <h4 className='text-lg font-bold mb-2'>Customizable</h4>
                    <p className='leading-relaxed text-gray-600'>
                      Fusce purus nisi, gravida sed consectetur ut, interdum
                      quis nisi. Quisque egestas nisl id lectus facilisis
                      scelerisque. Proin rhoncus dui at ligula vestibulum ut
                      facilisis.
                    </p>
                  </div>
                  <div className='group bg-white p-5 transition ease-out duration-200 border-2 border-gray-200 rounded-2xl hover:border-red-300'>
                    <div className='inline-flex items-center justify-center w-10 h-10 m-2 mb-6 relative'>
                      <div className='absolute inset-0 rounded-3xl -m-2 transform rotate-6 bg-red-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105' />
                      <div className='absolute inset-0 rounded-2xl transform -rotate-6 bg-red-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105' />
                      <svg
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                        className='text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-solid hi-chart-pie inline-block w-5 h-5'
                      >
                        <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z' />
                        <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z' />
                      </svg>
                    </div>
                    <h4 className='text-lg font-bold mb-2'>Rich Statistics</h4>
                    <p className='leading-relaxed text-gray-600'>
                      Fusce purus nisi, gravida sed consectetur ut, interdum
                      quis nisi. Quisque egestas nisl id lectus facilisis
                      scelerisque. Proin rhoncus dui at ligula vestibulum ut
                      facilisis.
                    </p>
                  </div>
                </div>
                <div className='md:w-1/2 space-y-6'>
                  <div className='group bg-white p-5 transition ease-out duration-200 border-2 border-gray-200 rounded-2xl hover:border-emerald-300'>
                    <div className='inline-flex items-center justify-center w-10 h-10 m-2 mb-6 relative'>
                      <div className='absolute inset-0 rounded-3xl -m-2 transform rotate-6 bg-emerald-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105' />
                      <div className='absolute inset-0 rounded-2xl transform -rotate-6 bg-emerald-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105' />
                      <svg
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                        className='text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-solid hi-globe inline-block w-5 h-5'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <h4 className='text-lg font-bold mb-2'>Works globally</h4>
                    <p className='leading-relaxed text-gray-600'>
                      Fusce purus nisi, gravida sed consectetur ut, interdum
                      quis nisi. Quisque egestas nisl id lectus facilisis
                      scelerisque. Proin rhoncus dui at ligula vestibulum ut
                      facilisis.
                    </p>
                  </div>
                  <div className='group bg-white p-5 transition ease-out duration-200 border-2 border-gray-200 rounded-2xl hover:border-purple-300'>
                    <div className='inline-flex items-center justify-center w-10 h-10 m-2 mb-6 relative'>
                      <div className='absolute inset-0 rounded-3xl -m-2 transform rotate-6 bg-purple-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105' />
                      <div className='absolute inset-0 rounded-2xl transform -rotate-6 bg-purple-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105' />
                      <svg
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                        className='text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-solid hi-lightning-bolt inline-block w-5 h-5'
                      >
                        <path
                          fillRule='evenodd'
                          d='M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <h4 className='text-lg font-bold mb-2'>Lighting fast UI</h4>
                    <p className='leading-relaxed text-gray-600'>
                      Fusce purus nisi, gravida sed consectetur ut, interdum
                      quis nisi. Quisque egestas nisl id lectus facilisis
                      scelerisque. Proin rhoncus dui at ligula vestibulum ut
                      facilisis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* END Features in Cards */}
          </div>
        </div>
      </div>
      {/* END Features Section: Vertical Cards */}
    </div>
  )
}
