import React from 'react';
import { FiSearch } from 'react-icons/fi';
import logo from '/logo.svg';
import Button from './Buttons/Button';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
const Navbar = () => {
  return (
    <section>

      <nav className="flex justify-between items-center wrapper py-1">
        <div className="">
          <img src={logo} alt="" />
        </div>

        <div className="NavItems">
          <ul className="flex gap-8 items-center ">
            <li className=' text-xl  text-gray-800 relative before:absolute before:content-[""] before:bg-primary before:h-0.75  before:w-0  before:-bottom-px before:left-0 hover:before:w-full  before:duration-300 hover:text-primary hover:scale-105 transition-all duration-400'>
              <Link to="/">Home</Link>
            </li>
            <li className='  text-gray-800 text-xl relative before:absolute before:content-[""] before:bg-primary before:h-0.75  before:w-0  before:-bottom-px before:left-0 hover:before:w-full  before:duration-300 hover:text-primary hover:scale-105 transition-all duration-400 '>
              <Link to="/notice">Notice</Link>
            </li>
            <li className=' text-xl  text-gray-800 relative before:absolute before:content-[""] before:bg-primary before:h-0.75  before:w-0  before:-bottom-px before:left-0 hover:before:w-full  before:duration-300 hover:text-primary hover:scale-105 transition-all duration-400'>
              <Link to="academic">Academic</Link>
            </li>
            <li className=' text-xl  text-gray-800 relative before:absolute before:content-[""] before:bg-primary before:h-0.75  before:w-0  before:-bottom-px before:left-0 hover:before:w-full  before:duration-300  hover:text-primary hover:scale-105 transition-all duration-400'>
              <Link to="instructors">Instructor</Link>
            </li>
            <li className=' text-xl  text-gray-800 relative before:absolute before:content-[""] before:bg-primary before:h-0.75  before:w-0  before:-bottom-px before:left-0 hover:before:w-full  before:duration-300  hover:text-primary hover:scale-105 transition-all duration-400'>
              <Link to="/contact">Contact</Link>
            </li>
            <li className=' text-xl  text-gray-800 relative before:absolute before:content-[""] before:bg-primary before:h-0.75  before:w-0  before:-bottom-px before:left-0 hover:before:w-full  before:duration-300 hover:text-primary hover:scale-105 transition-all duration-400 '>
              <Link to="/about">About MUPI</Link>
            </li>
          </ul>
        </div>

        <div className=" flex gap-3">
          <Button text="Sign In" />
          <Button text="Registration" />
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
