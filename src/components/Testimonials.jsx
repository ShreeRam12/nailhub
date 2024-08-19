import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Nailhub.css';

const Testimonials = () => {
    return (
        <div className=''>
            <section className="py-12 bg-gray-100 section_font">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">Testimonials</h2>
                    <Carousel
                        showArrows={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        interval={3000}
                    >
                        {/* Testimonial 1 */}
                        <div className="flex flex-col items-center section_font bg-rose-500 rounded-xl w-11/12 sm:w-5/6 lg:w-2/3 xl:w-1/2 mx-auto p-4 md:p-6 lg:p-8">
                            <div className='w-24 h-24 md:w-32 md:h-32 rounded-full mb-4'>
                                <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Jane Doe" className="w-full h-full rounded-full object-cover" />
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Jane Doe</h3>
                            <p className="text-gray-200 text-center text-sm md:text-base max-w-xs md:max-w-md lg:max-w-lg mx-auto">
                                Amazing service! My nails have never looked better.
                            </p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="flex flex-col items-center section_font bg-rose-500 rounded-xl w-11/12 sm:w-5/6 lg:w-2/3 xl:w-1/2 mx-auto p-4 md:p-6 lg:p-8">
                            <div className='w-24 h-24 md:w-32 md:h-32 rounded-full mb-4'>
                                <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600" alt="John Smith" className="w-full h-full rounded-full object-cover" />
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">John Smith</h3>
                            <p className="text-gray-200 text-center text-sm md:text-base max-w-xs md:max-w-md lg:max-w-lg mx-auto">
                                Very professional and friendly staff. Highly recommend!
                            </p>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="flex flex-col items-center section_font bg-rose-500 rounded-xl w-11/12 sm:w-5/6 lg:w-2/3 xl:w-1/2 mx-auto p-4 md:p-6 lg:p-8">
                            <div className='w-24 h-24 md:w-32 md:h-32 rounded-full mb-4'>
                                <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Emily Johnson" className="w-full h-full rounded-full object-cover" />
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Emily Johnson</h3>
                            <p className="text-gray-200 text-center text-sm md:text-base max-w-xs md:max-w-md lg:max-w-lg mx-auto">
                                The ambiance is so relaxing and the service is top-notch.
                            </p>
                        </div>

                        {/* Testimonial 4 */}
                        <div className="flex flex-col items-center section_font bg-rose-500 rounded-xl w-11/12 sm:w-5/6 lg:w-2/3 xl:w-1/2 mx-auto p-4 md:p-6 lg:p-8">
                            <div className='w-24 h-24 md:w-32 md:h-32 rounded-full mb-4'>
                                <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Michael Brown" className="w-full h-full rounded-full object-cover" />
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Michael Brown</h3>
                            <p className="text-gray-200 text-center text-sm md:text-base max-w-xs md:max-w-md lg:max-w-lg mx-auto">
                                Great experience every time I visit. Love this place!
                            </p>
                        </div>

                        {/* Testimonial 5 */}
                        <div className="flex flex-col items-center section_font bg-rose-500 rounded-xl w-11/12 sm:w-5/6 lg:w-2/3 xl:w-1/2 mx-auto p-4 md:p-6 lg:p-8">
                            <div className='w-24 h-24 md:w-32 md:h-32 rounded-full mb-4'>
                                <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sarah Davis" className="w-full h-full rounded-full object-cover" />
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Sarah Davis</h3>
                            <p className="text-gray-200 text-center text-sm md:text-base max-w-xs md:max-w-md lg:max-w-lg mx-auto">
                                Best nail salon in town. Excellent quality and service.
                            </p>
                        </div>
                    </Carousel>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
