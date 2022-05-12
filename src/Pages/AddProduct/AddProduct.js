import React from 'react';
import './AddProduct.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);

    const handleAddProduct = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const supplierName = event.target.supplierName.value;
        const quantity = event.target.quantity.value;
        const description = event.target.description.value;
        const img = event.target.img.value;
        const email = user.email;

        const product = { email, name, price, supplierName, quantity, description, img };

        const url = `https://fast-sierra-37608.herokuapp.com/product/`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                event.target.reset();
                toast('Product Added');
            })
    };
    return (
        <div className='container form'>
            <h2 className='my-5 page-title'>Add New Product</h2>

            <form className='w-50 mx-auto' onSubmit={handleAddProduct}  >
                <label className='mb-2' htmlFor="">Product Name</label>
                <input placeholder='Enter Your Product Name' name='name' type={'text'} required />

                <label className='mb-2' htmlFor=""> Price</label>
                <input placeholder='Enter Price' name='price' type="number" required />

                <label className='mb-2' htmlFor=""> Supplier Name</label>
                <input placeholder='Enter Supplier Name' name='supplierName' type={'text'} required />

                <label className='mb-2' htmlFor=""> Quantity</label>
                <input placeholder='Quantity' name='quantity' type="number" required />

                <label className='mb-2' htmlFor=""> Description</label>
                <textarea placeholder='Short Description' name='description' type={'text'} required />

                <label className='mb-2' htmlFor=""> Photo URL</label>
                <input placeholder='Image URL' name='img' type={'text'} required />

                <input className='w-50 d-block mx-auto' style={{ backgroundColor: "#00896F", color: "#ffffff" }} type="submit" value="Add Product" />
                <ToastContainer />
            </form>
        </div>
    );
};

export default AddProduct;