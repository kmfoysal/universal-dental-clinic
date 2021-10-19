import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../../Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div className='container py-20 px-24 mx-auto'>

            <h3 className='text-5xl text-center font-medium mb-4'>Our Comprehensive Dental Services</h3>
            <p className='text-lg text-center text-gray-400 mb-12'>General, Cosmetic, and Restorative Care</p>

            <div className='grid grid-cols-3 gap-8'>
                {
                  services.map(service => <Service key={service.id} service={service} ></Service>)
                }
            </div>      
        </div>
    );
};

export default Services;