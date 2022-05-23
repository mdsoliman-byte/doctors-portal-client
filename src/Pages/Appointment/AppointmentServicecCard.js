import React from 'react';

const AppointmentServicecCard = ({ service, setTritment , date}) => {
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

                    <label for="appointment-modal" class="btn btn-primary modal-button" disabled={slots.length === 0} onClick={() => setTritment(service)}>Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentServicecCard;