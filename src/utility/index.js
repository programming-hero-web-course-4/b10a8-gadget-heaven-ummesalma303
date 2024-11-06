// import React from 'react';
  import { toast } from 'react-toastify';


const getAllCart = () => {
    const storingCart = localStorage.getItem('cart');
    if (storingCart) {
        const storeCart = JSON.parse(storingCart);
        return storeCart
    } else {
        return []
    }
}

const setAllCart = (id) => {
    // console.log(id)
    const cartId = getAllCart();
    // if (cartId.includes(id)) {
    //     alert('already exist')
    // } else {
        cartId.push(id)
        const cart = JSON.stringify(cartId)
        localStorage.setItem('cart', cart)
        toast.success('Successfully Added In Cart')
    // }
}

const remove = (id) => {
    const removeCart = getAllCart()
    const remainingItems = removeCart.filter(idx => idx != id.toString())
    // console.log(remainingItems)
    localStorage.setItem('cart', JSON.stringify(remainingItems))
    toast.error('Successfully Remove')
    
}



const wishListAllCart = () => {
    const storingCart = localStorage.getItem('wishlist');
    if (storingCart) {
        const storeCart = JSON.parse(storingCart);
        return storeCart
    } else {
        return []
    }
}



const wishListSetAllCart = (id) => {
    const cartId = wishListAllCart();
    if (cartId.includes(id)) {
        toast.error('already exist')
    } else {
        cartId.push(id)
        const cart = JSON.stringify(cartId)
        localStorage.setItem('wishlist', cart)
        toast.success('Successfully Added In WishList')
    }
}

const wishListRemove = (id) => {
    const removeCart = wishListAllCart()
    const remainingItems = removeCart.filter(idx => idx != id.toString())
    // console.log(remainingItems)
    localStorage.setItem('wishlist', JSON.stringify(remainingItems))
    toast.error('Successfully Remove')
    
}

const clearData=()=>{
    localStorage.clear()
}



export {setAllCart,getAllCart,remove, wishListAllCart,wishListSetAllCart, wishListRemove,clearData}