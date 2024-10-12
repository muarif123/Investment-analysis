import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route,useLocation} from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import Navbar from './Components/Navbar'
import WrappedHome from './Components/Home'
import WrappedAbout from './Components/About'
import WrappedContact from './Components/Contact'

function App() {
  
const location = useLocation()
  return (
    <>
    <Navbar/>
    <AnimatePresence mode='wait'>


    <Routes location={location} key={location.pathname}>
      <Route index element={<WrappedHome/>}/>
      <Route path='/about' element={<WrappedAbout/>}/>
      <Route path='/contact' element={<WrappedContact/>}/>
    </Routes>
    </AnimatePresence>
       
    </>
  )
}

export default App
