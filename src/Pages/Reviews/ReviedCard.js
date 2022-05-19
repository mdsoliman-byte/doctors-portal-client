import React from 'react';

const ReviedCard = ({ reviewse }) => {
    const { coustomarName, city, review, img } = reviewse
    return (
        <section className='card shadow-xl p-10'>
            <p>{review}</p>
            <div className='flex justify-start items-center mt-5'>
                <div className=' bg-primary rounded-full '>
                    <img src={img} className="h-10 w-10 mask mask-hexagon-2" alt="" />
                </div>
                <div className='ml-5'>
                    <h1 className='font-bold'>{coustomarName}</h1>
                    <h3>{city}</h3>
                </div>
            </div>
        </section>
    );
};

export default ReviedCard;