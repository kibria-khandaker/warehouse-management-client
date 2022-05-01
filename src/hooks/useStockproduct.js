import { useEffect, useState } from "react";

const useStockproduct = () => {
    const [fruits, setFruits] = useState([]);
    useEffect(() => {

        // heroku server tested link = working
        // const url = `https://nameless-bastion-84935.herokuapp.com/product`;

        // http://localhost:5000/product server link = working
        const url = `http://localhost:5000/product`;

        // const url = `/fruitsData.json`;

        fetch(url)
            .then(res => res.json())
            .then(data => setFruits(data))
    }, []);

    return [fruits, setFruits];
}

export default useStockproduct;