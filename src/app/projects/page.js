import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Image from 'next/image';
import ContactUs from '../sections/ContactUs';

export default function page() {
  return (
    <>
      <Breadcrumb name={'Projects'} />
      <div className='p-4 md:p-8 lg:p-12 2xl:p-20'>
        <div className=' bg-white flex gap-10 overflow-hidden'>
          <div className='md:w-2/3 flex flex-col gap-10'>
            <div className='w-full'>
              <img
                src='/images/construction-testimonials.png'
                alt='Construction Site'
                className='w-full h-96 object-cover  rounded-2xl shadow-lg '
              />
              <div className='p-6'>
                <p className='text-gray-600 mb-4'>
                  Construction standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book.
                </p>
                <p className='text-gray-600 mb-6'>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga harum quidem
                  rerum facilis est et expedita distinctio.
                </p>

                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                  Building better development
                </h2>
                <p className='text-gray-600 mb-4'>
                  Aenean sed adipiscing diam donec adipiscing tristique risus.
                  Nunc pulvinar sapien et ligula ullamcorper malesuada.
                  Venenatis urna cursus eget nunc scelerisque viverra mauris in.
                  A cras semper auctor neque vitae tempus.
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
                  <div className='flex items-center gap-3'>
                    <Image
                      src={'/images/icons/CheckIcon.svg'}
                      alt='icon'
                      width={18}
                      height={18}
                    />
                    <p className='text-xl font-medium'>
                      {' '}
                      Building the future with ideas
                    </p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Image
                      src={'/images/icons/CheckIcon.svg'}
                      alt='icon'
                      width={18}
                      height={18}
                    />
                    <p className='text-xl font-medium'>
                      {' '}
                      Engineering the better way
                    </p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Image
                      src={'/images/icons/CheckIcon.svg'}
                      alt='icon'
                      width={18}
                      height={18}
                    />
                    <p className='text-xl font-medium'>
                      Designing future with excellence
                    </p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Image
                      src={'/images/icons/CheckIcon.svg'}
                      alt='icon'
                      width={18}
                      height={18}
                    />
                    <p className='text-xl font-medium'>
                      Discovering possibility in concrete
                    </p>
                  </div>
                </div>
              </div>
              <div className='p-6'>
                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                  Project Gallery
                </h2>
                <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <img
                      key={index}
                      src='/images/construction-testimonials.png'
                      alt={`Project Image ${index + 1}`}
                      className='w-full h-32 object-cover rounded-2xl shadow-md'
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='md:w-1/3'>
            <div className='space-y-4 p-6 border rounded-2xl sticky'>
              <div className='flex items-center border-b-2 border-gray-200 py-4 gap-4'>
                <Image
                  src={'/images/icons/worklocation.svg'}
                  alt='location icon'
                  width={50}
                  height={50}
                />
                <div className='flex flex-col gap-1'>
                  <span className='text-gray-400 text-lg font-semibold capitalize '>
                    Location
                  </span>
                  <span className='text-xl font-bold'>California, US</span>
                </div>
              </div>
              <div className='flex items-center border-b-2 border-gray-200 py-4 gap-4'>
                <Image
                  src={'/images/icons/sector.svg'}
                  alt='location icon'
                  width={50}
                  height={50}
                />
                <div className='flex flex-col gap-1'>
                  <span className='text-gray-400 text-lg font-semibold capitalize '>
                    sector
                  </span>
                  <span className='text-xl font-bold'>Buildings, Civil</span>
                </div>
              </div>
              <div className='flex items-center border-b-2 border-gray-200 py-4 gap-4'>
                <Image
                  src={'/images/icons/technology.svg'}
                  alt='location icon'
                  width={50}
                  height={50}
                />
                <div className='flex flex-col gap-1'>
                  <span className='text-gray-400 text-lg font-semibold capitalize '>
                    technology
                  </span>
                  <span className='text-xl font-bold'>Monolithics</span>
                </div>
              </div>
              <div className='flex items-center border-b-2 border-gray-200 py-4 gap-4'>
                <Image
                  src={'/images/icons/scope.svg'}
                  alt='location icon'
                  width={50}
                  height={50}
                />
                <div className='flex flex-col gap-1'>
                  <span className='text-gray-400 text-lg font-semibold capitalize '>
                    scope of work
                  </span>
                  <span className='text-xl font-bold'>12000+</span>
                </div>
              </div>
              <div className='flex items-center py-4 gap-4'>
                <Image
                  src={'/images/icons/calendar.svg'}
                  alt='location icon'
                  width={50}
                  height={50}
                />
                <div className='flex flex-col gap-1'>
                  <span className='text-gray-400 text-lg font-semibold capitalize '>
                    completion date
                  </span>
                  <span className='text-xl font-bold'>1 Jan 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
