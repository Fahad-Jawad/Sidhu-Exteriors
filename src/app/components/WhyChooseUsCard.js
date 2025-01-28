import Image from 'next/image';
import React from 'react';

export default function WhyChooseUsCard({ name, desc, index }) {
  return (
    <div className="relative group bg-white p-6 py-8 shadow-lg rounded-lg transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl overflow-hidden">
      {/* Rotating Gradient Border (Behind the Card) */}
      <div className="absolute inset-0 -z-10 scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-500 before:absolute before:inset-0 before:rounded-lg before:border-[4px] before:border-transparent before:animate-spin-slow"
        style={{
          background: "conic-gradient(from 0deg, #02AFEF, #00D4FF, #02AFEF)",
          maskImage: "linear-gradient(white, transparent)",
          WebkitMaskImage: "linear-gradient(white, transparent)",
        }}
      ></div>

      {/* Card Content */}
      <div className="relative z-10">
        <div className="flex justify-between items-center">
          <p className="gradient-text text-6xl font-bold">{`0${index + 1}`}</p>
          <Image
            src={`/images/icons/${name}.svg`}
            alt={`${name} icon`}
            width={80}
            height={80}
            className="transition-transform duration-500 group-hover:rotate-[10deg]"
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <h3 className="text-2xl font-bold transition-all duration-500 group-hover:text-white">
            {name}
          </h3>
          <p className="text-gray-400 transition-all duration-500 group-hover:text-gray-600">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
