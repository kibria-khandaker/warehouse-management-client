import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";
import useStockproduct from "../../hooks/useStockproduct";

const Chart = () => {
    const [fruits, setFruits] = useStockproduct();
    console.log(fruits);

    return (
        <div className=" container">
        <div className="row">
            <div className="col-md-8 mx-auto d-flex justify-content-center">
                <PieChart width={400} height={400} >
                    <Pie
                        dataKey="inStock"
                        isAnimationActive={false}
                        data={fruits}
                        cx={200}
                        cy={200}
                        outerRadius={150}
                        stroke="#ffffff" 
                        fill="#198754"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </div>
        </div >
       </div >
    );
};

export default Chart;