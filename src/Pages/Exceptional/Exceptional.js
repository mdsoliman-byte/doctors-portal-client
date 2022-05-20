import React from 'react';
import treatment from "../../assets/images/treatment.png";
import PraimaryButton from '../Shared/PrimaryButton/PraimaryButton';
const Exceptional = () => {
    return (
        <div className=" ml-20 card lg:card-side bg-base-100 ">
            <img className="w-80 h-96 ml-20 rounded-lg" src={treatment} alt="Album" />
            <div className="card-body mx-20">
                <h2 className="card-title font-bold text-5xl" >Exceptional Dental Care, on Your Terms</h2>
                <p className="mt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                <div className="card-actions mt-4">
                    <PraimaryButton>Get Started</PraimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;