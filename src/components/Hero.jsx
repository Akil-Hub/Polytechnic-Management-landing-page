import React from 'react';
import banner from '@/assets/banner.png';
import Button1 from './Buttons/Button1';
import { FaArrowRight } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden  ">
      <img
        src={banner}
        alt="banner"
        className="absolute inset-0 h-screen w-full bg-center bg-cover -z-50"
      />

      <div className="wrapper ">
        <div className=" md:py-37.5 py-10   md:w-full text-center md:text-left  flex justify-center items-center flex-col ">
          <h3 className="text-gray-300 py-3 text-2xl md:text-5xl ">Welcome to</h3>
          <h1 className=" text-4xl md:text-7xl leading-16 md:leading-27 font-bold text-gray-200 md:py-5 ">
            Munshiganj Polytechnic Institute
          </h1>
          <p className="text-gray-300 w-70 md:w-full md:text-center  py-6 md:w-120 tracking-wider mb-5">
            Empowering future professionals through practical technical education and industry-ready
            skills.
          </p>
          <Button1 text={`About MUPI `} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
