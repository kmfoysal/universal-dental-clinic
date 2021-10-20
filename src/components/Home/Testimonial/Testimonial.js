import React from 'react';
import client1 from '../../../images/client-1.jpg';
import client2 from '../../../images/client-2.jpg';
import client3 from '../../../images/client-3.jpg';


const Testimonial = () => {
    return (
        <div className='pt-20'>
            <h3 className='text-4xl leading-normal mb-10 text-center font-semibold'>What Client Say</h3>

            <div id="carouselExampleFade" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner mx-auto">
                <div class="carousel-item active text-center">
                    <p className='text-xl text-gray-500 leading-relaxed mb-10 lg:w-2/3 w-4/5 mx-auto'>“Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis mollis est non commodo luctus, nisi erat porttitor ligula eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor”</p>
                <img src={client1} class="d-block rounded-full mx-auto" alt="..."/>
                <p className='text-2xl font-medium my-2 mx-auto'>Md. Rabiul Islam</p>
                <p className='text-xl text-gray-500 font-medium mb-4 mx-auto'>Patient</p>
                </div>
                <div class="carousel-item text-center">
                    <p className='text-xl text-gray-500 leading-relaxed mb-10 lg:w-2/3 w-4/5 mx-auto'>“Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis mollis est non commodo luctus, nisi erat porttitor ligula eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor”</p>
                <img src={client3} class="d-block rounded-full mx-auto" alt="..."/>
                <p className='text-2xl font-medium my-2 mx-auto'>Md. Eftiaz Hossain</p>
                <p className='text-xl text-gray-500 font-medium mb-4 mx-auto'>Patient</p>
                </div>
                <div class="carousel-item text-center">
                    <p className='text-xl text-gray-500 leading-relaxed mb-10 lg:w-2/3 w-4/5 mx-auto'>“Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis mollis est non commodo luctus, nisi erat porttitor ligula eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor”</p>
                <img src={client2} class="d-block rounded-full mx-auto" alt="..."/>
                <p className='text-2xl font-medium my-2 mx-auto'>Rebecca Hasina</p>
                <p className='text-xl text-gray-500 font-medium mb-4 mx-auto'>Patient</p>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    );
};

export default Testimonial;