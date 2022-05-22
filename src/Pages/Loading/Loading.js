import React from 'react';

const Loading = () => {
    return (
        <div>
            <div class="spinner-border" style={{ width: "3rem", height: "3re" }} role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow" style={{ width: "3rem", height: "3re" }} role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;