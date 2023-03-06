import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useSingleProductDetails from '../../hooks/useSingleProductDetails';
import { BASE_URL } from '../../utils/config';

const UpdateStockItem = () => {
    const { id } = useParams();
    const [product, setProduct] = useSingleProductDetails(id);
    const { _id, name, category, supplier, price, inStock, quality, img, shortDesc } = product;

    //------------  addStock
    const [addStock, setAddStock] = useState()

    const handelStockIncrease = () => {
        const addedStock = (parseInt(inStock) + parseInt(addStock));

        const url = `${BASE_URL}/inventory/${id}`
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                inStock: addedStock,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setAddStock(data)
                window.location.reload()
            });
    };


    //------------ minus Stock
    const [minusStock, setMinusStock] = useState()
    
    const stockDeliveredOneByOne = () => {
        const myClickingMethod = document.getElementById("inStockNumber");
        const minus = myClickingMethod.innerText = inStock - 1;

        const url = `${BASE_URL}/inventory/${id}`
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                inStock: minus,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data2) => {
                setMinusStock(data2)
                window.location.reload()
            });

        window.location.reload();
    }


    return (
        <div className='container'>
            <div className="row">

                <div className="col-md-12 col-lg-10 mx-auto py-0">
                    <div className="row px-3">

                        {/* xxxxxx  stock items Big Image  xxxxxx  */}
                        <div className='col-12 rounded-3 mt-5'
                            style={{
                                paddingTop: '200px',
                                backgroundImage: `url(${img})`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                            }}>
                        </div>

                        {/* xxxxxx  stock items Big Image  xxxxxx  */}
                        <div className='col-12 mt-5 mb-4'>

                            <p>Product ID : <span className=' text-success'> {id}</span> </p>

                            <div className='d-md-flex justify-content-between'>
                                <p>Product Name : <span className=' text-success'>{name}</span></p>
                                <p> Supplier : <span className=' text-success'>{supplier}</span> </p>
                            </div>
                            <div className='d-md-flex justify-content-between'>
                                <p>Price : <span className=' text-success'>{price}</span> </p>

                                {/* ---------- inStock  ------ */}
                                <p>Available In Stock :
                                    <span id='inStockNumber' className=' text-success'>
                                        {inStock}
                                    </span>
                                </p>
                                {/* ---------- inStock  ------ */}

                            </div>
                            <div className='d-md-flex justify-content-between'>
                                <p> Quality : <span className=' text-success'> {quality} </span> </p>
                                <p> Stock Type : <span className=' text-success'> {category} </span> </p>
                            </div>

                        </div>

                        <div className='col-12 d-flex flex-column flex-md-row gap-4 justify-content-between align-items-center border py-3 rounded-3 bg-light'>

                            <div> {/* ------ Delivered or Delete Stock items Button ------ */}
                                <button className='bg-success px-2 py-1 rounded-3 text-white border-0' onClick={() => stockDeliveredOneByOne()}> Delivered </button>
                            </div>

                            <div>
                                <input
                                    onChange={(e) => setAddStock(e.target.value)}
                                    required
                                    type="number"
                                    placeholder='Input A number'
                                    min="1" step="1"
                                    name="number" id=""
                                    className='px-2 py-1 text-success border border-success' />

                                <button onClick={() => handelStockIncrease()} className='bg-success px-2 py-1 text-white border border-success'  >Re-Stock the items</button>
                            </div>

                            <div>
                                <Link
                                    className='bg-success px-2 py-2 rounded-3 text-white text-decoration-none'
                                    to={'/ManageInventories'}> Manage Inventories
                                </Link>
                            </div>

                        </div>

                        <div className='col-12'>
                            <p className='mt-4 mb-5 pt-3'> <b> Item Description : </b> {shortDesc} </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateStockItem;