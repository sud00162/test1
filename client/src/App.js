import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Footer from './components/Footer';


import { Home, About, Contact, Register, MultiCloudData, MultiCloudNetworking, MultiCloudSecurity } from './page/index'

const Loader = () => {
  <button type="button" class="bg-indigo-500 ..." disabled>
    <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
    </svg>
    Loading...
  </button>
}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses/data" element={<MultiCloudData />} />
            <Route path="/courses/networking" element={<MultiCloudNetworking />} />
            <Route path="/courses/security" element={<MultiCloudSecurity />} />
            <Route path="/registeration" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
