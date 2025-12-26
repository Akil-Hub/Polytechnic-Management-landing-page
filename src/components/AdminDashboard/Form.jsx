import Button from '@/components/Buttons/Button'
import React from 'react'
import superAdmin from '@/assets/superAdmin.png'
import LargeBtn from '@/components/Buttons/LargeBtn'
const Form = () => {
  return (
    <section className='wrapper'>
         <article className="SuperAdminProfile border border-gray-500 rounded-xl p-4 px-6">
        <h4 className="text-3xl text-left text-gray-900 py-5 mb-3">Super Admin Profile</h4>
        <div className="flex justify-between items-center">
          <div className=" profileDiv flex gap-4">
            <img src={superAdmin} alt="" />
            <div className="">
              <h4 className="text-2xl font-semibold to-gray-900">Atikur Rahman </h4>
              <p className="text-xl to-gray-900">atikur@gmail.com</p>
            </div>
          </div>
          <div className="pr-8">
            <Button text=" Edit Profile" />
          </div>
        </div>

        <form className="py-8  ">
          <h4 className="text-xl font-semibold to-gray-900 mb-8">Add Section Admin</h4>

          <div className="fromElement flex flex-wrap gap-5 gap-y-4">
            <div>
              <h4 className="text-xl pb-3"> Admin Name</h4>
              <input
                type="name"
                name="name"
                placeholder="Enter Admin Name"
                className="py-3 px-2 focus:outline-none w-300 border border-gray-500 rounded-lg"
              />
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
                className="py-3 px-2 focus:outline-none w-220 border border-gray-500 rounded-lg"
              />
            </div>
                   <div  className="pt-10  w-80">
            <LargeBtn text="Change" type="submit"  />
          </div>
         
          </div>

   
        </form>
      </article>
    </section>
      
  )
}

export default Form