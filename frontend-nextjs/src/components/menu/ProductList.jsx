import React from 'react';
import ProductItem from '../products/ProductItem';
import Paginate from './Paginate';
import {getFetch} from '@/src/utils/fetch';

export default async function ProductList({params}) {
  const data = await getFetch(`/menu?${params}`);

  return (
    <>
      <div className='flex flex-col'>
        <div className='grid grid-cols-1 gap-4 m-8 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
          {data.products.map((product) => (
            <div key={product.id} className=''>
              <ProductItem product={product} />
            </div>
          ))}
        </div>

        <div className='flex items-center justify-center m-4'>
          <Paginate links={data.meta.links} />
        </div>
      </div>
    </>
  );
}
