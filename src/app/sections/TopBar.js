import Image from 'next/image';
import React from 'react';
export default function TopBar() {
  return (
    <div className='z-50 w-full   flex bg-primary text-white '>
      <div className='w-1/2 bg-black py-2 px-20 logoPart'>
        <Image src={'/images/logo.png'} alt='Sidhu Exteriors Logo' width={300} height={200} />

      </div>
      <div className='w-full lg:w-1/2 flex justify-between md:justify-start md:gap-5 items-center px-6 '>
        <div className='flex gap-5 items-center'>
          <Image
            src={'/images/icons/Send.svg'}
            alt='sidhu-exterior-email'
            width={40}
            height={40}
            className='bg-white rounded-full p-2'
          />
          <p className='text-base'> #31, 1410 40 AVE NE, Calgary AB T2E 6L1</p>
        </div>
        <div className='flex gap-5 items-center'>
          <Image
            src={'images/icons/Phone.svg'}
            alt='sidhu-exterior-phone'
            width={42}
            height={42}
            className='bg-white rounded-full p-2'
          />
          <p className='text-base'>
            {' '}
            (403) 966 - 6430
          </p>
        </div>
      </div>
    </div>
  );
}
