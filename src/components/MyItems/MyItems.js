import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/config';
import { auth } from './../../firebase.init';
import MySingleItemComponent from './MySingleItemComponent';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const email = user?.email;
        const url = `${BASE_URL}/myItems?email=${email}`;
        try {
            fetch(url, {
                headers: {
                    'authorization': `${user.email} ${localStorage.getItem('accessToken')}`,
                }
            })
                .then(res => res.json())
                .then(data => {
                    setMyItems(data)
                })

        } catch (error) {

        }
    }, [user.email])

    return (
        <div className='container'>
            <div className="row py-5 mb-5">
                <div className=' text-center mb-4'>
                    <h3> Your All Items </h3>
                    {
                        user?.displayName && <small>Your Name : <b>{user?.displayName}</b> </small>
                    }
                    <p>Your Email: <b>{user?.email}</b> </p>
                </div>

                {myItems.map(myItem => (
                    <MySingleItemComponent
                        key={myItem._id}
                        myItem={myItem}
                    ></MySingleItemComponent>
                )).reverse()}

                <div className='text-end'>
                    <Link className='  text-white px-2 py-1 rounded text-decoration-none bg-success ' to='/addNewItem'> Add More My Item </Link>
                    <br />
                    <br />
                    <Link
                        className='bg-success my-5 px-2 py-2 rounded-3 text-white text-decoration-none'
                        to={'/ManageInventories'}> Manage Inventories
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyItems;
