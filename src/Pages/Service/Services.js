import React from 'react';
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";
import ServiceCardd from './ServiceCardd';
const Services = () => {
    const data = [
        {
            _id: 1,
            img: fluoride,
            title: "Fluoride Treatment",
            discriptione: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id: 2,
            img: cavity,
            title: "Cavity Filling",
            discriptione: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id: 1,
            img: whitening,
            title: "Teeth Whitening",
            discriptione: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]
    return (
        <div className='my-20 '>
            <div className='text-center'>
                <h1 className='text-xl font-bold text-primary uppercase'>OUR SERVICES</h1>
                <p className='text-4xl mt-2'>Services We Provide</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  my-16'>
                {
                    data.map(dat =>  <ServiceCardd key={dat._id} datas={dat}></ServiceCardd> )
                }
            </div>
        </div>
    );
};

export default Services;