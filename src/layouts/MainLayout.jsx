import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div>
          <NavBar></NavBar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Layout;