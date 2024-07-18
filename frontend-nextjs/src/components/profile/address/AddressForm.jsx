'use client';
import React, {useState} from 'react';
import ComboBox from '../../ui/ComboBox/ComboBox';

export default function AddressForm({cities, provinces}) {
  const [show, setShow] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const filteredCities = cities.filter((city) => city.province_id.toString() === selectedProvince);

  return (
    <div>
      <button onClick={() => setShow(!show)} className='btn bg-black'>
        create address
      </button>
      {show && (
        <div className='grid lg:grid-cols-2 gap-4 grid-cols-1  sm:grid-cols-2 mx-auto'>
          <div>
            <label className='w-full max-w-xs mt-4 mb-4 form-control'>
              <div className='label'>
                <span className='label-text'>Title</span>
              </div>
              <input name='title' type='text' className='w-full max-w-xs bg-black input input-bordered' />
            </label>
            <label className='w-full max-w-xs mt-4 mb-4 form-control'>
              <div className='label'>
                <span className='label-text'>Phone number</span>
              </div>
              <input name='cellphone' type='text' className='w-full max-w-xs bg-black input input-bordered' />
            </label>
            <label className='w-full max-w-xs mt-4 mb-4 form-control'>
              <div className='label'>
                <span className='label-text'>Postal code</span>
              </div>
              <input name='postal_code' type='text' className='w-full max-w-xs bg-black input input-bordered' />
            </label>
          </div>
          <div className=''>
            <label className='w-full max-w-xs mt-4 mb-4 form-control'>
              <div className='label'>
                <span className='label-text'>Province</span>
              </div>
              <ComboBox
                className=''
                title='province'
                options={provinces}
                placeholder='Select province'
                onSelect={(value) => setSelectedProvince(value)}
              />
            </label>

            <label className='w-full max-w-xs mt-4 mb-4 form-control'>
              <div className='label'>
                <span className='label-text'>City</span>
              </div>
              <ComboBox
                className=''
                title='city'
                options={filteredCities}
                placeholder='Select city'
                onSelect={(value) => setSelectedCity(value)}
              />
            </label>
            <label className='form-control'>
              <div className='label'>
                <span className='label-text'>Address</span>
              </div>
              <textarea
                name='address'
                placeholder=''
                className='textarea textarea-bordered textarea-md w-full max-w-xs bg-black'></textarea>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
