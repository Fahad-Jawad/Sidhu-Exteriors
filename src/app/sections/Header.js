'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import './styles/Header.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Header() {
  return (
    <div className='w-full relative'>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        draggable
        autoplay={{ delay: 5000 }}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className='h-[550px] lg:!h-[650px] z-10'
      >
        <SwiperSlide>
          <div className='w-full h-full  flex items-center slide1Bg'>
            <div className='w-full xl:w-2/3 h-full flex py-32 xl:py-0 xl:items-center justify-center px-4 md:px-8 lg:px-12 2xl:px-20'>
              <div className='flex flex-col gap-3 md:gap-4 lg:gap-6 z-20  md:w-11/12 lg:w-full'>
                <div className='flex flex-col gap-2 md:gap-4 lg:gap-6 '>
                  <h2 className='w-max p-2 bg-white text-secondary text-xs md:text-lg font-bold rounded-lg'>
                    Durable & Reliable
                  </h2>
                  <h3 className='text-3xl md:text-5xl lg:text-6xl font-extrabold text-white !leading-tight uppercase '>
                    Protect Your Home with Quality Roofing
                  </h3>
                  <p className='text-white text-xs lg:text-lg w-4/5 md:w-2/3'>
                    Our expert roofing services ensure long-lasting protection
                    and enhance your home's curb appeal. From installations to
                    repairs, we've got you covered.
                  </p>
                  <button className='bg-primary text-white rounded-lg p-3 lg:p-3 px-4 w-max text-xxs lg:text-sm font-semibold uppercase'>
                    Get a Free Quote
                  </button>
                </div>
              </div>
            </div>
            <div className='hidden xl:w-1/3'></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full  flex items-center slide2Bg'>
            <div className='w-full xl:w-2/3 h-full flex py-32 xl:py-0 xl:items-center justify-center px-4 md:px-8 lg:px-12 2xl:px-20'>
              <div className='flex flex-col gap-3 md:gap-4 lg:gap-6 z-20  md:w-11/12 lg:w-full'>
                <div className='flex flex-col gap-2 md:gap-4 lg:gap-6 '>
                  <h2 className='w-max p-2 bg-white text-secondary text-xs md:text-lg font-bold rounded-lg'>
                    Style Meets Function
                  </h2>

                  <h3 className='text-3xl md:text-5xl lg:text-6xl font-extrabold text-white !leading-tight uppercase '>
                    Transform Your Home’s Exterior with Premium Siding
                  </h3>
                  <p className='text-white text-xs lg:text-lg w-4/5 md:w-2/3'>
                    Boost your home's insulation and aesthetic with our
                    professional siding solutions. Enjoy energy efficiency and a
                    modern look.
                  </p>
                  <button className='bg-primary text-white rounded-lg p-3 lg:p-3 px-4 w-max text-xxs lg:text-sm font-semibold uppercase'>
                    Upgrade Your Siding
                  </button>
                </div>
              </div>
            </div>
            <div className='hidden xl:w-1/3'></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-full h-full  flex items-center slide1Bg'>
            <div className='w-full xl:w-2/3 h-full flex py-32 xl:py-0 xl:items-center justify-center px-4 md:px-8 lg:px-12 2xl:px-20'>
              <div className='flex flex-col gap-3 md:gap-4 lg:gap-6 z-20  md:w-11/12 lg:w-full'>
                <div className='flex flex-col gap-2 md:gap-4 lg:gap-6 '>
                  <h2 className='w-max p-2 bg-white text-secondary text-xs md:text-lg font-bold rounded-lg'>
                    Efficient Drainage
                  </h2>

                  <h3 className='text-3xl md:text-5xl lg:text-6xl font-extrabold text-white !leading-tight uppercase '>
                    Keep Your Home Safe with Seamless Eavestroughs
                  </h3>
                  <p className='text-white text-xs lg:text-lg w-4/5 md:w-2/3'>
                    Prevent water damage with our durable, seamless eavestrough
                    installations. Protect your foundation and landscape
                    effortlessly.{' '}
                  </p>
                  <button className='bg-primary text-white rounded-lg p-3 lg:p-3 px-4 w-max text-xxs lg:text-sm font-semibold uppercase'>
                    Schedule an Installation
                  </button>
                </div>
              </div>
            </div>
            <div className='hidden xl:w-1/3'></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-full h-full  flex items-center slide2Bg'>
            <div className='w-full xl:w-2/3 h-full flex py-32 xl:py-0 xl:items-center justify-center px-4 md:px-8 lg:px-12 2xl:px-20'>
              <div className='flex flex-col gap-3 md:gap-4 lg:gap-6 z-20  md:w-11/12 lg:w-full'>
                <div className='flex flex-col gap-2 md:gap-4 lg:gap-6 '>
                  <h2 className='w-max p-2 bg-white text-secondary text-xs md:text-lg font-bold rounded-lg'>
                    We’ve Got You Covered
                  </h2>

                  <h3 className='text-3xl md:text-5xl lg:text-6xl font-extrabold text-white !leading-tight uppercase '>
                    Comprehensive Exterior Renovation Services
                  </h3>
                  <p className='text-white text-xs lg:text-lg w-4/5 md:w-2/3'>
                    From roofing to downspouts, we provide complete exterior
                    solutions tailored to your needs. Quality craftsmanship you
                    can trust.{' '}
                  </p>
                  <button className='bg-primary text-white rounded-lg p-3 lg:p-3 px-4 w-max text-xxs lg:text-sm font-semibold uppercase'>
                    Contact Us Today
                  </button>
                </div>
              </div>
            </div>
            <div className='hidden xl:w-1/3'></div>
          </div>
        </SwiperSlide>

        <div className='swiper-button-next !hidden md:!block'></div>
        <div className='swiper-button-prev !hidden md:!block'></div>
      </Swiper>
    </div>
  );
}
