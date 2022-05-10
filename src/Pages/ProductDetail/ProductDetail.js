import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const url = `https://fast-sierra-37608.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-primary mt-4 mb-4'>Update product : {product.name} </h2>
                <Link to={'/checkout'}>
                    <button className='btn btn-primary'>Order </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetail;