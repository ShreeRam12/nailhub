import React from 'react';
import './Nailhub.css';
import NailArt1 from '../../src/assets/Nail_Art_1.webp';
import NailArt2 from '../../src/assets/Nail_Art_2.webp';
import NailArt3 from '../../src/assets/Nailcare.webp';
import NailArt4 from '../../src/assets/Nailcare2.webp';

const Card = () => {
    return (
        <div className='client'>
            <div className='bg-black bg-opacity-50 pb-10 md:pb-20'>
                <div className='pt-10 md:pt-20'>
                    <div className="section_font text-center text-white font-bold text-3xl md:text-4xl lg:text-5xl">NailHub Info</div>
                </div>
                <section className='container mx-auto navfont pt-10 md:pt-14'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate__animated animate__fadeInUp p-5 sm:p-0">
                        <div className="bg-white p-4 md:p-6 rounded shadow-2xl group hover:bg-rose-500 transition duration-700">
                            <div>
                                <img src={NailArt1} alt="Nail_Art 1" className="w-full h-40 md:h-52 rounded mb-4 object-cover" />
                            </div>
                            <div className="pt-5">
                                <h2 className="text-lg md:text-xl font-bold mb-2 group-hover:text-white">Nail Art Cat Eye</h2>
                                <p className="text-gray-700 mb-4 group-hover:text-white text-sm md:text-base">Long lasting manicure that doesn't use UV light to harden, The color comes from dipping your nails into a pigment</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded shadow-2xl group hover:bg-rose-500 transition duration-700">
                            <div>
                                <img src={NailArt2} alt="Nail_Hub2" className="w-full h-40 md:h-52 rounded mb-4 object-cover" />
                            </div>
                            <div className="pt-5">
                                <h2 className="text-lg md:text-xl font-bold mb-2 group-hover:text-white">Nail Art Blooming Ink</h2>
                                <p className="text-gray-700 mb-4 group-hover:text-white text-sm md:text-base">Relax while your polish is removed, your nails are trimmed and shaped and your cut.</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded shadow-2xl group hover:bg-rose-500 transition duration-700">
                            <div>
                                <img src={NailArt3} alt="NailArt3" className="w-full h-40 md:h-52 rounded mb-4 object-cover" />
                            </div>
                            <div className="pt-5">
                                <h2 className="text-lg md:text-xl font-bold mb-2 group-hover:text-white">Nail Art 3D</h2>
                                <p className="text-gray-700 mb-4 group-hover:text-white text-sm md:text-base">Our Spa manicure includes all the luxuries of our Classic Spa Manicure, exfoliating scrub applied to your hands.</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded shadow-2xl group hover:bg-rose-500 transition duration-700">
                            <div>
                                <img src={NailArt4} alt="NailArt4" className="w-full h-40 md:h-52 rounded mb-4 object-cover" />
                            </div>
                            <div className="pt-5">
                                <h2 className="text-lg md:text-xl font-bold mb-2 group-hover:text-white">Nail Art Sand Sand Art</h2>
                                <p className="text-gray-700 mb-4 group-hover:text-white text-sm md:text-base">The pedicure began as most do, removing the old polish, cleaning, shaping the nails, and exfoliating the heels.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Card;
