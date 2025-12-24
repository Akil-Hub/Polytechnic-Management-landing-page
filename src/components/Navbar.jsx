import React from 'react';
import { FiSearch } from 'react-icons/fi';
import logo from '/logo.svg'; 
import Button from './Button';
const Navbar = () => {
  return (
    <section>
      <nav className='flex justify-between wrapper  border-b border-gray-300 py-2 mb-4'>
        <p className='text-xl '>Instruction Portal</p>
        <div className="flex gap-2 items-center border px-2 py-1 rounded-lg">
          <FiSearch className='size-5 text-primary' />
          <input type="text" placeholder="Search" className='focus:outline-none' />
        </div>
      </nav>

      <nav className='flex justify-between items-center wrapper py-1'>
       <div className="">
        <img src={logo} alt="" />
       </div>

       <div className="NavItems">
        <ul className='flex gap-8 items-center '>
          <li className=' text-xl  text-gray-800 relative before:absolute before:content-[""] before:bg-primary before:h-0.75  before:w-0  before:-bottom-px before:left-0 hover:before:w-full  before:duration-300 '><a href="">Home</a></li>
          <li className='  text-gray-800 text-xl relative before:absolute before:content-[""] before:bg-primary before:h-0.75  before:w-0  before:-bottom-px before:left-0 hover:before:w-full  before:duration-300 '><a href="">Notice</a></li>
          <li className=' text-xl  text-gray-800 relative before:absolute before:content-[""] before:bg-primary before:h-0.75  before:w-0  before:-bottom-px before:left-0 hover:before:w-full  before:duration-300 '><a href="">Academic</a></li>
          <li className=' text-xl  text-gray-800 relative before:absolute before:content-[""] before:bg-primary before:h-0.75  before:w-0  before:-bottom-px before:left-0 hover:before:w-full  before:duration-300 '><a href="">Instructor</a></li>
          <li className=' text-xl  text-gray-800 relative before:absolute before:content-[""] before:bg-primary before:h-0.75  before:w-0  before:-bottom-px before:left-0 hover:before:w-full  before:duration-300 '><a href="">Contact</a></li>
          <li className=' text-xl  text-gray-800 relative before:absolute before:content-[""] before:bg-primary before:h-0.75  before:w-0  before:-bottom-px before:left-0 hover:before:w-full  before:duration-300 '><a href="">About MUPI</a></li>
     

          
        </ul>
       </div>



      <div className=" flex gap-3">
  
        <Button text="Sign In"/>  
        <Button text="Registration"/>  

        
        
      </div>


      </nav>

    </section>
  );
};

export default Navbar;
