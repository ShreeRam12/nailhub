import React, { useState } from 'react';

// Import images
import step1Image from '..//..//src/assets/Nail_Step-1.webp';
import step2Image from '..//..//src/assets/Nail_Step-1.webp';
import step3Image from '..//..//src/assets/Nail_Step-1.webp';

const OrderSteps = () => {
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleImageUpload = (event) => {
        setUploadedImage(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <section className="order-steps">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8 text-center text-rose-500">Order Your Stick-On Nails</h1>
                <div className='flex justify-around section_font text-rose-500 bg-white rounded-lg p-10 sm:p-10'>
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
                    <div className="mt-10">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="w-full text-center bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
                        />
                    </div>

                    {/* Display Uploaded Image */}
                    {uploadedImage && (
                        <div className="uploaded-image mt-4">
                            <h3 className="text-xl font-semibold mb-2">Uploaded Image:</h3>
                            <img src={uploadedImage} alt="Uploaded" className="w-full lg:w-52 h-auto rounded shadow-sm" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default OrderSteps;
