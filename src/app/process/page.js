import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import ContactUs from '../sections/ContactUs';

export default function page() {
  return (
    <div>
      <Breadcrumb name={'Our Process'} />

      <div className='p-4 md:p-8 lg:p-12 2xl:p-20 !pb-10'>
        <div className='flex flex-col text-center gap-4 w-3/4 mx-auto'>
          <h2 className='text-lg text-primary font-bold uppercase'>
            Better process
          </h2>
          <h3 className='text-6xl font-bold capitalize'>
            The process of working with us
          </h3>
          <p className='text-gray-300 text-base'>
            We specialize in a wide range of construction services, including
            residential, commercial, and industrial projects. From initial
            design to final inspection, we work closely with our clients to
            understand their unique needs and vision.
          </p>
        </div>

        <div className='my-16 flex'>
          <div className='rounded-3xl border-2 border-gray-100 p-6 py-10 flex flex-col gap-6 w-1/3 mx-2'>
            <h2 className='text-primary text-4xl font-bold'>01.</h2>
            <h3 className='text-3xl font-bold'>Leave A Request</h3>
            <p className='text-base text-gray-400'>
              Simple actions make a difference. It starts and ends with each
              employee striving to work safer every single day so they can
              return.
            </p>
          </div>

          <div className='rounded-3xl border-2 border-gray-100 p-6 py-10 flex flex-col gap-6 w-1/3 mx-2'>
            <h2 className='text-primary text-4xl font-bold'>02.</h2>
            <h3 className='text-3xl font-bold'>Cost Calculation</h3>
            <p className='text-base text-gray-400'>
              Simple actions make a difference. It starts and ends with each
              employee striving to work safer every single day so they can
              return.
            </p>
          </div>

          <div className='rounded-3xl border-2 border-gray-100 p-6 py-10 flex flex-col gap-6 w-1/3 mx-2'>
            <h2 className='text-primary text-4xl font-bold'>03.</h2>
            <h3 className='text-3xl font-bold'>Signing Of A Contract</h3>
            <p className='text-base text-gray-400'>
              Simple actions make a difference. It starts and ends with each
              employee striving to work safer every single day so they can
              return.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
