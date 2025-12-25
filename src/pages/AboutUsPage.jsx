import React from 'react';
import Instructor from '@/assets/Instructors.png';
import AboutUs from '../components/AboutUs';
import gridImage1 from '@/assets/gridImage1.png';
import gridImage2 from '@/assets/gridImage2.png';
import gridImage3 from '@/assets/gridImage3.png';
import gridImage4 from '@/assets/gridImage4.png';
import gridImage5 from '@/assets/gridImage5.png';
import gridImage6 from '@/assets/gridImage6.png';
import gridImage7 from '@/assets/gridImage7.png';
import gridImage8 from '@/assets/gridImage8.png';
import gridVideo from '@/assets/gridVideo.png';
const AboutUsPage = () => {
  const baseGridClass =
    '   rounded-2xl flex items-center justify-center text-white font-bold overflow-hidden hover:scale-105 duration-400 transition-transform ';

  const baseGridImageClass = ' h-full w-full object-cover object-center';
  return (
    <section className="wrapper">
      <picture
        className="  relative w-full h-100 flex justify-center bg-cover items-center  overflow-hidden bg-center rounded-2xl hover:scale-102 duration-400  mt-5"
        style={{ backgroundImage: `url(${Instructor})` }}
      >
        <div className="overlay h-full w-full bg-black/10 absolute"></div>
        <h2 className="text-6xl text-gray-100">Learn more about us !</h2>
      </picture>

      <AboutUs />

      <h2 className="text-primary text-3xl font-semibold py-14 mx-5">
        MUPI <span className="font-extrabold text-primary text-4xl">Gallery</span>
      </h2>
      {/* grid layout start */}




<div className="grid grid-cols-4 grid-rows-4 gap-6 h-[740px] p-4">
  
  <div className={`${baseGridClass} row-span-3`}>
    <img src={gridImage1} alt="GridImage" className={`${baseGridImageClass}`} />
  </div>

  <div className={`${baseGridClass} col-span-2`}>
    <img src={gridImage2} alt="GridImage" className={`${baseGridImageClass}`} />
  </div>

  <div className={`${baseGridClass} row-span-2`}>
    <img src={gridImage3} alt="GridImage"className={`${baseGridImageClass}`} />
  </div>

  <div className={`${baseGridClass} col-span-2 row-span-2`}>
    <img src={gridImage4} alt="GridImage" className={`${baseGridImageClass}`} />
  </div>

  <div className={`${baseGridClass}`}>
    <img src={gridImage5} alt="GridImage" className={`${baseGridImageClass}`} />
  </div>

  <div className={`${baseGridClass}`}>
    <img src={gridImage6} alt="GridImage"className={`${baseGridImageClass}`} />
  </div>

  {/* Box 7: Bottom Wide */}
  <div className={`${baseGridClass} col-span-2`}>
    <img src={gridImage7} alt="GridImage" className={`${baseGridImageClass}`}/>
  </div>

  {/* Box 8: Bottom Right */}
  <div className={`${baseGridClass}`}>
    <img src={gridImage8} alt="GridImage"className={`${baseGridImageClass}`}/>
  </div>

</div>
       

      {/* grid layout end */}

      {/* history */}

      <div className="history flex flex-col md:flex-row gap-20 py-30 justify-between">
        {/* left text  */}
        <div className="w-130">
          <h2 className="text-primary text-3xl font-semibold py-14 ">
            History of <span className="font-extrabold text-primary text-4xl">MUPI</span>
          </h2>
          <p className="text-gray-600 w-130">
            Munshiganj Polytechnic Institute is a center of technical excellence, empowering
            students with practical skills, industry-relevant knowledge, and a future-ready mindset.
            We focus on hands-on learning, modern technology, and professional development to help
            students build strong careers and contribute confidently to the nation’s
            growth.Munshiganj Polytechnic Institute is a center of technical excellence, empowering
            students with practical skills, industry-relevant knowledge, and a future-ready mindset.
            We focus on hands-on learning, modern technology, and professional development to help
            students build strong careers and contribute confidently to the nation’s growth.
          </p>
        </div>

        {/* right image */}
        <div className="h-full w-full hover:scale-105 duration-400">
          <img src={gridVideo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
