import React from 'react'

export default function Team() {
  return (
    <div>
      {/* Team Section: Vertical Link Photos */}
      <div className='bg-white'>
        <div className='space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32'>
          {/* Heading */}
          <div className='text-center'>
            <h2 className='text-3xl md:text-4xl font-extrabold mb-4'>
              Meet our amazing team
            </h2>
            <h3 className='text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto'>
              They are working nonstop behind the scenes to help you build
              better products, web services and websites.
            </h3>
          </div>
          {/* END Heading */}
          {/* Team */}
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16'>
            <div className='text-center'>
              <a
                href='javascript:void(0)'
                className='block relative group overflow-hidden active:opacity-75 mb-3'
              >
                <div className='absolute top-0 right-0 w-16 h-16 -mt-8 -mr-8 transform transition ease-out duration-150 rotate-45 scale-0 group-hover:scale-125 bg-white z-10' />
                <div className='absolute bottom-0 left-0 w-16 h-16 -mb-8 -ml-8 transform transition ease-out duration-150 rotate-45 scale-0 group-hover:scale-125 bg-white z-10' />
                <img
                  src='https://source.unsplash.com/nHoaFkrJEx4/640x800'
                  alt='User Avatar'
                  className='transform transition ease-out duration-150 group-hover:scale-110'
                />
              </a>
              <h4 className='text-xl font-semibold mb-1'>Irma Norton</h4>
              <p className='text-gray-600 font-medium mb-3'>
                Founder &amp; CEO
              </p>
              <div className='space-x-1 mb-3'>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-twitter inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z' />
                  </svg>
                </a>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-facebook inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z' />
                  </svg>
                </a>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-linkedin inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='text-center'>
              <a
                href='javascript:void(0)'
                className='block relative group overflow-hidden active:opacity-75 mb-3'
              >
                <div className='absolute top-0 right-0 w-16 h-16 -mt-8 -mr-8 transform transition ease-out duration-150 rotate-45 scale-0 group-hover:scale-125 bg-white z-10' />
                <div className='absolute bottom-0 left-0 w-16 h-16 -mb-8 -ml-8 transform transition ease-out duration-150 rotate-45 scale-0 group-hover:scale-125 bg-white z-10' />
                <img
                  src='https://source.unsplash.com/Nm70URdtf3c/640x800'
                  alt='User Avatar'
                  className='transform transition ease-out duration-150 group-hover:scale-110'
                />
              </a>
              <h4 className='text-xl font-semibold mb-1'>Alejandro Lee</h4>
              <p className='text-gray-600 font-medium mb-3'>Product Design</p>
              <div className='space-x-1 mb-3'>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-twitter inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z' />
                  </svg>
                </a>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-facebook inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z' />
                  </svg>
                </a>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-linkedin inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='text-center'>
              <a
                href='javascript:void(0)'
                className='block relative group overflow-hidden active:opacity-75 mb-3'
              >
                <div className='absolute top-0 right-0 w-16 h-16 -mt-8 -mr-8 transform transition ease-out duration-150 rotate-45 scale-0 group-hover:scale-125 bg-white z-10' />
                <div className='absolute bottom-0 left-0 w-16 h-16 -mb-8 -ml-8 transform transition ease-out duration-150 rotate-45 scale-0 group-hover:scale-125 bg-white z-10' />
                <img
                  src='https://source.unsplash.com/mEZ3PoFGs_k/640x800'
                  alt='User Avatar'
                  className='transform transition ease-out duration-150 group-hover:scale-110'
                />
              </a>
              <h4 className='text-xl font-semibold mb-1'>Elsa King</h4>
              <p className='text-gray-600 font-medium mb-3'>Web Developer</p>
              <div className='space-x-1 mb-3'>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-twitter inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z' />
                  </svg>
                </a>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-facebook inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z' />
                  </svg>
                </a>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-linkedin inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='text-center'>
              <a
                href='javascript:void(0)'
                className='block relative group overflow-hidden active:opacity-75 mb-3'
              >
                <div className='absolute top-0 right-0 w-16 h-16 -mt-8 -mr-8 transform transition ease-out duration-150 rotate-45 scale-0 group-hover:scale-125 bg-white z-10' />
                <div className='absolute bottom-0 left-0 w-16 h-16 -mb-8 -ml-8 transform transition ease-out duration-150 rotate-45 scale-0 group-hover:scale-125 bg-white z-10' />
                <img
                  src='https://source.unsplash.com/sibVwORYqs0/640x800'
                  alt='User Avatar'
                  className='transform transition ease-out duration-150 group-hover:scale-110'
                />
              </a>
              <h4 className='text-xl font-semibold mb-1'>Alex Saunders</h4>
              <p className='text-gray-600 font-medium mb-3'>Marketing</p>
              <div className='space-x-1 mb-3'>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-twitter inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z' />
                  </svg>
                </a>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-facebook inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z' />
                  </svg>
                </a>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-linkedin inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='text-center'>
              <a
                href='javascript:void(0)'
                className='block relative group overflow-hidden active:opacity-75 mb-3'
              >
                <div className='absolute top-0 right-0 w-16 h-16 -mt-8 -mr-8 transform transition ease-out duration-150 rotate-45 scale-0 group-hover:scale-125 bg-white z-10' />
                <div className='absolute bottom-0 left-0 w-16 h-16 -mb-8 -ml-8 transform transition ease-out duration-150 rotate-45 scale-0 group-hover:scale-125 bg-white z-10' />
                <img
                  src='https://source.unsplash.com/euZ2n8dGUcQ/640x800'
                  alt='User Avatar'
                  className='transform transition ease-out duration-150 group-hover:scale-110'
                />
              </a>
              <h4 className='text-xl font-semibold mb-1'>Herman Reese</h4>
              <p className='text-gray-600 font-medium mb-3'>
                Support Specialist
              </p>
              <div className='space-x-1 mb-3'>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-twitter inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z' />
                  </svg>
                </a>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-facebook inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z' />
                  </svg>
                </a>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-linkedin inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='text-center'>
              <a
                href='javascript:void(0)'
                className='block relative group overflow-hidden active:opacity-75 mb-3'
              >
                <div className='absolute top-0 right-0 w-16 h-16 -mt-8 -mr-8 transform transition ease-out duration-150 rotate-45 scale-0 group-hover:scale-125 bg-white z-10' />
                <div className='absolute bottom-0 left-0 w-16 h-16 -mb-8 -ml-8 transform transition ease-out duration-150 rotate-45 scale-0 group-hover:scale-125 bg-white z-10' />
                <img
                  src='https://source.unsplash.com/DLKR_x3T_7s/640x800'
                  alt='User Avatar'
                  className='transform transition ease-out duration-150 group-hover:scale-110'
                />
              </a>
              <h4 className='text-xl font-semibold mb-1'>Sue Keller</h4>
              <p className='text-gray-600 font-medium mb-3'>Web Developer</p>
              <div className='space-x-1 mb-3'>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-twitter inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z' />
                  </svg>
                </a>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-facebook inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z' />
                  </svg>
                </a>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-linkedin inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='text-center'>
              <a
                href='javascript:void(0)'
                className='block relative group overflow-hidden active:opacity-75 mb-3'
              >
                <div className='absolute top-0 right-0 w-16 h-16 -mt-8 -mr-8 transform transition ease-out duration-150 rotate-45 scale-0 group-hover:scale-125 bg-white z-10' />
                <div className='absolute bottom-0 left-0 w-16 h-16 -mb-8 -ml-8 transform transition ease-out duration-150 rotate-45 scale-0 group-hover:scale-125 bg-white z-10' />
                <img
                  src='https://source.unsplash.com/d2MSDujJl2g/640x800'
                  alt='User Avatar'
                  className='transform transition ease-out duration-150 group-hover:scale-110'
                />
              </a>
              <h4 className='text-xl font-semibold mb-1'>Julio Rivera</h4>
              <p className='text-gray-600 font-medium mb-3'>Marketing</p>
              <div className='space-x-1 mb-3'>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-twitter inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z' />
                  </svg>
                </a>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-facebook inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z' />
                  </svg>
                </a>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-linkedin inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='text-center'>
              <a
                href='javascript:void(0)'
                className='block relative group overflow-hidden active:opacity-75 mb-3'
              >
                <div className='absolute top-0 right-0 w-16 h-16 -mt-8 -mr-8 transform transition ease-out duration-150 rotate-45 scale-0 group-hover:scale-125 bg-white z-10' />
                <div className='absolute bottom-0 left-0 w-16 h-16 -mb-8 -ml-8 transform transition ease-out duration-150 rotate-45 scale-0 group-hover:scale-125 bg-white z-10' />
                <img
                  src='https://source.unsplash.com/ZGa9d1a_4tA/640x800'
                  alt='User Avatar'
                  className='transform transition ease-out duration-150 group-hover:scale-110'
                />
              </a>
              <h4 className='text-xl font-semibold mb-1'>Shawn Bates</h4>
              <p className='text-gray-600 font-medium mb-3'>SEO Expert</p>
              <div className='space-x-1 mb-3'>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-twitter inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z' />
                  </svg>
                </a>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-facebook inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z' />
                  </svg>
                </a>
                <a
                  href='javascript:void(0)'
                  className='text-gray-400 hover:text-gray-600 active:text-gray-400'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon-linkedin inline-block w-5 h-5'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* END Team */}
        </div>
      </div>
      {/* END Team Section: Vertical Link Photos */}
    </div>
  )
}
