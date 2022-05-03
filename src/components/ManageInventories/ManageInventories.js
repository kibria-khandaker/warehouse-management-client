import React from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useStockproduct from '../../hooks/useStockproduct';

const ManageInventories = () => {
    const [fruits, setFruits] = useStockproduct();

    // react-hook-form ----------
    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/product/`
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(addResult => {
                
                console.log('Successfully Added:', addResult);
                // const remainRefresh = fruits.filter(fruit => fruit._id !== data)
                // setFruits(...fruits, remainRefresh)
                // setFruits(remainRefresh)                
            })
    };

    // BS modal function ----------
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
                            <span className=' d-flex justify-content-between gap-3'>
                                <input className='w-75' placeholder='Product Name' {...register("name")} />
                                <input className='w-25' placeholder='Product Price' type="number" {...register("price")} />
                            </span>
                            <span className=' d-flex justify-content-between gap-3'>
                                <input className='w-75' placeholder='Product Category' {...register("category")} />
                                <input className='w-25' placeholder='inStock Unit /kg' type="number" {...register("inStock")} />
                            </span>
                            <span className=' d-flex justify-content-between gap-3'>
                                <input className='w-75' placeholder='Supplier Name' {...register("supplier")} />
                                <select className='w-25' {...register("quality")}>
                                    <option value="--" selected disabled hidden> Product Quality </option>
                                    <option value="Normal"> Normal </option>
                                    <option value="Good"> Good </option>
                                    <option value="Best"> Best </option>
                                    <option value="Bad"> Bad </option>
                                </select>
                            </span>
                            <input placeholder='Product image Url' {...register("img")} />
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

    //  ----------
    const handelForDeleteItems = id => {
        const confirmDelete = window.confirm('Are you Sure to Delete the item');
        if (confirmDelete) {
            const url = `http://localhost:5000/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    const remainingItems = fruits.filter(fruit => fruit._id !== id)
                    setFruits(remainingItems)
                })
        }
    }



    return (
        <div className=' container py-5 my-23'>
            <div className='text-end mb-2'>
                <Button size='md' className=' bg-success border-0 btn-outline-success text-white' onClick={() => setModalShow(true)}>
                    Add new item
                </Button>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
            <div>
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
            </div>
        </div>
    );
};

export default ManageInventories;