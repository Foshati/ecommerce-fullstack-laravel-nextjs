'use client';

import React, {useEffect} from 'react';
import {Toaster, toast} from 'sonner';

export default function SonnerToast({status, message, condition}) {
  useEffect(() => {
    if (status && message) {
      toast(message, {type: status});
      if (condition && typeof condition === 'function') {
        condition();
      }
    }
  }, [status, message, condition]);

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
