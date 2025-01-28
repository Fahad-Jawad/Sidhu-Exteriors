import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Image from 'next/image';
import WhyChooseUsCard from '../components/WhyChooseUsCard';

const Attributes = [
  {
    name: 'Fully Experienced',
    desc: 'Lorem Ipsum is simply dummy text of the printing and type.',
  },
  {
    name: 'Safety & Reliability',
    desc: 'Lorem Ipsum is simply dummy text of the printing and type.',
  },
  {
    name: 'Quality Materials',
    desc: 'Lorem Ipsum is simply dummy text of the printing and type.',
  },
  {
    name: 'Long-Term Plans',
    desc: 'Lorem Ipsum is simply dummy text of the printing and type.',
  },
];

export default function WhyChooseUs() {
  return (
    <div className='p-4 md:p-8 lg:p-12 2xl:p-20 bg-primaryExtraLight'>
      <div className='flex flex-col gap-4'>
        <SectionTitle title={'Why Choose Us'} className='mx-auto' />
        <h2 className='text-5xl font-bold text-center w-2/3 mx-auto !leading-tight'>
          We help build on past & prepare for your{' '}
          <span className='text-secondary'>Future</span>
        </h2>
      </div>

      <div className='mt-10 flex '>
        {Attributes.map((attribute,index)=>(
        <div className='w-1/4 px-2' key={index}>
            <WhyChooseUsCard name={attribute.name} desc={attribute.desc} index={index} />
        </div>

        ))}
      </div>
    </div>
  );
}
