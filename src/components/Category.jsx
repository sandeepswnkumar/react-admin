import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import assets from '@/assets/asset';

const Category = () => {
    return (
        <Card className="bg-box-color border-none pt-8">
            <CardContent className="">
                <div className="flex justify-between items-center my-5">
                    <div className='flex justify-center items-center'>
                        <img src={assets.goal} alt="" width="60" height="60" />
                        <p className='ml-3'>Goal</p>
                    </div>
                    <div className='w-8 h-8 bg-gray-500 flex justify-center items-center rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 320 512">
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                        </svg>
                    </div>
                </div>

                <div className="flex justify-between items-center my-5">
                    <div className='flex justify-center items-center'>
                        <img src={assets.dish} alt="" width="60" height="60" />
                        <p className='ml-3'>Popular Dishes</p>
                    </div>
                    <div className='w-8 h-8 bg-gray-500 flex justify-center items-center rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 320 512">
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                        </svg>
                    </div>
                </div>

                <div className="flex justify-between items-center my-5">
                    <div className='flex justify-center items-center'>
                        <img src={assets.menu} alt="" width="60" height="60" />
                        <p className='ml-3'>Menus</p>
                    </div>
                    <div className='w-8 h-8 bg-gray-500 flex justify-center items-center rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 320 512">
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                        </svg>
                    </div>
                </div>
                

            </CardContent>
        </Card>
    )
}

export default Category