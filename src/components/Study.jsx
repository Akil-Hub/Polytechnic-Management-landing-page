import React from 'react';
import learningHands from '@/assets/learningHands.png';
import Instructor from '@/assets/Instructor.png';
import curriculum from '@/assets/curriculum.png';
import growth from '@/assets/growth.png';

import upCurve from '@/assets/upCurve.png';
import downCurve from '@/assets/downCurve.png';
import Button from './Button';
const Study = () => {
  return (
    <section className=" bg-gray-100 py-10">
      <div className="wrapper  ">
        <div className="">
          <h2 className="text-primary text-2xl font-semibold ml-12 mt-10">Why Study with us?</h2>
          {/* studies card start */}
          <div className="flex flex-wrap">
            <div className=" flex flex-col justify-center pl-12  py-20 w-[25%] ">
              <div className=" flex gap-2 pl-12">
                {' '}
                <img src={learningHands} alt="" />
                <img src={upCurve} alt="" />
              </div>

              <h3 className="py-6 text-xl">Hands-On learning</h3>
              <p>Real skills through practical, lab-based education.</p>
            </div>

            <div className=" flex pl-12  flex-col justify-center  py-20 w-[25%] ">
              <div className=" flex gap-2 pl-12">
                {' '}
                <img src={Instructor} alt="" />
                <img src={downCurve} alt="" />
              </div>

              <h3 className="py-6 text-xl">Expert Instructor </h3>
              <p>Learn from experienced, supportive professionals.</p>
            </div>
            <div className=" flex flex-col justify-center pl-12  py-20 w-[25%] ">
              <div className=" flex gap-2 pl-12">
                {' '}
                <img src={curriculum} alt="" />
                <img src={upCurve} alt="" />
              </div>

              <h3 className="py-6 text-xl">Industry-Ready Curriculum </h3>
              <p>Programs aligned with today’s job market.</p>
            </div>

            <div className=" flex pl-12  flex-col justify-center  py-20 w-[25%] ">
              <div className=" flex gap-2 pl-12">
                {' '}
                <img src={growth} alt="" />
              </div>

              <h3 className="py-6 text-xl">Career-Focused Growth</h3>
              <p>We prepare you for jobs, higher studies, and success.</p>
            </div>
          </div>

          {/* studies card end */}

          <div className="ml-12">
            <Button text="Admission Now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Study;
