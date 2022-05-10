import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const { _id, name, price, description, img, supplierName, quantity } = product;
    useEffect(() => {
        const url = `https://fast-sierra-37608.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <Card className='mx-auto' style={{ width: '25%', border: '1px solid #00896F' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> <strong> <i>{name}</i> </strong> </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        <strong>Price:</strong> ${price}
                        <div className='d-flex align-items-center justify-content-between'>
                            <p><small><strong>Supplier:</strong> {supplierName}</small></p>
                            <p><small><strong> Quantity:</strong> {quantity} </small></p>
                        </div>
                    </Card.Text>
                    <div className='d-flex justify-content-center'>
                        <button className='button w-100'>Update</button>
                        {/* <button className='button' onClick={() => navigateToProductDetail(_id)}>Update</button> */}
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductDetail;