import React from 'react';
import { Button, Table } from 'react-bootstrap';
import useStockproduct from '../../hooks/useStockproduct';

const InventoriesItem = () => {
    const [fruits, setFruits] = useStockproduct();
    const handelForDeleteItems = id => {
        const confirmDelete = window.confirm('Are you Sure to Delete the item');
        if (confirmDelete) {
            const url = `http://localhost:5000/inventory/${id}`
            // const url = `https://nameless-bastion-84935.herokuapp.com/inventory/${id}`
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
    );
};

export default InventoriesItem;