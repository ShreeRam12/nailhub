// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Shop from './components/Shop';
import Blogs from './components/Blogs';
import FAQ from './components/FAQ';
import ContactUS from './components/ContactUS';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contactus" element={<ContactUS />} />
      </Routes>
    </Router>
  );
}

export default App;
