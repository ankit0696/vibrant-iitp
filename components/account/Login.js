import React from 'react'

export default function Login() {
  return (
    <div>
      {/* Page Container */}
      <div
        id='page-container'
        className='flex flex-col mx-auto w-full min-h-screen bg-gray-100'
      >
        {/* Page Content */}
        <main id='page-content' className='flex flex-auto flex-col max-w-full'>
          <div
            className='min-h-screen flex flex-col bg-cover bg-bottom'
            style={{
              backgroundImage: 'url("/images/signin.jpg")',
            }}
          >
            {/* Sign In Section */}
            <div className='flex grow md:w-8/12 lg:w-5/12 xl:w-4/12 bg-white shadow-xl'>
              <div className='flex flex-col p-8 lg:p-16 xl:p-20 w-full'>
                {/* Sign In Content */}
                <div className='grow flex items-center'>
                  <div className='w-full max-w-lg mx-auto space-y-10'>
                    {/* Sign In Form */}
                    <form onsubmit='return false;' className='space-y-6'>
                      <div className='space-y-1'>
                        <label
                          htmlFor='email'
                          name='email'
                          className='font-medium'
                        >
                          Email
                        </label>
                        <input
                          className='block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50'
                          type='email'
                          id='email'
                          name='email'
                          placeholder='Enter your email'
                        />
                      </div>
                      <div className='space-y-1'>
                        <label
                          htmlFor='password'
                          name='email'
                          className='font-medium'
                        >
                          Password
                        </label>
                        <input
                          className='block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50'
                          type='password'
                          id='password'
                          name='password'
                          placeholder='Enter your password'
                        />
                      </div>
                      <div>
                        <button
                          type='submit'
                          className='inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-orange-700 bg-orange-700 text-white hover:text-white hover:bg-orange-800 hover:border-orange-800 focus:ring focus:ring-orange-500 focus:ring-opacity-50 active:bg-orange-700 active:border-orange-700'
                        >
                          Sign In
                        </button>
                        <div className='space-y-2 sm:flex sm:items-center sm:justify-between sm:space-x-2 sm:space-y-0 mt-4'>
                          <label className='flex items-center'>
                            <input
                              type='checkbox'
                              id='remember_me'
                              name='remember_me'
                              className='border border-gray-300 rounded h-4 w-4 text-orange-500 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50'
                            />
                            <span className='ml-2'>Remember me</span>
                          </label>
                          <a
                            href='#'
                            className='font-medium inline-block text-orange-600 hover:text-orange-400'
                          >
                            Forgot Password?
                          </a>
                        </div>
                      </div>
                    </form>
                    {/* END Sign In Form */}
                    <div className='text-sm text-gray-500'>
                      Don’t have an account yet?
                      <a
                        href='#'
                        className='font-medium text-orange-600 hover:text-orange-400'
                      >
                        Join us today
                      </a>
                    </div>
                  </div>
                </div>
                {/* END Sign In Content */}
              </div>
            </div>
            {/* END Sign In Section */}
          </div>
        </main>
        {/* END Page Content */}
      </div>
      {/* END Page Container */}
    </div>
  )
}
