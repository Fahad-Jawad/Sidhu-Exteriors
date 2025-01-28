import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const services = [
    {
      service: 'Architecture',
      description:
        'You can dream, create, design, and build the most wonderful place in the world. But it requires people.',
    },
    {
      service: 'Building & House',
      description:
        'You can dream, create, design, and build the most wonderful place in the world. But it requires people.',
    },
    {
      service: 'Painting & Tiling',
      description:
        'You can dream, create, design, and build the most wonderful place in the world. But it requires people.',
    },
    {
      service: 'Interior Design',
      description:
        'You can dream, create, design, and build the most wonderful place in the world. But it requires people.',
    },
    {
      service: 'Area Renovation',
      description:
        'You can dream, create, design, and build the most wonderful place in the world. But it requires people.',
    },
    {
      service: 'Road Construction',
      description:
        'You can dream, create, design, and build the most wonderful place in the world. But it requires people.',
    },
  ];

  return (
    <div className='p-4 md:p-8 lg:p-12 2xl:p-20'>
      <div className='flex flex-col gap-4'>
        <SectionTitle title={'Our Services'} className='mx-auto' />
        <h2 className='text-5xl font-bold text-center'>
          We Provide Best <span className='text-secondary'>Services</span>
        </h2>
        <p className='text-center w-1/2 mx-auto'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          tempora similique eveniet atque recusandae veniam, ratione labore
          assumenda, maiores reprehenderit nisi unde maxime molestiae aliquid
          vitae deleniti, quo est et.
        </p>
      </div>

      <div className='mt-10'>
        <div className='flex flex-wrap'>
          {services.map((service, index) => (
            <div key={index} className='w-1/3  p-4'>
              <ServiceCard name={service.service} desc={service.description} />
            </div>
          ))}
        </div>
        <div className='mt-10 mx-auto w-max'>
          <button className='bg-white border-2 border-primary hover:bg-primary hover:text-white duration-300 font-bold rounded-lg p-3 px-6 text-primary text-xl'>Call Us Now</button>
        </div>
      </div>
    </div>
  );
}
