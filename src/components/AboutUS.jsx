import React from 'react';
import About_US from '../../src/assets/Nailhub_indian.webp';

const AboutUS = () => {
    return (
        <div className='bg-pink-500 lg:p-10 '>
            <section className="bg-contain container mx-auto flex flex-col lg:flex-row items-center lg:items-start p-6 pt-10">
                <div className="mb-6 text-center lg:w-1/2">
                    <img src={About_US} alt="About Us" className="mx-auto w-full lg:w-auto h-4/5 rounded" />
                </div>
                <div className='text-white w-full lg:w-1/2 lg:pl-10'>
                    <div className="">
                        <h1 className="text-4xl  lg:text-7xl font-bold text-center lg:text-left section_font">About Us</h1>
                        <h2 className="text-lg  lg:text-xl font-bold text-center lg:text-left mt-2 navfont">Nail Hub Nail Salon</h2>
                    </div>
                    <div className="mt-6 lg:mt-10 navfont">
                        <p className="text-base lg:text-lg text-center lg:text-left">
                            Massage therapy has a long history in cultures around the world. Today, people use many different types of massage therapy for a variety of health-related purposes.
                        </p>
                    </div>
                    <ul className="list-disc list-inside space-y-2 navfont mt-6 lg:mt-10 text-center lg:text-left">
                        <li className="text-base lg:text-lg">High Quality Services</li>
                        <li className="text-base lg:text-lg">Tranquil Ambience</li>
                        <li className="text-base lg:text-lg">Proper Ventilation</li>
                        <li className="text-base lg:text-lg">Disposable Tools</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default AboutUS;
