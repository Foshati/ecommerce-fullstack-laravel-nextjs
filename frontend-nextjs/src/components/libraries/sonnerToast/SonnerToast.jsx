'use client';

import React from 'react';
import {Toaster} from 'sonner';

export default function SonnerToast() {
  return (
    <Toaster
      position='bottom-center'
      expand={false}
      richColors
      theme='light'
      toastOptions={{
        style: {
          border: '1px solid black',
          padding: '12px',
        },
        duration: 3000,
      }}
    />
  );
}
