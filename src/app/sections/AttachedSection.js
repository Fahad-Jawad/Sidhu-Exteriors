import React from 'react';

export default function AttachedSection() {
  return (
    <div className='p-4 md:p-8 lg:p-12 2xl:p-20 bg-secondary attached'>
      <div class='w-2/3'>
        <div className='flex flex-col gap-6 text-white'>
          <h2 className='text-7xl font-bold'>
            Let's build something great together!
          </h2>
          <p className='text-gray-200 w-2/3'>
            Don't wait any longer to bring your construction dreams to life.
            Partner with Buildup and experience unparalleled service and
            quality.
          </p>
          <button className='bg-white text-primary p-3 rounded-xl w-max font-bold'>
            Get Free Quote
          </button>
        </div>
      </div>
    </div>
  );
}
