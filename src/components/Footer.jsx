import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import Nailhub from "..//..//src/assets/Nailhub_Logo.webp";
import "./Nailhub.css";

const Footer = () => {
    return (
        <footer className="bg-gray-200 text-black py-6 navfont">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between">
                    {/* Company Info */}
                    <div className="mb-6 md:mb-0">
                        <div className="w-52">
                            <img src={Nailhub} alt="Nailhub_Logo" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Nailhub</h2>
                        <p className="text-sm mb-4">
                            Transform your nail care experience with our top-notch services
                            and products.
                        </p>
                        <p className="text-sm mb-2">
                            <span className="font-bold">Address:</span> 6th Main, 38th Cross
                            Rd, Jayanagar 9th Block, Jayanagar, Bengaluru, Karnataka 560069
                        </p>
                        <p className="text-sm mb-2">
                            <span className="font-bold">Phone:</span>+91 988-666-2344
                        </p>
                        <p className="text-sm mb-2">
                            <span className="font-bold">Email:</span> info@nailhub.com
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-6 md:mb-0">
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
                                    href="/pricing"
                                    className="hover:text-rose-400 duration-500 ease-in-out"
                                >
                                    Pricing
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
                                <a href="/appointment" className="hover:text-rose-400">
                                    Book an Appointment
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
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/nailhubbangalore/
"
                                className="text-gray-400 hover:text-blue-500"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebookF size={20} />
                            </a>
                            <a
                                href="https://x.com/nailhubX"
                                className="text-gray-400 hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTwitter size={20} />
                            </a>
                            <a
                                href="https://www.instagram.com/nailhub_nidhi/
"
                                className="text-gray-400 hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/nailhub-bangalore/"
                                className="text-gray-400 hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Nailhub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
