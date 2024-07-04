import Image from 'next/image';
import React from 'react';
import aboutImage from '@/public/images/about-img.png';
export default function About() {
  return (
    <div>
      <section className='text-gray-400 bg-gray-900 body-font'>
        <div className='container flex flex-col items-center px-5 py-24 mx-auto md:flex-row'>
          <div className='w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0'>
            <Image
              className='object-cover object-center rounded pointer-events-none '
              alt='hero'
              src={aboutImage}
              width={300}
              height='auto'
            />
          </div>
          <div className='flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left'>
            <h1 className='mb-4 text-3xl font-medium text-white title-font sm:text-4xl'>
              Before they sold out
              <br className='hidden lg:inline-block' />
              readymade gluten
            </h1>
            <p className='mb-8 leading-relaxed'>
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed
              tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken
              authentic tumeric truffaut hexagon try-hard chambray.
            </p>
            <div className='flex justify-center space-x-8'>
              <button className='btn btn-neutral'>Reade more</button>
              <button className='btn-ghost btn'>Support</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
