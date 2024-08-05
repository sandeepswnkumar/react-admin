import React from 'react'
import Counts from './Counts'
import assets from '@/assets/asset.js';

const TotalCounts = () => {
  return (
    // <div className='border h-20'></div>
    <div className='grid gap-5 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 flex-wrap'>
        <Counts icon={assets.bag} name="Total Order" amount="75" percent="3" raise="1" />
        <Counts icon={assets.bag_sign} name="Total Delivered" amount="70" percent="3" raise="0" />
        <Counts icon={assets.shopping} name="Total Cancelled" amount="05" percent="3" raise="1" />
        <Counts icon={assets.money} name="Total Revenue" amount="$12k" percent="3" raise="0" />
    </div>
  )
}

export default TotalCounts