'use server';

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
}

export {FormAuthAction};
