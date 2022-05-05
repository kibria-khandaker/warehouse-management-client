import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { auth } from './../../../firebase.init';
import './UserAuth.css';
import LoginImg from '../../../images/loginImg.jpg';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })
    const [signInWithEmailPass, user, loading, loginError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);


    const handleEmailValid = (event) => {
        // const emailRex = /\S+@\S+\.\S+/;
        const emailRex = /^\S+@\S+\.\S+$/; // email format: email@email.com
        const validEmail = emailRex.test(event.target.value);

        if (validEmail) {
            setUserLogin({ ...userLogin, email: event.target.value })
            setErrors({ ...errors, email: "" })
        } else {
            setErrors({ ...errors, email: "invalid the email" })
            setUserLogin({ ...userLogin, email: "" })
        }
    }
    const handlePasswordValid = (event) => {
        // const passRex = /.{6,}/;  // Minimum 6 characters!
        const passRex = /(?=.{3,})/;  // Minimum 8 characters!
        const validPass = passRex.test(event.target.value);

        if (validPass) {
            setUserLogin({ ...userLogin, password: event.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "minimum 3 characters" });
            setUserLogin({ ...userLogin, password: "" })
        }
    }

    const handleLogin = (event) => {
        event.preventDefault();
        console.log(userLogin)
        signInWithEmailPass(userLogin.email, userLogin.password);
    }


    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    useEffect(() => {
        const error = loginError || googleError;
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;

                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!")
                    break;
                default:
                    toast("something went wrong")
            }
        }
    }, [loginError, googleError])

    return (
        <div className=' container'>
            <div className="row py-5">
                <div className='col-md-5'>
                    <img className='w-100' src={LoginImg} alt="" />
                </div>
                <div className="col-md-7 text-center">

                    <Form  className=" d-flex flex-column justify-content-center" onSubmit={handleLogin}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className=' border bg-light text-dark rounded-3 p-2' type="text" placeholder="Your Email" onChange={handleEmailValid} required />                            
                            {errors?.email && <p className="error-message">{errors.email}</p>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className=' border bg-light text-dark rounded-3 p-2' type="password" placeholder="password" onChange={handlePasswordValid} required />
                            {errors?.password && <p className="error-message">{errors.password}</p>}
                        </Form.Group>

                        <Button  className=' border bg-success text-white rounded-3 p-2 mb-4' type="submit">
                            Login
                        </Button>
                        <p>Don't have an account? <Link to="/signup"> Sign up First </Link> </p>
                    </Form>




                    {/* <form className=" d-flex flex-column justify-content-center" onSubmit={handleLogin}>
                        <span>
                            <input className='w-75 mx-auto border bg-light text-dark rounded-3 p-2 mb-2' type="text" placeholder="Your Email" onChange={handleEmailValid} />
                            {errors?.email && <p className="error-message">{errors.email}</p>}
                        </span>

                        <span>
                            <input className='w-75 mx-auto border bg-light text-dark rounded-3 p-2 mb-2' type="password" placeholder="password" onChange={handlePasswordValid} />
                            {errors?.password && <p className="error-message">{errors.password}</p>}
                        </span>

                        <button className='w-75 mx-auto border bg-success text-white rounded-3 p-2 mb-2'>Login</button>
                       
                        <p>Don't have an account? <Link to="/signup"> Sign up First </Link> </p>
                    </form> */}

                    <div className=' my-4 mx-auto divider_div p-4 border' >
                        <span className=' divider_or'>Or</span>
                        <button className='w-100 border-0 rounded-3bg-light text-success mb-2 p-2' onClick={() => signInWithGoogle()}> Login Google Account </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;