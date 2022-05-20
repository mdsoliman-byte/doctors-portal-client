import React from 'react';
import winsonHerry from "../../assets/images/people1.png"
import quata from "../../assets/icons/quote.svg"
import ReviedCard from './ReviedCard';
const Reviews = () => {
    const data = [
        {
            _id: 1,
            coustomarName: "Winson Herry",
            city: "California",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: winsonHerry
        },
        {
            _id: 2,
            coustomarName: "Winson Herry",
            city: "California",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: winsonHerry
        },
        {
            _id: 3,
            coustomarName: "Winson Herry",
            city: "California",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: winsonHerry
        },
    ]
    return (

        <div className='mt-10'>
            <div className='flex justify-between'>
                <div >
                    <h1 className='text-primary font-bold'>Testimonial</h1>
                    <h3 className='text-2xl '>What Our Patients Says</h3>

                </div>
                <div>
                    <img src={quata} className="w-[192px] h-[156px]" alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    data.map(dat => <ReviedCard reviewse={dat}></ReviedCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;