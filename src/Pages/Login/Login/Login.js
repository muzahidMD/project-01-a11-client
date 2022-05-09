import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='login-form'>
            <h2 className='my-5 login-title'>Please login</h2>
            <form className='w-50 mx-auto'>
                <input type="text" name="email" id="" placeholder='Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input style={{ backgroundColor: "#00896F", color: "#ffffff" }} type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;