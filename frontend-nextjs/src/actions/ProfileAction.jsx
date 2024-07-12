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

export {EditFormAction};
