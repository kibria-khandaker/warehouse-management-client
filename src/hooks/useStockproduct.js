import { useEffect, useState } from "react";

const useStockproduct = () => {
    
    const [fruits, setFruits] = useState([]);

    useEffect(() => {

        // const url = `https://food-warehouse-ga7or0h57-kibria-khandaker.vercel.app/product`;
        const url = `https://food-warehouse-ga7or0h57-kibria-khandaker.vercel.app/product/`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFruits(data))
    }, []);

    return [fruits, setFruits];
}

export default useStockproduct;