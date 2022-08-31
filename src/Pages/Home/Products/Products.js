import React from 'react';
import './Products.css'
import Product from '../Product/Product';
import useProducts from '../../../hooks/useProducts';

const Products = () => {
    const [products, setProducts] = useProducts();

    return (
        <div id='products' className='container '>
            <h2 className='text-center my-5 text-3xl font-semibold text-lime-500'>Available Products</h2>
            <div className='products-container '>
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;