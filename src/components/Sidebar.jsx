import React, { useState } from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';

const Sidebar = () => {
    const data = useLoaderData()
    return (
        <div className='space-y-5 w-[600px] h-full border-2 border-[rgba(9, 8, 15, 0.1)] rounded-2xl p-6 bg-[#09080F0D]'>
            {
                data.map(categories => (
                    <div key={categories.id}>
                        <NavLink to={`/categories/${categories.category}`} className={({isActive})=>`w-full btn rounded-full text-[#09080F99] ${isActive?'bg-colorPrimary text-white hover:text-black':'bg-[#09080F0D]'}`} ><button>{ categories.category}</button></NavLink>
                    </div>
                ))
            }
        </div>
    );
};

export default Sidebar;