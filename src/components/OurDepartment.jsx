import React from 'react';
import computer from '@/assets/computer.png';
import Electrical from '@/assets/Electrical.png';
import Mechanical from '@/assets/Mechanical.png';
import Civil1 from '@/assets/Civil1.png';
import Electronics from '@/assets/Electronics.png';
import RAC from '@/assets/RAC.png';
import ElectroMedical from '@/assets/Electro-Medical.png';
import LargeBtn from './Buttons/LargeBtn';
import { Link, useNavigate } from 'react-router-dom';
const OurDepartment = () => {
  const navigate = useNavigate();
  return (
    <section className="wrapper ">
    

      <h2 className="text-primary text-2xl font-semibold my-10 pl-3">Our Departments !</h2>
      {/* Department card start */}
      <div className="flex flex-col flex-wrap md:flex-row gap-4 gap-y-8">
        {/* CST */}
        <div className=" md:w-[24%] hover:scale-103 duration-400 shadow-2xl  p-4 my-2">
          <div className=" ">
            <img src={computer} alt="" className="mx-auto" />
          </div>
          <h3 className="py-6  font-semibold text-center">Computer Science and Technology</h3>
          <div className="w-full flex justify-center">
            <LargeBtn
              onClick={() => {
                navigate('/cst');
              }}
              text="View Details"
              className="w-full!"
            />
          </div>
        </div>
        {/* ET */}

        <div className=" md:w-[24%] hover:scale-103 duration-400 shadow-2xl  p-4 my-2">
          <div className=" ">
            <img src={Electrical} alt="" className="mx-auto" />
          </div>
          <h3 className="py-6  font-semibold text-center"> Electrical Technology</h3>
          <div className="w-full flex justify-center">
            <LargeBtn text="View Details" className="w-full!" />
          </div>
        </div>
        {/* MT */}

        <div className=" md:w-[24%] hover:scale-103 duration-400 shadow-2xl  p-4 my-2">
          <div className=" ">
            <img src={Mechanical} alt="" className="mx-auto" />
          </div>
          <h3 className="py-6  font-semibold text-center">Mechanical Technology</h3>
          <div className="w-full flex justify-center">
            <LargeBtn text="View Details" className="w-full!" />
          </div>
        </div>
        {/* CIVIL */}

        <div className=" md:w-[24%] hover:scale-103 duration-400 shadow-2xl  p-4 my-2">
          <div className=" ">
            <img src={Civil1} alt="" className="mx-auto" />
          </div>
          <h3 className="py-6  font-semibold text-center">Civil Technology</h3>
          <div className="w-full flex justify-center">
            <LargeBtn text="View Details" className="w-full!" />
          </div>
        </div>
        {/* Electronics */}

        <div className=" md:w-[24%] hover:scale-103 duration-400 shadow-2xl  p-4 my-2">
          <div className=" ">
            <img src={Electronics} alt="" className="mx-auto" />
          </div>
          <h3 className="py-6  font-semibold text-center">Electronics Technology</h3>
          <div className="w-full flex justify-center">
            <LargeBtn text="View Details" className="w-full!" />
          </div>
        </div>
        {/* RAC */}
        <div className=" md:w-[24%] hover:scale-103 duration-400 shadow-2xl  p-4 my-2">
          <div className=" ">
            <img src={RAC} alt="" className="mx-auto" />
          </div>
          <h3 className="py-3  font-semibold text-center">
            Refrigeration & Air Conditioning Technology{' '}
          </h3>
          <div className="w-full flex justify-center">
            <LargeBtn text="View Details" className="w-full!" />
          </div>
        </div>
        {/* ElectroMedical */}
        <div className=" md:w-[24%] hover:scale-103 duration-400 shadow-2xl  p-4 my-2">
          <div className=" ">
            <img src={ElectroMedical} alt="" className="mx-auto" />
          </div>
          <h3 className="py-6  font-semibold text-center">Electro-medical Technology</h3>
          <div className="w-full flex justify-center">
            <LargeBtn text="View Details" />
          </div>
        </div>
      </div>
      {/* Department card end */}
    </section>
  );
};

export default OurDepartment;
