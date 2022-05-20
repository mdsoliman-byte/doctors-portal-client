import React from 'react';
import appoientment from "../../assets/images/appointment.png";
const Contact = () => {
    return (
        <div className='flex flex-col  items-start my-20 p-10' style={{background: `url(${appoientment})`}}>
            <h1 className='text-primary font-bold'>Contact Us </h1>
            <h2 className='text-2xl text-white '>Stay connected with us</h2>
            <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
            <textarea className="" placeholder="Bio"></textarea>
        </div>
    );
};

export default Contact;