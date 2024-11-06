// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Cart from '../components/Cart';
// import Wishlist from './Wishlist';
import { BiSortAlt2 } from 'react-icons/bi';
import image from '../../public/images/Group.png'
import { useNavigate } from 'react-router-dom';
import { clearData } from '../utility';

const CartContainer = ({ products,removeItems,handleSort,total }) => {
    // const [toggle, setToggle] = useState(true);
    const navigate = useNavigate()

    const handleButton = () =>{
      navigate('/')
      clearData()
    }
    return (
        <div>
            <div className='flex justify-between px-10'>
                 <h2 className='text-2xl font-bold'>Cart</h2>
                <div className='flex items-center space-x-4'>
                    <h2>Total cost:{total}</h2>
                 <div>
                        {/* <button className='btn '>Sort By Price</button> */}
                <div onClick={()=>handleSort('sort')} className="space-x-2 ">
                    <button className='btn border-2  border-purple-700 rounded-full px-6'>Sort By Price <BiSortAlt2 size={20}/></button>
                   {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn text-white rounded-full bg-colorPrimary" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box mx-auto text-center p-9">
    <img className='mx-auto' src={image} alt="" />
    <h3 className="font-bold text-2xl">Thanks for purchasing.</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <h3>Total:{total}</h3>
    <div>
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button onClick={handleButton} className="btn w-full">Close</button>
      </form>
    </div>
  </div>
</dialog>
                {/* <button onClick={HandleButton} className={toggle?' bg-gradient-to-r from-purple-900 to-purple-500  btn rounded-full px-9':'border-[1px] px-9 border-white btn bg-transparent rounded-full'}>Cart</button>
                <button onClick={HandleButton} className={!toggle?'bg-gradient-to-r from-purple-900 to-purple-500 btn rounded-full px-9':'px-9 border-[1px] border-white btn bg-transparent rounded-full'}>Wishlist</button> */}
            </div>
                </div></div>
            </div>
            
            <div className='space-y-5'>

                {
//  toggle?<Cart newProducts={products} removeItems={removeItems}></Cart>:<Wishlist wishlist={wishlist}></Wishlist>
<Cart newProducts={products} removeItems={removeItems}></Cart>
                }
            {/* {
                products.map(product=><Cart key={product.id} newProducts={product}></Cart>)
            } */}
           </div>
        </div>
    );
};

// CartContainer.propTypes = {
    
// };

export default CartContainer;