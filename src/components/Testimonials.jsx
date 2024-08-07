import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Nailhub.css';
const testimonials = [
    {
        image: 'https://via.placeholder.com/80',
        name: 'Jane Doe',
        review: 'Amazing service! My nails have never looked better.'
    },
    {
        image: 'https://via.placeholder.com/80',
        name: 'John Smith',
        review: 'Very professional and friendly staff. Highly recommend!'
    },
    {
        image: 'https://via.placeholder.com/80',
        name: 'Emily Johnson',
        review: 'The ambiance is so relaxing and the service is top-notch.'
    },
    {
        image: 'https://via.placeholder.com/80',
        name: 'Michael Brown',
        review: 'Great experience every time I visit. Love this place!'
    },
    {
        image: 'https://via.placeholder.com/80',
        name: 'Sarah Davis',
        review: 'Best nail salon in town. Excellent quality and service.'
    }
];

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
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                                <p className="text-gray-700 max-w-md mx-auto text-center">{testimonial.review}</p>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>
        </div>
    )
}

export default Testimonials
