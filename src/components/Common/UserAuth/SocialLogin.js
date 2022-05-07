import React from 'react';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import LoadingSpinner from './LoadingSpinner';
import './UserAuth.css'
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (error) {
        errorElement = <p className=' text-danger'>Error: {error?.message} </p>
    }

    if (user) {
        // navigate(from, { replace: true });
        console.log(user);
        // After Login user email & pass send in DB for JWT Token start  ---
        const forTokenUrl = `http://localhost:5000/login`;
        fetch(forTokenUrl, {
            method: 'POST',
            body: JSON.stringify({
                email: user?.user?.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                localStorage.setItem('accessToken', data.token);
                navigate(from, { replace: true })
            });
    }


    return (
        <div className=' my-5 mx-auto divider_div p-4 border' >
            <span className=' divider_or'>Or</span>
            {errorElement}
            <button className='w-100 border-0 rounded-3 fw-bold text-warning mb-2 p-2' onClick={() => signInWithGoogle()}>  With Google Account </button>
        </div>
    );
};

export default SocialLogin;