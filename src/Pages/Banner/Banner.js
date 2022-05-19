import React from 'react';
import cahir from "../../assets/images/chair.png"
import PraimaryButton from '../Shared/PrimaryButton/PraimaryButton';
const Banner = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={cahir} class="max-w-sm rounded-lg shadow-2xl" />
                <div className=''>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PraimaryButton>Get Started</PraimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;