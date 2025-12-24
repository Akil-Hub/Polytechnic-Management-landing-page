import React from 'react';
import logo from '/logo.svg';
const Footer = () => {
  return (
    <section className="bg-[#091924] mt-10">
      <div className="wrapper ">
        {/* Footer grid */}
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Footer logo and text  */}
          <div className="2fr-col py-10 ">
            <div className="flex gap-4 items-center">
              <div>
                <img src={logo} alt="" />
              </div>
              <h2 className="text-2xl font-semibold text-white">
                <span className="text-4xl">Munshiganj</span> <br /> Polytechnic Institute
              </h2>
            </div>
            <p className="text-gray-500 py-4">
              {' '}
              Munshiganj Polytechnic Institute, Mirkadim, Munshiganj
            </p>
            <p className="text-gray-500 py-3">Copyright © 2025 MUPI. All Rights Reserved.</p>
          </div>
          {/* Quick Links */}

          <div className="text-gray-400">
            <h3 className="py-3 text-2xl">Quick Links</h3>
            <p className="py-2">Home</p>
            <p className="py-2">About</p>
            <p className="py-2">Academic</p>
            <p className="py-2">Institute</p>
            <p className="py-2">About MUPI</p>
          </div>

          {/* Quick Links */}

          <div className="text-gray-400">
            <h3 className="py-3 text-2xl">Quick Links</h3>
            <p className="py-2">Dashboard</p>
            <p className="py-2">Admission</p>
          </div>
          {/* Contact Us */}
          <div className="text-gray-400">
            <h3 className="py-3 text-2xl">Contact Us </h3>
            <p className="py-2">Email : munpoly@gmai.com</p>
            <p className="py-2">Phone : +088 1234567890 </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
