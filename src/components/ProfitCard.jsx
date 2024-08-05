import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Chart from "react-apexcharts";

const ProfitCard = () => {
    const chartData = [
        { browser: "safari", visitors: 200, fill: "hsl(var(--chart-2))" },
    ]

    const [series, setSeries] = new useState([70]);

    const option = {
        plotOptions: {
            radialBar: {
                track: {
                    background: "#f2f2f2",
                    strokeWidth: "100%",
                },
                dataLabels: {
                    show: true,
                    value: {
                        show: false,
                        fontSize: "14px",
                    },
                    total: {
                        show: true,
                        label: series + "%",
                        color: "white",
                        
                    },
                },
            },
        },
    }


    return (
        <Card className="bg-box-color border-none pt-2 w-full">
            <CardContent className="flex justify-between flex-wrap">
                <div>
                    <p className='mb-3 mt-2'>Net Profit</p>
                    <div className='flex justify-center'>
                        <div>
                            <h1 className='text-5xl font-bold'>$6759.25</h1>
                            <p className='flex items-center font-bold mt-3 text-green-600'>
                                <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="green" d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" /></svg>
                                <span>3%</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <Chart
                        options={option}
                        series={series}
                        type="radialBar"
                        width="220"
                    />
                </div>

            </CardContent>
        </Card>
    )
}

export default ProfitCard