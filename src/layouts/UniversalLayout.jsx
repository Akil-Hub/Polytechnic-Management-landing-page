import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'

const UniversalLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div>
        {isHomePage && <SearchBar />}
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default UniversalLayout