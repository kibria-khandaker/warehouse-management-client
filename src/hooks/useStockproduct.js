import { useEffect, useState } from "react";
import { BASE_URL } from './../utils/config';


const useStockproduct = () => {
    

    const [fruits, setFruits] = useState([]);

    useEffect(() => {       
        const url = `${BASE_URL}/product/`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFruits(data))
    }, []);

    return [fruits, setFruits];
}

export default useStockproduct;