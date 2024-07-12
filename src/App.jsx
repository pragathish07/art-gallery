import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import PaintingDetails from './components/PaintingDetails'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
    
    <Navbar />
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/painting/:id" element={<PaintingDetails/>} />
      </Routes>
      <Footer/>
    
    </>


  
  )


}



export default App
