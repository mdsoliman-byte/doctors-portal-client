import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import AbailabailAppointment from './AbailabailAppointment';
import AppointmentBanner from './AppointmentBanner';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    

    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AbailabailAppointment date={date}></AbailabailAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;