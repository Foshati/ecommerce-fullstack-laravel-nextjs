'use client';

import {useEffect} from 'react';
import {useFormState} from 'react-dom';
import {Phone} from 'lucide-react';
import {toast} from 'sonner';
import SubButton from '../button/submitButton/SubmitButton';
import {AuthActionLogin} from '@/actions/AuthAction';

export default function LoginForm({setStep}) {
  const [stateLogin, formActionLogin] = useFormState(AuthActionLogin, {});

  useEffect(() => {
    if (stateLogin?.message && stateLogin?.status) {
      toast(stateLogin.message, {type: stateLogin.status});
      if (stateLogin.status === 'success') {
        setStep(2);
      }
    }
  }, [stateLogin]);

  return (
    <div>
      <div className='px-4 md:px-6'>
        <div className='relative flex flex-col justify-center min-h-screen py-12 overflow-hidden '>
          <div className='relative w-full max-w-lg px-6 pt-10 mx-auto bg-black shadow-xl pb-9 rounded-2xl'>
            <div className='flex flex-col w-full max-w-md mx-auto space-y-14'>
              <div className='flex flex-col items-center justify-center space-y-2 text-center'>
                <div className='text-3xl font-semibold'>
                  <p>phone Verification</p>
                </div>
                <div className='flex flex-row text-sm font-medium text-gray-400'>
                  <p>Enter your mobile number</p>
                </div>
              </div>
              <div>
                <form action={formActionLogin}>
                  <div className='flex flex-col justify-center space-y-10'>
                    <div className='flex flex-row items-center justify-center w-full max-w-xs mx-auto'>
                      <label
                        htmlFor='Phone'
                        className='flex items-center gap-2 input input-bordered'>
                        <Phone className='size-4' />
                        <input
                          id='Phone'
                          type='text'
                          className='grow'
                          placeholder='Phone Number'
                          name='cellphone'
                        />
                      </label>
                    </div>
                    <div className='flex flex-col space-y-5 '>
                      <div className='flex justify-center'>
                        <SubButton title='login' style='btn btn-wide  btn-neutral  ' />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
