import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Products.css';

const SingleProductComponent  = ({ fruit }) => {
    const { _id,img, name, price, quality, inStock, supplier, shortDesc } = fruit;
    
    const navigate = useNavigate()
    const productDetails = _id => {
        navigate(`/inventory/${_id}`)
    }

    return (
        <div className="col ">
            <div className="card rounded-3 overlay_body">
                <div className="card-header cart_stock_header rounded-top">
                    <h3 className="card-title text-center my-0 text-uppercase"> {name} </h3>
                </div>
                <img src={img} className="card-img-top rounded-top" alt="..." />
                <div className="card-body">
                    <div className=' d-flex justify-content-around'>
                        <h5 className="card-text m-0  fw-light"> Price : $<b>{price}</b><sub>/kg</sub></h5>
                        <h5 className="card-text m-0  fw-light"> Supplier <b className=' text-uppercase'> : {supplier}</b> </h5>
                    </div>
                    <p className="card-text pt-4">{shortDesc}</p>
                    <hr className='myBrandColor' />
                    <div className=' d-flex justify-content-between'>
                        <h5 className="card-text text-center fw-light"> In stock <b className=' text-uppercase'> : {inStock}</b> </h5>
                        <Button size='sm' onClick={() => productDetails(_id)} className='btn myBrandBgColor border-0 btn-outline-success text-white'> Updated {name} Stock </Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleProductComponent;