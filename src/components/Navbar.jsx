import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import logo from '/logo.svg';
import Button from './Buttons/Button';
import { Link, NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import { FaBars } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import MobileAside from '@/components/MobileAside';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navLinkClass = ({ isActive }) =>
    `text-xl relative before:absolute before:content-[""] before:bg-primary before:h-0.75 before:left-0 before:duration-400 hover:scale-105 transition-all duration-400  before:-bottom-[4px] hover:before:w-full
      ${isActive ? 'text-primary before:w-full ' : 'text-gray-800 before:w-0'}`;

  return (
    <section>
      <nav className="flex justify-between items-center wrapper py-1 overflow-x-hidden">
        <div className="">
          <img src={logo} alt="" />
        </div>

        <div className="NavItems">
          <ul className=" hidden  md:flex gap-8 items-center ">
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

        <div className=" hidden md:flex gap-3">
          <Button text="Sign In" />
          <Button text="Registration" />
        </div>

        {/* mobile responsive is here */}
        {
          <FaBars
            className={`size-7 absolute top-7 right-10 md:hidden z-20 transition-opacity duration-1000 ${isNavOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        }
        {/* Backdrop - click anywhere to close */}

        {isNavOpen && (
          <div
            className="fixed inset-0  z-9 "
            onClick={() => {
              setIsNavOpen(false);
            }}
          ></div>
        )}

        {<MobileAside isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />}
      </nav>
    </section>
  );
};

export default Navbar;
