'use client';
import React, {useState} from 'react';

export default function AddressForm({cities, provinces}) {
  const [show, setShow] = useState(false);
  const [citiesFilter, setCitiesFilter] = useState([]);

  function changeProvince(e) {
    setCitiesFilter(cities.filter((city) => city.province_id == e.target.value));
    /* console.log(e.target.value); */
  }

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
          <div>
            <label className='w-full max-w-xs mt-4 mb-4 form-control'>
              <div className='label'>
                <span className='label-text'>Country</span>
              </div>
              <div className='w-full max-w-xs'>
                <select className='select select-bordered w-full max-w-xs bg-black' onChange={changeProvince}>
                  <option disabled value=''>
                    Choose a province
                  </option>
                  {provinces.map((province) => (
                    <option key={province.id} value={province.id}>
                      {province.name}
                    </option>
                  ))}
                </select>
              </div>
            </label>

            <label className='w-full max-w-xs mt-4 mb-4 form-control'>
              <div className='label'>
                <span className='label-text'>City</span>
              </div>
              <select className='select select-bordered w-full max-w-xs bg-black'>
                <option disabled value=''>
                  Choose a city
                </option>
                {citiesFilter.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
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
