import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import LoginImg from '../../../images/loginImg.jpg';
import { auth } from './../../../firebase.init';
import LoadingSpinner from './LoadingSpinner';
import SocialLogin from './SocialLogin';
import './UserAuth.css';

const Login = () => {
const [email, setEmail]=useState()


    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorText;

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (error) {
        errorText = <p className=' text-danger'>Error: {error?.message} </p>
    }


    if (user) {
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

        // After Login user email & pass send in DB for JWT Token end  ---

    }


    const handleToSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
        // console.log(email);
    }


    const resetPassword = async (e) => {
        if (email) {
        await sendPasswordResetEmail(email);
            toast.success(`Check your Email ⮞ ${email}`);
        } else {
            toast.warn(' Enter Email ☹ in Email field');
        }
    }

    return (
        <div className=' container'>
            <div className="row py-5">
                <div className='col-md-5'>
                    <img className='w-100' src={LoginImg} alt="" />
                </div>
                <div className="col-md-7 text-center">
                    <Form onSubmit={handleToSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" name="password" placeholder="Password" />
                        </Form.Group>

                        <Button className=' border w-100 bg-success text-white rounded-3 p-2 mb-4 ' type="submit">
                            Login
                        </Button>
                    </Form>
                    <div className=''>

                        {errorText}
                        <p className='m-0 mt-4'> Forget Password?
                            <button onClick={resetPassword} className='  p-2 border rounded  text-success text-decoration-none'> Reset Password </button>
                        </p>

                        <p className='mt-3'> Are You new, Have't an account? <Link className=' bg-light  p-2 border rounded text-success text-decoration-none' to="/signup"> Sign Up First  </Link> </p>
                    </div>

                    <SocialLogin></SocialLogin>

                </div>
            </div>
        </div>
    );
};

export default Login;