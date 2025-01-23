import React from 'react';
import { assets } from '../assets/assets';

function OurPolicy() {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div className="flex flex-col items-center">
        <img className="w-12 mb-5" src={assets.exchange_icon} alt="Policy Icon" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle-free exchange policy</p>
      </div>

      <div className="flex flex-col items-center">
        <img className="w-12 mb-5" src={assets.quality_icon} alt="Policy Icon" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 day free return policy</p>
      </div>

      <div className="flex flex-col items-center">
        <img className="w-12 mb-5" src={assets.support_img} alt="Policy Icon" />
        <p className="font-semibold">Best customer suport</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
    </div>
    
  );
}

export default OurPolicy;
