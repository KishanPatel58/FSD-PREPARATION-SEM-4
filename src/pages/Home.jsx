import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation().pathname
    return (
        <div className="flex justify-center flex-col">
            <Navbar />
            {location !== "/" ? <Outlet /> : <div className="flex items-center justify-center gap-2 flex-col">
                <h1 className="text-2xl !mt-9">Welcome to FSD Solution</h1>
                <ul >
                    <li>Select Question to show it's solution</li>
                </ul>
            </div>}
        </div>
    )
}

export default Home