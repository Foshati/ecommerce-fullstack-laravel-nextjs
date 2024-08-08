import {numberFormat} from '@/src/utils/helpers';

export default function OrdersTable({data}) {
  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Address Title</th>
              <th className='hidden lg:table-cell'>Status</th>
              <th className='hidden lg:table-cell'>Payment Status</th>
              <th>Paying Amount</th>
              <th className='hidden lg:table-cell'>Created At</th>
            </tr>
          </thead>
          <tbody>
            {data.orders.map((order) => (
              <tr key={order.id}>
                <th>{order.id}</th>
                <td>{order.address_title}</td>
                <td className='hidden lg:table-cell'>{order.status}</td>
                <td
                  className={` hidden lg:table-cell ${order.payment_status == 'موفق' ? 'text-green-500' : 'text-red-500'}`}>
                  {order.payment_status}
                </td>
                <td>{numberFormat(order.paying_amount)}</td>
                <td className='hidden lg:table-cell'>{order.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
