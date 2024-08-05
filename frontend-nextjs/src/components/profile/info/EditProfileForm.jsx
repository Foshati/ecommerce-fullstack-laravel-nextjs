'use client';
import React, {useEffect} from 'react';
import SubmitButton from '../../button/submitButton/SubmitButton';
import {useFormState} from 'react-dom';
import {toast} from 'sonner';
import {EditProfileFormAction} from '@/src/actions/ProfileAction';

export default function EditProfileForm({user}) {
  const [stateEditForm, formActionEditForm] = useFormState(EditProfileFormAction, {});

  useEffect(() => {
    if (stateEditForm?.message && stateEditForm?.status) {
      toast(stateEditForm.message, {type: stateEditForm.status});
    }
  }, [stateEditForm]);

  return (
    <form action={formActionEditForm}>
      <div className=' lg:grid-cols-2 lg:gap-20 lg:grid'>
        <div className=''>
          <label className='w-full max-w-xs form-control'>
            <div className='label'>
              <span className='label-text'>Full name</span>
            </div>
            <input
              name='name'
              type='text'
              className='w-full max-w-xs bg-black input input-bordered'
              defaultValue={user.name}
            />
          </label>
          <label className='w-full max-w-xs mt-4 mb-4 form-control'>
            <div className='label'>
              <span className='label-text'>Email</span>
            </div>
            <input
              name='email'
              type='text'
              className='w-full max-w-xs bg-black input input-bordered'
              defaultValue={user.email}
            />
          </label>
          <div>
            <SubmitButton title='Update' style='btn btn-wide btn-neutral mb-8' isFormValid={true} />
          </div>
        </div>
        <div className=''>
          <label className='w-full max-w-xs form-control'>
            <div className='label'>
              <span className='label-text'>Phone number</span>
            </div>
            <input
              type='text'
              className='w-full max-w-xs input input-bordered    disabled:bg-black' /* !bg-black */
              disabled
              defaultValue={user.cellphone}
            />
          </label>
        </div>
      </div>
    </form>
  );
}
