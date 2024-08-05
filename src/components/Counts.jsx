import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Counts = ({ icon, name, percent, raise,amount }) => {
    return (
        <Card className="bg-box-color border-none py-5">
            <CardContent className="pb-0">
                <div className='d-flex flex-col justify-between'>
                    <div className='mb-3'>
                        <img src={icon} alt="" width="50" height="50" />
                        <p className='mt-2'>{name}</p>
                    </div>
                    <div className='flex justify-between '>
                        <span className=' text-4xl font-bold'>{amount}</span>
                        <div className='flex items-center'>
                            {
                                raise == "0" ? <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path  fill="red" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg> : <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="green" d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" /></svg>
                            }
                            <span className={(raise == "0" ? "text-red-800" : "text-green-800 ") + " font-extrabold text-md"}>{percent}%</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Counts