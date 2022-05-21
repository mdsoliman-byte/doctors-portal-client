
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bgChair from "../../assets/images/bg.png";
import chaire from "../../assets/images/chair.png";

const AppointmentBanner = ({date, setDate}) => {
    
    return (
        <div class="hero min-h-screen " style={{ background: `url(${bgChair})`, backgroundSize: "cover" }}>
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chaire} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <DayPicker 
                     mode="single"
                     selected={date}
                     onSelect={setDate}
                     
                    />
                    
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;