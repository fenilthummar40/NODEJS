import React from 'react';
import { assets } from '../assets/assets';

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center my-10 mt-40 text-sm">
      {/* Footer Content */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 w-full max-w-6xl text-center sm:text-left">
        {/* Logo and Description */}
        <div>
          <img src={assets.logo} className=" w-20 mx-auto sm:mx-0" alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600 mx-auto sm:mx-0">
          Development is a process that creates growth, progress, positive change or the addition of physical, economic, environmental, social and demographic components .
          </p>
        </div>
        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* Contact Information */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 83480 45780</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="w-full max-w-6xl mt-10">
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ forever.com - All Right Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
