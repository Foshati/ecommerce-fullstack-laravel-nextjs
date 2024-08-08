import dynamic from 'next/dynamic';
import FormContact from './FormContact';

export default function Contact() {
  const Map = dynamic(() => import('./Map'), {ssr: false});

  return (
    <div>
      <section className='relative text-gray-400 bg-gray-900 body-font'>
        <div className='container flex flex-wrap items-center px-5 py-24 mx-auto sm:flex-nowrap'>
          <div className='w-3/6 h-[400px] rounded-lg overflow-hidden'>
            <Map />
          </div>
          <div className='flex flex-col w-full mt-8 lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0'>
            <FormContact />
          </div>
        </div>
      </section>
    </div>
  );
}
