import React, { useState } from 'react';
import './Nailhub.css';
import Nailhub from '../../src/assets/Nailhub_Logo.webp';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='sticky top-0 left-0 z-50 shadow-xl'>
            <section className="">
                <div className="bg-rose-300 shadow-lg">
                    <div className="container mx-auto flex items-center justify-between py-3 px-5">
                        <div className="w-28 md:w-32 lg:w-40 cursor-pointer">
                            <img src={Nailhub} alt="Nailhub Logo" />
                        </div>
                        <div className="hidden md:flex md:space-x-5 lg:space-x-10 md:text-md lg:text-lg navfont">
                            <a href="landing_page.html"
                                className="hover:text-rose-500 text-black duration-500 ease-in-out animate__animated animate__fadeInUp">Home</a>
                            <a href="services.html"
                                className="hover:text-rose-500 text-black duration-500 ease-in-out animate__animated animate__fadeInUp">Services</a>
                            <a href="pricing.html"
                                className="hover:text-rose-500 text-black duration-500 ease-in-out animate__animated animate__fadeInUp">Gallery</a>
                            <a href="appointment.html"
                                className="hover:text-rose-500 text-black duration-500 ease-in-out animate__animated animate__fadeInUp">Book
                                an Appointment</a>
                            <a href="blogs.html"
                                className="hover:text-rose-500 text-black duration-500 ease-in-out animate__animated animate__fadeInUp">Blogs</a>
                            <a href="contactus.html"
                                className="hover:text-rose-500 text-black duration-500 ease-in-out animate__animated animate__fadeInUp">Contact
                                Us</a>
                        </div>
                        <div className="hidden md:flex gap-5">
                            <div>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div>
                                <i className="fa-solid fa-cart-plus"></i>
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button onClick={toggleMenu} className="text-xl">
                                <i className={`fa-solid ${menuOpen ? 'fa-times' : 'fa-bars'}`} id="menu-icon"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`${menuOpen ? 'block' : 'hidden'} fixed bg-rose-300 w-full z-30 md:hidden lg:hidden`} id="mobile-menu">
                    <div className="flex flex-col items-center space-y-4 py-5 navfont">
                        <a href="landing_page.html" className="hover:text-rose-700 navfont animate__animated animate__fadeInUp">Home</a>
                        <a href="services.html" className="hover:text-rose-700 navfont animate__animated animate__fadeInUp">Services</a>
                        <a href="pricing.html" className="hover:text-rose-700 animate__animated animate__fadeInUp">Gallery</a>
                        <a href="appointment.html" className="hover:text-rose-700 navfont animate__animated animate__fadeInUp">Shop</a>
                        <a href="blogs.html" className="hover:text-rose-700 navfont animate__animated animate__fadeInUp">Blogs</a>
                        <a href="contactus.html" className="hover:text-rose-700 navfont animate__animated animate__fadeInUp">Contact Us</a>
                        <div className="flex gap-5">
                            <div>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div>
                                <i className="fa-solid fa-cart-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Navbar;
