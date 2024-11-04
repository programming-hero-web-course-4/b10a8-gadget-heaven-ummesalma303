import React from 'react';
import Banner from '../components/Banner';
// import Categories from '../components/Categories';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
// import BannerContent from '../components/BannerContent';

const Home = () => {
    return (
        <div>
            {/* <BannerContent></BannerContent> */}
            <Banner></Banner>
            {/* <Categories></Categories> */}
            <div className='w-[90%] mx-auto my-12'>
                <div className='text-center my-9 text-4xl font-bold'>
                    <h2>Explore Cutting-Edge Gadgets</h2>
                </div>
            <div className='flex space-x-12'>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
            </div>
            </div>
        </div>
    );
};

export default Home;