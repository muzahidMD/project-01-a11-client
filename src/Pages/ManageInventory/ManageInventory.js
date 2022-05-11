import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ManageInventoryTable from './ManageInventoryTable';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fast-sierra-37608.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2 className='page-title'>Inventory page</h2>
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
                        products.map(product =>
                            <ManageInventoryTable
                                key={product._id}
                                product={product}
                            ></ManageInventoryTable>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageInventory;