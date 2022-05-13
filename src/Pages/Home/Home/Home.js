import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Search from '../Search/Search';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Search></Search>
        </div>
    );
};

export default Home;