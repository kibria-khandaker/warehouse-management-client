import React from 'react';
import notFound from '../../images/notFound_404.gif'
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div className='container-fluid' style={{backgroundColor:'#aff0e4'}}>
            <div className='row'>
                <div className="col-md-8 d-flex flex-column mx-auto text-center">
                    <h2 className='text-success mt-5'> Oppss...! </h2>
                    <img className='w-75 mx-auto' src={notFound} alt="" />
                    <Link className='text-success fs-3 fw-lighter mb-5' to={'/'}>Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;