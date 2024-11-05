import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const Category =({product}) => {
    const {id,product_title,product_image,price}=product
 
    return (
        <div>

 <div className="card bg-base-100 shadow-xl">
  <figure className="px-5 pt-5">
    <img
      src={product_image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body space-y-1">
    <h2 className="card-title text-2xl font-bold">{product_title}</h2>
    <p className="text-lg font-medium text-[#09080F99]">Price: {price}k</p>
    <div className="card-actions">
      <NavLink to={`/details/${id}`}><button className="btn text-[#9538E2] text-lg font-semibold bg-transparent rounded-full border-2 border-[#9538E2]">View Details</button></NavLink>
    </div>
  </div>
</div>
        </div>
    );
};

Category.propTypes = {
    product:PropTypes.object.isRequired
};

export default Category;