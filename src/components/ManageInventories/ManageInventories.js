import React from 'react';
import { Button, Table } from 'react-bootstrap';
import useStockproduct from '../../hooks/useStockproduct';

const ManageInventories = () => {
    const [fruits, setFruits] = useStockproduct();
    return (
        <div className=' container py-5 my-23'>
            <div className='text-end mb-4'>
                <Button size='md' className=' bg-success border-0 btn-outline-success text-white' > Add new item </Button>
            </div>
            <div>
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
                                <tr>
                                    <td><img height={30} src={fruit.img} alt="" /></td>
                                    <td>{fruit._id}</td>
                                    <td>{fruit.name}</td>
                                    <td>{fruit.supplier}</td>
                                    <td> {fruit.quality} </td>
                                    <td> {fruit.inStock} <sup>kg</sup> </td>
                                    <td> <Button size="sm" className=' text-white bg-success border-0 btn-outline-success ' >Delete</Button> </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageInventories;