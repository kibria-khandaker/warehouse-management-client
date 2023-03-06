import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/config";

const useSingleProductDetails = (id) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `${BASE_URL}/inventory/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    return [product, setProduct];
}

export default useSingleProductDetails;