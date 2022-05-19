import React from 'react';

const PraimaryButton = ({ children }) => {
    return (
        <div>
            <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary">{children}</button>
        </div>
    );
};

export default PraimaryButton;