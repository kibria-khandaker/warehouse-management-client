import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useStockproduct from '../../hooks/useStockproduct';

const InventoryItemeBlog = () => {
    const navigate = useNavigate()
    const productDetails = _id => {
        navigate(`/inventory/${_id}`)
    }

    const { id } = useParams();

    const [fruits] = useStockproduct()
    const [singleFruit, setSingleFruit] = useState({});

    useEffect(() => {
        let singleFruit = fruits?.find(p => p?._id == id)
        setSingleFruit(singleFruit);
    }, [id, fruits])
    
    return (
        <div className=' container'>
            <div className="row">
                <div className="col-md-8 mx-auto my-5 py-5">
                    <div className="row  mb-5 pb-5">
                        <img className='col-md-6 mx-auto' src={singleFruit?.img} alt="imageFruit" />
                        <div className='col-md-6 text-center'>
                            <p className='fw-bold'>Name: {singleFruit?.name}</p>
                            <small >
                                Supplier: {singleFruit?.supplier} ||
                                Quality: {singleFruit?.quality} ||
                                Price: {singleFruit?.price} ||
                                InStock: {singleFruit?.inStock}
                            </small>
                            <p className='mt-3'> {singleFruit?.shortDesc} </p>

                            <Button size='sm' onClick={() => productDetails(singleFruit?._id)} className='btn myBrandBgColor border-0 btn-outline-success text-white'> Updated Stock </Button> <br />

                            <Link className='my-2 d-inline-block myBrandBgColor py-1 px-2 rounded-3 text-white text-decoration-none' to={'/ManageInventories'}> Manage Inventories </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryItemeBlog;