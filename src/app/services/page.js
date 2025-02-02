import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import ContactUs from '../sections/ContactUs';
import ServiceTitle from '../components/ServiceTitle';
import Image from 'next/image';

export default function page() {
  return (
    <div>
      <Breadcrumb name={'Our Services'} />

      <div className='p-4 md:p-8 lg:p-12 2xl:p-20'>
        <div className='flex flex-col gap-4'>
          <div className='flex my-16'>
            <div class='w-1/2'>
              <ServiceTitle title={'Building Construction'} />
              <p className='text-base text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem distinctio eum aliquam unde deleniti, nam aliquid
                amet explicabo, expedita cum repellat soluta omnis dolor
                repudiandae? Quod aut nam repellendus quia?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem distinctio eum aliquam unde deleniti, nam aliquid
                amet explicabo, expedita cum repellat soluta omnis dolor
                repudiandae? Quod aut nam repellendus quia?
                <br/>
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem distinctio eum aliquam unde deleniti, nam aliquid
                amet explicabo, expedita cum repellat soluta omnis dolor
                repudiandae? Quod aut nam repellendus quia?
              </p>
            </div>
            <div class='w-1/2 flex justify-end'>
            <Image src={'/images/services/building.png'} alt='building construction' width={600} height={400} className=' shadow-lg rounded-3xl h-full' />
            </div>
          </div>

          <div className='flex flex-row-reverse my-16'>
            <div class='w-1/2'>
              <ServiceTitle title={'Architecture Design'} />
              <p className='text-base text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem distinctio eum aliquam unde deleniti, nam aliquid
                amet explicabo, expedita cum repellat soluta omnis dolor
                repudiandae? Quod aut nam repellendus quia?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem distinctio eum aliquam unde deleniti, nam aliquid
                amet explicabo, expedita cum repellat soluta omnis dolor
                repudiandae? Quod aut nam repellendus quia?
                <br/>
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem distinctio eum aliquam unde deleniti, nam aliquid
                amet explicabo, expedita cum repellat soluta omnis dolor
                repudiandae? Quod aut nam repellendus quia?
              </p>
            </div>
            <div class='w-1/2 flex justify-start'>
            <Image src={'/images/services/Architecture.png'} alt='Architecture Design' width={600} height={400} className=' shadow-lg rounded-3xl h-full' />
            </div>
          </div>

          <div className='flex my-16'>
            <div class='w-1/2'>
              <ServiceTitle title={'Building Renovation'} />
              <p className='text-base text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem distinctio eum aliquam unde deleniti, nam aliquid
                amet explicabo, expedita cum repellat soluta omnis dolor
                repudiandae? Quod aut nam repellendus quia?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem distinctio eum aliquam unde deleniti, nam aliquid
                amet explicabo, expedita cum repellat soluta omnis dolor
                repudiandae? Quod aut nam repellendus quia?
                <br/>
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem distinctio eum aliquam unde deleniti, nam aliquid
                amet explicabo, expedita cum repellat soluta omnis dolor
                repudiandae? Quod aut nam repellendus quia?
              </p>
            </div>
            <div class='w-1/2 flex justify-end'>
            <Image src={'/images/services/Renovation.png'} alt='Building ' width={600} height={400} className=' shadow-lg rounded-3xl h-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
