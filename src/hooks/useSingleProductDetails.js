import { useEffect, useState } from "react";

const useSingleProductDetails = (id) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        // const url = `https://nameless-bastion-84935.herokuapp.com/inventory/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    return [product, setProduct];
}

export default useSingleProductDetails;