import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Shop from './components/Shop';
import ProductDetails from './components/ProductDetails';
import Blogs from './components/Blogs';
import FAQ from './components/FAQ';
import ContactUS from './components/ContactUS';
import Classicimage from './assets/Classic_Nail_Polish.webp';
import Manicuresets from './assets/Manicure_sets.webp';
import Manicureset from './assets/Manicure_set.webp';
import Gelnailkit from './assets/Gel_Nail_Kit.webp';
import NailStamp from './assets/Nail_stamping.webp';
import Cuticlecarecream from './assets/Cuticle_care_cream.webp';
import Naildesign from './assets/NailDesignTools.webp';
import NailPolish from './assets/Cleaner.webp';
import NailStrength from './assets/Nail_Strengthener.webp';
import UVNaillamps from './assets/UV_Lights_Nail.webp';
import Pedicure from './assets/Pedicure_Kit.webp';
import Pedicurecream from './assets/Pedicure_Cream.webp';

function App() {
  const products = [
    { id: 1, name: 'Classic Nail Polish', price: '\u20B9 25', image: Classicimage },
    { id: 2, name: 'Manicure Sets', price: '\u20B9 15', image: Manicuresets },
    { id: 3, name: 'Manicure Set', price: '\u20B9 30', image: Manicureset },
    { id: 4, name: 'Gel Nail Kit', price: '\u20B9 40', image: Gelnailkit },
    { id: 5, name: 'Nail Stamping Kit', price: '\u20B9 20', image: NailStamp },
    { id: 6, name: 'Cuticle Care Set', price: '\u20B9 12', image: Cuticlecarecream },
    { id: 7, name: 'Nail Design Tools', price: '\u20B9 18', image: Naildesign },
    { id: 8, name: 'Nail Polish Remover', price: '\u20B9 8', image: NailPolish },
    { id: 9, name: 'Nail Strengthener', price: '\u20B9 22', image: NailStrength },
    { id: 10, name: 'UV Lamp for Nails', price: '\u20B9 50', image: UVNaillamps },
    { id: 11, name: 'Pedicure Kit', price: '\u20B9 50', image: Pedicure },
    { id: 12, name: 'Pedicure Cream', price: '\u20B9 50', image: Pedicurecream },
  ];

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shop" element={<Shop products={products} />} />
          <Route path="/product/:id" element={<ProductDetails products={products} />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contactus" element={<ContactUS />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
