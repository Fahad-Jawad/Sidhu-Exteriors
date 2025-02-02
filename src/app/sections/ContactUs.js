import Image from 'next/image';
import React from 'react';

export default function ContactUs() {
  return (
    <div className='flex items-center bg-primaryExtraLight  p-4 md:p-8 lg:p-12 2xl:p-20 contact-us'>
      <div className='w-1/3 pr-10'>
        <div className='contact-side rounded-xl p-5 pt-10 pb-0 flex flex-col items-center gap-10'>
          <div className='flex flex-col gap-2 text-white items-center'>
            <Image
              src={'/images/icons/PhoneWhite.svg'}
              alt='phone icon'
              width={60}
              height={60}
            />
            <p className='text-base text-gray-100'>Call Support Center 24/7</p>
            <p className='text-xl font-bold'> +1 809 120 6705</p>
          </div>
          <div className='flex flex-col gap-2 text-white items-center'>
            <Image
              src={'/images/icons/MailWhite.svg'}
              alt='mail icon'
              width={50}
              height={50}
            />
            <p className='text-base text-gray-100 mt-1'>Write To Us</p>
            <p className='text-xl font-bold'>info@sidhuexteriors.com</p>
          </div>

          <Image
            src={'/images/support-img.png'}
            alt='call supporter'
            width={300}
            height={200}
          />
        </div>
      </div>
      <div className='w-2/3'>
        <div className='rounded-2xl bg-white p-10 h-full flex flex-col gap-6'>
          <h2 className='text-primary uppercase text-lg'>Contact Us</h2>
          <h3 className='text-5xl font-bold'>Get in touch with us</h3>

          <div className='grid grid-cols-2 grid-rows-2 gap-6'>
            <input
              type='text'
              id='first_name'
              className='bg-gray-50 border border-primaryExtraLight text-gray-900 text-lg rounded-lg w-full p-4'
              placeholder='First Name'
              required
            />
            <input
              type='text'
              id='last_name'
              className='bg-gray-50 border border-primaryExtraLight text-gray-900 text-lg rounded-lg w-full p-4'
              placeholder='Last Name'
              required
            />
            <input
              type='email'
              id='email'
              className='bg-gray-50 border border-primaryExtraLight text-gray-900 text-lg rounded-lg w-full p-4'
              placeholder='Email'
              required
            />
            <input
              type='tel'
              id='phone'
              className='bg-gray-50 border border-primaryExtraLight text-gray-900 text-lg rounded-lg w-full p-4'
              placeholder='Phone'
              required
            />
          </div>
          <textarea id="message" name='message' rows="6" class="bg-gray-50 border border-primaryExtraLight text-gray-900 text-lg rounded-lg w-full p-4" placeholder="Message"></textarea>
          <button className='bg-primary p-3 px-6 text-white w-max rounded-lg text-lg font-bold'>Submit</button>
        </div>
      </div>
    </div>
  );
}
