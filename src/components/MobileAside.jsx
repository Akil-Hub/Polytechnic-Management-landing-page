import SearchBar from '@/components/SearchBar';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const MobileAside = ({ isNavOpen ,setIsNavOpen }) => {
  const navLinkClass = ({ isActive }) =>
    `text-xl relative before:absolute before:content-[""] before:bg-white before:h-0.75 before:left-0 before:duration-400 hover:scale-105 transition-all duration-400  before:-bottom-[4px] hover:before:w-full text-white
      ${isActive ? 'text-white before:w-full ' : 'text-gray-300 before:w-0'}`;
  return (
    <div
      className={`h-screen w-40 bg-primary fixed z-10 duration-500 transition-transform top-0 right-0 md:hidden  transform  ease-in-out ${isNavOpen ? 'translate-x-0' : 'translate-x-[130%]'}  `}
    >
      <IoMdClose
        className="size-7 absolute top-7 right-10 md:hidden z-20"
        onClick={() => setIsNavOpen(!isNavOpen)}
      />

      <ul className="  mt-20  flex flex-col  gap-8 items-center ">
        <li>
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
        </li>
        <li className="  ">
          <NavLink to="/notice" className={navLinkClass}>
            Notice
          </NavLink>
        </li>
        <li>
          <NavLink to="academic" className={navLinkClass}>
            Academic
          </NavLink>
        </li>
        <li className>
          <NavLink to="instructors" className={navLinkClass}>
            Instructor
          </NavLink>
        </li>
        <li className>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={navLinkClass}>
            About MUPI
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileAside;
