import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { auth } from '../../../firebase.init';
import SignUpImg from '../../../images/signUpImg.jpg';
import LoadingSpinner from './LoadingSpinner';
import './UserAuth.css';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    const [userAuth] = useAuthState(auth);
    let errorElement;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // old user redirect to login
    const navigate = useNavigate();

    if (loading || updating) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (error) {
        errorElement = <p className=' text-danger'>Error: {error?.message} </p>
    }

    const handleRegister = async (event) => {

        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        if (user) {
            if (!user) {
                return (alert('your email already used') + navigate('/login'))
            } else {
                navigate('/home');
            }
        }

    }

    return (
        <div className=' container'>
            <div className="row py-5">
                <div className='col-md-5 p-5'>
                    <img className='w-100' src={SignUpImg} alt="" />
                </div>
                <div className="col-md-7 mx-auto text-center">

                    {
                        userAuth ? <div className='py-5'>
                            <h5 className=' px-1 fw-light '> You are Login With  : <b> {userAuth?.email}</b> </h5>
                            <p className='text-success'>
                                if you want to sign up with new Account, Place :
                                <Button className=' bg-light border-0 fw-bold text-start rounded-0 text-success' onClick={() => signOut(auth)}>
                                    Logout
                                </Button>
                            </p>
                        </div>
                            : <>
                                {errorElement}
                                <Form onSubmit={handleRegister}>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="text" name="name" placeholder="Enter Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" name="email" placeholder="Enter Email" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" name="password" placeholder="Password" required />
                                    </Form.Group>

                                    <Button className=' border w-100 bg-success text-white rounded-3 p-2 mb-4 ' type="submit">
                                        Sign Up
                                    </Button>

                                </Form>

                                <p>Already have an account? <Link className=' bg-light  p-2 border rounded text-success text-decoration-none' to="/login"> Go to Login </Link> </p>


                                <SocialLogin></SocialLogin>



                            </>
                    }









                    {/* <form className="d-flex flex-column justify-content-center" onSubmit={handleSignUp}>

                        <div>
                            <input className='w-100  border bg-light text-dark rounded-3 p-2 mb-2' type="text" placeholder="Your Name" required />
                        </div>
                        <div>
                            <input className='w-100  border bg-light text-dark rounded-3 p-2 mb-2' type="email" placeholder="Your Email" onChange={handleEmailChange} required />
                            {errors?.email && <p className="error-message">{errors.email}</p>}
                        </div>

                        <div className="relative">
                            <input className='w-100  border bg-light text-dark rounded-3 p-2 mb-2' type="password" placeholder="password" onChange={handlePasswordChange} required />

                            {errors?.password && <p className="error-message">{errors.password}</p>}
                        </div>
                        <input
                            className='w-100   border bg-light text-dark rounded-3 p-2 mb-2'
                            type="password"
                            placeholder="confirm password"
                            onChange={handleConfirmPasswordChange}
                            required
                        />

                        <button className='border bg-success text-white rounded-3 p-2 mb-2'>Sign up</button>

                        
                    </form> */}




                </div>
            </div>
        </div>
    );
};

export default SignUp;