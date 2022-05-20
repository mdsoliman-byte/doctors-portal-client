import React from 'react';

const InfoCard = ({ img, title, body ,bgColor}) => {
    // console.log(data)
    // const {img, title, body}= data
    return (
        <div className={`card card-side bg-base-100 shadow-xl ${bgColor} ` }>
            <figure className='pl-5'><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{body}</p>

            </div>
        </div>
    );
};

export default InfoCard;