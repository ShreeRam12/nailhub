import React from 'react';
import Typewriter from 'typewriter-effect';
import BG from '..//..//src/assets/Nail_BG.webp';
import './Nailhub.css';

const HeroSection = () => {
    return (
        <section className='relative'>
            <div className='w-full h-screen bg-cover bg-center relative'>
                <img src={BG} alt="BG_Image" className='absolute lg:inset-0 object-cover w-full h-full' />
                <div className='flex justify-center items-center w-full h-full relative bg-black bg-opacity-50 '>
                    <div className='navfont text-white font-bold text-lg lg:text-7xl'>
                        <Typewriter
                            options={{
                                strings: [
                                    "Transform Your Mood",
                                    "Elevate Your Emotions",
                                    "Rediscover Your Joy",
                                    "Find Your Inner Peace",
                                    "Revitalize Your Spirit",
                                    "Awaken Your Happiness",
                                    "Enhance Your Well-Being",
                                    "Boost Your Emotional Health",
                                    "Renew Your Energy",
                                    "Invigorate Your Soul",
                                    "Embrace a New Perspective",
                                    "Rejuvenate Your Senses",
                                    "Transform How You Feel",
                                    "Change Your Emotional Landscape",
                                    "Empower Your Feelings",
                                    "Elevate Your Emotional State",
                                    "Refresh Your Outlook",
                                    "Uplift Your Spirits"
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 50,
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
