import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = () => {
    return (
        <div>
           <ToastContainer />
          <NavBar></NavBar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Layout;