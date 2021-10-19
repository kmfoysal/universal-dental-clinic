import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div className='text-center'>
            <img src={notFoundImg} alt="img" className='w-75 mx-auto' />
            <Link to='/'>
            <button className='py-3 px-12 text-white rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 my-8'>Back To Home</button>
            </Link>
        </div>
    );
};

export default NotFound;