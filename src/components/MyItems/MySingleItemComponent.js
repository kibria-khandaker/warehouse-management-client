import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import useStockproduct from '../../hooks/useStockproduct';
import './MyItems.css';

const MySingleItemComponent = ({ myItem }) => {
    const { _id, category, email, img, inStock, name, price, quality, shortDesc, supplier } = myItem;
    // console.log(myItem);

    // for Delete calculation
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
        <div className=' col-md-4 col-lg-3'>
            <div className=' border my-2 rounded p-3'>

                <div className='d-flex justify-content-between align-items-start'>
                    <img width={100} src={img} alt="" />
                    <p  onClick={() => handelForDeleteItems(_id)} className='item_delete_btn d-inline-block rounded fs-3 py-2 d-flex justify-content-center '>
                        <MdDeleteForever />
                    </p>
                </div>

                <div className=' text-capitalize'>
                    <p className='m-0'> ID : <small>{_id}</small> </p>
                    <p className='m-0'> Item Name : <small>{name}</small> </p>
                    <p className='m-0'> Price : <b>${price}</b><sub>/kg</sub> </p>
                    <p className='m-0'> inStock : <b>{inStock}</b> kg </p>
                    <p className='m-0'> quality : <b>{quality}</b> </p>
                    <p className='m-0'> category <b>{category}</b> </p>
                    <p className='m-0'> Supplier : <b>{supplier}</b> </p>
                </div>

            </div>
        </div>
    );
};

export default MySingleItemComponent;