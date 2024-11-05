import React, { useEffect, useState } from 'react';
import BannerContent from '../components/BannerContent';
import Cart from '../components/Cart';
import Wishlist from '../components/Wishlist';
import { useLoaderData } from 'react-router-dom';
import { getAllCart } from '../utility';

const Dashboard = () => {
    const [toggle, setToggle] = useState(true);
    const [products,setProducts]=useState([])
    const allProduct=useLoaderData()
    const HandleButton = () => {
        setToggle(!toggle)
    }
    // console.log(allProduct)

    useEffect(() => {
        const cart = getAllCart()
        const gadget = allProduct.find(product => product.id === parseInt(cart))
        setProducts(gadget)
    }, [])
    console.log(products)
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
                    toggle?<Cart></Cart>:<Wishlist></Wishlist>
                }
                

                <img src={products.product_image} alt="" />
               </div>
        </div>
    );
};

export default Dashboard;