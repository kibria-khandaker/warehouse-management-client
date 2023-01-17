import { useEffect, useState } from "react";

const useSingleProductDetails = (id) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        // const url = `https://food-warehouse-ga7or0h57-kibria-khandaker.vercel.app/inventory/${id}`;
        const url = `https://food-warehouse-ga7or0h57-kibria-khandaker.vercel.app/inventory/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    return [product, setProduct];
}

export default useSingleProductDetails;