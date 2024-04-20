import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home';
import About from '../About';
import Service from '../Service';
import Pricing from '../Pricing';
import Contact from '../Contact';


const Routing = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />


      </Routes>
    </div>
  )
}

export default Routing
