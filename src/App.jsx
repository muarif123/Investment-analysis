import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route,useLocation} from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import Navbar from './Pages/Navbar'
import WrappedHome from './Pages/Home'
import WrappedAbout from './Pages/About'
import WrappedContact from './Pages/Contact'
import Background from './Components/Background'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Footer from './Components/Footer'

function App() {
  
const location = useLocation()
useEffect(() => {
  AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once - while scrolling down
  });
}, []);
  return (
    <>
    
    <Navbar/>
    <Background/>
    <AnimatePresence mode='wait'>


    <Routes location={location} key={location.pathname}>
      <Route index element={<WrappedHome/>}/>
      <Route path='/about' element={<WrappedAbout/>}/>
      <Route path='/contact' element={<WrappedContact/>}/>
    </Routes>
    </AnimatePresence>
       <Footer/>
    </>
  )
}

export default App
