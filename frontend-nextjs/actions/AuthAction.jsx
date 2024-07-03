'use server';

import {postFetch} from '@/utils/fetch';
import {handleError} from '@/utils/helpers';
import {cookies} from 'next/headers';

async function AuthActionLogin(stateLogin, formData) {
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

  // Create login_token in cookies
  const data = await postFetch('/auth/login', {cellphone});
  if (data.status === 'success') {
    cookies().set({
      name: 'login_token',
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

async function AuthActionOtp(stateOtp, formData) {
  const otp = formData.get('otp');

  if (otp === '') {
    return {
      status: 'error',
      message: 'OTP code is required.',
    };
  }

  const pattern = /^[0-9]{6}$/;
  if (!pattern.test(otp)) {
    return {
      status: 'error',
      message: 'Invalid OTP code.',
    };
  }

  const loginToken = cookies().get('login_token');
  if (!loginToken) {
    return {
      status: 'error',
      message: 'Your login token is invalid. Please try again.',
    };
  }

  const data = await postFetch('/auth/check-otp', {otp, login_token: loginToken.value});

  if (data.status === 'success') {
    cookies().delete('login_token');
    cookies().set({
      name: 'token',
      value: data.data.token,
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return {
      status: data.status,
      message: 'You have successfully logged in',
      user: data.data.user,
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}

export {AuthActionLogin, AuthActionOtp};
