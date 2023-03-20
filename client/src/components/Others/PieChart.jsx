import React, { useState, useEffect } from 'react';

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(CategoryScale);

export default function PieChart({ statusData }) {
    const [chartData, setChartData] = useState({
        datasets: [
            {
                label: 'Status',
                data: statusData.map(item => 1),
                backgroundColor: statusData.map(status => status.viewed? 'grey': 'purple'),
                borderColor: "white",
                borderWidth: 2
            }
        ]
    });

    return (
        <div className="chart-container w-[68px] flex justify-center items-center bg-red-500 pb-[2px]">
            <Pie
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: false,
                        }
                    }
                }}
            />
        </div>
    );
}