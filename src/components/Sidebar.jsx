import React, { useState } from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';

const Sidebar = () => {
    const data = useLoaderData()
    return (
        <div className='space-y-5 '>
            {
                data.map(categories => (
                    <div key={categories.id}>
                        <NavLink to={`/categories/${categories.category}`} className={({isActive})=>`btn rounded-full text-[#09080F99] ${isActive?'bg-colorPrimary text-white hover:text-black':'bg-[#09080F0D]'}`} ><button>{ categories.category}</button><br /></NavLink>
                    </div>
                ))
            }
        </div>
    );
};

export default Sidebar;