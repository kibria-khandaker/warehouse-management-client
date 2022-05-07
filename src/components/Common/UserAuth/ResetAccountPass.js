import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase.init';

const ResetAccountPass = () => {
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    if (error) {
        return (
            <div>
                {/* <p>Error: {error.message}</p> */}
               { toast.warn(' Enter Email ☹ ')}
            </div>
        );
    }
    if (sending) {
        return  toast.success(`Check your Email ⮞ ${email}`); 
    }

    return (
        <div>
            <Form className="d-flex">
                <FormControl
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Type Your Email"
                    className="me-2"
                    aria-label="Reset password"
                    required
                />
                <Button
                    onClick={async () => {
                        await sendPasswordResetEmail(email);
                        alert('Sent email');
                    }}

                    variant="outline-success"> Reset password </Button>
            </Form>
        </div>
    );
};

export default ResetAccountPass;