import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './staticcompo/Navbar';
import Footer from './staticcompo/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;