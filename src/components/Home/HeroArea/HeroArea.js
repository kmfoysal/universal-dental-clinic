import React from 'react';
import shades from '../../../images/bg-shades.png';
import './HeroArea.css';

const HeroArea = () => {
    return (
        <div>
            <section className='hero-area bg-right-bottom lg:bg-center'>
                <div className="container mx-auto">
                    <div className='flex items-center h-screen'>
                        <div>
                            <h2 className='text-4xl lg:text-6xl leading-normal font-semibold text-gray-800'>A Brighter Dental</h2>
                             <h2 className='text-4xl lg:text-6xl font-semibold text-gray-800 mb-8 sm:text-3xl'>Experience</h2>
                            <p className='text-lg text-gray-400 mb-8'>General, Cosmetic, and Restorative Dentistry</p>
                            <button className='py-3 lg:py-4 px-10 text-white rounded-full bg-gradient-to-r from-purple-500 to-indigo-500'>Book Appointment</button>
                            <img src={shades} alt="" className='lg:w-3/5 w-4/5  mx-auto' />
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroArea;