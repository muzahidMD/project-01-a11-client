import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css'
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

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
        <div className='w-full max-w-md p-4 mx-auto rounded-md shadow-2xl sm:p-8 my-10 border border-gray-300'>
            <h2 className='text-center my-5 text-3xl font-semibold '>Please Register</h2>
            <form onSubmit={handleRegister} className=''>
                <input type="text" name="name" id="" placeholder='Name' />
                <input type="email" name="email" id="" placeholder='Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input onChange={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ms-3 ${agree ? 'text-success' : 'text-danger'}`} htmlFor="terms">Accept EG GROCERY Terms and Condition</label>
                <input disabled={!agree} className='w-50 d-block mx-auto mt-3  text-black bg-lime-400' type="submit" value="Register" />
            </form>
            <div className='text-center'>
                <p>Already have an account ? <span><Link to="/login" className='text-decoration-none pe-auto text-lime-500'>Please Login</Link></span></p>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Register;