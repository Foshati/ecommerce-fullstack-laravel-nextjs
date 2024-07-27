'use server';

import {cookies} from 'next/headers';
import {postFetch} from '../utils/fetch';
import {handleError} from '../utils/helpers';

async function EditFormAction(state, formData) {
  const name = formData.get('name');
  const email = formData.get('email');

  if (name === '') {
    return {
      status: 'error',
      message: 'Entering a phone number is required',
    };
  }
  if (email === '') {
    return {
      status: 'error',
      message: 'Entering a email is required',
    };
  }

  const token = cookies().get('token');
  const data = await postFetch('/profile/info/edit', {name, email}, {Authorization: `Bearer ${token.value}`});
  if (data.status === 'success') {
    return {
      status: data.status,
      message: 'The information has been successfully updated',
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}

async function CreateFormAction(state, formData) {
  const title = formData.get('title');
  const cellphone = formData.get('cellphone');
  const postal_code = formData.get('postal_code');
  const province_id = formData.get('province_id');
  const city_id = formData.get('city_id');
  const address = formData.get('address');

  if (title === '') {
    return {
      status: 'error',
      message: 'The title field is required.',
    };
  }

  const cellphonePattern = /^(\+98|0)?9\d{9}$/i;
  if (cellphone == '' || !cellphonePattern.test(cellphone)) {
    return {
      status: 'error',
      message: 'The contact number field is invalid.',
    };
  }

  const postalCodePattern = /^\d{5}[ -]?\d{5}$/i;

  if (postal_code == '' || !postalCodePattern.test(postal_code)) {
    return {
      status: 'error',
      message: 'The postal code field is invalid.',
    };
  }

  if (address === '') {
    return {
      status: 'error',
      message: 'The address field is required.',
    };
  }

  const token = cookies().get('token');
  const data = await postFetch(
    '/profile/addresses/create',
    {title, cellphone, postal_code, province_id, city_id, address},
    {Authorization: `Bearer ${token.value}`},
  );
  if (data.status === 'success') {
    return {
      status: data.status,
      message: ' The address has been saved successfully',
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}

export {EditFormAction, CreateFormAction};
