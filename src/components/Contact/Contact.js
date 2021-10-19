import React from 'react';
import dentist from '../../images/sergon.jpg';


const Contact = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-12 place-items-center'>
                <div className='pl-32'>
                    <h3 className='text-4xl font-medium leading-normal mb-8'>Contact Our Dentistry</h3>
                    <p className='text-lg text-gray-500 mb-4'>Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibu.</p>
                    <h4 className='text-2xl font-medium text-purple-600 mb-4'>For Emergencies: Call (352) 394-2323</h4>
                    <button className='py-4 px-10 text-white rounded-full bg-gradient-to-r from-purple-500 to-indigo-500'>Book Appointment</button>
                </div>
                <div>
                    <img src={dentist} alt="img" className='rounded-tl-full rounded-bl-full' />
                </div>
           </div>
           <div className='container w-3/5 mx-auto py-20'>
               <h3 className='text-5xl font-semibold text-center mb-8'>Get in touch</h3>
               <div class="row mb-3">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Name"/>
                </div>
                <div class="col">
                    <input type="email" class="form-control" placeholder="Email"/>
                </div>
              </div>
              <div class="col mb-3">
                    <input type="text" class="form-control" placeholder="Address"/>
              </div>
              <div class="col mb-4">
                <textarea class="form-control" placeholder='Write Here' rows="7"></textarea>
              </div>
              <button className='py-3 px-10 text-white rounded-full bg-gradient-to-r from-purple-500 to-indigo-500'>SEND</button>
           </div>
        </div>
    );
};

export default Contact;