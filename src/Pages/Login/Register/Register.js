import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='container login-form'>
            <h2 className='my-5 login-title'>Please Register</h2>
            <form className='w-50 mx-auto'>
                <input type="text" name="name" id="" placeholder='Name' required />
                <input type="text" name="email" id="" placeholder='Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input className='w-50 d-block mx-auto' style={{ backgroundColor: "#00896F", color: "#ffffff" }} type="submit" value="Login" />
            </form>
            <div className='text-center'>
                <p>Already have an account ? <span style={{ color: "#00896F" }}><Link to="/login" style={{ color: "#00896F" }} className='text-decoration-none pe-auto'>Please Login</Link></span></p>
            </div>
        </div>
    );
};

export default Register;