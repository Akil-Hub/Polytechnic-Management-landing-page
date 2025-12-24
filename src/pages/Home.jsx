import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import NoticeSection from '../components/NoticeSection';
import Study from '../components/Study';
import OurDepartment from './OurDepartment';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <>
      <Hero />
      <NoticeSection />
      <AboutUs />
      <Study />
      <OurDepartment />
    </>
  );
};

export default Home;
