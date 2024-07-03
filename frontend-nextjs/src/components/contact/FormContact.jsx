'use client';

import {useFormState} from 'react-dom';
import SubmitButton from '../button/submitButton/SubmitButton';
import {useEffect} from 'react';
import {FormContactAction} from '@/actions/FormContactAction';
import {Toaster} from 'sonner';

export default function FormContact() {
  const [state, formAction] = useFormState(FormContactAction, {});
  //! Other methodss
  // useEffect(() => {
  //   if (state?.status === "error") {
  //     toast.error(state.message);
  //   } else {
  //     toast.success(state.message);
  //   }
  // }, [state]);

  useEffect(() => {
    if (state?.message && state?.status) {
      Toaster(state.message, {type: state.status});
    }
  }, [state]);

  return (
    <form action={formAction}>
      <h2 className='mb-1 text-lg font-medium text-white title-font'>Feedback</h2>
      <p className='mb-5 leading-relaxed'>
        Post-ironic portland shabby chic echo park, banjo fashion axe
      </p>
      <div className='relative mb-4'>
        <label htmlFor='name' className='text-sm leading-7 text-gray-400'>
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className='w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900'
        />
      </div>
      <div className='relative mb-4'>
        <label htmlFor='email' className='text-sm leading-7 text-gray-400'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          className='w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900'
        />
      </div>
      <div className='relative mb-4'>
        <label htmlFor='subject' className='text-sm leading-7 text-gray-400'>
          Subject
        </label>
        <input
          type='text'
          id='subject'
          name='subject'
          className='w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900'
        />
      </div>
      <div className='relative mb-4'>
        <label htmlFor='message' className='text-sm leading-7 text-gray-400'>
          Message
        </label>
        <textarea
          id='message'
          name='text'
          className='w-full h-32 px-3 py-1 text-base leading-6 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900'
          defaultValue={''}
        />
      </div>
      <div className='flex justify-center'>
        <SubmitButton title='Send' style='btn btn-wide btn-neutral' />
      </div>
      <p className='mt-3 text-xs text-gray-400 text-opacity-90'>
        Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
      </p>
    </form>
  );
}
