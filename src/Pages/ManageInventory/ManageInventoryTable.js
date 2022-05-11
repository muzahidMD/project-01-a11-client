import React from 'react';
import useProducts from '../../hooks/useProducts';

const ManageInventoryTable = ({ product }) => {
    const { _id, name, supplierName, quantity } = product;
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`
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
            <td><button>Edit</button></td>
            <td><button onClick={() => handleDelete(_id)}>Delete</button></td>
        </tr>

    );
};

export default ManageInventoryTable;