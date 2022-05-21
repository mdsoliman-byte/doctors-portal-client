import React from 'react';

const AppointmentServicecCard = ({ service }) => {
    const { name, slots } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <p> {slots.length} {slots.length === 0 ? "No Space " : slots.length > 1 ? "Spaces" : "Space"}  Available</p>
                <p>{
                    slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>Please Try Another Day </span>
                }</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary" disabled={slots.length === 0}>Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentServicecCard;