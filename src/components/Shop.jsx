import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Nailhub.css';
import Product from '../components/Payment/Product';
import Steps from '../components/Steps';
import Classicimage from '..//..//src/assets/Classic_Nail_Polish.webp';
import Manicuresets from '..//..//src/assets/Manicure_sets.webp';
import Manicureset from '..//..//src/assets/Manicure_set.webp';
import Gelnailkit from '..//..//src/assets/Gel_Nail_Kit.webp';
import NailStamp from '..//..//src/assets/Nail_stamping.webp';
import Cuticlecarecream from '..//..//src/assets/Cuticle_care_cream.webp';
import Naildesign from '..//..//src/assets/NailDesignTools.webp';
import NailPolish from '..//..//src/assets/Cleaner.webp';
import NailStrength from '..//..//src/assets/Nail_Strengthener.webp';
import UVNaillamps from '..//..//src/assets/UV_Lights_Nail.webp';
import Pedicure from '..//..//src/assets/Pedicure_Kit.webp';
import Pedicurecream from '..//..//src/assets/Pedicure_Cream.webp';
import { CartProvider } from '../components/Payment/CartContext';

const products = [
    { id: 1, name: 'Classic Nail Polish ', price: '\u20B9 25', image: Classicimage },
    { id: 2, name: 'Manicure Sets', price: '\u20B9 15', image: Manicuresets },
    { id: 3, name: 'Manicure Set', price: '\u20B9 30', image: Manicureset },
    { id: 4, name: 'Gel Nail Kit', price: '\u20B9 40', image: Gelnailkit },
    { id: 5, name: 'Nail Stamping Kit', price: '\u20B9 20', image: NailStamp },
    { id: 6, name: 'Cuticle Care Set', price: '\u20B9 12', image: Cuticlecarecream },
    { id: 7, name: 'Nail Design Tools', price: '\u20B9 18', image: Naildesign },
    { id: 8, name: 'Nail Polish Remover', price: '\u20B9 8', image: NailPolish },
    { id: 9, name: 'Nail Strengthener', price: '\u20B9 22', image: NailStrength },
    { id: 10, name: 'UV Lamp for Nails', price: '\u20B9 50', image: UVNaillamps },
    { id: 10, name: 'Pedicure Kit', price: '\u20B9 50', image: Pedicure },
    { id: 10, name: 'Pedicure Cream', price: '\u20B9 50', image: Pedicurecream },
];

const Shop = () => {
    return (
        <CartProvider>
            <Navbar />
            <section className="shop shop_bg">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-8 text-rose-300 text-center animate__animated animate__fadeInDown">Nailhub Shop</h1>
                    <h1 className="text-3xl font-bold mb-8 text-rose-500 text-center section_font animate__animated animate__fadeIn">Shopping</h1>
                    <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 animate__animated animate__fadeInUp">
                        {products.map(product => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                </div>
                <div className='pb-20'>
                    <Steps />
                </div>
            </section>
            <Footer />
        </CartProvider>
    );
};

export default Shop;
