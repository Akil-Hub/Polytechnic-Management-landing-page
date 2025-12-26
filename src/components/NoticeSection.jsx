import React from 'react';
import Hat from '@/assets/hat.png';
import Button1 from './Buttons/Button1';
import Button from './Buttons/Button';
import DownloadBtn from './Buttons/DownloadBtn';
import noticeData from '@/Data/NoticeData';
const NoticeSection = () => {
  return (
    <section className="bg-gray-100 ">
      <div className="wrapper   ">
        {/* Notice card start */}
        <div className=" cards flex flex-wrap gap-x-20 gap-y-5 justify-center  items-center absolute md:-bottom-50 z-50 top-320 md:250 md:top-auto ">
          <div className=" flex gap-5  items-center  shadow-hero rounded-lg px-12 py-5 hover:scale-105 duration-400  bg-white ">
            <div className="">
              <img src={Hat} alt="hat img" />
            </div>
            <div className="">
              <h4 className="text-primary text-2xl font-bold">7</h4>
              <p className="text-primary ">Department</p>
            </div>
          </div>

          <div className=" flex gap-5  items-center  shadow-hero rounded-lg px-12 py-5 hover:scale-105 duration-400 bg-white  ">
            <div className="">
              <img src={Hat} alt="hat img" />
            </div>
            <div className="">
              <h4 className="text-primary text-2xl font-bold">45000+</h4>
              <p className="text-primary ">Students</p>
            </div>
          </div>

          <div className=" flex gap-5  items-center  shadow-hero rounded-lg px-13 py-5 hover:scale-105 duration-400  bg-white ">
            <div className="">
              <img src={Hat} alt="hat img" />
            </div>
            <div className="">
              <h4 className="text-primary text-2xl font-bold">150+</h4>
              <p className="text-primary ">Instructor</p>
            </div>
          </div>

          <div className=" flex gap-5  items-center  shadow-hero rounded-lg px-3 py-5 hover:scale-105 duration-400  bg-white ">
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

        <h2 className="text-primary text-2xl font-semibold py-14  md:mt-20 mt-150 text-center md:text-left">
          Today's Notices
        </h2>

        {/* Notice row start */}
        <div className="">
          <ul>
            {
              noticeData.map((notice,id)=>(
                <li className="flex flex-col md:flex-row justify-between items-center py-3 md:px-3 px-2 shadow-lg my-2 bg-white rounded-lg" key={id}>
              <div className="flex ">
                <div className=" flex  py-4  ">
                  <p className="  text-left px-2 text-base md:text-xl text-gray-900 pr-3 md:w-50">
                    {notice.date}
                  </p>{' '}
                  |{' '}
                  <p className="px-2 md:px-5 text-gray-900 md:text-xl  md:w-full pl-4 ">
                    {' '}
                   {notice.subject}
                  </p>
                </div>
              </div>

              <div className="">
                <DownloadBtn text="Download" />
              </div>
            </li>

              ))

            }

           
          </ul>
        </div>

        {/* Notice row end */}
        <div className="py-8  flex justify-center md:justify-start">
          <Button1 text={'Viw All Notice'} />
        </div>
      </div>
    </section>
  );
};

export default NoticeSection;
