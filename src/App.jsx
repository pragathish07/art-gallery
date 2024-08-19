import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import PaintingDetails from './components/PaintingDetails'
import Footer from './components/Footer'
import { AuthProvider } from './services/AuthContext'
import LoginPage from './components/Login'
import SignupPage from './components/SignUp'
import AdminDashboard from './components/AdminDashboard'
import EditPainting from './components/EditPaintings'
import AdminRoute from './components/AdminRoute'
import ProtectedRoute from './components/protectedRoutes'
import Preloader from './components/Preloader'
import ScrollToTop from './components/ScrollToTop'

function App() {

 

  return (
    <>
    <AuthProvider>
    <Navbar />
    <ScrollToTop />
    
    <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/painting/:id" element={<PaintingDetails/>} />
        <Route path='/edit-painting/:id' element={<EditPainting/>} />
        <Route path='/dashboard' element={<AdminDashboard/>} />
      </Routes>
      <Footer/>
    </AuthProvider>
    
    </>


  
  )


}



export default App
