import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Exceptional from '../Exceptional/Exceptional';
import HomeAppointment from '../HomeAppointment/HomeAppointment';
import Info from '../Info/Info';
import Reviews from '../Reviews/Reviews';
import Services from '../Service/Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Exceptional></Exceptional>
            <HomeAppointment></HomeAppointment>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;