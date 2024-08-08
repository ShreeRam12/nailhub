import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Card from './Card';
import AboutUS from './AboutUS';
import Client from './Client';
import Testimonials from './Testimonials';
import NailExtension from './NailExtension';
import Footer from './Footer';
const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Card />
            <AboutUS />
            <Client />
            <Testimonials />
            <NailExtension />
            <Footer />
        </div>
    )
}

export default Home
