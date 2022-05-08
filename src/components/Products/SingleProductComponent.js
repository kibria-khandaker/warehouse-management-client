import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Products.css';

const SingleProductComponent = ({ fruit }) => {
    const { _id, img, name, price, quality, inStock, supplier, shortDesc } = fruit;

    const navigate = useNavigate()
    const productDetails = _id => {
        navigate(`/inventory/${_id}`)
    }

    return (
        <div className="col">
            <div className="card rounded-3 overlay_body">
                <div className="card-header cart_stock_header rounded-top">
                    <h3 className="card-title text-center my-0 text-uppercase"> {name} </h3>
                </div>
                <img src={img} className="card-img-top rounded-top" alt="..." />
                <div className="card-body">
                    <div className=' d-flex justify-content-between'>
                        <h5 className="card-text m-0  fw-light"> Price : $<b>{price}</b><sub>/kg</sub></h5>
                        <h6 className="card-text m-0  fw-light"> Supplier <b className=' text-uppercase'> : {supplier}</b> </h6>
                    </div>
                    <p className="card-text pt-4">

                        {shortDesc.length < 95? shortDesc.length : shortDesc.slice(0, 95)}
                        <Button  size='sm' className='read-more bg-transparent border-0 text-success' onClick={() => navigate(`/itemDetails/${fruit._id}`)} >
                            ... Read Details
                        </Button>
                    </p>
                    <hr className='myBrandColor' />
                    <div className=' d-flex justify-content-between'>
                        <h6 className="card-text text-center fw-light"> In stock: <b>{inStock} kg</b> </h6>
                        <Button size='sm' onClick={() => productDetails(_id)} className='btn myGreenBtn border-0 btn-outline-success text-white'> Updated {name} Stock </Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleProductComponent;