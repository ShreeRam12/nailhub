import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Nailhub.css';

const Testimonials = () => {
    return (
        <div>
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
                    <Carousel
                        showArrows={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        interval={3000}
                    >
                        {/* Testimonial 1 */}
                        <div className="flex flex-col items-center section_font bg-rose-500 rounded-xl w-5/6 mx-auto p-4">
                            <div className='w-10 h-20 rounded-full mb-4'>
                                <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Jane Doe" className="w-10 h-20 rounded-full mb-4" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">Jane Doe</h3>
                            <p className="text-gray-200 max-w-md mx-auto text-center">
                                Amazing service! My nails have never looked better.
                            </p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="flex flex-col items-center section_font bg-rose-500 rounded-xl w-5/6 mx-auto p-4">
                            <div className='w-10 h-20 rounded-full mb-4'>
                                <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Jane Doe" className="w-10 h-20 rounded-full mb-4" />
                            </div>                            <h3 className="text-xl font-semibold mb-2 text-white">John Smith</h3>
                            <p className="text-gray-200 max-w-md mx-auto text-center">
                                Very professional and friendly staff. Highly recommend!
                            </p>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="flex flex-col items-center section_font bg-rose-500 rounded-xl w-5/6 mx-auto p-4">
                            <div className='w-10 h-20 rounded-full mb-4'>
                                <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Jane Doe" className="w-10 h-20 rounded-full mb-4" />
                            </div>                            <h3 className="text-xl font-semibold mb-2 text-white">Emily Johnson</h3>
                            <p className="text-gray-200 max-w-md mx-auto text-center">
                                The ambiance is so relaxing and the service is top-notch.
                            </p>
                        </div>

                        {/* Testimonial 4 */}
                        <div className="flex flex-col items-center section_font bg-rose-500 rounded-xl w-5/6 mx-auto p-4">
                            <div className='w-10 h-20 rounded-full mb-4'>
                                <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Jane Doe" className="w-10 h-20 rounded-full mb-4" />
                            </div>                            <h3 className="text-xl font-semibold mb-2 text-white">Michael Brown</h3>
                            <p className="text-gray-200 max-w-md mx-auto text-center">
                                Great experience every time I visit. Love this place!
                            </p>
                        </div>

                        {/* Testimonial 5 */}
                        <div className="flex flex-col items-center section_font bg-rose-500 rounded-xl w-5/6 mx-auto p-4">
                            <div className='w-10 h-20 rounded-full mb-4'>
                                <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Jane Doe" className="w-10 h-20 rounded-full mb-4" />
                            </div>                            <h3 className="text-xl font-semibold mb-2 text-white">Sarah Davis</h3>
                            <p className="text-gray-200 max-w-md mx-auto text-center">
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
