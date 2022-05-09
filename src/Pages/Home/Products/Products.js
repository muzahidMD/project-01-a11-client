import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>
            <h2 className='text-center my-5 '>Available Products</h2>
            <div className='products-container'>
                {
                    products.slice(0, 6).map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;