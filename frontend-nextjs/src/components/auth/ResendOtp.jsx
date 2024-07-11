'use client';
import {useEffect} from 'react';
import {toast} from 'sonner';
import {useFormState} from 'react-dom';
import SubButton from '../button/submitButton/SubmitButton';
import {AuthActionResendOtp} from '@/src/actions/AuthAction';

export default function ResendOtp() {
  const [stateResendOtp, formActionResendOtp] = useFormState(AuthActionResendOtp, {});

  useEffect(() => {
    if (stateResendOtp?.message && stateResendOtp?.status) {
      toast(stateResendOtp.message, {type: stateResendOtp.status});
    }
  }, [stateResendOtp]);

  return (
    <div className='flex flex-row items-center justify-center p-2 mt-4 space-x-1 text-sm font-medium text-center text-gray-500'>
      <p>Didn't receive the code?</p>
      <form action={formActionResendOtp}>
        <SubButton title='Resend' style='flex flex-row items-center text-blue-600' />
      </form>
    </div>
  );
}
