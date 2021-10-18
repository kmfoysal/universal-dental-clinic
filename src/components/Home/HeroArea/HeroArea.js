import React from 'react';
import shades from '../../../images/bg-shades.png';
import './HeroArea.css';

const HeroArea = () => {
    return (
        <div>
            <section className='hero-area'>
                <div className="container mx-auto">
                    <div className='flex items-center h-screen'>
                        <div>
                            <h2 className='text-6xl leading-normal font-semibold text-gray-800'>A Brighter Dental</h2>
                             <h2 className='text-6xl font-semibold text-gray-800 mb-8'>Experience</h2>
                            <p className='text-lg text-gray-400 mb-8'>General, Cosmetic, and Restorative Dentistry</p>
                            <button className='py-4 px-10 text-white rounded-full bg-gradient-to-r from-purple-500 to-indigo-500'>Book Appointment</button>
                            <img src={shades} alt="" className='w-3/5 mx-auto' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroArea;