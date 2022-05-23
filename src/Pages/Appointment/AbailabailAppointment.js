import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentServicecCard from './AppointmentServicecCard';
import AppointmentModal from "./AppointmentModal"

const AbailabailAppointment = ({ date }) => {
    const [service, setService] = useState([])
    const [triment, setTritment] = useState(null)
    useEffect(() => {
        fetch('http://localhost:4000/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <div className='text-center mt-5'>
                <h1 className='text-secondary'>Available Services on {format(date, 'PP')}</h1>
                <p>Please select a service.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    service.map(servic => <AppointmentServicecCard key={servic._id} service={servic} setTritment={setTritment} ></AppointmentServicecCard>)
                }
            </div>
            {triment && <AppointmentModal triment ={triment} date={date}></AppointmentModal>}
        </div>
    );
};

export default AbailabailAppointment;