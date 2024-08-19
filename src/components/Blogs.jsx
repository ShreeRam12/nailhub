import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Best1 from '..//..//src/assets/Best_1.webp';
import Best2 from '..//..//src/assets/Best_2.webp';
import Best3 from '..//..//src/assets/Best_3.webp';
import Best4 from '..//..//src/assets/Best_4.webp';
import Best5 from '..//..//src/assets/Best_5.webp';
import Best6 from '..//..//src/assets/Best_6.webp';

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            title: 'Top 10 Nail Art Trends of 2024',
            image: Best1,
            excerpt: 'Discover the hottest nail art trends for 2024...',
            link: '/blog/nail-art-trends-2024',
        },
        {
            id: 2,
            title: 'How to Care for Your Nails at Home',
            image: Best2,
            excerpt: 'Simple tips and tricks to keep your nails healthy...',
            link: '/blog/nail-care-tips',
        },
        {
            id: 3,
            title: 'Choosing the Right Nail Shape for Your Hands',
            image: Best3,
            excerpt: 'Find out which nail shape suits your hand structure...',
            link: '/blog/nail-shape-guide',
        },
        {
            id: 4,
            title: 'Best Nail Care Products of 2024',
            image: Best4,
            excerpt: 'A roundup of the best nail care products you should try...',
            link: '/blog/best-nail-care-products-2024',
        },
        {
            id: 5,
            title: 'Seasonal Nail Colors You Must Try',
            image: Best5,
            excerpt: 'Explore the must-have nail colors for every season...',
            link: '/blog/seasonal-nail-colors',
        },
        {
            id: 6,
            title: 'Nail Art Designs for Special Occasions',
            image: Best6,
            excerpt: 'Elegant nail designs perfect for weddings and parties...',
            link: '/blog/nail-art-designs-special-occasions',
        },
    ];
    return (
        <div>
            <Navbar />
            <section className='blogs_bg'>
                <div className="max-w-6xl mx-auto p-6">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 section_font text-rose-500">Latest Blogs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 navfont">
                        {blogs.map((blog, index) => (
                            <div key={index} className="bg-white shadow-xl rounded-lg overflow-hidden">
                                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-lg" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                                    {/* <a href={blog.link} className="text-blue-500 hover:underline">Read More</a> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Blogs
