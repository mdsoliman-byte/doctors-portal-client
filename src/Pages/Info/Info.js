import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';
const Info = () => {
    // const cardInfo = [
    //     {
    //         img: click,
    //         title: 'Opening Hours',
    //         body: 'Lorem Ipsum is simply dummy text of the pri'
    //     },
    //     {
    //         img: marker,
    //         title: 'Visit our location',
    //         body: 'Brooklyn, NY 10036, United States'
    //     },
    //     {
    //         img: phone,
    //         title: 'Contact us now',
    //         body: '+000 123 456789'
    //     }
    // ]
    return (
        <div className='grid grid-cols-1 lg: grid-cols-3  gap-5 px-12 text-white  '>
            {/* {
                cardInfo.map(card => { <InfoCard data={card}></InfoCard> })
            } */}
            <InfoCard img={clock} title={"Opening Hours"} body={'Lorem Ipsum is simply dummy text of the pri'} bgColor={' bg-gradient-to-r from-primary to-secondary'}></InfoCard>
            <InfoCard img={marker} title={"Visit our location"} body={'Brooklyn, NY 10036, United States'} bgColor={'bg-accent'}></InfoCard>
            <InfoCard img={phone} title={"Contact us now"} body={'+000 123 456789'} bgColor={' bg-gradient-to-r from-primary to-secondary'}></InfoCard>
        </div>
    );
};

export default Info;