
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footerr from '../Pages/Shared/Footerr/Footerr';
import Header from '../Pages/Shared/Header/Header';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footerr></Footerr>
        </div>
    );
};

export default Main;