import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet, useLoaderData, useParams } from 'react-router-dom';
import Category from './Category';

const Categories = () => {
    const allData = useLoaderData()
    const {categories} = useParams()
    const [products,setProducts]=useState([])

    // console.log(categories);
    useEffect(() => {
       if (categories ) {
        // categories=== 'All Products'
        const data = allData.filter(data => data.category===categories)
        setProducts(data)
       }
        else {
           setProducts(allData)
       }
    },[categories,allData])
    


    useEffect(()=>{
        if (categories=== 'All Products') {
            setProducts(allData)
        }
    },[categories,allData])

    useEffect(()=>{
        setProducts(allData.slice(0,6));

    },[])
    return (
      <div>
        <h2 className='text-4xl font-bold text-purple-700'>{products.length?'':'NO Data Found'}</h2>
          <div className='grid grid-cols-3 gap-5'>
            {
                products.map(product=><Category key={product.id} product={product}></Category>)
            }
        </div>
      </div>
    );
};

export default Categories;