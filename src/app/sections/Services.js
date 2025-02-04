import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const services = [
    {
      service: 'Roofing',
      description:
        'Protect your home with our durable, weather-resistant roofing solutions, designed for long-lasting performance and curb appeal. We specialize in roof installations, repairs, and replacements to keep your property safe and secure.',
    },
    {
      service: 'Siding',
      description:
        'Enhance your home\'s exterior with our premium siding services, offering superior insulation and aesthetic charm. We provide expert siding installation and repairs for a polished, energy-efficient finish.',
    },
    {
      service: 'Eavestrough',
      description:
        'Keep your home protected from water damage with our seamless eavestrough installation and maintenance services. Our efficient drainage solutions ensure your foundation stays dry and secure year-round.',
    },
    {
      service: 'Downspout',
      description:
        'Improve water flow and prevent leaks with our customized downspout installations tailored to your home\'s needs. We ensure optimal drainage to protect your roof and landscaping from water buildup.',
    },
    {
      service: 'Soffit',
      description:
        'Boost ventilation and prevent moisture buildup with our high-quality soffit installations, blending function with modern design. Our soffit services enhance airflow while maintaining your home\'s aesthetic appeal.',
    },
    {
      service: 'Fascia',
      description:
        'Strengthen your roofline and improve your home\'s appearance with our durable fascia board installations. We offer custom solutions that protect against weather elements while enhancing curb appeal.',
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
