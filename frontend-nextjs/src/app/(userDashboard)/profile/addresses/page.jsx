import AddressForm from '@/src/components/profile/address/AddressForm';
import {getFetch} from '@/src/utils/fetch';
import {cookies} from 'next/headers';
import React from 'react';

export default async function AddressesPage() {
  const token = cookies().get('token');
  const {provinces, cities, addresses} = await getFetch('/profile/addresses', {Authorization: `Bearer ${token.value}`});
  return (
    <div>
      <AddressForm provinces={provinces} cities={cities} />
    </div>
  );
}
