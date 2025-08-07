import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'


const Layoutone = () => {
  return (
    <>
    
    
    <Navbar />
    
    <Outlet />
    
    <Footer />
    
    
    
    
    
    </>
  )
}

export default Layoutone