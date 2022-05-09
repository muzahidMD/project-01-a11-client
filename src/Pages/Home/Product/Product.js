import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Product = ({ product }) => {
    const { id, name, price, description, img } = product;
    return (
        <div className=''>
            <Card style={{ width: '100%', border: '1px solid #00896F' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> <strong> <i>{name}</i> </strong> </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        <strong>Price:</strong> ${price}
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