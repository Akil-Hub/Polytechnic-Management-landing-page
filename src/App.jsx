import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NoticeSection from './components/NoticeSection';
import AboutUs from './components/AboutUs';
import Study from './components/Study';
import OurDepartment from './components/OurDepartment';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <NoticeSection/>
      <AboutUs/>
      <Study/>
      <OurDepartment/>
      <Footer/>
    </>
  );
};

export default App;
