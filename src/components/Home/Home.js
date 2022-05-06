import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useStockproduct from '../../hooks/useStockproduct';
import footerLogo from '../../images/logo.png';
import SingleProductComponent from '../Products/SingleProductComponent';
import BannerSlide from './BannerSlide';
import './Home.css';
import Chart from './Chart'
import { MdOutgoingMail } from "react-icons/md";

const Home = () => {
    const [fruits, setFruits] = useStockproduct();
    const navigate = useNavigate();
    return (
        <>
            {/* xxxxxxxxxxxx Slider Section xxxxxxxxxxxx */}
            <div>
                <BannerSlide fruits={fruits}></BannerSlide>
            </div>
            {/* xxxxxxxxxxxx 6 Fruits Stock items Section xxxxxxxxxxxx */}
            <div className='container'>
                <div className='row pt-5 '>
                    <h4 className='col-auto text-center col-md-6 mx-auto fw-light pt-5 mt-5 mb-0'>
                        Find the perfect and fresh fruit from our stack of fruits. Huge collection, amazing, best quality.
                        <div className='myBrandBgColor w-25 mx-auto mt-3 p-1 opacity-25 pb-0'></div>
                    </h4>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-0 g-4 px-3 mx-auto">
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
                    <div className='row'>
                        <div className='col text-center m-5 pb-5'>
                            <Link className=' d-inline-block myBrandBgColor px-3 py-2 rounded-3 text-white text-decoration-none' to={'/ManageInventories'}> Manage Inventories </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* xxxxxxxxxxxx promotion section  xxxxxxxxxxxx  */}
            <div className='promotion_section'>
                <div className=' container'>
                    <div className="row align-items-center">

                        <div className="col-lg-8   text-center text-lg-start">
                            <h1 className=' fw-normal '> Any Question From you?  </h1>
                            <h4 className=' fw-lighter'>
                                <b>Have any Question About our products? or About "Fruits-Stock-house"?</b>    no problem,  you can ask without any confusion. Because we are able to describe our all products transparency. And we know clearly about the quality of "Fruits-Stock-house" fruits.
                            </h4>
                        </div>
                        <div className='col-12 col-lg-4 text-center text-lg-end mt-5 mt-lg-0 '>
                            <a className='px-4 py-3 fs-4 rounded-3 bg-success border-1 text-white text-decoration-none border-white' href = "mailto: abc@example.com">For any inquiry <MdOutgoingMail> </MdOutgoingMail> </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* xxxxxxxxxxxx Blog section  xxxxxxxxxxxx  */}
            <div className=' container my-5 py-5 mx-auto px-0'>
                <h2 className=' text-center my-5 py-5'>Out Fruit Article</h2>
                <div className="row row-cols-1 row-cols-lg-2 g-4 mx-auto">
                    {
                        fruits.map(fruit => (
                            <div key={fruit._id} className=" g-0">
                                <div className="row g-0 p-3 align-items-center">
                                    <div className="col-md-5 ">
                                        <img src={fruit.img} className="w-100 img-fluid blog_mg" alt="..." />
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-body">
                                            <h5 className="card-title">  {fruit.name}  </h5>
                                            <p className="card-text">
                                                {fruit.shortDesc.length < 200 ? fruit.shortDesc : fruit.shortDesc.slice(0, 200)}
                                                <Button size='sm' className='read-more bg-transparent border-0 text-success'
                                                    onClick={() => navigate(`/itemDetails/${fruit._id}`)}
                                                >
                                                    ... Read More
                                                </Button>
                                            </p>
                                            <p className="card-text"><small className="text-muted"> {fruit._id} </small></p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )).slice(0, 4)
                    }
                </div>
            </div>

            {/* xxxxxxxxxxxx Footer Banner section  xxxxxxxxxxxx  */}
            <div className=' container-fluid home_footer_banner text-center'>
                <img className='w-25' src={footerLogo} alt="" />
                <div className='chart_div py-4'>
                <Chart></Chart>
                </div>
            </div>


        </>
    );
};

export default Home;



// border-top-left-radius: 13.25rem!important;
// border-bottom-left-radius: 7.25rem!important;
// border-top-right-radius: 19.25rem!important;
// border-bottom-right-radius: 0rem!important;import Chart from './Chart';
