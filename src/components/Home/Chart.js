import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";
import useStockproduct from "../../hooks/useStockproduct";

const Chart = () => {
    const [fruits, setFruits] = useStockproduct();
    console.log(fruits);

    return (
        <div className="row">
            <div className="col-md-8 mx-auto d-flex justify-content-center">
                <PieChart width={400} height={400} >
                    <Pie
                        dataKey="quantity"
                        isAnimationActive={false}
                        data={fruits}
                        cx={200}
                        cy={200}
                        outerRadius={150}
                        stroke="#000000" 
                        fill="#ffffff"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </div>
        </div >
    );
};

export default Chart;