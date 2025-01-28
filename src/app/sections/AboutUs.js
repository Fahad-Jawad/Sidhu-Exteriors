import Image from 'next/image';
import React from 'react';
import SectionTitle from '../components/SectionTitle';

export default function AboutUs() {
  return (
    <div className='flex items-center p-4 md:p-8 lg:p-12 2xl:p-20 bg-primaryExtraLight'>
      <div class='w-1/2 flex justify-end relative py-10 aboutImgSide'>
        <Image
          src={'/images/about1.png'}
          alt='about us img'
          width={550}
          height={650}
          className='w-5/6 z-20 h-1/3 rounded-lg'
        />
        <div className='bg-primary p-8 absolute bottom-5 left-16 z-30 rounded-lg'>
          <p className='text-white text-center font-bold text-3xl'>
            25 <br /> Years
          </p>
        </div>
      </div>
      <div class='w-1/2 pl-10'>
        <div className='flex flex-col gap-4'>
          <SectionTitle title={'About Us'} />

          <h3 className='text-5xl font-bold !leading-tight'>
            We've been building our experience
          </h3>

          <p>
            We've been building our experience high quality construction
            solutions for residentials & industries!
          </p>
          <p className='text-gray-400'>
            You can dream, create, design and build the most wonderful place in
            the world. But it requires people. Lorem ipsum dolor sit amet,
            consectetur elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet consectetur.
          </p>

          <div className='flex justify-between my-5'>
            <div className='flex gap-4'>
              <Image
                src={'/images/icons/construction services.svg'}
                alt='construction services'
                width={60}
                height={60}
              />

              <div className='flex flex-col'>
                <h4 className='font-semibold text-xl'>Construction Services</h4>
                <p className='text-gray-400'>
                  Lorem ipsum dolor sit piscing sed nonmy
                </p>
              </div>
            </div>
            <div className='flex gap-4'>
              <Image
                src={'/images/icons/unique technology.svg'}
                alt='construction services'
                width={60}
                height={60}
              />

              <div className='flex flex-col'>
                <h4 className='font-semibold text-xl'>Construction Services</h4>
                <p className='text-gray-400'>
                  Lorem ipsum dolor sit piscing sed nonmy
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <div className='flex gap-4'>
                <Image src={'/images/icons/ArrowRightWhite.svg'} alt='right arrow' width={24} height={24} className='w-7 h-7 rounded-full p-1 bg-secondary' />
                <p className='text-base'>Quality Construction Solutions For Industries!</p>
            </div>
            <div className='flex gap-4'>
                <Image src={'/images/icons/ArrowRightWhite.svg'} alt='right arrow' width={24} height={24} className='w-7 h-7 rounded-full p-1 bg-secondary' />
                <p className='text-base'>Expertise & Innovation from a truly global company</p>
            </div>
            <div className='flex gap-4'>
                <Image src={'/images/icons/ArrowRightWhite.svg'} alt='right arrow' width={24} height={24} className='w-7 h-7 rounded-full p-1 bg-secondary' />
                <p className='text-base'>Highly Professional Staff, Accurate Testing Processes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
