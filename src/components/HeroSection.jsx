import React from 'react';
import Typewriter from 'typewriter-effect';
import './Nailhub.css';

const HeroSection = () => {
    return (
        <section className='nailbg w-full h-screen bg-cover bg-center'>
            <div className='flex justify-center items-center w-full h-full bg-black bg-opacity-5 '>
                <div className='navfont bg-gradient-to-r from-violet-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent font-bold text-lg lg:text-7xl'>
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
        </section>
    );
}

export default HeroSection;
