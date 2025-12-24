import React from 'react';
import Button from '../components/Buttons/Button';
import Instructor from '@/assets/Instructors.png';
import CI1 from '@/assets/CI1.png';
import CI2 from '@/assets/CI2.png';
const Instructors = () => {
  return (
    <section className="wrapper">
      <picture
        className="  relative w-full h-100 flex justify-center bg-cover items-center  overflow-hidden bg-center rounded-2xl hover:scale-102 duration-400  mt-5"
        style={{ backgroundImage: `url(${Instructor})` }}
      >
        <div className="overlay h-full w-full bg-black/10 absolute"></div>
        <h2 className="text-6xl text-gray-100">Here is our prestigious Instructors</h2>
      </picture>

      <div className="Teachers  flex gap-10">
        <div className="flex gap-5 m-3 py-10  mt-15">
          <div className='hover:scale-105 duration-300'>
            <img src={CI1} alt="" />
          </div>
          <div className="">
            <h3 className="text-3xl font-semibold ">Kaylynn Ekstrom Bothman</h3>
            <div className="py-5">
              <Button text="The Principal" />
            </div>
            <div className="flex mt-10 flex-col text-gray-700 ">
              <span className=""> Call: +880 123456789</span>
              <span className="">Mail: thechairmanmupi@gmai.com </span>
            </div>
          </div>
        </div>

        <div className="flex gap-5 m-3 py-10  mt-15">
          <div className='hover:scale-105 duration-300'>
            <img src={CI2} alt="" />
          </div>
          <div className="">
            <h3 className="text-3xl font-semibold">Maren Rosser</h3>
            <div className="py-5 ">
              <Button text="The CI" />
            </div>
            <div className="flex mt-10 flex-col text-gray-700">
              <span className=""> Call: +880 123456789</span>
              <span className="">Mail: thechairmanmupi@gmai.com </span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-primary text-2xl font-semibold py-14">All Instructors</h2>

      {/* Notice row start */}
      <div className="">
        <ul>
          <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">
            <div className="flex ">
              <div className=" flex  py-4  ">
                <p className="px-5 text-xl text-gray-900">21-12-25</p> |{' '}
                <p className="px-5 text-gray-900 text-xl"> Chief Instructor </p>
              </div>
            </div>

            <div className="">
              <Button text="Show Details" />
            </div>
          </li>

          <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">
            <div className="flex ">
              <div className=" flex  py-4  ">
                <p className="px-5 text-xl text-gray-900">21-12-25</p> |{' '}
                <p className="px-5 text-gray-900 text-xl"> Instructor</p>
              </div>
            </div>
            <div className="">
              <Button text="Show Details" />
            </div>
          </li>

          <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">
            <div className="flex ">
              <div className=" flex  py-4  ">
                <p className="px-5 text-xl text-gray-900">21-12-25</p> |{' '}
                <p className="px-5 text-gray-900 text-xl">Jr. Instructor</p>
              </div>
            </div>

            <div className="">
              <Button text="Show Details" />
            </div>
          </li>

          <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">
            <div className="flex ">
              <div className=" flex  py-4  ">
                <p className="px-5 text-xl text-gray-900">21-12-25</p> |{' '}
                <p className="px-5 text-gray-900 text-xl"> Non-Tech Instructor</p>
              </div>
            </div>

            <div className="">
              <Button text="Show Details" />
            </div>
          </li>

          <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">
            <div className="flex ">
              <div className=" flex  py-4  ">
                <p className="px-5 text-xl text-gray-900">21-12-25</p> |{' '}
                <p className="px-5 text-gray-900 text-xl"> Lab Assistant</p>
              </div>
            </div>
            <div className="">
              <Button text="Show Details" />
            </div>
          </li>
        </ul>
      </div>

      {/* Notice row end */}
    </section>
  );
};

export default Instructors;
