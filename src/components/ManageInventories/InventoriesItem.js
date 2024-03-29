import React from 'react';
import { Table } from 'react-bootstrap';
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from './../../utils/config';

const InventoriesItem = ({fruits, setFruits}) => {

    const handelForDeleteItems = id => {
        const confirmDelete = window.confirm('Are you Sure to Delete the item');
        if (confirmDelete) {
            const url = `${BASE_URL}/inventory/${id}`
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

    const navigate = useNavigate()
    const productDetails = _id => {
        navigate(`/inventory/${_id}`)
    }

    return (
        <div>
            <p>Total Stocked items : <b>{fruits.length}</b> </p>
            <Table  bordered hover>
                <thead>
                    <tr>
                        <th> Image </th>
                        <th> Stocked Items Name/ID </th>
                        <th> Supplier Name/Email </th>
                        <th> Product Quality </th>
                        <th> Price<sub>/kg</sub> </th>
                        <th> in stock </th>
                        <th> Delete </th>
                    </tr>
                </thead>
                <tbody>

                    {/* xxxxxxxx mapping for data fetch xxxxxxxx */}

                    {
                        fruits.map(fruit => (
                            <tr key={fruit._id} >
                                <td><img height={55} className='rounded-3' src={fruit.img} alt="ItemsImage" /></td>
                                <td>
                                    <small><b>Name:</b> {fruit.name}</small> <br />
                                    <small><b>ID:</b> {fruit._id}</small> 
                                </td>
                                <td>
                                    <small>
                                    <b>Supplier Name:</b> {fruit.supplier} <br />
                                        {fruit.email}
                                    </small>
                                </td>
                                <td> {fruit.quality} </td>
                                <td> {fruit.price}<sub>/kg</sub> </td>
                                <td> {fruit.inStock} <small>Kg</small> </td>
                                <td className=' text-end'>
                                    <p className='mb-1'>
                                    <button onClick={() => productDetails(fruit._id)} className='item_Update_btn  border-0 rounded-3 btn-outline-success' >
                                        Update Stock
                                    </button>
                                    </p>
                                    <button onClick={() => handelForDeleteItems(fruit._id)} className='item_delete_btn border-0 rounded-3 btn-outline-success ' >
                                        Delete <MdDeleteForever />
                                    </button>
                                </td>
                            </tr>
                        )).reverse()
                    }
                    
                </tbody>
            </Table>
        </div>
    );
};

export default InventoriesItem;