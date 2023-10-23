import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import Navbar from '../components/Navbar'
import ReservationPage from './ReservationPage/ReservationPage'
import Footer from '../components/Footer'
import GalleryPage from './GalleryPage/GalleryPage'

const HomeRoutes = () => {
  return (
    <div className='bg-white dark:bg-[#242424] dark:text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/reservation' element={<ReservationPage/>}/>
        <Route path='/gallery' element={<GalleryPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default HomeRoutes