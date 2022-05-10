import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='container form'>
            <h2 className='my-5 page-title'>Add New Product</h2>

            <form className='w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Enter Your Product Name' {...register("name")} required />
                <input placeholder='Enter Price' type="number" {...register("price")} required />
                <input placeholder='Enter Supplier Name' {...register("supplierName")} required />
                <input placeholder='Quantity' type="number" {...register("quantity")} required />
                <input placeholder='Short Description' {...register("description")} required />
                <input placeholder='Image URL' {...register("img")} required />
                <input className='w-50 d-block mx-auto' style={{ backgroundColor: "#00896F", color: "#ffffff" }} type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;