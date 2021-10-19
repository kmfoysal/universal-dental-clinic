import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {

    const {id,serviceName,shortInfo,imgUrl} = props.service;
    return (
        <div className='bg-white text-center rounded-lg shadow-lg p-8 transition hover:shadow-2xl'>
            <img src={imgUrl} alt="img" className='p-4 border-2 border-blue-500 rounded-full mx-auto' />
            <h2 className='text-2xl font-semibold my-4'>{serviceName}</h2>
            <p className='mb-4'>{shortInfo}</p>
            <Link to={`/serviceDetails/${id}`}>
            <button className='py-3 px-8 text-white rounded-full bg-gradient-to-r from-purple-500 to-indigo-500'>Learn More</button>
            </Link>
        </div>
    );
};

export default Service;