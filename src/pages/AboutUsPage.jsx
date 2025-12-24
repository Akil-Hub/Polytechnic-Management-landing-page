import React from 'react'
import Instructor from '@/assets/Instructors.png'
import AboutUs from '../components/AboutUs'
const AboutUsPage = () => {
  return (
    <section className='wrapper'>
          <picture
                        className="  relative w-full h-100 flex justify-center bg-cover items-center  overflow-hidden bg-center rounded-2xl "
                        style={{ backgroundImage: `url(${Instructor})` }}
                      >
                        <div className="overlay h-full w-full bg-black/10 absolute"></div>
                        <h2 className="text-6xl text-gray-100">Learn more about us !</h2>
                      </picture>


                      <AboutUs/>
        
    </section>
  )
}

export default AboutUsPage