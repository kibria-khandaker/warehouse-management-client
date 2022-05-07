import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { auth } from '../../firebase.init';
import InventoriesItem from './InventoriesItem';
import Products from './../Products/Products';
import useStockproduct from '../../hooks/useStockproduct';

const ManageInventories = () => {
    const [user] = useAuthState(auth)
    const [fruits, setFruits] = useStockproduct();
    // react-hook-form ----------
    const { register, handleSubmit, reset  } = useForm();
    const onSubmit = data => {
        // console.log(data)
        const url = `http://localhost:5000/product/`
        // const url = `https://nameless-bastion-84935.herokuapp.com/product/`
        fetch(url, {
            method: 'POST', // or 'PUT'
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
                setFruits([...fruits,addResult.product])
                console.log('Successfully Added:', addResult);
            })
             

        // const remainRefresh = fruits.filter(fruit => fruit._id !== data)
        // setFruits(...fruits, remainRefresh)
        // setFruits(remainRefresh)                
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
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <div>
                        {/* name , category , supplier , price , inStock , quality , img , shortDesc , */}
                        <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column gap-2'>
                            <div className=' d-flex justify-content-between gap-3'>
                                <input className='w-50' placeholder='Product Name' {...register("name")} />
                                {user?.email && <input defaultValue={user?.email} className='w-50' readOnly placeholder='Product Email' type="email"  {...register("email")} />}
                            </div>
                            <div className=' d-flex justify-content-between gap-3'>
                                <input className='w-50' placeholder='Product Category' {...register("category")} />
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
                                <input className='w-25' placeholder='Product Price' type="number" min="1" step="1" {...register("price")} />

                            </div>
                            <div className=' d-flex justify-content-between gap-3'>

                                <input className='w-75' placeholder='Product image Url' {...register("img")} />
                                <input className='w-25' placeholder='inStock Unit /kg' type="number" min="1" step="1" {...register("inStock")} />

                            </div>
                            <textarea placeholder='Product Description' {...register("shortDesc")} />
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


    // const handelForDeleteItems = id => {
    //     const confirmDelete = window.confirm('Are you Sure to Delete the item');
    //     if (confirmDelete) {
    //         const url = `http://localhost:5000/inventory/${id}`
    // //        const url = `https://nameless-bastion-84935.herokuapp.com/inventory/${id}`
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data)

    //                 const remainingItems = fruits.filter(fruit => fruit._id !== id)
    //                 setFruits(remainingItems)
    //             })
    //     }
    // }

    return (
        <div className=' container py-5 my-23'>
            <h2 className=' text-center'> All Stock Items Here </h2>
            <p className=' text-center'> You able to Manage All items from here </p>
            <div className='text-end '>
                <Button size='md' className=' bg-success border-0 btn-outline-success text-white' onClick={() => setModalShow(true)}>
                    Add new item
                </Button>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
            <InventoriesItem
            fruits={fruits}
            setFruits={setFruits}
            ></InventoriesItem>
            <>
                {/* <div>
                [fruits, setFruits] 
                    <p>Total Stocked items : <b>{fruits.length}</b> </p>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th> Image </th>
                                <th> ID </th>
                                <th> Stocked Items Name </th>
                                <th> Supplier </th>
                                <th> Product Quality </th>
                                <th> in stock </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                fruits.map(fruit => (
                                    <tr key={fruit._id}>
                                        <td><img height={30} src={fruit.img} alt="" /></td>
                                        <td>{fruit._id}</td>
                                        <td>{fruit.name}</td>
                                        <td>{fruit.supplier}</td>
                                        <td> {fruit.quality} </td>
                                        <td> {fruit.inStock} <sup>kg</sup> </td>
                                        <td> <Button onClick={() => handelForDeleteItems(fruit._id)} size="sm" className=' text-white bg-success border-0 btn-outline-success ' >Delete</Button> </td>
                                    </tr>
                                )).reverse()
                            }
                        </tbody>
                    </Table>
                </div> */}
            </>
        </div>
    );
};

export default ManageInventories;