import React from 'react'

export default function AboutHero() {
  return (
    <div>
      {/* About Section: Company with Values */}
      <div className='bg-white'>
        <div className='space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32'>
          {/* Heading */}
          <div className='text-center'>
            <svg
              className='text-orange-600 mb-5 hi-outline hi-code inline-block w-24 h-24'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z' />
            </svg>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Vibrant <span className='font-extrabold'>IIT Patna</span>
            </h2>
            <h3 className='text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto'>
              Indian Institute of Technology Patna is one of the new IITs
              established by an Act of the Indian Parliament on August 06, 2008.
              Vibrant IIT Patna is initiative to help students of IIT Patna and
              other colleges to find internships/projects at IIT Patna.
            </h3>
          </div>
          {/* END Heading */}
          {/* Values with Icons */}
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 rounded-lg border text-center p-8'>
            <div className='space-y-4'>
              <svg
                stroke='currentColor'
                fill='none'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                className='opacity-50 hi-outline hi-heart inline-block w-8 h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                />
              </svg>
              <h3 className='font-medium'>Passion</h3>
            </div>
            <div className='space-y-4'>
              <svg
                stroke='currentColor'
                fill='none'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                className='text-emerald-500 hi-outline hi-beaker inline-block w-8 h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
                />
              </svg>
              <h3 className='font-medium'>Creativity</h3>
            </div>
            <div className='space-y-4'>
              <svg
                stroke='currentColor'
                fill='none'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                className='text-orange-500 hi-outline hi-badge-check inline-block w-8 h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
                />
              </svg>
              <h3 className='font-medium'>Design</h3>
            </div>
            <div className='space-y-4'>
              <svg
                stroke='currentColor'
                fill='none'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                className='text-blue-500 hi-outline hi-check-circle inline-block w-8 h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <h3 className='font-medium'>Quality</h3>
            </div>
            <div className='space-y-4'>
              <svg
                stroke='currentColor'
                fill='none'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                className='text-purple-500 hi-outline hi-lightning-bolt inline-block w-8 h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
              <h3 className='font-medium'>Simplicity</h3>
            </div>
            <div className='space-y-4'>
              <svg
                stroke='currentColor'
                fill='none'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                className='text-pink-500 hi-outline hi-fire inline-block w-8 h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z'
                />
              </svg>
              <h3 className='font-medium'>Motivation</h3>
            </div>
          </div>
          {/* END Values with Icons */}
          {/* Values */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
            <div>
              <h3 className='flex items-center space-x-2 text-lg font-bold uppercase tracking-wide mb-2'>
                <svg
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                  className='opacity-50 hi-solid hi-heart inline-block w-5 h-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>Passion</span>
              </h3>
              <p className='leading-relaxed text-gray-600'>
                We are passionate with what we do and love crafting products
                that can make your life easier and help you succeed. We pay
                attention to small details and always aiming for the best.
              </p>
            </div>
            <div>
              <h3 className='flex items-center space-x-2 text-lg font-bold uppercase tracking-wide mb-2'>
                <svg
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                  className='opacity-50 hi-solid hi-arrow-down inline-block w-5 h-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>Commitment</span>
              </h3>
              <p className='leading-relaxed text-gray-600'>
                We are committed to our work and stand by our projects. Our aim
                is to improve them in every update and offer the most
                full-featured packages with the smallest possible footprint.
              </p>
            </div>
            <div>
              <h3 className='flex items-center space-x-2 text-lg font-bold uppercase tracking-wide mb-2'>
                <svg
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                  className='opacity-50 hi-solid hi-cube-transparent inline-block w-5 h-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>Less is More</span>
              </h3>
              <p className='leading-relaxed text-gray-600'>
                We believe that design should be invisible and enhance the user
                experience, not get in the way. This gives room for your content
                to breath and attracts your users’ attention.
              </p>
            </div>
          </div>
          {/* END Values */}
        </div>
      </div>
      {/* END About Section: Company with Values */}
    </div>
  )
}
