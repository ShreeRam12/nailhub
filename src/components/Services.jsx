import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import 'animate.css';
import './Nailhub.css';
import NailArt1 from '..//..//src/assets/Nail_Art_1.webp';
import NailArt2 from '..//..//src/assets/Nail_Art_2.webp';
import NailArt3 from '..//..//src/assets/Nailcare.webp';
import NailArt4 from '..//..//src/assets/Nailcare2.webp';
import Working from '..//..//src/assets/Working_hours.webp';
import Best1 from '..//..//src/assets/Best_1.webp';
import Best2 from '..//..//src/assets/Best_2.webp';
import Best3 from '..//..//src/assets/Best_3.webp';
import Best4 from '..//..//src/assets/Best_4.webp';
import Best5 from '..//..//src/assets/Best_5.webp';
import Best6 from '..//..//src/assets/Best_6.webp';

const Services = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        service: '',
        date: '',
        time: '',
        name: '',
        email: '',
        phone: ''
    });
    const [errors, setErrors] = useState({});
    const services = [
        { image: NailArt1, title: 'Nail Art Cat Eye', description: 'Long lasting manicure that doesnt use UV light to harden, The color comes from dipping your nails into a pigment' },
        { image: NailArt2, title: 'Nail Art Blooming Ink', description: 'Relax while your polish is removed , your nails are trimmed and shaped and yourcut .' },
        { image: NailArt3, title: 'Nail Art 3D', description: 'Our Spa manicure includes all the luxuries of our Classic Spa Manicure, exfoliating scrub applied to your hands good as possible .' },
        { image: NailArt4, title: 'Nail Art Sand Sand Art', description: 'The pedicure began as most do removing the old polish cleaning and shaping the nails and exfoliating the heels and other rough spots .' }
    ];
    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Form validation
    const validate = () => {
        let tempErrors = {};
        if (step === 1 && !formData.service) tempErrors.service = "Service is required";
        if (step === 2) {
            if (!formData.date) tempErrors.date = "Date is required";
            if (!formData.time) tempErrors.time = "Time is required";
        }
        if (step === 3) {
            if (!formData.name) tempErrors.name = "Name is required";
            if (!formData.email) tempErrors.email = "Email is required";
            if (!formData.phone) tempErrors.phone = "Phone number is required";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleNext = () => {
        if (validate()) {
            setStep(step + 1);
        }
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleSubmit = () => {
        if (validate()) {
            // Save the data to local storage
            localStorage.setItem('appointmentData', JSON.stringify(formData));

            // Send the data via WhatsApp
            const whatsappMessage = `Service: ${formData.service}\nDate: ${formData.date}\nTime: ${formData.time}\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`;
            const whatsappURL = `https://wa.me/9886662344?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappURL, '_blank');

            // Close the form
            setIsFormOpen(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='services'>
                <section className=' text-center pt-10 animate__animated animate__fadeIn animate__delay-1s'>
                    <div className="text-3xl text-rose-400 font-bold navfont">Nail Saloon</div>
                    <div className="text-3xl mt-10 font-bold section_font text-rose-500">Services</div>
                </section>
                <section className='container mx-auto navfont pt-14 animate__animated animate__fadeIn animate__delay-1s'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate__animated animate__fadeInUp p-5 sm:p-0">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-6 rounded shadow-2xl group hover:bg-rose-500 transition duration-700">
                                <div>
                                    <img src={service.image} alt={`Nail_Art ${index + 1}`} className="w-full h-52 rounded mb-4 object-cover" />
                                </div>
                                <div className="pt-5">
                                    <h2 className="text-xl font-bold mb-2 group-hover:text-white">{service.title}</h2>
                                    <p className="text-gray-700 mb-4 group-hover:text-white">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Working Hours */}
                <section className="py-10 px-4 sm:px-6 lg:px-8">
                    <div className="text-center mt-10 animate__animated animate__fadeInDown animate__delay-1s">
                        <div className="text-3xl text-rose-300 font-bold navfont">
                            Nail Saloon
                        </div>
                        <div className="text-3xl mt-5 font-bold section_font text-rose-500">
                            Working Hours
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 container mx-auto mt-10 flex flex-col md:flex-row justify-around items-center animate__animated animate__bounceInUp animate__delay-1s">
                        {/* Working Hours List */}
                        <div className="md:w-1/2 text-center md:text-left">
                            <ul className="section_font text-pink-500 font-bold text-xl md:text-2xl space-y-2">
                                <li>Monday - 9:00am to 5:00pm</li>
                                <li>Tuesday - Holiday</li>
                                <li>Wednesday - 9:00am to 5:00pm</li>
                                <li>Thursday - 9:00am to 5:00pm</li>
                                <li>Friday - 9:00am to 5:00pm</li>
                                <li>Saturday - 9:00am to 10:00pm</li>
                                <li>Sunday - 9:00am to 10:00pm</li>
                            </ul>
                        </div>

                        {/* Working Image */}
                        <div className="w-full md:w-1/2 mt-6 md:mt-0">
                            <img
                                src={Working}
                                alt="Working"
                                className="w-full h-auto rounded-md shadow-2xl"
                            />
                        </div>
                    </div>
                </section>
                {/* Book Appointment Button */}
                <div className='flex justify-center mt-16 animate__animated animate__fadeIn animate__delay-1s'>
                    <div
                        className='bg-red-500 p-5 flex justify-center items-center w-66 rounded-2xl cursor-pointer'
                        onClick={() => setIsFormOpen(true)}
                    >
                        <div className='text-white navfont'>Book an appointment</div>
                    </div>
                </div>

                {/* Popup Form */}
                {isFormOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 navfont">
                        <div className="bg-white rounded-lg w-11/12 md:w-1/2 lg:w-1/3 p-6 relative">
                            <button onClick={() => setIsFormOpen(false)} className="absolute top-4 right-4 text-gray-600">
                                &times;
                            </button>
                            <h2 className="text-xl font-bold mb-4">Book an Appointment</h2>

                            {step === 1 && (
                                <div>
                                    <label className="block mb-2">Select Service</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="border p-2 w-full rounded-lg"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="Manicure">Manicure</option>
                                        <option value="Pedicure">Pedicure</option>
                                        <option value="Nail Art">Nail Art</option>
                                    </select>
                                    {errors.service && <p className="text-red-500">{errors.service}</p>}
                                    <button onClick={handleNext} className="bg-blue-500 text-white mt-4 p-2 rounded-lg">Next</button>
                                </div>
                            )}

                            {step === 2 && (
                                <div>
                                    <label className="block mb-2">Select Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="border p-2 w-full rounded-lg"
                                    />
                                    {errors.date && <p className="text-red-500">{errors.date}</p>}

                                    <label className="block mt-4 mb-2">Select Time</label>
                                    <input
                                        type="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        className="border p-2 w-full rounded-lg"
                                    />
                                    {errors.time && <p className="text-red-500">{errors.time}</p>}

                                    <div className="flex justify-between mt-4">
                                        <button onClick={handleBack} className="bg-gray-500 text-white p-2 rounded-lg">Back</button>
                                        <button onClick={handleNext} className="bg-blue-500 text-white p-2 rounded-lg">Next</button>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div>
                                    <label className="block mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="border p-2 w-full rounded-lg"
                                    />
                                    {errors.name && <p className="text-red-500">{errors.name}</p>}

                                    <label className="block mt-4 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="border p-2 w-full rounded-lg"
                                    />
                                    {errors.email && <p className="text-red-500">{errors.email}</p>}

                                    <label className="block mt-4 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="border p-2 w-full rounded-lg"
                                    />
                                    {errors.phone && <p className="text-red-500">{errors.phone}</p>}

                                    <div className="flex justify-between mt-4">
                                        <button onClick={handleBack} className="bg-gray-500 text-white p-2 rounded-lg">Back</button>
                                        <button onClick={handleSubmit} className="bg-green-500 text-white p-2 rounded-lg">Submit</button>
                                    </div>
                                </div>
                            )}

                            {step === 4 && (
                                <div className="text-center">
                                    <h2 className="text-xl font-bold">Appointment Booked Successfully!</h2>
                                    <p className="mt-4">You will receive a confirmation message shortly.</p>
                                    <button onClick={() => setIsFormOpen(false)} className="bg-blue-500 text-white mt-4 p-2 rounded-lg">Close</button>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Our Best Works */}
                <section className='pb-20 animate__animated animate__fadeIn animate__delay-1s '>
                    <div className='text-center mt-10 lg:mt-20 p-10'>
                        <div className='text-3xl text-rose-300 font-bold navfont'>We did it </div>
                        <div className='text-3xl mt-10 font-bold section_font text-rose-500'>Our Best Works</div>
                    </div>
                    <div className="container mx-auto lg:mt-10 p-5 sm:p-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate__animated animate__flipInX animate__delay-2s">
                            {[Best1, Best2, Best3, Best4, Best5, Best6].map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={`Best${index + 1}`} className="w-full rounded-lg shadow-xl" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default Services;
