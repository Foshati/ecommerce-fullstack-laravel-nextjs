import Header from '@/src/components/layout/header/Header';
import React from 'react';

export const metadata = {
  showFooter: true,
};
export default function ProfileLayout({children}) {
  return (
    <React.Fragment>
      <Header />
      <div className='flex'>
        {/* Sidebar */}
        <div className='fixed h-full'>
          <ul className='w-16 h-full m-2 bg-black sm:w-56 menu rounded-box'>
            <li>
              <a className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                  />
                </svg>
                <span className='hidden ml-2 sm:inline'>Item 2</span>
              </a>
            </li>
            <li>
              <a className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <span className='hidden ml-2 sm:inline'>Item 1</span>
              </a>
            </li>
            <li>
              <a className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                  />
                </svg>
                <span className='hidden ml-2 sm:inline'>Item 3</span>
              </a>
            </li>
          </ul>
        </div>
        {/* Main content */}
        <div className='flex-1 ml-16 sm:ml-56'>
          <div className='container px-4 py-8 mx-auto'>
            <div className='p-6 rounded-lg shadow-md bg-base-100'>{children}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
