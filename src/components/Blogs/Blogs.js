import React from 'react';
import useStockproduct from '../../hooks/useStockproduct';

const Blogs = () => {
    const [fruits, setFruits] = useStockproduct();
    return (

        <div className=' container mx-auto px-0'>
            <div className="row row-cols-1 row-cols-lg-2 g-4 mx-auto">

                {
                    fruits.map(fruit => (
                        <div key={fruit._id} className=" g-0">
                            <div className="row g-0 p-3 align-items-center">
                                <div className="col-md-5">
                                    <img src={fruit.img} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title">  {fruit.name}  </h5>
                                        <p className="card-text"> {fruit.shortDesc} </p>
                                        <p className="card-text"><small className="text-muted"> Post Date </small></p>
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

export default Blogs;