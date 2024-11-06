import React from 'react';
import PropTypes from 'prop-types';
import Cart from './Cart';
import { BsCart4 } from 'react-icons/bs';


const Wishlist = ({ newProducts,removeItems}) => {
    // console.log(removeItems)
    return (
        <div>
           <Cart newProducts={newProducts} removeItems={removeItems}></Cart>
           {/* <button onClick={()=>handleCart(id,price)} className="btn bg-colorPrimary text-white rounded-full">Add To Card <BsCart4 size={23}/></button> */}
    </div>
//         <div >

//             <h2>Hi I am Wish List</h2>
//            <div>
           
//            {/* card */}
//        {
//         wishlist.map(product => (
//            <div key={product.id} className="card card-side bg-base-100 shadow-xl justify-between mx-24 p-6">
//  <figure>
//    <img className='w-52 aspect-video rounded-xl'
//      src={product.product_image}
//      alt={product.product_title} />
//  </figure>
//  <div className='space-y-1'>
//                    <h2 className="card-title text-2xl font-semibold">{ product.product_title}</h2>
//                    <p className='text-[#09080F99] text-lg'>{product.description}</p>
//                    <h3 className='text-xl font-semibold'>{ product.price}</h3>
//  </div>
//    <div className="card-actions justify-end">
//      <button onClick={()=>removeItems(product.id)} className="text-red-500"><GoXCircle size={34}/></button>
//    </div>
//           </div>
//          ))
//           }
//        </div>
//                 </div>
        // <>
        
    );
};

Wishlist.propTypes = {
    
};

export default Wishlist;