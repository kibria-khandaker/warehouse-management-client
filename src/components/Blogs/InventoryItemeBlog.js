import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import useStockproduct from '../../hooks/useStockproduct';
// import useSingleProductDetails from './../../hooks/useSingleProductDetails';


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

    // const [product, setProduct] = useSingleProductDetails(id);
    // const { _id, name, category, supplier, price, inStock, quality, img, shortDesc } = product;
    // const [singlePhoto, setSinglePhoto] = useState({})
    // const [product, setProduct] = useSingleProductDetails()
    // useEffect(() => {
    //     const url = `http://localhost:5000/inventory/${id}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setProduct(data))
    // }, [])

    console.log(singleFruit);
    return (
        <div className=' container'>
            <div className="row">
                <div className="col-md-8 mx-auto my-5 py-5">
                    <div className="row  mb-5 pb-5">
                        {/* 
name, category, supplier, price, inStock, quality, img, shortDesc 
*/}
                        <img className='col-md-6 mx-auto' src={singleFruit?.img} alt="" />
                        <div className='col-md-6 text-center'>
                            <p className='fw-bold'>Name: {singleFruit?.name}</p>
                            <small >
                                Supplier: {singleFruit?.supplier} ||
                                Quality: {singleFruit?.quality} ||
                                Price: {singleFruit?.price} ||
                                InStock: {singleFruit?.inStock}
                            </small>
                            <p className='mt-3'> {singleFruit?.shortDesc} </p>
                            <Button size='sm' onClick={() => productDetails(singleFruit?._id)} className='btn myBrandBgColor border-0 btn-outline-success text-white'> Updated This </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryItemeBlog;