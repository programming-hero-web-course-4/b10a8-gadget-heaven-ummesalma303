import React from 'react';
import Banner from '../components/Banner';
// import Categories from '../components/Categories';
import CategoryName from '../components/CategoryName';
import { Outlet } from 'react-router-dom';
// import BannerContent from '../components/BannerContent';

const Home = () => {
    return (
        <div>
            {/* <BannerContent></BannerContent> */}
            <Banner></Banner>
            {/* <Categories></Categories> */}
            <CategoryName></CategoryName>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;