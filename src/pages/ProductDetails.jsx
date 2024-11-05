import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import BannerContent from '../components/BannerContent';
import { FaRegHeart } from 'react-icons/fa';
import { BsCart4 } from 'react-icons/bs';
import { getAllCart, setAllCart } from '../utility';
// {
//     "id": 1,
//     "product_title": "Portable Power Bank 10000mAh",
//     "product_image": "https://theunitedindian.com/images/gadgets-20-05-24-E-Hero.webp",
//     "category": "Power Bank",
//     "price": 49.99,
//     "description": "A compact power bank with a 10000mAh capacity for charging on the go.",
//     "specification": [
//         "10000mAh Capacity",
//         "Dual USB Ports",
//         "LED Battery Indicator"
//     ],
//     "availability": true,
//     "rating": 4.5
// }
const ProductDetails = () => {
  const [cart,setCart]=useState([])
  const {id} = useParams()
  const [products,setProducts] =useState([])
  const allData=useLoaderData();
  
  const { product_image, product_title, price, description, specification, rating } = products;
  const [isCart,setIsCart]=useState(false)
    useEffect(()=>{
        const findData = [...allData].find(product=>product.id===parseInt(id));
      setProducts(findData);
      
      // const cart = getAllCart();
      // const isExist = cart.find(product => product.id == findData.id)
      // console.log(isExist)
    },[])

  const handleCart = (id) => {
    setAllCart(id)
    setIsCart(true)
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
   <h1 className='text-lg font-bold'>Ratting </h1>
   <span className='w-4 h-4 bg-black'></span>
   </div>
   <h3>{rating}</h3>
    <div className="card-actions">
      <button onClick={()=>handleCart(id)} disabled={isCart} className="btn bg-colorPrimary text-white rounded-full">Add To Card <BsCart4 size={23}/></button>
      <button className="btn hover:bg-colorPrimary text-colorPrimary hover:text-white border-colorPrimary"><FaRegHeart size={25}/></button>

    </div>
  </div>
</div>
        
        </div>
    );
};

export default ProductDetails;