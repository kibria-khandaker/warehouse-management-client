import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";
import useStockproduct from "../../hooks/useStockproduct";

const Chart = () => {
    const [fruits, setFruits] = useStockproduct();
    // console.log(fruits);
    return (
        <div className=" container">
        <div className="row">
            <div style={{backgroundImage: 'radial-gradient(white, transparent, transparent)'}} className="col-md-10 mx-auto d-flex justify-content-center">
                <PieChart width={350} height={350} >
                    <Pie
                        dataKey="inStock"
                        isAnimationActive={false}
                        data={fruits}
                        cx={165}
                        cy={170}
                        outerRadius={130}
                        stroke="#ffffff" 
                        fill="green"
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