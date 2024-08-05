import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = []
for(let i = 1; i<=31; i++){
    chartData.push({day:i, sale:Math.floor(Math.random() * (100 - 10) + 100)})
}

const chartConfig = {
    sale: {
        label: "sale",
        color: "hsl(var(--chart-1))",
    },
}
const Activity = () => {
    return (
        <Card className="bg-box-color border-none">
            <CardHeader>
                <CardTitle>Activity</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-30">
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            tickMargin={5}
                            axisLine={false}
                        />
                        <YAxis
                            dataKey="sale"
                            tickLine={false}
                            tickMargin={5}
                            height="10"
                            axisLine={false}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <Bar dataKey="sale" fill="hsl(var(--chart-1))" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default Activity