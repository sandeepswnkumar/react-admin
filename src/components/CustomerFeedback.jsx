import React from 'react'
import Feedback from './Feedback'
import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card"

const CustomerFeedback = () => {
    return (
        <Card className="bg-box-color border-none">
            <CardHeader>
                <CardTitle>Customer's Feedback</CardTitle>
            </CardHeader>
            <CardContent className="max-h-[500px]  customer-feeback overflow-y-scroll mr-2 mb-5">
                <Feedback name="Sandeep Gupta" rate="5" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quis dignissimos dolorum a fugiat asperiores placeat explicabo maxime eveniet" />
                <Feedback name="Sandeep Gupta" rate="5" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quis dignissimos dolorum a fugiat asperiores placeat explicabo maxime eveniet"  />
                <Feedback name="Sandeep Gupta" rate="5" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quis dignissimos dolorum a fugiat asperiores placeat explicabo maxime eveniet"  />
                <Feedback name="Sandeep Gupta" rate="5" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quis dignissimos dolorum a fugiat asperiores placeat explicabo maxime eveniet"  />
                <Feedback name="Sandeep Gupta" rate="5" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quis dignissimos dolorum a fugiat asperiores placeat explicabo maxime eveniet"  />
                <Feedback name="Sandeep Gupta" rate="5" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quis dignissimos dolorum a fugiat asperiores placeat explicabo maxime eveniet"  />
            </CardContent>
        </Card>
    )
}

export default CustomerFeedback