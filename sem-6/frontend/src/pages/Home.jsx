import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/Bestseller'
import OurPoliy from '../Components/OurPoliy'
import NewsletterBox from '../Components/NewsletterBox'

function Home() {
  return (
    <div>
        <Hero/>
        <LatestCollection/>
        <BestSeller/>
        <OurPoliy/>
        <NewsletterBox/>
    </div>
  )
}

export default Home