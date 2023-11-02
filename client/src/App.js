import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Loader from './components/Loader';


import { Home, About, Register, MultiCloudData, MultiCloudNetworking, MultiCloudSecurity, PythonGenAI, PythonML } from './page/index'



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
            <Route path="/courses/pythongenai" element={<PythonGenAI />} />
            <Route path="/courses/pythonml" element={<PythonML />} />

            {/* <Route path="/registeration" element={} /> */}
            <Route path="/contact" element={<Register />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
