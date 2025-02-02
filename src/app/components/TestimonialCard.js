import Image from 'next/image';
import React from 'react';

export default function TestimonialCard() {
  return (
    <div className='bg-white p-4 py-6 rounded-xl flex flex-col gap-2 relative'>
      <p className='text-gray-400'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        molestias ea, deserunt veniam quas veritatis recusandae qui neque cum
        cumque placeat. Dolores eaque voluptatum nesciunt quasi vitae soluta
        nulla harum!
      </p>
      <h2 className='text-xl font-bold text-secondary'>Client Name</h2>
      <h3 className='text-gray-400'>Founder</h3>

      <Image src={'/images/icons/settings.svg'} alt='settings icon' width={100} height={100} className='absolute bottom-3 right-3 opacity-40' />
    </div>
  );
}
