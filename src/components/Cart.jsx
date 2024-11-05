// import React from 'react';
// import PropTypes from 'prop-types';

// const Cart = ({ newProducts }) => {
//     console.log(newProducts)
//     return (
//         <div>
            
//         </div>
//     );
// };

// Cart.propTypes = {
    
// };

// export default Cart;






import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GoXCircle } from 'react-icons/go';

const Cart = ({ newProducts }) => {
    // const [product,setProduct]=useState(0)
    // console.log(newProducts)
    const { id,product_title, product_image, price, description } = newProducts;

    // const removeItems = (id) => {
    //     console.log(id)
    //     const product = newProducts.filter(product=product.id!==id)
    // }

    return (
        <div>
           
            {/* card */}
           <div className="card card-side bg-base-100 shadow-xl justify-between mx-24 p-6">
  <figure>
    <img className='w-52 aspect-video rounded-xl'
      src={product_image}
      alt={product_title} />
  </figure>
  <div className='space-y-1'>
                    <h2 className="card-title text-2xl font-semibold">{ product_title}</h2>
                    <p className='text-[#09080F99] text-lg'>{description}</p>
                    <h3 className='text-xl font-semibold'>{ price}</h3>
  </div>
    <div className="card-actions justify-end">
      <button onClick={()=>removeItems(id)} className="text-red-500"><GoXCircle size={34}/></button>
    </div>
           </div>
        </div>
    );
};

Cart.propTypes = {
    
};

export default Cart;