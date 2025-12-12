
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[750px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://picsum.photos/1920/1080?grayscale&blur=2" alt="Background" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-slate-900 opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
          Driving <span className="text-cyan-400">Digital Transformation</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
          We architect and implement cutting-edge e-commerce platforms, robust IT infrastructures, and dynamic web solutions that propel your business into the future.
        </p>
        <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105 inline-block">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
