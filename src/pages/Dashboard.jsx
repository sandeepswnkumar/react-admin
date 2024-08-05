import React from 'react'
import ProductCard from '@/components/ProductCard'
import ProfitCard from '@/components/ProfitCard'
import TotalCounts from '@/components/TotalCounts'
import Activity from '@/components/Activity'
import Category from '@/components/Category'
import CustomerFeedback from '@/components/CustomerFeedback'

const Dashboard = () => {
    return (
        <main className="grid flex-1 items-start gap-5 p-4 sm:px-6 text-white bg-bg-main-color sm:py-4 md:gap-8">
            <div className=''>
                <div className='sm:pb-5'>
                    <h5 className=' text-2xl font-bold'>Dashboard</h5>
                </div>
                <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-5 xl:grid-cols-8 flex-wrap mt-5'>
                    <div className='md:col-span-5 sm:col-span-1 lg:col-span-5 xl:col-span-5'>
                        <TotalCounts />
                    </div>
                    <div className='md:col-span-5 sm:col-span-1 lg:col-span-5 xl:col-span-3'>
                        <ProfitCard />
                    </div>
                </div>
                <div className='grid gap-5  sm:grid-cols-1 md:grid-cols-5 xl:grid-cols-8 flex-wrap mt-5 h-full'>
                    <div className='md:col-span-5 sm:col-span-1 lg:col-span-5 xl:col-span-5 h-full'>
                        <Activity />
                    </div>
                    <div className='md:col-span-5 sm:col-span-1 lg:col-span-5 xl:col-span-3 h-full'>
                        <Category />
                    </div>
                </div>
                <div className='grid gap-5  sm:grid-cols-1 md:grid-cols-5 xl:grid-cols-8 flex-wrap mt-5'>
                    <div className='md:col-span-5 sm:col-span-1 lg:col-span-5 xl:col-span-5'>
                        <ProductCard />
                    </div>
                    <div className='md:col-span-5 sm:col-span-1 lg:col-span-5 xl:col-span-3'>
                        <CustomerFeedback />
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Dashboard