import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const BannerContent = ({title,subtitle}) => {
    const {pathname}= useLocation()

    return (
        <div className='bg-colorPrimary text-white text-center p-4'>
         < div className='w-[68%] mx-auto space-y-4'>
         <h2 className='text-5xl font-bold leading-[1.3] '>{title}</h2>
            <p>{subtitle}</p>
         </div>
          </div>
    );
};

BannerContent.prototype={
    title:PropTypes.string.isRequired,
    subtitle:PropTypes.string.isRequired
}
export default BannerContent;