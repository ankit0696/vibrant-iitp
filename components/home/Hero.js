import React from 'react'

export default function Hero() {
  return (
    <div>
      <div className='flex flex-col lg:flex-row space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32'>
        <div className='lg:w-1/2 lg:flex lg:items-center'>
          <div>
            <div className='font-semibold inline-flex px-2 py-1 leading-4 mb-2 text-sm rounded text-gray-700 bg-gray-200'>
              v2.0 Latest Version
            </div>
            <h1 className='text-3xl md:text-4xl font-extrabold mb-4'>
              Next generation{' '}
              <span className='text-orange-600'>website builder</span>
            </h1>
            <h2 className='text-lg md:text-xl md:leading-relaxed font-medium text-gray-600'>
              Super fast and easy to use software to power your next idea or
              build your client’s web projects. Get it today and profit.
            </h2>
            <div className='flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16'>
              <a
                href='javascript:void(0)'
                className='inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-orange-700 bg-orange-700 text-white hover:text-white hover:bg-orange-800 hover:border-orange-800 focus:ring focus:ring-orange-500 focus:ring-opacity-50 active:bg-orange-700 active:border-orange-700'
              >
                <svg
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                  className='opacity-50 hi-solid hi-download inline-block w-5 h-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>Download for free</span>
              </a>
              <a
                href='javascript:void(0)'
                className='inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none'
              >
                <span>Learn more</span>
              </a>
            </div>
          </div>
        </div>
        <div className='lg:w-1/2 lg:ml-16 lg:flex lg:justify-center lg:items-center'>
          <div className='lg:w-96 mx-5 relative'>
            <div className='absolute pattern-dots-xl text-orange-100 top-0 left-0 w-32 h-48 md:h-96 transform -translate-y-12 -translate-x-16 -rotate-3' />
            <div className='absolute pattern-dots-xl text-orange-100 bottom-0 right-0 w-32 h-48 md:h-96 transform translate-y-12 translate-x-16 rotate-3' />
            <div className='absolute inset-0 rounded-xl bg-orange-100 bg-opacity-50 -m-4 transform rotate-2' />
            <div className='absolute inset-0 rounded-xl bg-orange-200 bg-opacity-50 -m-4 transform -rotate-2' />
            <img
              src='https://source.unsplash.com/RSCirJ70NDM/800x1000'
              alt='Hero Image'
              className='relative rounded-lg mx-auto shadow-lg z-0'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
