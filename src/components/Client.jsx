import React from 'react';
import './Nailhub.css';

const Client = () => {
    return (
        <div>
            <section>
                <div className='nailclient pb-10'>
                    <div className="bg-black bg-opacity-10 pt-10">
                        <div className='flex flex-wrap md:flex-nowrap container mx-auto justify-center items-center gap-8 md:gap-16 lg:gap-32'>
                            <div className='text-center px-4 md:px-0'>
                                <div className="section_font text-white font-bold text-3xl md:text-4xl lg:text-5xl">It’s no accident</div>
                                <div className="section_font text-white font-bold text-3xl md:text-4xl lg:text-5xl mt-2 md:mt-5">Good & Excellent Service</div>
                                <div className='mt-5'>
                                    <div className="navfont text-white text-lg md:text-xl mt-4">
                                        <span className='text-5xl md:text-6xl lg:text-7xl font-bold animate-vibgyor'>3</span> <span>years of client service</span>
                                    </div>
                                    <div className="navfont text-white text-lg md:text-xl mt-5">
                                        <span className='text-5xl md:text-6xl lg:text-7xl font-bold animate-vibgyor'>3k</span> <span>Happy clients</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full md:w-auto'>
                                <div className='flex justify-center items-center text-center p-4 md:p-10'>
                                    <div className='bg-pink-500 w-full md:w-5/6 lg:w-4/6 text-center p-8 md:p-12 lg:p-16 rounded-2xl'>
                                        <div className='text-white navfont font-bold text-lg md:text-3xl lg:text-4xl'>Are you ready for the new feel?</div>
                                        <div className='text-white navfont mt-5 md:mt-10 text-sm md:text-lg'>Feel free to make an appointment for this week</div>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center text-center p-5'>
                                    <div className='bg-red-500 w-full md:w-64 p-3 md:p-5 rounded-2xl mt-5 md:mt-10 cursor-pointer'>
                                        <div className='text-white navfont text-sm md:text-lg'>Book an appointment</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Client;
