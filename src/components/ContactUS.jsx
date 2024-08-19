import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import 'animate.css';
const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <section className="contactus ">
                <div className='bg-black bg-opacity-35 pb-10 '>
                    <div className="container mx-auto px-5 ">
                        <h2 className="animate__animated animate__fadeInDown text-3xl font-bold text-center text-white mb-8 navfont pt-5">Contact Us</h2>

                        {/* Contact Form */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate__animated animate__fadeInDown">
                            {/* Contact Information */}
                            <div className="flex flex-col justify-center">
                                <h3 className="text-2xl font-semibold mb-4 text-white section_font">Contact Information</h3>
                                <p className="text-white mb-4 navfont">Feel free to get in touch with us through the following contact details.</p>
                                <div className="space-y-3 navfont">
                                    <div className="flex items-center">
                                        <i className="fa-solid fa-phone text-white mr-3"></i>
                                        <span className="text-white">+91 988-666-2344</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fa-solid fa-envelope text-white mr-3"></i>
                                        <span className="text-white"> info@nailhub.com</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fa-solid fa-location-dot text-white mr-3"></i>
                                        <span className="text-white"> 6th Main, 38th Cross
                                            Rd, Jayanagar 9th Block, Jayanagar, Bengaluru, Karnataka 560069</span>
                                    </div>
                                </div>
                            </div>
                            <div className='animate__animated animate__fadeInDown'>
                                <h3 className="text-2xl font-semibold mb-4 text-white section_font">Get in Touch</h3>
                                <form className="space-y-5 navfont">
                                    <div>
                                        <label className="block text-white font-medium">Name</label>
                                        <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Your Name" required />
                                    </div>
                                    <div>
                                        <label className="block text-white font-medium">Email</label>
                                        <input type="email" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Your Email" required />
                                    </div>
                                    <div>
                                        <label className="block text-white font-medium">Phone</label>
                                        <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Your Phone Number" required />
                                    </div>
                                    <div>
                                        <label className="block text-white font-medium">Message</label>
                                        <textarea className="w-full p-3 border border-gray-300 rounded-md" placeholder="Your Message" rows="4" required></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-black text-white p-3 rounded-md hover:bg-pink-500 transition duration-300">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Map Section */}
                        <div className="mt-10 section_font animate__animated animate__fadeInDown">
                            <h3 className="text-2xl font-semibold text-white text-center mb-4">Find Us Here</h3>
                            <div className="w-full h-64 md:h-96">
                                <iframe
                                    title="Nailhub Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.008727589517!2d77.5812325!3d12.9218271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159e25db38b5%3A0xdea76dd0df54630c!2s38th%20Cross%20Rd%20%26%206th%20Main%20Rd%2C%205th%20Block%2C%20Jayanagar%2C%20Bengaluru%2C%20Karnataka%20560041!5e0!3m2!1sen!2sin!4v1691759481872!5m2!1sen!2sin"
                                    style={{ border: 0 }}
                                    className="w-full h-full rounded-md"
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>


                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </div>
    );
}

export default ContactUs;

