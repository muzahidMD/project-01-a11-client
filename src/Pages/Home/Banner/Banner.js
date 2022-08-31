import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={"https://i.ibb.co/5Mk7Jb1/banner.png"} className="max-w-md w-full rounded-lg shadow-2xl" alt='' />
                <div className='lg:ml-14 my-10'>
                    <p className="py-2 font-semibold text-lg">Welcome to our <span className='text-lime-500 text-xl'><Link to={'/'}>Urban Organic Mart</Link></span> Warehouse store</p>
                    <h1 className="text-5xl font-bold mb-3">Store Online For</h1>
                    <h1 className="text-5xl font-bold text-lime-500">Fresh Groceries</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn-primary px-4 py-2 font-semibold rounded-none mr-5">Shop Now</button>
                    <button className="btn-secondary px-4  py-2 font-semibold rounded-none">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;