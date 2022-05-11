import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { productId } = useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/product/${productId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div className='container form'>
            <h2 className='my-5 page-title'>Update Product </h2>

            <form className='w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <label className='mb-2' htmlFor="">Product Name</label>
                <input placeholder='Enter Your Product Name' {...register("name")} required />
                <label className='mb-2' htmlFor=""> Price</label>
                <input placeholder='Enter Price' type="number" {...register("price")} required />
                <label className='mb-2' htmlFor=""> Supplier Name</label>
                <input placeholder='Enter Supplier Name' {...register("supplierName")} required />
                <label className='mb-2' htmlFor=""> Quantity</label>
                <input placeholder='Quantity' type="number" {...register("quantity")} required />
                <label className='mb-2' htmlFor=""> Description</label>
                <textarea placeholder='Short Description' {...register("description")} required />
                <label className='mb-2' htmlFor=""> Photo URL</label>
                <input placeholder='Image URL' {...register("img")} required />
                <input className='w-50 d-block mx-auto' style={{ backgroundColor: "#00896F", color: "#ffffff" }} type="submit" value="Update Product" />
            </form>
        </div>
    );
};

export default UpdateProduct;