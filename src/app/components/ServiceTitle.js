import React from 'react';

export default function ServiceTitle({ title }) {
  return (
    <div className='serviceTitle p-4 rounded-lg mb-5'>
      <h2 className='text-3xl  text-white font-bold'>{title}</h2>
    </div>
  );
}
