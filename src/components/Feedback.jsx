import React from 'react'
import { Ratings } from './ui/Rating'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Feedback = ({name,rate,comment}) => {
    return (
        <div className='mb-6 [&:not(:last-child)]:border-b border-gray-600 pb-4 '>
            <div className='flex items-center mb-3'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className='ml-3'>{name}</span>
            </div>
            <div className='mb-2'>
                <Ratings rating={rate} />
            </div>
            <div>
                {comment} 
            </div>
        </div>
    )
}

export default Feedback