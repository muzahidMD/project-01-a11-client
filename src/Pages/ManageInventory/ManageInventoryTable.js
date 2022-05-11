import React from 'react';

const ManageInventoryTable = ({ product }) => {
    const { _id, name, supplierName, quantity } = product;
    console.log(product)
    return (
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{supplierName}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
        </tr>

    );
};

export default ManageInventoryTable;