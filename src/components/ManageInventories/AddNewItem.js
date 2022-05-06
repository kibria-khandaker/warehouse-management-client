import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const AddNewItem = () => {
    // react-hook-form ----------
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/product/`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(addResult => {
                console.log('Successfully Added:', addResult);
            })
    };
    return (
        <div className=' container'>
            <div className='row py-5 mb-5'>
                <div className=' col-md-8 mx-auto py-5'>
                    <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column gap-2'>
                        <div className=' d-flex justify-content-between gap-3'>
                            <input className='w-50' placeholder='Product Name' {...register("name")} />
                            <input className='w-50' placeholder='Product Email' type="email"  {...register("email")} />
                        </div>
                        <div className=' d-flex justify-content-between gap-3'>
                            <input className='w-50' placeholder='Product Category' {...register("category")} />
                            <select className='w-50' {...register("quality")}>
                                <option value="--" selected disabled hidden> Product Quality </option>
                                <option value="Normal"> Normal </option>
                                <option value="Good"> Good </option>
                                <option value="Best"> Best </option>
                                <option value="Bad"> Bad </option>
                            </select>
                        </div>
                        <div className=' d-flex justify-content-between gap-3'>
                            <input className='w-75' placeholder='Supplier Name' {...register("supplier")} />

                            <input className='w-25' placeholder='Product Price' type="number" {...register("price")} />
                        </div>
                        <div className=' d-flex justify-content-between gap-3'>
                            <input className='w-75' placeholder='Product image Url' {...register("img")} />
                            <input className='w-25' placeholder='inStock Unit /kg' type="number" {...register("inStock")} />

                        </div>
                        <textarea placeholder='Product Description' {...register("shortDesc")} />
                        <input className='bg-success col col-mg-5 col-lg-4 border-0 text-white rounded-3 py-2 mt-2 ' type="submit" value='Add' />
                    </form>
                    <Link className=' d-inline-block myBrandBgColor my-5 px-3 py-2 rounded-3 text-white text-decoration-none' to={'/ManageInventories'}> Manage Inventories </Link>
                </div>
            </div>
        </div>
    );
};

export default AddNewItem;