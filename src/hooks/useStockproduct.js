import { useEffect, useState } from "react";

const useStockproduct = () => {
    
    const [fruits, setFruits] = useState([]);

    useEffect(() => {

        // const url = `http://localhost:5000/product`;
        const url = `https://nameless-bastion-84935.herokuapp.com/product`;

        fetch(url)
            .then(res => res.json())
            .then(data => setFruits(data))
    }, []);

    return [fruits, setFruits];
}

export default useStockproduct;