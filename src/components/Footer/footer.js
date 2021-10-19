import { ClockIcon, LocationMarkerIcon, PhoneIcon } from '@heroicons/react/solid';
import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='container py-12 px-8 w-4/5 rounded-tl-full rounded-tr-full mx-auto bg-gradient-to-r from-purple-500 to-indigo-500'>
            <div className='grid lg:grid-cols-3 sm:grid-flow-row gap-4 '>
                <div className='flex text-white text-xl font-semibold mx-auto'>
                   <PhoneIcon className='w-8 h-8 mr-5' />
                   <div>
                       <h5>Call For Appointment</h5>
                       <p className='text-lg font-normal mt-2'>(394) 288-2168</p>
                   </div>
                </div>
                <div className='flex text-white text-xl font-semibold mx-auto'>
                   <LocationMarkerIcon className='w-8 h-8 mr-5' />
                   <div>
                       <h5>Address</h5>
                       <p className='text-lg font-normal mt-2'>House-25, Sector-13, Uttara, Dhaka-1230. Bangladesh</p>
                   </div>
                </div>
                <div className='flex text-white text-xl font-semibold mx-auto'>
                   <ClockIcon className='w-8 h-8 mr-5' />
                   <div>
                       <h5>Chamber Schedule</h5>
                       <p className='text-lg font-normal mt-2'><span className='font-semibold'>Fri-Sat :</span> 4:00pm - 10:00pm</p>
                       <p className='text-lg font-normal'><span className='font-semibold'>Sun-Thu :</span> 6:00pm - 10:00pm</p>

                   </div>
                </div>
            </div>
        </div>
        <div className='bg-black text-white py-3 text-center'>
            <h6>&copy; Universal Dental Clinic 2021 | All Right Reserved | Developed By <span className='text-yellow-400 font-semibold'>K.M FOYSAL</span></h6>
        </div>
        </div>
    );
};

export default Footer;