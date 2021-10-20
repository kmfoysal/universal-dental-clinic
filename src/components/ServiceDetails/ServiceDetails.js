import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const ServiceDetails = () => {

    const [services] = useServices();
    const {serviceId} = useParams();
    
    const singleDetails = services?.find(service => service.id === Number(serviceId));
    console.log(singleDetails);
    return (
        <div>
            <img src={singleDetails?.bannerImg} alt="img" style={{height:'400px', width:'100%', objectFit:'cover', objectPosition:'center'}} />
            
            <div className="container text-center py-8">
                <h2 className='text-4xl font-medium '>{singleDetails?.serviceName}</h2>
                <p className='text-lg text-gray-500 mt-2'>{singleDetails?.features}</p>
                <p className='mt-4 px-10'>{singleDetails?.description}</p>

                <p className='text-2xl font-semibold text-purple-500 mt-4'>Start From ${singleDetails?.price}</p>

                <Link to='/contact'>
                  <button className='py-3 px-12 text-white rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 mt-4'>Contact Now</button>
                </Link>
            </div>
        
        </div>
    );
};

export default ServiceDetails;