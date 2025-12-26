import React from 'react';
import banner from '@/assets/banner.png';
import DownloadBtn from '../components/Buttons/DownloadBtn';
import noticeData from '@/Data/NoticeData';
const AllNotice = () => {
  return (
    <section className="   wrapper">
      <picture
        className="relative   md:h-100 h-40 w-full bg-center bg-cover  rounded-2xl flex items-center justify-center hover:scale-102 duration-400  mt-5"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h3 className=" text-center text-gray-300 md:text-6xl text-2xl">Here is our All Notices</h3>
      </picture>

      <div className="bg-gray-100 pt-10 wrapper">
        <h2 className="text-primary text-2xl font-semibold py-14">All Notices</h2>

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

      </div>
    </section>
  );
};

export default AllNotice;
