import React from 'react';
import superAdmin from '@/assets/superAdmin.png';
import Button from '@/components/Buttons/Button';
import RemoveButton from '@/components/Buttons/RemoveButton';
import tanvir from '@/assets/tanvir.png';
import akil from '@/assets/akil.png';
import sagor from '@/assets/sagor.png';
import masum from '@/assets/masum.png';
import { useNavigate } from 'react-router-dom';
import LargeBtn from '@/components/Buttons/LargeBtn';
const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <section className="wrapper">
      <div className="topBar mb-10 flex justify-between p-3 items-center">
        <h2 className="text-3xl font-semibold text-gray-900">Admin Dashboard Management</h2>

        <div className="profile flex gap-3 ">
          <div className="">
            <img src={superAdmin} alt="superAdmin" />
          </div>
          <div className="">
            <h4 className="text-2xl to-gray-900">Atikur </h4>
            <p
              className="text-xl text-gray-700
            
            "
            >
              Super Admin
            </p>
          </div>
        </div>
      </div>

      <h5 className="text-xl to-gray-900 text-left py-5 mb-3">Super Admin Dashboard</h5>

      <article className="SuperAdminProfile border border-gray-500 rounded-xl p-4 px-6">
        <h4 className="text-3xl text-left text-gray-900 py-5 mb-3">Super Admin Profile</h4>
        <div className="flex justify-between items-center">
          <div className=" profileDiv flex">
            <img src="" alt="" />
            <div className="">
              <h4 className="text-2xl font-semibold to-gray-900">Atikur Rahman </h4>
              <p className="text-xl to-gray-900">atikur@gmail.com</p>
            </div>
          </div>
          <div className="pr-7 w-50">
            <LargeBtn
              text={'Profile'}
              className="pr-5"
              onClick={() => {
                navigate('/profile');
              }}
            />
          </div>
        </div>

        <form className="py-8">
          <h4 className="text-xl font-semibold to-gray-900 mb-8">Add Section Admin</h4>

          <div className="fromElement flex flex-wrap gap-5 gap-y-4">
            <div>
              <h4 className="text-xl pb-3">Name</h4>
              <input
                type="name"
                name="name"
                placeholder="Enter Admin Name"
                className="py-3 px-2 focus:outline-none w-150 border border-gray-500 rounded-lg"
              />
            </div>
            <div>
              <h4 className="text-xl pb-3">Role</h4>
              <input
                list="role"
                type="role"
                placeholder="Choice Admin Role"
                name="role-choice"
                className="py-3 px-2 focus:outline-none w-150 border border-gray-500 rounded-lg"
              />
              <datalist id="role">
                <option value="Institute Management" />
                <option value="Exam Control Management" />
                <option value="Register Management" />
                <option value="Library Management" />
              </datalist>
            </div>
            <div>
              <h4 className="text-xl pb-3">Email</h4>
              <input
                type="email"
                name="email"
                placeholder="Enter the email"
                className="py-3 px-2 focus:outline-none w-150 border border-gray-500 rounded-lg"
              />
            </div>
            <div>
              <h4 className="text-xl pb-3">Contact Number</h4>
              <input
                type="number"
                name="number"
                placeholder="Enter Admin number"
                className="py-3 px-2 focus:outline-none w-150 border border-gray-500 rounded-lg"
              />
            </div>
            <div>
              <h4 className="text-xl pb-3">password</h4>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="py-3 px-2 focus:outline-none w-150 border border-gray-500 rounded-lg"
              />
            </div>
            <div>
              <h4 className="text-xl pb-3">Confirm Password</h4>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Enter Confirm Password"
                className="py-3 px-2 focus:outline-none w-150 border border-gray-500 rounded-lg"
              />
            </div>
          </div>

          <div type="submit" className="pt-8 w-60">
            <LargeBtn text="Add Section Admin" />
          </div>
        </form>
      </article>

      <article className="flex flex-col gap-y-4">
        <h2 className="text-xl font-semibold to-gray-900 my-8">Section Admin Profile</h2>

        <div className="row flex justify-between py-3 px-2 border border-gray-500 rounded-xl items-center">
          <div className="profile flex gap-3 ">
            <div className=" ">
              <img src={tanvir} alt="superAdmin" className="w-20 h-20" />
            </div>
            <div className="">
              <h4 className="text-2xl text-gray-950">Tanvir Islam</h4>
              <p className="text-base text-gray-700 py-1"> tanvir3445@gmail.com</p>
              <p className="text-base  text-gray-700 ">Library Management</p>
            </div>
          </div>
          <div className="buttons flex gap-3">
            <Button text="Profile" />
            <RemoveButton text="Remove" />
          </div>
        </div>
        <div className="row flex justify-between py-3 px-2 border border-gray-500 rounded-xl items-center">
          <div className="profile flex gap-3 ">
            <div className=" ">
              <img src={akil} alt="superAdmin" className="w-20 h-20" />
            </div>
            <div className="">
              <h4 className="text-2xl text-gray-950">Akil Anjum </h4>
              <p className="text-base text-gray-700 py-1"> akil45@gmail.com</p>
              <p className="text-base  text-gray-700 ">Register Management</p>
            </div>
          </div>
          <div className="buttons flex gap-3">
            <Button text="Profile" />
            <RemoveButton text="Remove" />
          </div>
        </div>
        <div className="row flex justify-between py-3 px-2 border border-gray-500 rounded-xl items-center">
          <div className="profile flex gap-3 ">
            <div className=" ">
              <img src={sagor} alt="superAdmin" className="w-20 h-20" />
            </div>
            <div className="">
              <h4 className="text-2xl text-gray-950">Sagor Ahmed </h4>
              <p className="text-base text-gray-700 py-1"> sagor53@gmail.com</p>
              <p className="text-base  text-gray-700 ">Exam Control Management</p>
            </div>
          </div>
          <div className="buttons flex gap-3">
            <Button text="Profile" />
            <RemoveButton text="Remove" />
          </div>
        </div>
        <div className="row flex justify-between py-3 px-2 border border-gray-500 rounded-xl items-center">
          <div className="profile flex gap-3 ">
            <div className=" ">
              <img src={masum} alt="superAdmin" className="w-20 h-20" />
            </div>
            <div className="">
              <h4 className="text-2xl text-gray-950">Billa Masum </h4>
              <p className="text-base text-gray-700 py-1"> billa@gmail.com</p>
              <p className="text-base  text-gray-700 ">System Management</p>
            </div>
          </div>
          <div className="buttons flex gap-3">
            <Button text="Profile" />
            <RemoveButton text="Remove" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default AdminDashboard;
