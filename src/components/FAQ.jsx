import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const FAQ = () => {
    const [open, setOpen] = useState(null);

    const toggle = (id) => {
        setOpen(open === id ? null : id);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <section className="flex-grow faq">
                <div className="bg-black bg-opacity-20">
                    <div className="container mx-auto px-4 py-8">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-rose-500 font-bold text-center mb-8 section_font">
                            Frequently Asked Questions
                        </h2>

                        <div className="mb-8 text-center">
                            <p className="text-xl sm:text-2xl font-bold text-rose-500 mb-4">
                                Do you have any questions? Ask us.
                            </p>
                            <p className="text-md sm:text-lg text-rose-500 leading-relaxed">
                                Please read the questions below, and if you cannot find your answer, please send us your question. We will answer you as soon as possible. We depend on volunteers from our local community, and by joining us, you can both gain experience and help others.
                            </p>
                        </div>

                        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10">
                            {[
                                {
                                    question: 'How long do nail extensions last?',
                                    answer: 'Nail extensions can last anywhere from 2 to 4 weeks, depending on the type of extension, your nail growth, and how well you take care of them.',
                                },
                                {
                                    question: 'Are stick-on nails reusable?',
                                    answer: 'Yes, our high-quality stick-on nails can be reused if removed carefully. Proper storage and gentle handling are key to maintaining their longevity.',
                                },
                                {
                                    question: 'How do I remove stick-on nails safely?',
                                    answer: 'Soak your nails in warm, soapy water for a few minutes to soften the adhesive. Gently peel off the nails starting from the edges. Avoid using excessive force to prevent damage to your natural nails.',
                                },
                                {
                                    question: 'Are nail extensions safe for natural nails?',
                                    answer: 'Yes, when applied and removed correctly, our nail extensions are safe for natural nails. Our technicians follow best practices to minimize any potential damage.',
                                },
                                {
                                    question: 'How can I maintain my nail extensions?',
                                    answer: 'To keep your nail extensions looking their best, avoid using your nails as tools, moisturize your hands regularly, and follow our care instructions. Schedule regular refills to maintain their appearance and integrity.',
                                },
                                {
                                    question: 'What types of nail art designs do you offer?',
                                    answer: 'We offer a wide range of nail art designs, including Cat Eye, Blooming Ink, 3D Designs, and Sand Art.',
                                },
                                {
                                    question: 'What is the process for ordering custom-fit stick-on nails?',
                                    answer: `Place your hands on an A4 sheet.
Place a 1 or 5 rupee coin between your fingers.
Snap a picture.
Upload the picture on our website.
Choose your favorite nail art.
Place your order. Your custom-fit stick-on nails will be delivered, perfectly matching your finger size.`,
                                },
                                {
                                    question: 'Can I book an appointment online?',
                                    answer: 'Yes, you can conveniently book an appointment online through our website. Visit our booking page to schedule your visit.',
                                },
                                {
                                    question: 'What hygiene measures do you follow?',
                                    answer: 'We adhere to the highest hygiene standards by sterilizing all tools, using disposable items where possible, and maintaining a clean and sanitized environment to ensure your safety.',
                                },
                            ].map((faq, index) => (
                                <div key={index} className="mb-4">
                                    <button
                                        onClick={() => toggle(index)}
                                        className="w-full text-left px-4 py-2 bg-rose-50 border rounded-lg shadow-sm focus:outline-none focus:ring hover:bg-rose-100 transition-colors"
                                    >
                                        Q: {faq.question}
                                    </button>
                                    {open === index && (
                                        <div className="px-4 py-2 text-gray-700">
                                            <p>A: {faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default FAQ;
