'use server';

import {postFetch} from '@/utils/fetch';
import {handleError} from '@/utils/helpers';
import {cookies} from 'next/headers';

async function FormAuthAction(stateLogin, formData) {
  const cellphone = formData.get('cellphone');

  if (cellphone === '') {
    return {
      status: 'error',
      message: 'Entering a phone number is required',
    };
  }
  const pattern = /^(\+98|0)?9\d{9}$/;
  if (!pattern.test(cellphone)) {
    return {
      status: 'error',
      message: 'Invalid phone number',
    };
  }

  const data = await postFetch('/auth/login', {cellphone});
  if (data.status === 'success') {
    cookies().set({
      name: 'token',
      value: data.data.login_token,
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return {
      status: data.status,
      message: 'Login successful',
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}

export {FormAuthAction};
