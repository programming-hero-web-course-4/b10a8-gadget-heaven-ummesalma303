import ReactStars from "react-rating-stars-component";
import React from "react";
// import { render } from "react-dom";



import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import BannerContent from '../components/BannerContent';
// import { FaRegHeart } from 'react-icons/fa';
import { BsCart4 } from 'react-icons/bs';
import { getAllCart, setAllCart, wishListSetAllCart } from '../utility';
import { CiHeart } from "react-icons/ci";





// const star = {
//   size: 50,
//   count: 5,
//   color: "black",
//   activeColor: "red",
//   value: 7.5,
//   a11y: true,
//   isHalf: true,
//   emptyIcon: <i className="far fa-star" />,
//   halfIcon: <i className="fa fa-star-half-alt" />,
//   filledIcon: <i className="fa fa-star" />,
//   onChange: newValue => {
//     console.log(`Example 2: new value is ${newValue}`);
//   }
// };




const ProductDetails = () => {

  const [cart,setCart]=useState([])
  const {id} = useParams()
  const [products,setProducts] =useState([])
  const allData=useLoaderData();
  // const [total,setTotal]=useState(0)
  const { product_image, product_title, price, description, specification, rating } = products;
  const [isCart,setIsCart]=useState(false)
  const [isWishList,setWishlist]=useState(false)

    useEffect(()=>{
        const findData = [...allData].find(product=>product.id===parseInt(id));
      setProducts(findData);
      
      // const cart = getAllCart();
      // const isExist = cart.find(product => product.id == findData.id)
      // console.log(isExist)
    },[])

  const handleCart = (id,price) => {
    setAllCart(id)
    // setIsCart(true)
    console.log(id);
    // setTotal(total+price)
  }
  const handleWishlist = (id) => {
    wishListSetAllCart(id)
    setWishlist(true)
  }
    return (
        <div>
        {/* banner content */}
        <div className="h-96 pt-6 bg-colorPrimary">
        <BannerContent title={'Product Details'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></BannerContent>
        </div>

           {/* Card */}

           <div className="-mt-40 card card-side p-6 bg-base-100 shadow-xl mx-12 mb-20 space-x-5">
  <figure>
    <img className="h-[400px] w-[400px] rounded-xl"
      src={product_image}
      alt="Movie" />
  </figure>
  <div className="">
    <h2 className="card-title text-2xl font-semibold">{product_title}</h2>
    <h3 className='text-lg font-semibold'>Price: {price}</h3>
    <button className='border-[1px] border-green-700 px-8 py-2 my-3 bg-[#309C081A] text-green-700 rounded-full'>In Stock</button>
    <p className='text-lg text-[#09080F99]'>{description}</p>
   <div className="my-3">
   <h2 className='text-lg font-bold mb-2'>Specification:</h2>
    <ul className='list-decimal list-inside text-lg text-[#09080F99]'>
      {/* <li>{a}</li> */}
    {
      specification&&specification.map((p,i)=> <li key={i}>{p}</li>)
    }
    </ul>
   </div>
   <div className='flex items-center space-x-1'>
   <h1 className='text-lg font-bold'>Ratting: </h1>
   <span className='w-4 h-4 bg-black'></span>
   </div>
  <div className="flex items-center space-x-2 my-3">
    
  <ReactStars
    count={5}
    value={3}
    size={24}
    activeColor="#ffd700"
  /> 
  <span className="rounded-full py-1 px-4 bg-[#09080F0D] hover:bg-[#1e1d2436]">{rating}</span>
  </div>
    <div className="card-actions">
      <button onClick={()=>handleCart(id,price)} className="btn bg-colorPrimary text-white rounded-full">Add To Card <BsCart4 size={23}/></button>
      <button onClick={()=>handleWishlist(id)} disabled={isWishList} className="btn hover:bg-colorPrimary text-colorPrimary hover:text-white border-colorPrimary"><CiHeart size={22} /></button>

    </div>
  </div>
</div>
        
        </div>
    );
};

export default ProductDetails;