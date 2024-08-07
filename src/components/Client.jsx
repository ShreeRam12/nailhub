import React from 'react'
import './Nailhub.css'
import Nail_Client from '..//..//src/assets/Background_Image_Nailhub.webp'
const Client = () => {
    return (
        <div>
            <section>
                <div className='relative'>
                    <img src={Nail_Client} alt="NailClient" className="w-full h-auto" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 pt-10">
                        <div className="section_font text-white font-bold text-5xl">It’s no accident</div>
                        <div className="section_font text-white font-bold text-5xl mt-20">Good & Excellent Service</div>
                        <div className='mt-5'>
                            <div className="navfont text-white text-xl mt-4">
                                <span className='text-7xl font-bold animate-vibgyor'>3</span> <span>years of client service</span></div>
                            <div className="navfont text-white text-xl mt-5">
                                <span className='text-7xl font-bold animate-vibgyor'>3k</span> <span>Happy clients</span>
                            </div>
                        </div>
                        <div className='bg-pink-500 w-full lg:w-5/6 text-center p-32 rounded-2xl mt-10'>
                            <div className='text-white navfont font-bold text-6xl'>Are you ready for the new feel? </div>
                            <div className='text-white navfont mt-10'>Feel free to make an appointment for this week</div>
                        </div>
                        <div className='bg-red-500 p-5 rounded-2xl mt-10 cursor-pointer'>
                            <div className='text-white navfont'>Book an appointment</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Client
