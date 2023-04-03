import React from 'react';
import Navber from '../../Shired/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shired/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;