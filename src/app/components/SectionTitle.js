import React from 'react'

export default function SectionTitle({title,className=""}) {
  return (
    <div className={`w-max border-l-4 border-secondary bg-gray-50 p-2 text-center ${className}`}>
        <h2 className='font-bold text-xl text-primary capitalize'>{title}</h2>
    </div>
  )
}
