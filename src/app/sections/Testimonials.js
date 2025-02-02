'use client'
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Image from 'next/image';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TestimonialCard from '../components/TestimonialCard';

export default function Testimonials() {
  return (
    <div className='flex testimonials items-center p-4 md:p-8 lg:p-12 2xl:p-20 mt-4 md:mt-8 lg:mt-12 2xl:mt-20'>
      <div className='w-1/2 testimonials-content relative'>
        <div className='flex flex-col gap-4 z-10'>
          <SectionTitle title={'Client Testimonial'} />

          <h3 className='text-5xl font-bold !leading-tight text-white'>
            We are Very Happy to Get Our Client’s Reviews.
          </h3>
        </div>

        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            draggable
            autoHeight
            autoplay={{ delay: 5000 }}
            loop={true}
            className='!h-auto mt-5 w-full lg:w-4/5'
          >
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>

          </Swiper>
      </div>
      <div className='w-1/2 flex justify-center'>
      <Image src={'/images/construction workers.png'} alt='workers img' width={600} height={600} />
      </div>
    </div>
  );
}
