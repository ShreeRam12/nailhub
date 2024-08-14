// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nailhub.css';
import Nailhub from '../../src/assets/Nailhub_Logo.webp';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='sticky top-0 left-0 z-50 shadow-xl'>
            <section className="">
                <div className="bg-white shadow-lg">
                    <div className="container mx-auto flex items-center justify-between py-3 px-5">
                        <div className="w-28 md:w-32 lg:w-40 cursor-pointer">
                            <img src={Nailhub} alt="Nailhub Logo" />
                        </div>
                        <div className="hidden md:flex md:space-x-5 lg:space-x-10 md:text-md lg:text-lg navfont">
                            <Link to={"/"}
                                className="hover:text-rose-500 text-black duration-500 ease-in-out animate__animated animate__fadeInUp">Home</Link>
                            <Link to={"/services"}
                                className="hover:text-rose-500 text-black duration-500 ease-in-out animate__animated animate__fadeInUp">Services</Link>
                            <Link to={"/gallery"}
                                className="hover:text-rose-500 text-black duration-500 ease-in-out animate__animated animate__fadeInUp">Gallery</Link>
                            <Link to={"/shop"}
                                className="hover:text-rose-500 text-black duration-500 ease-in-out animate__animated animate__fadeInUp">Shop</Link>
                            <Link to="/blogs"
                                className="hover:text-rose-500 text-black duration-500 ease-in-out animate__animated animate__fadeInUp">Blogs</Link>
                            <Link to={"/faq"}
                                className="hover:text-rose-500 text-black duration-500 ease-in-out animate__animated animate__fadeInUp">FAQ</Link>
                            <Link to={"/contactus"}
                                className="hover:text-rose-500 text-black duration-500 ease-in-out animate__animated animate__fadeInUp">Contact
                                Us</Link>
                        </div>
                        <div className="hidden md:flex gap-5 text-black">
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
                        <Link to={"/"} className="hover:text-rose-700 navfont animate__animated animate__fadeInUp">Home</Link>
                        <Link to={"/services"} className="hover:text-rose-700 navfont animate__animated animate__fadeInUp">Services</Link>
                        <Link to={"/gallery"} className="hover:text-rose-700 animate__animated animate__fadeInUp">Gallery</Link>
                        <Link to={"/appointment"} className="hover:text-rose-700 navfont animate__animated animate__fadeInUp">Shop</Link>
                        <Link to={"/blogs"} className="hover:text-rose-700 navfont animate__animated animate__fadeInUp">Blogs</Link>
                        <Link to={"/contactus"} className="hover:text-rose-700 navfont animate__animated animate__fadeInUp">Contact Us</Link>
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
