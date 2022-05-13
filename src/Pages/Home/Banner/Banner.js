import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner d-flex align-items-center'>
            <div className='container'>
                <h1 className='banner-title'>EG GROCERY </h1>
                <h1 className='banner-title'>Warehouse</h1>
                <h1>100% Organic Items</h1>
                <h1> and Vegetable</h1>
            </div>
        </div>
    );
};

export default Banner;