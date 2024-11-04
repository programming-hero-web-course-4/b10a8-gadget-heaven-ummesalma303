// import React from 'react';

// const Category = ({product}) => {
//     console.log(p);
//     return (
//         <div>
//             <h1></h1>
//         </div>
//     );
// };

// export default Category;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// {
//     "id": "008",
//     "product_title": "Gaming Laptop X",
//     "product_image": "https://example.com/images/gaming-laptop-x.jpg",
//     "category": "Laptops",
//     "price": 1499.99,
//     "description": "A powerful gaming laptop with advanced cooling technology.",
//     "specification": [
//         "32GB RAM",
//         "2TB SSD",
//         "NVIDIA RTX 3080",
//         "17-inch Full HD Display"
//     ],
//     "availability": true,
//     "rating": 4.9
// }




const Category =({product}) => {
    const {id,product_title,product_image,price}=product
    // console.log( product);

 
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
      <button className="btn text-[#9538E2] text-lg font-semibold bg-transparent rounded-full border-2 border-[#9538E2]">View Details</button>
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