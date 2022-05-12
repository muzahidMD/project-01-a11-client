import React from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProduct = () => {
    const { productId } = useParams();

    const handleUpdateProduct = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const supplierName = event.target.name.value;
        const quantity = event.target.quantity.value;
        const description = event.target.description.value;
        const img = event.target.img.value;

        const updatedProduct = { name, price, supplierName, quantity, description, img };


        const url = `http://localhost:5000/product/${productId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                event.target.reset();
                toast('Product Updated');
            })
    };
    return (
        <div className='container form'>
            <h2 className='my-5 page-title'>Update Product </h2>

            <form className='w-50 mx-auto' onSubmit={handleUpdateProduct}  >
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

                <input className='w-50 d-block mx-auto' style={{ backgroundColor: "#00896F", color: "#ffffff" }} type="submit" value="Updated Product" />
                <ToastContainer />
            </form>



        </div>
    );
};

export default UpdateProduct;