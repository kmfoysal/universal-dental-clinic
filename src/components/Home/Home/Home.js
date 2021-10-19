import React from 'react';
import HeroArea from '../HeroArea/HeroArea';
import Services from '../Services/Services';
import SimpleSection from '../SimpleSection/SimpleSection';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <HeroArea></HeroArea>
            <Services></Services>
            <SimpleSection></SimpleSection>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;