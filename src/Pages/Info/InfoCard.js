import React from 'react';

const InfoCard = ({ img, title, body ,bgColor}) => {
    // console.log(data)
    // const {img, title, body}= data
    return (
        <div class={`card card-side bg-base-100 shadow-xl ${bgColor} ` }>
            <figure className='pl-5'><img src={img} alt="Movie" /></figure>
            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                <p>{body}</p>

            </div>
        </div>
    );
};

export default InfoCard;