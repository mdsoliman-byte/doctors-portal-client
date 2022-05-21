import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';
const Info = () => {
   
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5  text-white  '>
           
            <InfoCard img={clock} title={"Opening Hours"} body={'Lorem Ipsum is simply dummy text of the pri'} bgColor={' bg-gradient-to-r from-primary to-secondary'}></InfoCard>
            <InfoCard img={marker} title={"Visit our location"} body={'Brooklyn, NY 10036, United States'} bgColor={'bg-gradient-to-r from-primary to-secondary'}></InfoCard>
            <InfoCard img={phone} title={"Contact us now"} body={'+000 123 456789'} bgColor={' bg-gradient-to-r from-primary to-secondary'}></InfoCard>
        </div>
    );
};

export default Info;