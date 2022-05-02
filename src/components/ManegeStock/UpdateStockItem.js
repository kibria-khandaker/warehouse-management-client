import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useSingleProductDetails from '../../hooks/useSingleProductDetails';

const UpdateStockItem = () => {

    const { id } = useParams();
    const [product, setProduct] = useSingleProductDetails(id);
    const { _id, name, category, supplier, price, inStock, quality, img, shortDesc } = product;

    return (
        <div className='container'>
            <div className="row">
                <div className="col-auto col-md-10 col-lg-7 mx-auto py-5">
                    <div className="row px-3">
                        <div className='col-12 rounded-3 mb-4'
                            style={{
                                paddingTop: '200px',
                                backgroundImage: `url(${img})`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                            }}>
                        </div>
                        <div className='col-12'>

                            <div className='my-5'>
                                <p>Product ID : <span className=' text-success'> {id}</span> </p>

                                <div className='d-md-flex justify-content-between'>
                                    <p>Product Name : <span className=' text-success'>{name}</span></p>
                                    <p> Supplier : <span className=' text-success'>{supplier}</span> </p>
                                </div>
                                <div className='d-md-flex justify-content-between'>
                                    <p>Price : <span className=' text-success'>{price}</span> </p>
                                    <p>Available In Stock : <span className=' text-success'> {inStock} </span> </p>
                                </div>
                                <div className='d-md-flex justify-content-between'>
                                    <p> Quality : <span className=' text-success'> {quality} </span> </p>
                                    <p> Stock Type : <spam className=' text-success'> {category} </spam> </p>
                                </div>
                            </div>

                            <div>
                                <div className='d-flex flex-column flex-md-row justify-content-between'>
                                    <Link className='mb-3 bg-success px-2 py-1 rounded-3 text-white text-decoration-none' to={'/ManageInventories'}> Manage Inventories </Link>
                                    <button className='mb-3 bg-success px-2 py-1 rounded-3 text-white border-0'> Delivered </button>
                                </div>

                                <Form className="d-flex">
                                    <FormControl
                                        type="number"
                                        placeholder="Type Number"
                                        className=" border-end-0 rounded-0 rounded-start"
                                        
                                    />
                                    <Button  variant="outline-success" className='w-50 rounded-0 bg-success text-white rounded-end border-start-0 ' > Restock the items</Button>
                                </Form>

                            </div>

                            <p className='my-5 pt-3'> <b> Description : </b> {shortDesc}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateStockItem;