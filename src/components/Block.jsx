import React from 'react'
import { Card, CardContent,CardHeader, CardTitle, } from "@/components/ui/card"
const Block = ({title,content}) => {
    return (
        <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {content}
            </CardContent>
        </Card>
    )
}

export default Block