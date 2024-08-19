import React, { useState } from 'react';
import './Nailhub.css';
import { FaHeart } from 'react-icons/fa';

const TabContent = ({ title, imgSrc, description, items }) => (
    <>
        {/* Title Section */}
        <h2 className="text-3xl font-bold mb-4 pt-5 text-rose-500 section_font">
            {title}
        </h2>

        {/* Image Section */}
        <div className="pt-10">
            <img
                src={imgSrc}
                alt={title}
                className="mx-auto mb-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
        </div>

        {/* Description Section */}
        <div className="mt-20">
            <p className="text-lg text-gray-700">
                {description}
            </p>
        </div>

        {/* Items Section */}
        {items && (
            <div className="mt-10 flex flex-col items-center space-y-5">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-5"
                    >
                        {/* Heart Icon */}
                        <div className="bg-rose-500 p-3 rounded-full shadow-xl flex-shrink-0">
                            <FaHeart style={{ color: 'white' }} />
                        </div>

                        {/* Text Section */}
                        <div className="space-y-1 text-center sm:text-left">
                            <div className="text-xl sm:text-2xl navfont">
                                {item.text}
                            </div>
                            <div className="text-sm text-gray-500">
                                {item.subtext}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </>
);

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('Nail Extension: Acrylic');

    const tabs = [
        {
            label: 'Nail Extension: Acrylic',
            title: 'Nail Extension: Acrylic',
            imgSrc: 'https://th.bing.com/th?id=OIP.6vpFSDhRMasgiFUK_BJDcQHaEK&w=474&h=266&c=7&qlt=80&bgcl=fffffe&r=0&o=6&pid=MultiSMRSV2Source',
            description: 'Acrylic nail extensions are a popular choice for those looking to enhance the length and appearance of their natural nails.',
            items: [
                { text: 'Look attractive and bold', subtext: "Small part of Body which makes a adorn beauty" },
                { text: "It's a trend, walk and stand", subtext: "Choose the form of nail, we gives the shape" },
                { text: "Don't ban the nail trend", subtext: "It's a symbol of what kind of health you have" },
            ]
        },
        {
            label: 'Nail Extension – Poly Gel',
            title: 'Nail Extension – Poly Gel',
            imgSrc: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'Poly gel nail extensions combine the best qualities of both acrylics and gels, offering a flexible, lightweight, and strong option for nail enhancements.',
        },
        {
            label: 'Nail Manicure 1',
            title: 'Nail Manicure',
            imgSrc: 'https://th.bing.com/th/id/OIP.4nLiigBj3UaCFkLicfJPfwHaHa?rs=1&pid=ImgDetMain',
            description: 'Nail Art is a lacquer that can be applied to the human fingernail or toenails to decorate and protect the nail plates.',
        },
        {
            label: 'Nail Manicure 2',
            title: 'Nail Manicure',
            imgSrc: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'Nail polish is a lacquer that can be applied to the human fingernail or toenails to decorate and protect the nail plates.',
        },
        {
            label: 'French Manicure',
            title: 'French Manicure',
            imgSrc: 'https://images.pexels.com/photos/7244222/pexels-photo-7244222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'A manicure is a cosmetic beauty treatment for the fingernails and hands performed at home or in a nail salon.',
        },
    ];

    return (
        <div className='testimonials'>
            <div className="bg-black bg-opacity-50">
                <div className="container mx-auto p-4">
                    <div className='text-3xl lg:text-5xl font-bold section_font text-white text-center pt-10'>Nail Extension</div>

                    {/* Tab navigation */}
                    <div className="flex flex-wrap justify-center mb-8 navfont pt-10">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(tab.label)}
                                className={`px-4 py-2 mx-2 my-2 text-lg font-medium rounded-md transition-all ${activeTab === tab.label ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                aria-selected={activeTab === tab.label}
                                role="tab"
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab content */}
                    <div className="p-4 bg-gray-100 rounded-md text-center navfont">
                        {tabs.map((tab, index) => (
                            activeTab === tab.label && (
                                <TabContent
                                    key={index}
                                    title={tab.title}
                                    imgSrc={tab.imgSrc}
                                    description={tab.description}
                                    items={tab.items}
                                />
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
