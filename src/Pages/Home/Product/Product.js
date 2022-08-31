import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { _id, name, price, description, img, supplierName, quantity } = product;
    const navigate = useNavigate();

    const navigateToProductDetail = (id) => {
        navigate(`/product/${id}`)
    }
    return (
        <div className=''>
            <Card className='card' style={{ width: '100%', border: '1px solid #A1E633', borderRadius: 'none' }}>
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
                        <button className='button' onClick={() => navigateToProductDetail(_id)}>Update</button>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;