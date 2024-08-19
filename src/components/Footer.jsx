import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import Nailhub from "../../src/assets/Nailhub_Logo.webp";
import "./Nailhub.css";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-lg shadow-lg p-8 navfont">
                    <div className="flex flex-wrap md:flex-nowrap">
                        {/* Company Info */}
                        <div className="w-full md:w-1/3 lg:w-4/6 mb-6 md:mb-0">
                            <div className="mb-4">
                                <img src={Nailhub} alt="Nailhub Logo" className="w-40" />
                            </div>
                            <h2 className="text-2xl font-bold mb-2">Nailhub</h2>
                            <p className="text-sm mb-4">
                                Transform your nail care experience with our top-notch services
                                and products.
                            </p>
                            <p className="text-sm mb-2">
                                <span className="font-bold">Address:</span> 6th Main, 38th Cross
                                Rd, Jayanagar 9th Block, Jayanagar, Bengaluru, Karnataka 560069
                            </p>
                            <p className="text-sm mb-2">
                                <span className="font-bold">Phone:</span> +91 988-666-2344
                            </p>
                            <p className="text-sm mb-2">
                                <span className="font-bold">Email:</span> info@nailhub.com
                            </p>
                            <p className="text-sm">
                                <span className="font-bold">Working Hours:</span> Monday to Friday, 8:00 am to 5:00 pm
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="w-full md:w-1/3 lg:w-2/6 mb-6 md:mb-0">
                            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="/"
                                        className="hover:text-rose-400 duration-500 ease-in-out"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/services"
                                        className="hover:text-rose-400 duration-500 ease-in-out"
                                    >
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/gallery"
                                        className="hover:text-rose-400 duration-500 ease-in-out"
                                    >
                                        Gallery
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/shop"
                                        className="hover:text-rose-400 duration-500 ease-in-out"
                                    >
                                        Shop
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/blogs"
                                        className="hover:text-rose-400 duration-500 ease-in-out"
                                    >
                                        Blogs
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/contact"
                                        className="hover:text-rose-400 duration-500 ease-in-out"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-4 mb-4">
                                <a
                                    href="https://www.facebook.com/nailhubbangalore/"
                                    className="text-gray-400 hover:text-blue-500 transition duration-500"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebookF size={20} />
                                </a>
                                <a
                                    href="https://x.com/nailhubX"
                                    className="text-gray-400 hover:text-blue-500  transition duration-500"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaTwitter size={20} />
                                </a>
                                <a
                                    href="https://www.instagram.com/nailhub_nidhi/"
                                    className="text-gray-400 hover:text-pink-500 transition duration-500"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/nailhub-bangalore/"
                                    className="text-gray-400 hover:text-blue-500 transition duration-500"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn size={20} />
                                </a>
                            </div>
                            <p className="text-sm">
                                Stay connected with us on social media for the latest updates and offers.
                            </p>
                        </div>
                    </div>

                    <div className="pt-10 text-center">
                        <p className="text-sm bg-rose-500 py-4 text-white rounded">
                            &copy; {new Date().getFullYear()} Nailhub. All rights reserved.
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
