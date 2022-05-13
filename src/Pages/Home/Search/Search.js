import { } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Search.css'

const Search = () => {
    return (
        <div className='container'>
            <h2 className='title'>Search Product</h2>
            <div className='search'>
                <div>
                    <form className='search-form'>
                        <input type="text" name="" id="" />
                        <input className='w-25' style={{ backgroundColor: "#00896F", color: "#ffffff" }} type="submit" value="Search" />
                    </form>
                </div>
            </div>
            <div>
                <h2 className='title'>What do you looking for ?</h2>
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