import {Suspense} from 'react';

import {getFetch} from '@/src/utils/fetch';
import Sort from '@/src/components/menu/Sort';
import Loading from '@/src/components/menu/Loading';
import SearchMenu from '@/src/components/menu/SearchMenu';
import ProductList from '@/src/components/menu/ProductList';
import CategoriesList from '@/src/components/menu/CategoriesList';

export default async function MenuPage({searchParams}) {
  const categoriesFetch = await getFetch('/categories');
  const params = new URLSearchParams(searchParams);
  // console.log(searchParams, query parameters or string from the URL );
  // console.log(params.toString());
  // console.log(categoriesFetch);
  return (
    <div>
      <section className='flex'>
        <div className='flex-col hidden gap-8 p-4 my-12 ml-8 bg-black lg:flex rounded-3xl'>
          <SearchMenu />
          <CategoriesList categoriesFetch={categoriesFetch} />

          <Sort />
        </div>
        <div className='flex items-center justify-center flex-grow mt-4'>
          <Suspense key={params.toString()} fallback={<Loading />}>
            <ProductList params={params.toString()} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
