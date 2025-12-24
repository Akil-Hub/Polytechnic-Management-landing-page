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

      <div className="wrapper  text-left">
        <div className=" py-[150px] pl-[60px] w-180">
          <h3 className="text-gray-300 py-3 text-2xl ">Welcome to!</h3>
          <h1 className="text-6xl leading-16 font-bold text-white ">
            Munshiganj Polytechnic Institute
          </h1>
          <p className="text-gray-300  py-6 w-120 tracking-wider">
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
