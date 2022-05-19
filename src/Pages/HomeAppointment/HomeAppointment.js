import React from 'react';
import doctor from "../../assets/images/doctor.png"
import appoentment from "../../assets/images/appointment.png"
import PraimaryButton from '../Shared/PrimaryButton/PraimaryButton';

const HomeAppointment = () => {
    return (
        <section className='flex justify-center items-center mt-40 ' style={{background:`url(${appoentment})`}}>
            <div className='flex-1 mt-[-140px] hidden lg:block'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1 md: p-10 '>
                <h2 className=' mb-2 font-bold text-primary'>Appointment</h2>
                <h2 className='font-bold text-3xl primary text-white'>Make an appointment Today</h2>
                <p className='text-white mt-2 pr-10'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className='mt-5'>
                    <PraimaryButton >Get Started</PraimaryButton>
                </div>
            </div>
        </section>
    );
};

export default HomeAppointment;