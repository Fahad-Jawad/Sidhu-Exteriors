import Image from 'next/image';
import React from 'react';

export default function ServiceCard({ name, desc }) {
  return (
    <div className=' bg-primary text-white rounded-lg px-4 py-8  hover:shadow-xl duration-300'>
      <div className='flex flex-col gap-4'>
        <Image
          src={`/images/icons/${name}.svg`}
          alt={`${name} service icon`}
          width={65}
          height={65}
          className='rounded-lg border-2 bg-primary p-2'
        />
        <h2 className='text-2xl font-extrabold text-white'>{name}</h2>

        <p>{desc}</p>

        <button className='bg-white text-primary font-medium w-max text-xs p-2 rounded-sm'>Read More</button>
      </div>
    </div>
  );
}
