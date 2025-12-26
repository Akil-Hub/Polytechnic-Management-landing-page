import React from 'react'
import Study from '../components/Study'
import Instructor from '@/assets/Instructors.png'
const ContactUsPage = () => {
  return (
    <section className='wrapper'>
        
              <picture
                className="  relative w-full md:h-100 h-40 flex justify-center bg-cover items-center  overflow-hidden bg-center rounded-2xl hover:scale-102 duration-400  mt-5 "
                style={{ backgroundImage: `url(${Instructor})` }}
              >
                <div className="overlay h-full w-full bg-black/10 absolute"></div>
                <h2 className="md:text-6xl text-2xl text-gray-100">Contact with us!</h2>
              </picture>
            

              <Study/>
    </section>
  )
}

export default ContactUsPage