import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const { _id, name, price, description, img, supplierName, quantity } = product;

    useEffect(() => {
        const url = `https://fast-sierra-37608.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId]);

    const handleDeliverBtn = event => {
        event.preventDefault();

    };

    const handleRestock = event => {
        event.preventDefault();

    };

    return (
        <div>
            <h2 className='text-center my-5 text-3xl font-semibold'> Product Details</h2>
            <Card className='mx-auto w-full lg:w-[25%]' style={{ border: '1px solid #00896F' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> <strong> <i>{name}</i> </strong> </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text className='pt-3'>
                        <strong>Price:</strong> ${price}
                        <div className='d-flex align-items-center justify-content-between'>
                            <p><small><strong>Supplier:</strong> {supplierName}</small></p>
                            <p><small><strong> Quantity:</strong> {quantity} </small></p>
                        </div>
                    </Card.Text>
                    <div >
                        <form>
                            <button
                                onClick={handleDeliverBtn}
                                className='text-light my-3 w-100 d-block mx-auto py-2 rounded-3 border-0 text-black bg-lime-400'
                            >
                                <span className='px-3'>Deliver</span>
                            </button>
                            <input type="text" name="" placeholder='Enter Stock' id="" />
                            <input onClick={handleRestock} className='w-100 d-block mx-auto text-black bg-lime-400' type="submit" value="Restock" />
                        </form>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductDetail;