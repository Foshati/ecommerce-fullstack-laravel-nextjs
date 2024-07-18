import React from 'react';
import ComboBox from '../../ui/ComboBox/ComboBox';
const countries = [
  {value: 'argentina', label: 'Argentina'},
  {value: 'brazil', label: 'Brazil'},
  {value: 'china', label: 'China'},
  {value: 'usa', label: 'USA'},
  {value: 'italy', label: 'Italy'},
  {value: 'france', label: 'France'},
];

export default function AddressForm() {
  return (
    <div>
      <ComboBox title='country' options={countries} placeholder='Select country' />
    </div>
  );
}
