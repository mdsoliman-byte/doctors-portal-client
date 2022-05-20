import React, { useState } from 'react';
import chaire from "../../assets/images/chair.png"
import bgChair from "../../assets/images/bg.png"

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div class="hero min-h-screen " style={{ background: `url(${bgChair})`, backgroundSize: "cover" }}>
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chaire} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker 
                     mode="single"
                     selected={date}
                     onSelect={setDate}
                     
                    />
                    <p>My Selected Data {format(date, 'PP')}</p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;