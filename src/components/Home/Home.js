import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Products from './../Products/Products';

const Home = () => {
    const [fruits, setFruits] = useState([]);
    useEffect(() => {

        // heroku server tested link = working
        // const url = `https://nameless-bastion-84935.herokuapp.com/product`;

        // http://localhost:5000/product server link = working
        // const url = `http://localhost:5000/product`;

        const url = `/fruitsData.json`;

        fetch(url)
            .then(res => res.json())
            .then(data => setFruits(data))
    }, []);

    // console.log(fruits);
    return (
        <div className=' container'>
            Home page {fruits.length}
            <div className=' row'>
                <h4 className=' text-center col-md-7 mx-auto fw-light'> Find the perfect and fresh fruit from our stack of fruits. Huge collection, amazing, best quality. </h4>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mx-auto">
                    {
                        fruits.map(fruit => (
                            <Products
                            key={fruit._id}
                            fruit={fruit}
                            >

                            </Products>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;