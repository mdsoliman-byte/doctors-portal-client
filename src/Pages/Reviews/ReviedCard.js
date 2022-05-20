import React from 'react';

const ReviedCard = ({ reviewse }) => {
    const { coustomarName, city, review, img } = reviewse
    return (
        <section >
           
            <div className='card shadow-xl p-10'>
                <p>{review}</p>
                <div className='flex justify-start items-center mt-5'>
                    <div className="avatar">
                        <div className=" rounded-full w-75 h-75  ring ring-primary ring-offset-base-100 ">
                            <img src={img} className="" />
                        </div>
                    </div>
                    <div className='ml-5'>
                        <h1 className='font-bold'>{coustomarName}</h1>
                        <h3>{city}</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviedCard;