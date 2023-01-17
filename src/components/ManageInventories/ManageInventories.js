import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { auth } from '../../firebase.init';
import useStockproduct from '../../hooks/useStockproduct';
import InventoriesItem from './InventoriesItem';

const ManageInventories = () => {

    const [user] = useAuthState(auth)
    const [fruits, setFruits] = useStockproduct();

    // react-hook-form ----------
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        // const url = `http://localhost:5000/product/`
        const url = `http://localhost:5000/product/`
        fetch(url, {
            method: 'POST',
            headers: {
                'authorization': `${user.email} ${localStorage.getItem('accessToken')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(addResult => {
                handleSubmit(addResult)
                reset()
                setFruits([...fruits, addResult.product])
                console.log('Successfully Added:', addResult);
            })
    };

    // BS modal function start ----------
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Your Item
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column gap-2'>
                            <div className=' d-flex justify-content-between gap-3'>
                                <input className='w-50' placeholder='Product Name' {...register("name", { required: true })} />
                                {
                                    user?.email && <input defaultValue={user?.email} className='w-50' readOnly placeholder='Product Email' type="email"  {...register("email")} />
                                }
                            </div>
                            <div className=' d-flex justify-content-between gap-3'>
                                <input className='w-50' placeholder='Product Category' {...register("category", { required: true })} />
                                <select defaultValue={'x'} className='w-50' {...register("quality", { required: true })}>
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

                                <input className='w-75' placeholder='Product image Url' {...register("img", { required: true })} />
                                <input className='w-25' placeholder='inStock Unit /kg' type="number" min="1" step="1" {...register("inStock", { required: true })} />

                            </div>
                            <textarea placeholder='Product Description' {...register("shortDesc", { required: true })} />
                            <input className='bg-success col col-mg-5 col-lg-4 border-0 text-white rounded-3 py-2 mt-2 ' type="submit" value='Add' />
                        </form>
                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button className='text-white btn-outline-success bg-success' onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
    const [modalShow, setModalShow] = React.useState(false);
    // BS modal function end ----------

    return (
        <div className=' container py-5 my-23'>

            <h2 className=' text-center'> All Stock Items Here </h2>
            <p className=' text-center'> You able to Manage All items from here </p>

            {/* xxxxxxxx Modal Button xxxxxxxx */}
            <div className='text-end '>
                <Button size='md' className=' bg-success border-0 btn-outline-success text-white' onClick={() => setModalShow(true)}>
                    Add new item
                </Button>
                <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
            </div>

            {/* xxxxxxxxxxx Single data mapping component xxxxxxxxxxx */}
            <InventoriesItem fruits={fruits} setFruits={setFruits} ></InventoriesItem>

        </div>
    );
};

export default ManageInventories;