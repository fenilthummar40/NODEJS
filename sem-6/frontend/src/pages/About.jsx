import React from 'react'
import Title from '../Components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'

function About() {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nisi aliquam id debitis dignissimos animi, porro pariatur facere, quisquam inventore ut excepturi eligendi possimus officia mollitia rerum perferendis dicta architecto!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nisi aliquam id debitis dignissimos animi, porro pariatur facere, quisquam inventore ut excepturi eligendi possimus officia mollitia rerum perferendis dicta architecto!</p>
              <b>Our Mission</b>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, earum illo. Iusto nobis, porro dolor sapiente modi soluta, animi earum similique nihil voluptatem odit illum nesciunt ducimus quidem obcaecati necessitatibus.</p>
          </div>
        </div>

        <div className='text-4xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance</b>
              <p className='text-gray-600'>We meticulousiy select and  vet each product to ensure it meets our stringent qulity standards.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Conveniene</b>
              <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
            </div> 
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Excepttional Customer Service :</b>
              <p className='text-gray-600'>Our team of dedicated  professionals is here to assist you the way, ensuring your satisfaction is our top priority</p>
            </div>  
        </div>
        <NewsletterBox />
    </div>
  )
}

export default About