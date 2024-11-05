import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import Wishlist from './Wishlist';

const CartContainer = ({ products,removeItems,wishlist }) => {
    // const [toggle, setToggle] = useState(true);
    const [toggle, setToggle] = useState(true);

    // console.log(products)
    console.log(wishlist)
    const HandleButton = () => {
        setToggle(!toggle)
        // const HandleButton = () => {
        //     setToggle(!toggle)
        // }
    }
    return (
        <div>
            <div className='flex justify-between'>
                 <h2 className='text-2xl font-bold'>Cart</h2>
                <div className='flex items-center space-x-4'>
                    <h2>Total cost:</h2>
                 <div>
                        {/* <button className='btn '>Sort By Price</button> */}
                <div className="space-x-2">
                <button onClick={HandleButton} className={toggle?' bg-gradient-to-r from-purple-900 to-purple-500  btn rounded-full px-9':'border-[1px] px-9 border-white btn bg-transparent rounded-full'}>Cart</button>
                <button onClick={HandleButton} className={!toggle?'bg-gradient-to-r from-purple-900 to-purple-500 btn rounded-full px-9':'px-9 border-[1px] border-white btn bg-transparent rounded-full'}>Wishlist</button>
            </div>
                </div></div>
            </div>
            
            <div className='space-y-5'>

                {
 toggle?<Cart newProducts={products} removeItems={removeItems}></Cart>:<Wishlist wishlist={wishlist}></Wishlist>

                }
            {/* {
                products.map(product=><Cart key={product.id} newProducts={product}></Cart>)
            } */}
           </div>
        </div>
    );
};

CartContainer.propTypes = {
    
};

export default CartContainer;