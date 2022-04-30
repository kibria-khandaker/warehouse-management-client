import React from 'react';
import './Products.css'
import { Link } from 'react-router-dom';

const Products = ({ fruit }) => {
    const { img, name, price, quality, quantity, supplier, shortDesc } = fruit;
    console.log(fruit);
    return (
        <div className="col ">
            <div className="card rounded-3 overlay_body">
                <img src={img} className="card-img-top rounded-top" alt="..." />
                <div className="card-header cart_stock_header rounded-top">
                    <h3 className="card-title text-center my-0 text-uppercase"> {name} </h3>
                </div>
                <div className="card-body">
                    <div className=' d-flex justify-content-around'>
                        <h5 className="card-text m-0  fw-light"> Price : $<b>{price}</b><sub>/kg</sub></h5>
                        <h5 className="card-text m-0  fw-light"> Supplier <b className=' text-uppercase'> : {supplier}</b> </h5>
                    </div>
                    <p className="card-text pt-4">{shortDesc}</p>
                    <hr className='myBrandColor' />
                    <div className=' d-flex justify-content-between'>
                        <h5 className="card-text text-center fw-light"> In stock <b className=' text-uppercase'> : {quantity}</b> </h5>
                        <Link to="/ManegeStock" className="btn myBrandBgColor text-white update_btn"> Updated Stock </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Products;