import { CheckIcon } from '@heroicons/react/solid';
import React from 'react';
import dentist from '../../images/sergon.jpg';



const About = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2 grid-flow-row  gap-12 place-items-center'>
                <div className='lg:pl-32 px-4 text-center lg:text-left'>
                    <h3 className='text-4xl font-medium leading-normal mb-8'>Our Practice & Core Values</h3>
                    <p className='text-lg text-gray-500 mb-4'>Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibu. Aenean lacinia bibendum nulla sed. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibu.</p>
                    <button className='py-4 px-10 text-white rounded-full bg-gradient-to-r from-purple-500 to-indigo-500'>Book Appointment</button>
                </div>
                <div>
                    <img src={dentist} alt="img" className='rounded-tl-full rounded-bl-full' />
                </div>
           </div>
           <div className='lg:px-32 px-6 grid lg:grid-cols-5 grid-flow-row gap-10 mt-20'>
               <div className='lg:col-span-2 col-span-full'>
                   <h4 className='text-3xl font-medium mb-4'>Dental Care for The Whole Family</h4>
                   <p className='text-lg text-gray-500 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                   <div className='flex items-center mb-4'>
                       <CheckIcon className='text-blue-500 w-8 h-8 mr-5'/>
                       <p className='text-xl font-medium'>Adult Care</p>
                   </div>
                   <div className='flex items-center mb-4'>
                       <CheckIcon className='text-blue-500 w-8 h-8 mr-5'/>
                       <p className='text-xl font-medium'>Child Care</p>
                   </div>
                   <div className='flex items-center mb-4'>
                       <CheckIcon className='text-blue-500 w-8 h-8 mr-5'/>
                       <p className='text-xl font-medium'>Orthodontic Care</p>
                   </div>
               </div>
               <div className='lg:col-span-3 col-span-full text-center bg-white lg:px-10 px-4 lg:py-16 py-8 rounded-3xl shadow-2xl'>
                   <h3 className='lg:text-5xl text-3xl font-medium leading-normal mb-4'>We are A Full Service Dentistry Practice</h3>
                   <p className='text-lg text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
               </div>
           </div>
        </div>
    );
};

export default About;