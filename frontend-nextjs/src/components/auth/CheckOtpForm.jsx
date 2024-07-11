'use client';
import {useEffect, useRef, useState, useContext} from 'react';
import {toast} from 'sonner';

import {useFormState} from 'react-dom';

import SubButton from '../button/submitButton/SubmitButton';
import {AuthActionOtp} from '@/src/actions/AuthAction';
import {AuthContext} from '@/src/context/AuthContext';
import ResendOtp from './ResendOtp';
import {useRouter} from 'next/navigation';

export default function CheckOtpForm() {
  const [stateOtp, formActionOtp] = useFormState(AuthActionOtp, {});
  const {loginContext} = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (stateOtp?.message && stateOtp?.status) {
      toast(stateOtp.message, {type: stateOtp.status});
      if (stateOtp.status === 'success' && stateOtp.user) {
        loginContext(stateOtp.user);
        router.push('/');
      }
    }
  }, [stateOtp]);

  // State for individual OTP digits and the complete OTP string
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [otpString, setOtpString] = useState('');
  const inputsRef = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return; // Only allow numeric input

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    const newOtpString = newOtp.join('');
    setOtpString(newOtpString);

    // Focus the next input
    if (element.value !== '' && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.keyCode === 8 && otp[index] === '') {
      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen py-12'>
      <div className='w-full max-w-md px-6 pt-10 mx-auto bg-black shadow-xl pb-9 rounded-2xl'>
        <p className='flex justify-center py-4 mb-4'>Enter the one-time use code</p>

        <form action={formActionOtp}>
          <div className='flex justify-center mb-4 space-x-2'>
            {otp.map((data, index) => (
              <input
                key={index}
                type='text'
                maxLength={1}
                className='w-12 h-12 text-2xl text-center border border-gray-300 rounded-md otp-input focus:outline-none focus:border-indigo-500'
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputsRef.current[index] = el)}
                autoFocus={index === 0}
              />
            ))}
          </div>
          <input type='hidden' name='otp' value={otpString} />
          <div className='flex justify-center mt-8'>
            <SubButton title='Submit' style='btn btn-wide' />
          </div>
        </form>
        <ResendOtp />
      </div>
    </div>
  );
}
