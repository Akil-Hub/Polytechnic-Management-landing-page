import React from 'react';
import Button from '../components/Buttons/Button';
import Instructor from '@/assets/Instructors.png';
import CI1 from '@/assets/CI1.png';
import CI2 from '@/assets/CI2.png';
import instructorData from '@/Data/InstructorData';
const Instructors = () => {
  return (
    <section className="wrapper">
      <picture
        className="  relative w-full h-40 md:h-100 flex justify-center bg-cover items-center  overflow-hidden bg-center rounded-2xl hover:scale-102 duration-400"
        style={{ backgroundImage: `url(${Instructor})` }}
      >
        <div className="overlay h-full w-full bg-black/10 absolute"></div>
        <h2 className="md:text-6xl text-2xl text-center   text-gray-100">
          Here is our prestigious Instructors
        </h2>
      </picture>

      <article className="Teachers  flex flex-col md:flex-row md:gap-30 gap-y-0 justify-center items-center">
        <div className="Teacher-1 flex gap-4 flex-col md:flex-row md:py-30 py-10">
          <div className="flex items-center justify-center">
            <img src={CI1} alt="" />
          </div>
          <div className="text   gap-4 p-3">
            <h1 className="text-3xl md:mb-9 mb-3">I am the Principal</h1>
            <Button text={'The Principal'} />

            <div className="address md:mt-8 mt-4   ">
              <h3 className="text-xl text-gray-600">Email:principla@gmail.com</h3>
              <h4 className="text-xl text-gray-600">call : 018882350235</h4>
            </div>
          </div>
        </div>
        <div className="Teacher-1 flex gap-4 flex-col md:flex-row md:py-30 py-10">
          <div className="flex items-center justify-center">
            <img src={CI2} alt="" />
          </div>
          <div className="text   gap-4 p-3">
            <h1 className="text-3xl md:mb-9 mb-3">Arif Ahmed</h1>
            <Button text={'The CI'} />

            <div className="address md:mt-8 mt-4   ">
              <h3 className="text-xl text-gray-600">Email:ci@gmail.com</h3>
              <h4 className="text-xl text-gray-600">call : 01897890235</h4>
            </div>
          </div>
        </div>
      </article>

      <h2 className="text-primary text-2xl font-semibold py-14 md:text-left text-center">All Instructors</h2>

      {/* Notice row start */}
      <div className="">
        <ul>
          {instructorData.map((instructor, id) => (
            <li
              className="flex flex-col md:flex-row justify-between items-center py-3 md:px-3 px-2 shadow-lg my-2 bg-white rounded-lg"
              key={id}
            >
              <div className="flex ">
                <div className=" flex  py-4  ">
                  <p className="  text-left px-2 text-base md:text-xl text-gray-900 pr-3 md:w-50">
                    {instructor.data}
                  </p>{' '}
                  |{' '}
                  <p className="px-2 md:px-5 text-gray-900 md:text-xl  md:w-full pl-4 ">
                    {' '}
                    {instructor.name}
                  </p>
                </div>
              </div>

              <div className="">
                <Button text="Show Details" />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Notice row end */}
    </section>
  );
};

export default Instructors;
