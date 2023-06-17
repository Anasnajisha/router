import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Notfound from './pages/Notfound'
import Header from './units/Header'
export default function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<Notfound />} />

    </Routes>
      
    </div>
  )
}


