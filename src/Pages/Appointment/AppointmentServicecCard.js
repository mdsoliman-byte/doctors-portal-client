import React from 'react';

const AppointmentServicecCard = ({ service }) => {
    const { name, slots } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p> AbaolAbil solot {slots.length}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary" disabled={slots.length === 0}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentServicecCard;