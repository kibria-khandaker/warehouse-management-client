import React from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import useStockproduct from "../../hooks/useStockproduct";

const Chart = () => {

    const [fruits, setFruits] = useStockproduct();
    // console.log(fruits);

    return (
        <div className=" container">
            <div className="row">
                <div style={{ backgroundImage: 'radial-gradient(red, transparent, transparent)' }} className="col-md-12 my-5 py-5 mx-auto d-flex justify-content-center">

                    <BarChart
                        width={700}
                        height={500}
                        data={fruits}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="price" stackId="a" fill="#8884d8" />
                        <Bar dataKey="inStock" stackId="a" fill="#82ca9d" />
                        <Bar dataKey="supplier" stackId="a" fill="red" />
                        <Bar dataKey="quality" stackId="a" fill="green" />
                    </BarChart>

                </div>
            </div >
        </div >
    );
};

export default Chart;