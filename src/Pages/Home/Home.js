import React from 'react';
import Banner from '../Banner/Banner';
import Exceptional from '../Exceptional/Exceptional';
import Info from '../Info/Info';
import Services from '../Service/Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Exceptional></Exceptional>
        </div>
    );
};

export default Home;