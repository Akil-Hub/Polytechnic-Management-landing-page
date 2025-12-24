import React from 'react';
import banner from '@/assets/banner.png';
import DownloadBtn from '../components/Buttons/DownloadBtn';
const AllNotice = () => {
  return (
    <section className="   wrapper">
      <picture
        className="relative   h-100 w-full bg-center bg-cover  rounded-2xl flex items-center justify-center hover:scale-102 duration-400"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h3 className=" text-center text-gray-300 text-6xl">Here is our All Notices</h3>
      </picture>

      <div className="bg-gray-100 pt-10 wrapper">
        <h2 className="text-primary text-2xl font-semibold py-14">All Notices</h2>

        {/* Notice row start */}
        <div className="">
          <ul>
            <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">
              <div className="flex ">
                <div className=" flex  py-4  ">
                  <p className="px-5 text-xl text-gray-900">21-12-25</p> |{' '}
                  <p className="px-5 text-gray-900 text-xl"> Exam Seat Plane Notice</p>
                </div>
              </div>

              <div className="">
                <DownloadBtn text="Download" />
              </div>
            </li>

            <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">
              <div className="flex ">
                <div className=" flex  py-4  ">
                  <p className="px-5 text-xl text-gray-900">21-12-25</p> |{' '}
                  <p className="px-5 text-gray-900 text-xl"> Registration Fee Submission Notice</p>
                </div>
              </div>
              <div className="">
                <DownloadBtn text="Download" />
              </div>
            </li>

            <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">
              <div className="flex ">
                <div className=" flex  py-4  ">
                  <p className="px-5 text-xl text-gray-900">21-12-25</p> |{' '}
                  <p className="px-5 text-gray-900 text-xl"> Semester Fee Submission Notice </p>
                </div>
              </div>

              <div className="">
                <DownloadBtn text="Download" />
              </div>
            </li>

            <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">
              <div className="flex ">
                <div className=" flex  py-4  ">
                  <p className="px-5 text-xl text-gray-900">21-12-25</p> |{' '}
                  <p className="px-5 text-gray-900 text-xl"> Admission Notice</p>
                </div>
              </div>

              <div className="">
                <DownloadBtn text="Download" />
              </div>
            </li>

            <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">
              <div className="flex ">
                <div className=" flex  py-4  ">
                  <p className="px-5 text-xl text-gray-900">21-12-25</p> |{' '}
                  <p className="px-5 text-gray-900 text-xl"> Exam Notice</p>
                </div>
              </div>
              <div className="">
                <DownloadBtn text="Download" />
              </div>
            </li>
            <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">
              <div className="flex ">
                <div className=" flex  py-4  ">
                  <p className="px-5 text-xl text-gray-900">21-12-25</p> |{' '}
                  <p className="px-5 text-gray-900 text-xl"> Semester Fee Submission Notice </p>
                </div>
              </div>

              <div className="">
                <DownloadBtn text="Download" />
              </div>
            </li>

            <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">
              <div className="flex ">
                <div className=" flex  py-4  ">
                  <p className="px-5 text-xl text-gray-900">21-12-25</p> |{' '}
                  <p className="px-5 text-gray-900 text-xl"> Admission Notice</p>
                </div>
              </div>

              <div className="">
                <DownloadBtn text="Download" />
              </div>
            </li>

            <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">
              <div className="flex ">
                <div className=" flex  py-4  ">
                  <p className="px-5 text-xl text-gray-900">21-12-25</p> |{' '}
                  <p className="px-5 text-gray-900 text-xl"> Exam Notice</p>
                </div>
              </div>
              <div className="">
                <DownloadBtn text="Download" />
              </div>
            </li>
            <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">
              <div className="flex ">
                <div className=" flex  py-4  ">
                  <p className="px-5 text-xl text-gray-900">21-12-25</p> |{' '}
                  <p className="px-5 text-gray-900 text-xl"> Semester Fee Submission Notice </p>
                </div>
              </div>

              <div className="">
                <DownloadBtn text="Download" />
              </div>
            </li>

            <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">
              <div className="flex ">
                <div className=" flex  py-4  ">
                  <p className="px-5 text-xl text-gray-900">21-12-25</p> |{' '}
                  <p className="px-5 text-gray-900 text-xl"> Admission Notice</p>
                </div>
              </div>

              <div className="">
                <DownloadBtn text="Download" />
              </div>
            </li>

            <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">
              <div className="flex ">
                <div className=" flex  py-4  ">
                  <p className="px-5 text-xl text-gray-900">21-12-25</p> |{' '}
                  <p className="px-5 text-gray-900 text-xl"> Exam Notice</p>
                </div>
              </div>
              <div className="">
                <DownloadBtn text="Download" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AllNotice;
