import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet, useLoaderData, useParams } from 'react-router-dom';

const Categories = () => {
    const [products,setProducts]=useState([])
    const allData = useLoaderData()
    const {categories} = useParams()
    // console.log(category);
    useEffect(() => {
    // const category = useParams()
       if (categories) {
        const data = allData.filter(data => data.category===categories)
        console.log(data)
       } else {
           console.log(allData)
       }
    },[categories,allData])
    return (
        <div>
            
        </div>
    );
};

export default Categories;