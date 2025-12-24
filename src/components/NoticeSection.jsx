import React from 'react';
import Hat from '@/assets/hat.png';
import Button1 from './Button1';
import Button from './Button';
import DownloadBtn from './DownloadBtn';
const NoticeSection = () => {
  return (
   <section className='bg-gray-100 pt-10'>

     <div className="wrapper   ">
      {/* Notice card start */}
      <div className=" cards flex flex-wrap gap-x-10 justify-center">

        <div className=" flex gap-5  items-center  shadow-hero rounded-lg px-12 py-5 hover:scale-105 duration-400 ">
          <div className="">
            <img src={Hat} alt="hat img" />
          </div>
          <div className="">
            <h4 className="text-primary text-2xl font-bold">7</h4>
            <p className="text-primary ">Department</p>
          </div>
        </div>

        <div className=" flex gap-5  items-center  shadow-hero rounded-lg px-12 py-5 hover:scale-105 duration-400 ">
          <div className="">
            <img src={Hat} alt="hat img" />
          </div>
          <div className="">
            <h4 className="text-primary text-2xl font-bold">45000+</h4>
            <p className="text-primary ">Students</p>
          </div>
        </div>

        <div className=" flex gap-5  items-center  shadow-hero rounded-lg px-12 py-5 hover:scale-105 duration-400 ">
          <div className="">
            <img src={Hat} alt="hat img" />
          </div>
          <div className="">
            <h4 className="text-primary text-2xl font-bold">150+</h4>
            <p className="text-primary ">Instructor</p>
          </div>
        </div>
        

        <div className=" flex gap-5  items-center  shadow-hero rounded-lg px-3 py-5 hover:scale-105 duration-400 ">
          <div className="">
            <img src={Hat} alt="hat img" />
          </div>
          <div className="">
            <h4 className="text-primary text-2xl font-bold">20+</h4>
            <p className="text-primary ">Years of Experience</p>
          </div>
        </div>
      </div>

            {/* Notice card end */}


      <h2 className="text-primary text-2xl font-semibold py-14">Today's Notices</h2>

{/* Notice row start */}
      <div className="">
        <ul>

          <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">

            <div className="flex ">
              <div className=" flex  py-4  ">
                <p className="px-5 text-xl text-gray-900">21-12-25</p> | <p className="px-5 text-gray-900 text-xl"> Exam Seat Plane Notice</p>
              </div>
            </div>

            <div className="">
              <DownloadBtn text="Download" />
            </div>
          </li>


          <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">

            <div className="flex ">
              <div className=" flex  py-4  ">
                <p className="px-5 text-xl text-gray-900">21-12-25</p> | <p className="px-5 text-gray-900 text-xl"> Registration Fee Submission Notice</p>
              </div>
            </div>
            <div className="">
              <DownloadBtn text="Download" />
            </div>
          </li>

          <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">

            <div className="flex ">
              <div className=" flex  py-4  ">
                <p className="px-5 text-xl text-gray-900">21-12-25</p> | <p className="px-5 text-gray-900 text-xl"> Semester Fee Submission Notice </p>
              </div>
            </div>

            <div className="">
              <DownloadBtn text="Download" />
            </div>
          </li>


          <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">

            <div className="flex ">
              <div className=" flex  py-4  ">
                <p className="px-5 text-xl text-gray-900">21-12-25</p> | <p className="px-5 text-gray-900 text-xl"> Admission Notice</p>
              </div>
            </div>

            <div className="">
              <DownloadBtn text="Download" />
            </div>
          </li>


          <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">

            <div className="flex ">
              <div className=" flex  py-4  ">
                <p className="px-5 text-xl text-gray-900">21-12-25</p> | <p className="px-5 text-gray-900 text-xl"> Exam Notice</p>
              </div>
            </div>
            <div className="">
              <DownloadBtn text="Download" />
            </div>
          </li>
      

        </ul>
      </div>

      {/* Notice row end */}
<div className="py-4">
        <Button1 text={"Viw All Notice"} />

</div>
    </div>
   </section>
  );
};

export default NoticeSection;
