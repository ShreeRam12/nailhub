import React, { useState } from 'react';
import './Nailhub.css';
import { FaHeart } from 'react-icons/fa';
const Tabs = () => {
    const [activeTab, setActiveTab] = useState('Nail Extension: Acrylic');
    const items = [
        {
            text: 'Look attractive and bold',
            subtext: "Small part of Body which makes a adorn beauty",
        },
        {
            text: "It's a trend, walk and stand",
            subtext: "Choose the form of nail, we gives the shape",
        },
        {
            text: "Don't ban the nail trend",
            subtext: "It's a symbol of what kind of health you have",
        },
    ];
    return (
        <div className='testimonials'>
            <div className=" bg-black bg-opacity-50">
                <div className="container mx-auto p-4 ">
                    <div className='text-5xl font-bold section_font text-white text-center pt-10'>Nail Extension</div>
                    {/* Tab navigation */}
                    <div className="flex flex-wrap justify-center mb-8 navfont pt-10">
                        <button
                            onClick={() => setActiveTab('Nail Extension: Acrylic')}
                            className={`px-4 py-2 mx-2 my-2 text-lg font-medium rounded-md transition-all ${activeTab === 'Nail Extension: Acrylic' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Acrylic
                        </button>
                        <button
                            onClick={() => setActiveTab('Nail Extension – Poly Gel')}
                            className={`px-4 py-2 mx-2 my-2 text-lg font-medium rounded-md transition-all ${activeTab === 'Nail Extension – Poly Gel' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Poly Gel
                        </button>
                        <button
                            onClick={() => setActiveTab('Nail Manicure 1')}
                            className={`px-4 py-2 mx-2 my-2 text-lg font-medium rounded-md transition-all ${activeTab === 'Nail Manicure 1' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Stick on Nails
                        </button>
                        <button
                            onClick={() => setActiveTab('Nail Manicure 2')}
                            className={`px-4 py-2 mx-2 my-2 text-lg font-medium rounded-md transition-all ${activeTab === 'Nail Manicure 2' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Temporary Extension
                        </button>
                        <button
                            onClick={() => setActiveTab('French Manicure')}
                            className={`px-4 py-2 mx-2 my-2 text-lg font-medium rounded-md transition-all ${activeTab === 'French Manicure' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Toe Extension
                        </button>
                    </div>

                    {/* Tab content */}
                    <div className="p-4 bg-gray-100 rounded-md text-center navfont">
                        {activeTab === 'Nail Extension: Acrylic' && (
                            <>
                                <h2 className="text-3xl font-bold mb-4 pt-5 text-rose-500 section_font">Nail Extension: Acrylic</h2>
                                <div className='pt-10'>
                                    <img src="https://th.bing.com/th?id=OIP.6vpFSDhRMasgiFUK_BJDcQHaEK&w=474&h=266&c=7&qlt=80&bgcl=fffffe&r=0&o=6&pid=MultiSMRSV2Source" alt="Nail Extension: Acrylic" className="mx-auto mb-4 max-w-xs md:max-w-md" />
                                </div>
                                <div className='mt-20'>
                                    <p className=''>Acrylic nail extensions are a popular choice for those looking to enhance the length and appearance of their natural nails. Here’s a detailed overview of what acrylic nail extensions entail:</p>
                                </div>
                                <div className='mt-10'>
                                    {items.map((item, index) => (
                                        <div key={index} className='flex gap-5 justify-center items-center mt-5'>
                                            <div className='bg-rose-500 p-3 rounded-full shadow-xl'>
                                                <FaHeart style={{ color: 'white' }} />
                                            </div>
                                            <div className='space-y-5 text-justify'>
                                                <div className='text-2xl navfont'>{item.text}</div>
                                                <div className='text-right text-sm'>{item.subtext}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                        {activeTab === 'Nail Extension – Poly Gel' && (
                            <>
                                <h2 className="text-3xl font-bold mb-4 text-rose-500 section_font pt-5">Nail Extension – Poly Gel</h2>
                                <div className='pt-10'>
                                    <img src="https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Nail Extension – Poly Gel" className="mx-auto mb-4 max-w-xs md:max-w-md" />
                                </div>
                                <div>
                                    <p className='mt-10'>Poly gel nail extensions combine the best qualities of both acrylics and gels, offering a flexible, lightweight, and strong option for nail enhancements. Here’s a comprehensive look at poly gel nail extensions:</p>
                                    <div className='mt-10 '>
                                        <div className='text-pink-500 text-3xl font-bold '>Benefits of Poly Gel Nail Extensions</div>
                                        <ul className='mt-10 text-left list-disc list-inside space-y-5 '>
                                            <li><strong>Strength and Flexibility:</strong> Poly gel nails are both strong and flexible, reducing the likelihood of breaking or chipping.</li>
                                            <li><strong>Lightweight:</strong> They feel lighter on the nails compared to acrylics, providing more comfort.</li>
                                            <li><strong>Odorless:</strong> Unlike acrylics, poly gel has no strong odor during application, making it more pleasant to work with.</li>
                                            <li><strong>Minimal Filing:</strong> Poly gel requires less filing than acrylics, which can be less damaging to the natural nails.</li>
                                            <li><strong>Customizable:</strong> They can be molded and shaped easily, allowing for a wide range of nail designs and styles.</li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )}
                        {activeTab === 'Nail Manicure 1' && (
                            <>
                                <h2 className="text-3xl font-bold mb-4 text-rose-500 section_font pt-5">Nail Manicure</h2>
                                <div className='pt-10'>
                                    <img src="https://th.bing.com/th/id/OIP.4nLiigBj3UaCFkLicfJPfwHaHa?rs=1&pid=ImgDetMain" alt="Nail Manicure" className="mx-auto mb-4 max-w-xs md:max-w-md" />
                                </div>
                                <div className='mt-10'>
                                    <p className=''>Nail Art is a lacquer that can be applied to the human fingernail or toenails to
                                        decorate and protect the nail plates. The formula has been revised repeatedly to enhance its decorative effects
                                        and to suppress cracking or peeling. Nail polish consists of a mix of an organic polymer and several other components
                                        that give it its unique color and texture.</p>
                                </div>

                            </>
                        )}
                        {activeTab === 'Nail Manicure 2' && (
                            <>
                                <h2 className="text-3xl font-bold mb-4 text-rose-500 section_font pt-5">Nail Manicure</h2>
                                <div className='pt-10'>
                                    <img src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Nail Manicure" className="mx-auto mb-4 max-w-xs md:max-w-md" />
                                </div>
                                <div className='mt-10'>
                                    <p className=''>Nail polish is a lacquer that can be applied to the human fingernail or toenails
                                        to decorate and protect the nail plates. The formula has been revised repeatedly to enhance its decorative
                                        effects and to suppress cracking or peeling. Nail polish consists of a mix of an organic polymer and several
                                        other components that give it its unique color and texture.</p>
                                </div>
                            </>
                        )}
                        {activeTab === 'French Manicure' && (
                            <>
                                <h2 className="text-2xl font-bold mb-4 pt-5 section_font text-rose-500">French Manicure</h2>
                                <div>
                                    <img src="https://images.pexels.com/photos/7244222/pexels-photo-7244222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="French Manicure" className="mx-auto mb-4 max-w-xs md:max-w-md" />
                                </div>
                                <div className='mt-10'>
                                    <p className=''>A manicure is a cosmetic beauty treatment for the fingernails
                                        and hands performed at home or in a nail salon. A manicure consists of filing
                                        and shaping the free edge of nails, pushing and clipping any nonliving tissue,
                                        treatments with various liquids, massage of the hand, and the application of fingernail polish.
                                        When the same is applied to the toenails and feet, the treatment is referred to as a pedicure.</p>
                                </div>

                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
