import React from 'react';
import banner from '../../public/images/banner.jpg'
import BannerContent from './BannerContent';
import { NavLink } from 'react-router-dom';
const Banner = () => {
    return (
           <div className='mx-2 rounded-b-2xl'>

           <div className=' space-y-6 bg-colorPrimary h-[520px] text-center'>
          <BannerContent title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></BannerContent>

          <NavLink to='/dashboard'><button className=' text-center btn text-[#9538E2] rounded-full text-lg font-bold my-8'>Shop Now</button></NavLink>

           </div>

           <div className='border-[3px] border-[#FFFFFF4D] backdrop-blur-md bg-white/30 p-6 rounded-2xl w-5/6 mx-auto -mt-44 '>
            <img className='w-full rounded-2xl h-[500px]' src={banner} alt="" />
           </div>

           </div>
          
    );
};

export default Banner;