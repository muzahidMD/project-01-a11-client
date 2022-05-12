import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const ManageInventory = () => {
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
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div>
            <h2 className='page-title'>Manage Items</h2>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Supplier</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <tr
                            key={product._id}
                        >
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.supplierName}</td>
                            <td><button onClick={() => navigateToUpdate(product._id)} className={'btn btn-success'}><FontAwesomeIcon icon={faPen} /></button></td>
                            <td><button onClick={() => handleDelete(product._id)} className={'btn btn-success'}><FontAwesomeIcon icon={faTrash} /></button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageInventory;