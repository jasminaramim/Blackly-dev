import Footer from '@/Shared/Footer';
import Navbar from '@/Shared/Navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="font-montserrat">
            <Navbar />
            <div className="min-h-screen">
                <Outlet /> 
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
