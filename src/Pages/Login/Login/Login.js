import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import './Login.css';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    };

    if (loading) {
        return <Loading></Loading>
    };

    if (error) {
        errorElement = <p className='text-danger text-center mt-3'>Error: {error?.message} </p>;
    };

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        toast("Log in user")
    };

    return (
        <div className='w-full max-w-md p-4 mx-auto rounded-md shadow-2xl sm:p-8 my-10 border border-gray-300'>
            <h2 className='text-center my-5 text-3xl font-semibold'>Please login</h2>
            <form onSubmit={handleSubmit} className=''>
                <input type="email" name="email" id="" placeholder='Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input className='w-50 d-block mx-auto  text-black bg-lime-400' type="submit" value="Login" />
            </form>
            {errorElement}
            <div className='text-center'>
                <p>Don't have an account ? <span><Link to="/register" className='text-decoration-none pe-auto text-lime-500'>Please Register</Link></span></p>
                <SocialLogin />
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;