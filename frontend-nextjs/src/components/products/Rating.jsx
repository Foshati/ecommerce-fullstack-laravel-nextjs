import React from 'react';

export default function Rating() {
  return (
    <div className='mb-4 flex'>
      <div className='rating rating-sm'>
        <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
        <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' defaultChecked />
        <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
        <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
        <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
      </div>
    </div>
  );
}
