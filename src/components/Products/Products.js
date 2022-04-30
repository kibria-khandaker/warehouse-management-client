import React from 'react';
import './Products.css'
import { Link } from 'react-router-dom';
import useStockproduct from './../../hooks/useStockproduct';

const Products = () => {
    const [fruits, setFruits] = useStockproduct();

    return (
<div className=' container py-5 my-5'>
<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mx-auto">
            {
                fruits.map(fruit => (
                    <div className="col " key={fruit._id}>
                        <div className="card rounded-3 overlay_body">
                            <img src={fruit.img} className="card-img-top rounded-top" alt="..." />
                            <div className="card-header cart_stock_header rounded-top">
                                <h3 className="card-title text-center my-0 text-uppercase"> {fruit.name} </h3>
                            </div>
                            <div className="card-body">
                                <div className=' d-flex justify-content-around'>
                                    <h5 className="card-text m-0  fw-light"> Price : $<b>{fruit.price}</b><sub>/kg</sub></h5>
                                    <h5 className="card-text m-0  fw-light"> Supplier <b className=' text-uppercase'> : {fruit.supplier}</b> </h5>
                                </div>
                                <p className="card-text pt-4">{fruit.shortDesc}</p>
                                <hr className='myBrandColor' />
                                <div className=' d-flex justify-content-between'>
                                    <h5 className="card-text text-center fw-light"> In stock <b className=' text-uppercase'> : {fruit.quantity}</b> </h5>
                                    <Link to="/ManegeStock" className="btn myBrandBgColor text-white update_btn"> Updated Stock </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                ))
            }

        </div>
</div>
    );
};

export default Products;