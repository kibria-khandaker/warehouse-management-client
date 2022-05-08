import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase.init';
import LoadingSpinner from './LoadingSpinner';

const RequireAuth = ({ children }) => {

    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    const [user, loading] = useAuthState(auth)
    const location = useLocation();
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }

    /**
     * You Can Comment Out the code for testing purposes
     * if you want to Comment Line from 26 to 47 or ( Start SS to End EE do Comment )
     */

    // user Email emailVerified start ------------ Start SS
    if (!user.emailVerified) {
        return (
            <div className=' container py-5 my-5 text-center'>
                <h4 className=' text-danger'> Your Email Not verified </h4>
                <h5 className=' text-warning my-3'>  Please Click to Verify </h5>

                <button
                    className=' border-0 bg-success text-white rounded-1 px-4 py-2'
                    onClick={async () => {
                        await sendEmailVerification();
                        toast('Sent email');
                    }}
                >
                    Verify email
                </button>

            </div>
        )

    }
    // user Email emailVerified end ----------- End EE

    return children;
};

export default RequireAuth;