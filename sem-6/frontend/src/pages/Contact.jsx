import React from 'react'
import Title from  '../Components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../Components/NewsletterBox'

function Contact() {
  return (
    <div>
        <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
        </div>
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
          <div className='flex flex-col justify-center items-start gap-66'>
            <p className='font-semibold text-xl text-gray-600'>Our store</p>
            <p className='text-gray-500'>360004 mavdi road <br />Rajkot(india)</p><br />
            <p  className='text-gray-500'>Tel :(+91) 5555-0134 <br />Email:admin@forever.com</p><br />
            <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p><br />
            <p className='text-gray-500'>Learn more about our team and job openings.</p><br />
           <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Expoler Jobs</button>
          </div>
        </div>
        <NewsletterBox/>
    </div>
  )
}

export default Contact