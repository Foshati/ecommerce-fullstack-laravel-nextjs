import OrdersTable from '@/src/components/profile/orders/OrdersTable';
import {getFetch} from '@/src/utils/fetch';
import {cookies} from 'next/headers';

export default async function OrdersPage() {
  const token = cookies().get('token');
  const data = await getFetch('/profile/orders', {
    Authorization: `Bearer ${token.value}`,
  });

  return (
    <div>
      <OrdersTable data={data} />
    </div>
  );
}
