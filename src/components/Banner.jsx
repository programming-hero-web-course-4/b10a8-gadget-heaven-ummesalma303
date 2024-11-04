import React from 'react';
import banner from '../../public/images/banner.jpg'
const Banner = () => {
    return (
           <div className='mx-2 rounded-b-2xl text-center text-white '>

           <div className=' space-y-6 bg-colorPrimary h-[520px] pt-9'>
           <h2 className='text-5xl font-bold leading-[1.3] w-3/4 mx-auto'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
            <p>Explore the latest gadgets that will take your experience to the next level. From smart devices <br /> to the coolest accessories, we have it all!</p>
            <button className='btn text-[#9538E2] rounded-full text-lg font-bold'>Shop Now</button>
           </div>

           <div className='border-[3px] border-[#FFFFFF4D] backdrop-blur-md bg-white/30 p-6 rounded-2xl w-5/6 mx-auto -mt-44 '>
            <img className='w-full rounded-2xl h-[500px]' src={banner} alt="" />
           </div>

           </div>
          
    );
};

export default Banner;