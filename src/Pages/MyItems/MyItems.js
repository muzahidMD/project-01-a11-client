import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const email = user.email;

    const navigateToUpdate = id => {
        navigate(`/update/${id}`)
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `https://obscure-mesa-50963.herokuapp.com/myitem?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm("Do you want to delete");
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
        <div>
            <h2 className='page-title'>My Items</h2>
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

export default MyItems;