import React from 'react'
import Navbar from './Componets/Navbar/Navbar'
import Hero from './Componets/Hero/Hero'
import About from './Componets/About/About'
import Service from './Componets/Service/Service'
import Mywork from './Componets/Mywork/Mywork'
import Contact from './Componets/Contact/Contact'
import Footer from './Componets/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Mywork/>
      <Contact/>
      <Footer/> 
    </div>
  )
}

export default App