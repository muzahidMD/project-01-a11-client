import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Product = ({ product }) => {
    const { id, name, price, description, img } = product;
    return (
        <div className=''>
            <Card style={{ width: '%', border: '1px solid #00896F' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        Price: $ {price}
                    </Card.Text>
                    <div className='d-flex justify-content-center'>
                        <button className='button'>Update</button>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;