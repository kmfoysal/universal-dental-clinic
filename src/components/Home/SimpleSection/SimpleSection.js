import React from 'react';
import dentist from '../../../images/sergon.jpg';

const SimpleSection = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-flow-row gap-12 place-items-center'>
            <div>
                <img src={dentist} alt="img" className='rounded-tr-full rounded-br-full' />
            </div>
            <div className='lg:pr-60 px-4 text-center lg:text-left'>
                <h3 className='lg:text-4xl text-2xl font-medium leading-normal mb-8'>A Simple, Affordable Approach to Health Care</h3>
                <p className='text-lg text-gray-500'>Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibu. Aenean lacinia bibendum nulla sed. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibu.</p>
            </div>
        </div>
    );
};

export default SimpleSection;