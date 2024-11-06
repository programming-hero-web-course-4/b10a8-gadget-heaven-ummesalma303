import React, { useEffect, useState } from 'react';
import BannerContent from '../components/BannerContent';
// import Cart from '../components/Cart';
import Wishlist from '../components/Wishlist';
import { useLoaderData } from 'react-router-dom';
import { getAllCart, remove, wishListAllCart, wishListRemove, } from '../utility';
import CartContainer from '../components/CartContainer';
import Home from './Home';
import ProductDetails from './ProductDetails';

const Dashboard = () => {
    const [toggle, setToggle] = useState(true);
    const [products,setProducts]=useState([])
    const [wishlist,setWishlist]=useState([])
    // const [total,setTotal]=useState(0)
    const allProduct=useLoaderData()
    const HandleButton = () => {
        setToggle(!toggle)
    }
    // console.log(allProduct)

    useEffect(() => {
        const cart = getAllCart()
        const storeCartInt= cart.map(id=>parseInt(id))
        const gadget = allProduct.filter(product => storeCartInt.includes(product.id))
        // const gadget = allProduct.filter(product => console.log(product.id,[...storeCartInt]))
        // setProducts(gadget)
      
        if (allProduct.length) {
        const cart = getAllCart()
        const all=[]
       for (const id of cart) {
        const gadget =allProduct.find(product=>product.id==id)
        // console.log(gadget);
        if (gadget ) {
            all.push(gadget)
        // setTotal((prev)=>prev+gadget.price)

        }
        setProducts(all)
        // console.log(gadget);
       }

       }

        // console.log(products)
    }, [allProduct])

    useEffect(() => {
        const cart = wishListAllCart()
        const storeCartInt= cart.map(id=>parseInt(id))
        const wishGadget = allProduct.filter(product => storeCartInt.includes(product.id))
        setWishlist(wishGadget)

        // const isExist=cart.filter(product=>storeCartInt.includes(product.id))
        // console.log(gadget)
        // if (wishGadget) {
        //     setWishlist(true)
        // }
    }, [])

    const removeItems = (id) => {
        remove(id)
      // const product = newProducts.filter(product=product.id!==id)
      const remainingProduct = products.filter(p=>p.id!==id)
        setProducts(remainingProduct)
        // setWishlist()
    }


    const removeList = (id) => {
        wishListRemove(id)
      const remainingProduct = wishlist.filter(p=>p.id!==id)
        setWishlist(remainingProduct)
    }

  const handleSort=(sort)=>{
    if (sort) {
        const sortPrice = [...products].sort((a,b)=>b.price-a.price)
        setProducts(sortPrice)
    }
  }
    return (
        <div>
             <div className='bg-colorPrimary text-center pt-3 pb-11'>
                <BannerContent title={'Dashboard'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></BannerContent>
            <div className="space-x-2">
                <button onClick={HandleButton} className={toggle?' bg-white btn rounded-full px-9':'border-[1px] px-9 border-white btn bg-transparent rounded-full'}>Cart</button>
                <button onClick={HandleButton} className={!toggle?'bg-white btn rounded-full px-9':'px-9 border-[1px] border-white btn bg-transparent rounded-full'}>Wishlist</button>
            </div>
            </div>
                <div className='my-5 w-90%'>
                {
                    toggle ? <CartContainer removeItems={removeItems} products={products} handleSort={handleSort}></CartContainer> : <Wishlist newProducts={wishlist} removeItems={removeList}></Wishlist>
                    // toggle?<h1>hello</h1>:<h2>hhhhhhhhhh</h2>
                }
                {/* {
                    toggle?<c1></c1>:<c2></c2>
                } */}

                {/* <img src={products.product_image} alt="" /> */}
               </div>
        </div>
    );
};

export default Dashboard;