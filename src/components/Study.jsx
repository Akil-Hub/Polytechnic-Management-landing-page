import React from 'react';
import learningHands from '@/assets/learningHands.png';
import Instructor from '@/assets/Instructor.png';
import curriculum from '@/assets/curriculum.png';
import growth from '@/assets/growth.png';

import upCurve from '@/assets/upCurve.png';
import downCurve from '@/assets/downCurve.png';
import Button from './Buttons/Button';
const Study = () => {
  return (
    <section className=" bg-gray-100 py-10">
      <div className="wrapper  ">
        <div className="">
          <h2 className="text-primary text-2xl font-semibold ml-12 mt-10 md:mb-10 mb-5">Why Study with us?</h2>
          {/* studies card start */}
          <div className="flex flex-col md:flex-row">

            <div className=" flex flex-col justify-center md:pl-12 items-center  py-20 md:w-[25%] shadow-2xl rounded-2xl hover:scale-105 duration-400">
              <div className=" flex gap-2 md:pl-12">
                {' '}
                <img src={learningHands} alt="" />
                <img src={upCurve} alt="" className='hidden md:block' />
              </div>

              <h3 className="py-6 text-xl md:pr-13 ">Hands-On learning</h3>
              <p className='text-center md:text-left px-2'>Real skills through practical, lab-based education.</p>
            </div>

            <div className=" flex pl-12  flex-col justify-center  py-20 md:w-[25%] shadow-2xl rounded-2xl hover:scale-105 duration-400 ">
              <div className=" flex gap-2 md:pl-12 pl-26">
                {' '}
                <img src={Instructor} alt="" />
                <img src={downCurve} alt=""  className='hidden md:block'  />
              </div>

              <h3 className="py-6 text-xl md:pl-6 pl-19">Expert Instructor </h3>
              <p className='text-left '>Learn from experienced, supportive professionals.</p>
            </div>

            <div className=" flex flex-col justify-center pl-12  py-20 md:w-[25%] shadow-2xl rounded-2xl  hover:scale-105 duration-400">
              <div className=" flex gap-2 md:pl-12 pl-27 ">
                {' '}
                <img src={curriculum} alt="" />
                <img src={upCurve} alt="" className='hidden md:block'  />
              </div>

              <h3 className="py-6 text-xl text-center md:text-left mr-10 md:mr-0">Industry-Ready Curriculum </h3>
              <p className='text-center md:text-left mr-10 md:mr-0'>Programs aligned with today’s job market.</p>
            </div>

            <div className=" flex pl-12  flex-col justify-center  py-20 md:w-[25%]  shadow-2xl rounded-2xl hover:scale-105 duration-400">
              <div className=" flex gap-2 md:pl-12 pl-27">
                {' '}
                <img src={growth} alt="" />
              </div>

              <h3 className="py-6 text-xl  ml-12 md:ml-0">Career-Focused Growth</h3>
              <p className='mr-10 md:mr4 md:mr-0 text-center md:text-left '>We prepare you for jobs, higher studies, and success.</p>
            </div>
          </div>

          {/* studies card end */}

          <div className="text-center pt-9 md:pt-0 md:text-left md:mt-10">
            <Button text="Admission Now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Study;
