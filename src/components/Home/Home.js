import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useStockproduct from '../../hooks/useStockproduct';
import SingleProductComponent from '../Products/SingleProductComponent';
import BannerSlide from './BannerSlide';
import './Home.css';

const Home = () => {
    const [fruits, setFruits] = useStockproduct();

    return (
        <>
            {/* xxxxxxxxxxxx Slider Section xxxxxxxxxxxx */}
            <div>
                <BannerSlide fruits={fruits}></BannerSlide>
            </div>
            {/* xxxxxxxxxxxx 6 Fruits Stock items Section xxxxxxxxxxxx */}
            <div className=' container'>
                <div className='row pt-5'>
                    <h4 className=' text-center col-md-6 mx-auto fw-light pt-5 mt-5'>
                        Find the perfect and fresh fruit from our stack of fruits. Huge collection, amazing, best quality.
                        <div className='myBrandBgColor w-25 mx-auto mt-3 p-1 opacity-25'></div>
                    </h4>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mx-auto">
                        {
                            fruits.map(fruit => (
                                <SingleProductComponent
                                    key={fruit._id}
                                    fruit={fruit}
                                >

                                </SingleProductComponent>
                            )).slice(0, 6)
                        }
                    </div>
                    <div>
                        <Link to={'/Products'}> SeeMore Stock Items </Link>
                    </div>
                </div>
            </div>
            {/* xxxxxxxxxxxx dfsfsf  xxxxxxxxxxxx  */}




        </>
    );
};

export default Home;