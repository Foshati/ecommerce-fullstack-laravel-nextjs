'use client';

import {AuthActionLogout} from '@/src/actions/AuthAction';
import {AuthContext} from '@/src/context/AuthContext';
import {LogOut} from 'lucide-react';
import {useRouter} from 'next/navigation';
import {useContext} from 'react';

export default function Logout() {
  const {logoutContext} = useContext(AuthContext);

  const router = useRouter();
  return (
    <div>
      <a
        href='#'
        onClick={async () => {
          await AuthActionLogout();
          logoutContext();
          router.push('/');
        }}
        className='flex items-center'>
        <LogOut />
        <span className='ml-2 hidden sm:inline'> Log Out</span>
      </a>
    </div>
  );
}
