import React from 'react'
import {BrowserRouter, Routes, Route,  } from "react-router-dom"
import Landing from "./pages/Landing"
import ServiceDetail from "./pages/ServiceDetail"
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/services/:slug' element={<ServiceDetail />} />
          {/* <Route path='/
          ' element={<Landing />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App