import Header from '@/src/components/layout/header/Header';
import {BadgeDollarSign, ListOrdered, UserRoundPen, MapPinHouse} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  showFooter: true,
};
export default function ProfileLayout({children}) {
  return (
    <>
      <Header />
      <div className='flex'>
        {/* Sidebar */}
        <div className='fixed h-full'>
          <ul className='w-16 h-full m-2 bg-black sm:w-56 menu rounded-box'>
            <li>
              <Link href='/profile' className='flex items-center'>
                <UserRoundPen />
                <span className='hidden ml-2 sm:inline'>Profile</span>
              </Link>
            </li>
            <li>
              <Link href='/profile/addresses' className='flex items-center'>
                <MapPinHouse />

                <span className='hidden ml-2 sm:inline'> Addresses</span>
              </Link>
            </li>
            <li>
              <Link href='/profile/orders' className='flex items-center'>
                <ListOrdered />
                <span className='hidden ml-2 sm:inline'> Orders</span>
              </Link>
            </li>
            <li>
              <Link href='/profile/transactions' className='flex items-center'>
                <BadgeDollarSign />
                <span className='hidden ml-2 sm:inline'> Transactions</span>
              </Link>
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
    </>
  );
}
