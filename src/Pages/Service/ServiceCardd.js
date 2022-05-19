import React from 'react';

const ServiceCardd = ({ datas }) => {
    const { img, title, discriptione, } = datas
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
                <p>{discriptione}</p>
                
            </div>
        </div>
    );
};

export default ServiceCardd;