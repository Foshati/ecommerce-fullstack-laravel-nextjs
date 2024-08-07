import React from 'react';

export default function OurUser() {
  return (
    <div>
      <section className='body-font bg-gray-900 text-gray-400'>
        <div className='container mx-auto px-5 py-24'>
          <div className='mb-20 flex w-full flex-col text-center'>
            <h1 className='title-font mb-4 text-2xl font-medium text-white sm:text-3xl'>
              Master Cleanse Reliac Heirloom
            </h1>
            <p className='mx-auto text-base leading-relaxed lg:w-2/3'>test Text</p>
          </div>
          <div className='-m-4 flex flex-wrap text-center'>
            <div className='w-full p-4 sm:w-1/2 md:w-1/4'>
              <div className='rounded-lg border-2 border-gray-800 px-4 py-6'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  className='mb-3 inline-block h-12 w-12 text-indigo-400'
                  viewBox='0 0 24 24'>
                  <path d='M8 17l4 4 4-4m-4-5v9' />
                  <path d='M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29' />
                </svg>
                <h2 className='title-font text-3xl font-medium text-white'>2.7K</h2>
                <p className='leading-relaxed'>Downloads</p>
              </div>
            </div>
            <div className='w-full p-4 sm:w-1/2 md:w-1/4'>
              <div className='rounded-lg border-2 border-gray-800 px-4 py-6'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  className='mb-3 inline-block h-12 w-12 text-indigo-400'
                  viewBox='0 0 24 24'>
                  <path d='M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' />
                  <circle cx={9} cy={7} r={4} />
                  <path d='M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75' />
                </svg>
                <h2 className='title-font text-3xl font-medium text-white'>1.3K</h2>
                <p className='leading-relaxed'>Users</p>
              </div>
            </div>
            <div className='w-full p-4 sm:w-1/2 md:w-1/4'>
              <div className='rounded-lg border-2 border-gray-800 px-4 py-6'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  className='mb-3 inline-block h-12 w-12 text-indigo-400'
                  viewBox='0 0 24 24'>
                  <path d='M3 18v-6a9 9 0 0118 0v6' />
                  <path d='M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z' />
                </svg>
                <h2 className='title-font text-3xl font-medium text-white'>74</h2>
                <p className='leading-relaxed'>Files</p>
              </div>
            </div>
            <div className='w-full p-4 sm:w-1/2 md:w-1/4'>
              <div className='rounded-lg border-2 border-gray-800 px-4 py-6'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  className='mb-3 inline-block h-12 w-12 text-indigo-400'
                  viewBox='0 0 24 24'>
                  <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
                </svg>
                <h2 className='title-font text-3xl font-medium text-white'>46</h2>
                <p className='leading-relaxed'>Places</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
