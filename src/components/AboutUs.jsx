import React from 'react';
import Button1 from './Buttons/Button1';
import mupiImg from '@/assets/mupi.png';
const AboutUs = () => {
  return (
    <section className="wrapper flex flex-col md:flex-row justify-center md:gap-30 px-4  py-30">
      {/* left text */}
      <div className=" text-left md:w-1/2 py-10 md:py-20 pl-5">
        <h2 className=" text-2xl  md:text-5xl font-bold to-gray-900">About Us</h2>
        <p className="py-4 text-gray-400 md:leading-8">
          Munshiganj Polytechnic Institute is a center of technical excellence, empowering students
          with practical skills, industry-relevant knowledge, and a future-ready mindset. We focus
          on hands-on learning, modern technology, and professional development to help students
          build strong careers and contribute confidently to the nation’s growth.
        </p>
        <div className=" py-4">
          <Button1 text="Learn More" />
        </div>
      </div>
      {/* Right image */}
      <div
        className="md:w-1/2 hover:scale-105 duration-400 md:py-10 
      "
      >
        <img src={mupiImg} alt="MUPI" className="  rounded-lg shadow-2xl w-[90%] h-[90%] mx-auto md:mx-none " />
      </div>
    </section>
  );
};

export default AboutUs;
