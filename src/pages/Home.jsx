import React from 'react'
import Dashboard from '@/pages/Dashboard'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

const Home = () => {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <Sidebar />
            <div className="flex flex-col sm:pl-14">
                <Header />
                <Dashboard />
            </div>
        </div>
    )
}

export default Home