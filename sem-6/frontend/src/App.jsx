import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Placeorder from './pages/Placeorder'
import Orders from './pages/Orders'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SearchBar from './Components/Searchbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <div className='px-4 sm:px-[5vw] md:px[7vw] lg:px-[pvw]'>
        <ToastContainer/>
        <Navbar/>
        <SearchBar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Collection' element={<Collection/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/Product/:productId' element={<Product/>} />
            <Route path='/Cart' element={<Cart/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Place-order' element={<Placeorder/>} />
            <Route path='/Orders' element={<Orders/>} />
          </Routes>
        <Footer/>  
      </div>
    </div>  
  )
}

export default App