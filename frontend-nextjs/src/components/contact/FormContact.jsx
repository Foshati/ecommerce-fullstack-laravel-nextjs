'use client';

import {useEffect, useRef} from 'react';

import {toast} from 'sonner';
import {useFormState} from 'react-dom';

import {FormContactAction} from '@/actions/FormContactAction';

import SubmitButton from '../button/submitButton/SubmitButton';

export default function FormContact() {
  const [state, formAction] = useFormState(FormContactAction, {});
  const formRef = useRef(null);

  useEffect(() => {
    if (state?.message && state?.status) {
      toast(state.message, {type: state.status});
      // Clear the form after sending the message
      if (state.status === 'success' && formRef.current) {
        formRef.current.reset();
      }
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className='flex flex-col w-full space-y-4'>
      <h2 className='mb-1 text-lg font-medium text-white'>Feedback</h2>
      <p className='mb-5 leading-relaxed'>
        Post-ironic portland shabby chic echo park, banjo fashion axe
      </p>
      <input
        type='text'
        name='name'
        placeholder='Name'
        className='w-full px-3 py-1 text-base leading-8 text-white transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900'
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        className='w-full px-3 py-1 text-base leading-8 text-white transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900'
      />
      <input
        type='text'
        name='subject'
        placeholder='Subject'
        className='w-full px-3 py-1 text-base leading-8 text-white transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900'
      />
      <textarea
        name='text'
        placeholder='Message'
        className='w-full h-32 px-3 py-1 text-base leading-6 text-white transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900'></textarea>
      <div className='flex justify-center'>
        <SubmitButton title='Send' style='btn btn-wide btn-neutral' />
      </div>
      <p className='mt-3 text-xs text-gray-400 text-opacity-90'>
        Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
      </p>
    </form>
  );
}
