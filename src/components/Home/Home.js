import React, { useEffect, useState } from 'react';

const Home = () => {
    const [fruits, setFruits] = useState([]);
    useEffect(()=>{

        // heroku server tested link = working
        // const url = `https://nameless-bastion-84935.herokuapp.com/product`;

        // http://localhost:5000/product server link = working
        const url = `http://localhost:5000/product`;

        fetch(url)
        .then(res=>res.json())
        .then(data=>setFruits(data))
    },[]);

    console.log(fruits);
    return (
        <div>
            Home page {fruits.length}
        </div>
    );
};

export default Home;