import React, { useState } from 'react';

// Import images
import step1Image from '..//..//src/assets/Nail_Step-1.webp';
import step2Image from '..//..//src/assets/Nail_Step-2.webp';
import step3Image from '..//..//src/assets/Nail_Step-3.webp';
import step4Image from '..//..//src/assets/Nail_Step-4.webp';

const OrderSteps = () => {
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleImageUpload = (event) => {
        setUploadedImage(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <section className="order-steps">
            <div className="bg-white rounded-lg container mx-auto px-4 p-5 ">
                <h1 className="text-3xl font-bold mb-8 text-center text-rose-500">Order Your Stick-On Nails</h1>
                <div className='flex justify-around section_font text-rose-500  p-10 sm:p-10'>
                    {/* Step 1 */}
                    <div className="step mb-8">
                        <h2 className="lg:text-2xl font-semibold mb-4">Step 1: Place your hands on an A4 sheet</h2>
                        <div className=' flex justify-center items-center '>
                            <div className='shadow-lg w-52'>
                                <img src={step1Image} alt="Step 1" className="w-full lg:w-52 h-auto mb-4 rounded shadow-sm" />
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="step mb-8">
                        <h2 className="lg:text-2xl font-semibold mb-4">Step 2: Place 1 or 5 rupee coin between fingers</h2>
                        <div className='flex justify-center items-center'>
                            <div className='shadow-lg w-52'>
                                <img src={step2Image} alt="Step 2" className="w-full lg:w-52  h-auto mb-4 rounded shadow-sm" />
                            </div>
                        </div>
                    </div>
                    <div className="step mb-8">
                        <h2 className="lg:text-2xl font-semibold mb-4">Step 3: Snap & Upload</h2>
                        <div className='flex justify-center items-center'>
                            <div className='shadow-lg w-52'>
                                <img src={step3Image} alt="Step 3" className="w-full lg:w-52  h-auto mb-4 rounded shadow-sm" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Step 3 */}
                <div className='flex justify-center items-center'>
                    {/* Image Upload Button */}
                    <div className="step mb-8">
                        <h2 className="lg:text-2xl font-bold section_font text-rose-500 mb-4">Step 3: Snap & Upload</h2>
                        <div className='flex justify-center items-center'>
                            <div className='shadow-lg w-52'>
                                <img src={step4Image} alt="Step 3" className="w-full lg:w-52  h-auto mb-4 rounded shadow-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderSteps;
