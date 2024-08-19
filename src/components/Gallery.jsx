import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Nailhub.css';
import Best1 from '../../src/assets/Best_1.webp';
import Best2 from '../../src/assets/Best_2.webp';
import Best3 from '../../src/assets/Best_3.webp';
import Best4 from '../../src/assets/Best_4.webp';
import Best5 from '../../src/assets/Best_5.webp';
import Best6 from '../../src/assets/Best_6.webp';
import Best7 from '../../src/assets/Best7.webp';
import Best8 from '../../src/assets/Best8.webp';
import Best9 from '../../src/assets/Best9.webp';
import Best10 from '../../src/assets/Best10.webp';
import Best11 from '../../src/assets/Best11.webp';
import Best12 from '../../src/assets/Best12.webp';

const Gallery = () => {
    const images = [
        Best1,  // Use the imported image variables directly
        Best2,
        Best3,
        Best4,
        Best5,
        Best6,
        Best7,
        Best8,
        Best9,
        Best10,
        Best11,
        Best12,
    ];

    return (
        <div>
            <Navbar />
            <div className='gallery'>
                <div className="container mx-auto px-4 py-8 pb-10">
                    <h1 className="text-3xl font-bold text-center mb-8 navfont text-rose-500 animate__animated animate__fadeInDown ">Nail Saloon</h1>

                    <h2 className="text-3xl font-bold text-center mb-8 section_font text-rose-500 animate__animated animate__fadeIn ">Our Photo Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((src, index) => (
                            <div key={index} className="bg-white p-6 rounded shadow-2xl group">
                                <div>
                                    <img
                                        src={src}  // Use the correct image source here
                                        alt={`Gallery Image ${index + 1}`}
                                        className="w-full h-52 rounded mb-4 object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Gallery;
