import React from 'react';
import AboutUs from '../sections/AboutUs';
import StatsSection from '../sections/StatsSection';
import Testimonials from '../sections/Testimonials';
import Breadcrumb from '../components/Breadcrumb';

export default function page() {
  return (
    <div>
      <Breadcrumb name={'About Us'} />
      <AboutUs />
      <StatsSection />
      <Testimonials />
    </div>
  );
}
