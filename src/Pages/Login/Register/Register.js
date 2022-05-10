import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css'
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    if (loading || updating) {
        return <Loading></Loading>;
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
    }

    return (
        <div className='container form'>
            <h2 className='my-5 page-title'>Please Register</h2>
            <form onSubmit={handleRegister} className='w-50 mx-auto'>
                <input type="text" name="name" id="" placeholder='Name' />
                <input type="email" name="email" id="" placeholder='Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input onChange={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ms-3 ${agree ? 'text-success' : 'text-danger'}`} htmlFor="terms">Accept EG GROCERY Terms and Condition</label>
                <input disabled={!agree} className='w-50 d-block mx-auto mt-3' style={{ backgroundColor: "#00896F", color: "#ffffff" }} type="submit" value="Register" />
            </form>
            <div className='text-center'>
                <p>Already have an account ? <span style={{ color: "#00896F" }}><Link to="/login" style={{ color: "#00896F" }} className='text-decoration-none pe-auto'>Please Login</Link></span></p>
            </div>
        </div>
    );
};

export default Register;