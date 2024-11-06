import React, { useState } from 'react';
import { GoXCircle } from 'react-icons/go';
import { remove } from '../utility';

const Cart = ({ newProducts,removeItems }) => {

  
    return (
        <div className='space-y-6 my-12'>
           
            {/* card */}
        {
          newProducts.map((product,i) => (
            <div key={i} className="card card-side bg-base-100 justify-between mx-24 p-6">
  <figure>
    <img className='w-52 aspect-video rounded-xl'
      src={product.product_image}
      alt={product.product_title} />
  </figure>
  <div className='space-y-1'>
                    <h2 className="card-title text-2xl font-semibold">{ product.product_title}</h2>
                    <p className='text-[#09080F99] text-lg'>{product.description}</p>
                    <h3 className='text-xl font-semibold'>{ product.price}</h3>
  </div>
    <div className="card-actions justify-end">
      <button onClick={()=>removeItems(product.id)} className="text-red-500"><GoXCircle size={34}/></button>
    </div>
           </div>
          ))
           }
        </div>
    );
};

// Cart.propTypes = {
    
// };

export default Cart;