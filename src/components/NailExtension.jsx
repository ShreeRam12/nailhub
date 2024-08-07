import React, { useState } from 'react';
import './Nailhub.css';
// Define the tabs and their corresponding content and images
const tabs = [
    {
        name: 'Acrylic',
        content: 'Acrylic nails are durable and long-lasting.',
        image: 'https://th.bing.com/th?id=OIP.6vpFSDhRMasgiFUK_BJDcQHaEK&w=474&h=266&c=7&qlt=80&bgcl=fffffe&r=0&o=6&pid=MultiSMRSV2Source'
    },
    {
        name: 'Poly Gel',
        content: 'Poly Gel nails are flexible and lightweight.',
        image: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Stick on Nails',
        content: 'Stick on nails are easy to apply and remove.',
        image: 'https://th.bing.com/th/id/OIP.4nLiigBj3UaCFkLicfJPfwHaHa?rs=1&pid=ImgDetMain'
    },
    {
        name: 'Temporary Extension',
        content: 'Temporary extensions are ideal for short-term use.',
        image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Toe Extension',
        content: 'Toe extensions give a perfect look to your feet.',
        image: 'https://images.pexels.com/photos/7244222/pexels-photo-7244222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
];

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="bg-rose-300">
            <div className="container mx-auto p-4">
                {/* Tab navigation */}
                <div className="flex flex-wrap justify-center mb-8 navfont">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 mx-2 my-2 text-lg font-medium rounded-md transition-all ${activeTab.name === tab.name ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                                }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Tab content */}
                <div className="p-4 bg-gray-100 rounded-md text-center navfont">
                    <h2 className="text-2xl font-bold mb-4">{activeTab.name}</h2>
                    <img src={activeTab.image} alt={activeTab.name} className="mx-auto mb-4 max-w-xs md:max-w-md" />
                    <p>{activeTab.content}</p>
                </div>
            </div>
        </div>

    );
};

export default Tabs;
