'use client';
import React, {useState, useRef, useEffect} from 'react';
import SubButton from '../button/submitButton/SubmitButton';
import toast from 'react-hot-toast';
import {formAuthActionOtp} from '@/actions/FormAuthAction';
import {useFormState} from 'react-dom';

export default function CheckOtpForm() {
  const [stateOtp, formActionOtp] = useFormState(formAuthActionOtp, {});

  useEffect(() => {
    if (stateOtp?.message) {
      toast(stateOtp.status, {message: stateOtp.message});
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
          <div className='flex flex-row items-center justify-center p-2 mt-4 space-x-1 text-sm font-medium text-center text-gray-500'>
            <p>Didn't receive the code?</p>
            <a
              className='flex flex-row items-center text-blue-600'
              href='#'
              onClick={() => alert('Code resent')}
              rel='noopener noreferrer'>
              Resend
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
