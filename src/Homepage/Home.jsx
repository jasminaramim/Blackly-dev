import React from 'react';
import Banner from './Banner';
import WhyChooseUs from './WhyChooseUs';
import OffersSection from './OffersSection';
import ServicesSection from './ServicesSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OffersSection></OffersSection>
            <WhyChooseUs></WhyChooseUs>
            <ServicesSection></ServicesSection>
        </div>
    );
};

export default Home;