import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const FAQ = () => {
    const faqs = [
        {
            question: 'How do I book a nail appointment?',
            answer: 'You can book an appointment by visiting our booking page and selecting your preferred time and service.',
        },
        {
            question: 'What services do you offer?',
            answer: 'We offer a variety of services including manicures, pedicures, nail art, and more. Check our services page for details.',
        },
        {
            question: 'What is your cancellation policy?',
            answer: 'You can cancel your appointment up to 24 hours in advance. A cancellation fee may apply for late cancellations.',
        },
        // Add more FAQ entries as needed...
    ];

    return (
        <div>
            <Navbar />
            <section>
                <div className="max-w-6xl mx-auto p-6 mt-12">
                    <h2 className="text-3xl font-bold text-center mb-8 section_font">Frequently Asked Questions</h2>
                    <div className="space-y-6 navfont">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default FAQ
