import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const ManageInventoryTable = ({ product }) => {
    const { _id, name, supplierName, quantity } = product;
    const [products, setProducts] = useProducts();

    const navigate = useNavigate();
    const navigateToUpdate = id => {
        navigate(`/update/${id}`)
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure?');
        if (proceed) {
            const url = `https://fast-sierra-37608.herokuapp.com/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{supplierName}</td>
            <td><button onClick={() => navigateToUpdate(_id)}>Edit</button></td>
            <td><button onClick={() => handleDelete(_id)}>Delete</button></td>
        </tr>

    );
};

export default ManageInventoryTable;