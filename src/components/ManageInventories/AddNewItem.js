import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';
import { BASE_URL } from './../../utils/config';

const AddNewItem = () => {
    
    const [user] = useAuthState(auth)

    // react-hook-form ----------
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        const url = `${BASE_URL}/product/`
        fetch(url, {
            method: 'POST',
            headers: {
                'authorization':`${user.email} ${localStorage.getItem('accessToken')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(addResult => {
                handleSubmit(addResult)
                reset()
                
                toast(addResult.success);
                
                console.log('Successfully Added:', addResult);                
            })
    };

    return (
        <div className=' container'>
            <div className='row py-5 mb-5'>
                <div className=' col-md-8 mx-auto py-5'>
                    <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column gap-2'>
                        <div className=' d-flex justify-content-between gap-3'>
                            <input className='w-50' placeholder='Product Name' {...register("name", { required: true })} />
                            {
                                user?.email && <input defaultValue={user?.email} className='w-50' readOnly placeholder='Product Email' type="email"  {...register("email")} />
                            }
                        </div>
                        <div className=' d-flex justify-content-between gap-3'>
                            <input className='w-50' placeholder='Product Category' {...register("category", { required: true })} />
                            <select defaultValue={'x'} className='w-50' {...register("quality")}>
                                <option value="x" disabled hidden> Product Quality </option>
                                <option value="Normal"> Normal </option>
                                <option value="Good"> Good </option>
                                <option value="Best"> Best </option>
                                <option value="Bad"> Bad </option>
                            </select>
                        </div>
                        <div className=' d-flex justify-content-between gap-3'>
                            {
                                user?.displayName && <input defaultValue={user?.displayName} readOnly className='w-75' placeholder='Supplier Name' {...register("supplier")} />
                            }
                            <input className='w-25' placeholder='Product Price' type="number" min="1" step="1" {...register("price", { required: true })} />
                        </div>
                        <div className=' d-flex justify-content-between gap-3'>
                            <input className='w-75' placeholder='Product image Url'{...register("img", { required: true })} />
                            <input className='w-25' placeholder='inStock Unit /kg' type="number" min="1" step="1" {...register("inStock", { required: true })} />

                        </div>
                        <textarea placeholder='Product Description' {...register("shortDesc", { required: true })} />
                        <input className='bg-success col col-mg-5 col-lg-4 border-0 text-white rounded-3 py-2 mt-2 ' type="submit" value='Add' />
                    </form>


                    <div className=' d-flex justify-content-between'>
                        <Link className=' d-inline-block myBrandBgColor my-5 px-3 py-2 rounded-3 text-white text-decoration-none' to={'/myitems'}> See My All Items </Link>
                        <Link className=' d-inline-block myBrandBgColor my-5 px-3 py-2 rounded-3 text-white text-decoration-none' to={'/ManageInventories'}> Manage Inventories </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddNewItem;