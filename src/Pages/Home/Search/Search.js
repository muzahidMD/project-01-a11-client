import { } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './Search.css'

const Search = () => {
    return (
        <div className=''>
            <div className='aboutSection flex flex-row-reverse my-20'>
                <img className='hidden lg:flex' src='https://img.freepik.com/free-photo/top-view-assortment-vegetables-grocery-bag_23-2148853338.jpg?w=826&t=st=1661771675~exp=1661772275~hmac=f3123007e1592e2ae7d88ed36d74793ec657b1ef64cd37ad4867319d467b0584' alt='' />
                <div className='bg-neutral flex items-center'>
                    <div className='lg:ml-16 py-10 px-4'>
                        <h2 className='text-center mb-8 text-3xl font-semibold text-lime-500'>About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.</p>
                        <div className='mt-10'>
                            <button className="btn-primary px-4 py-2 rounded-none mr-5">Shop Now</button>
                            <button className="btn-secondary px-4 py-2 rounded-none">Read more</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <h2 className='text-center my-5 text-3xl font-semibold text-lime-500'>What do you looking for ?</h2>
                <div className='search-container'>
                    <div className='search-item'>
                        <Link to={'#'}>Drinks</Link>
                    </div>
                    <div className='search-item'>
                        <Link to={'#'}>Fresh Fruits</Link>
                    </div>
                    <div className='search-item'>
                        <Link to={'#'}>Fresh Vegetable</Link>
                    </div>
                    <div className='search-item'>
                        <Link to={'#'}>Nuts</Link>
                    </div>
                    <div className='search-item'>
                        <Link to={'#'}>Fresh Oil</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;