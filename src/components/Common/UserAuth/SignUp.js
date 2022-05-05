import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { auth } from '../../../firebase.init';
import SignUpImg from '../../../images/signUpImg.jpg';
import './UserAuth.css';

const SignUp = () => {
    const [userAuth] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        userError
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    // const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const handleEmailChange = (event) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(event.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }
    };


    const handlePasswordChange = (event) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(event.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: event.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };

    const handleConfirmPasswordChange = (event) => {
        if (event.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: event.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        // const name = event.target.name.value;
        console.log(userInfo);
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        // updateProfile({ displayName: userName.name });
        // console.log('Updated profile',  userName);
    };

    useEffect(() => {
        if (userError || googleError) {
            switch (userError?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!");
                    break;
                default:
                    toast("Something went wrong");
            }
        }
    }, [userError, googleError]);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    return (
        <div className=' container'>
            <div className="row py-5">
                <div className='col-md-5 p-5'>
                    <img className='w-100' src={SignUpImg} alt="" />
                </div>
                <div className="col-md-7 mx-auto text-center">

                    {
                        // user?<small className='fw-lighter px-1'>{user?.displayName}</small>:''
                        userAuth ? <div className='py-5'>
                            <h5 className=' px-1 fw-light '> You Ara already SignUp With  : <b> {userAuth?.email}</b> </h5>
                            <p>
                                if you want to sign up with new Account, Place :
                                <Button className=' bg-light border-0 fw-bold text-start rounded-0 text-success' onClick={() => signOut(auth)}>
                                    Logout
                                </Button>
                            </p>
                        </div>
                            : <>


                                <Form className="d-flex flex-column justify-content-center" onSubmit={handleSignUp}>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control name="name" className='w-100  border bg-light text-dark rounded-3 p-2' type="text" placeholder="Your Name" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control name="email" className='w-100  border bg-light text-dark rounded-3 p-2 ' type="email" placeholder="Your Email" onChange={handleEmailChange} required />
                                        {errors?.email && <p className="error-message">{errors.email}</p>}
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control name="password" className='w-100  border bg-light text-dark rounded-3 p-2 ' type="password" placeholder="password" onChange={handlePasswordChange} required />
                                        {errors?.password && <p className="error-message">{errors.password}</p>}
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control name="confirmPassword" className='w-100 border bg-light text-dark rounded-3 p-2'
                                            type="password"
                                            placeholder="confirm password"
                                            onChange={handleConfirmPasswordChange}
                                            required />
                                    </Form.Group>



                                    <Button className='border bg-success text-white rounded-3 p-2 mb-4' type="submit">
                                        Sign Up
                                    </Button>
                                    <p>Already have an account? <Link to="/login"> Go to Login </Link> </p>
                                </Form>
                                <div className=' my-4 mx-auto divider_div p-4 border' >
                                    <span className=' divider_or'>Or</span>
                                    <button className='w-100 border-0 rounded-3bg-light text-success mb-2 p-2' onClick={() => signInWithGoogle()}>  Sign Up with Google Account </button>
                                </div>

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