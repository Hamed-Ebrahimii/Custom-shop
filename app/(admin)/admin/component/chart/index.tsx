"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChartComponent = () => {
    const data = {
        labels: ['فروردین', 'اردیبهشت', 'خراد', 'تیر', 'مرداد','شهریور' ,"مهر" ,"ابان" ,"اذر" ,"دی" ,"بهمن" ,"اسفند" ],
        datasets: [
            {
                label: 'فروش در سال 1402 (میلیون تومان)',
                data: [3, 2, 2, 1, 5, 4],
                fill: false,
                backgroundColor: '#A72F3B',
                borderColor: '#641C23',
                tension: 0.5 // This adds some "curve" to the line
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sales Data',
            },
        },
    };


    return (
        <div className={'w-full mt-10'}>
            <h1 className={"text-xl font-bold text-red-500"}>میزان فروش در یک سال</h1>
            <Line data={data} />
        </div>
    );
};

export default LineChartComponent;