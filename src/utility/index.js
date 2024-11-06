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
    const cartId = getAllCart();
    // if (cartId.includes(id)) {
    //     alert('already exist')
    // } else {
        cartId.push(id)
        const cart = JSON.stringify(cartId)
        localStorage.setItem('cart', cart)
        toast.success('Successfully Added')
    // }
}

const remove = (id) => {
    const removeCart = getAllCart()
    const remainingItems = removeCart.filter(idx => idx != id.toString())
    // console.log(remainingItems)
   localStorage.setItem('cart',JSON.stringify(remainingItems))
}


// wishList
// const getAllCart = () => {
//     const storingCart = localStorage.getItem('cart');
//     if (storingCart) {
//         const storeCart = JSON.parse(storingCart);
//         return storeCart
//     } else {
//         return []
//     }
// }

const wishListAllCart = () => {
    const storingCart = localStorage.getItem('wishlist');
    if (storingCart) {
        const storeCart = JSON.parse(storingCart);
        return storeCart
    } else {
        return []
    }
}



// const setAllCart = (id) => {
//     const cartId = getAllCart();
//     if (cartId.includes(id)) {
//         alert('already exist')
//     } else {
//         cartId.push(id)
//         const cart = JSON.stringify(cartId)
//         localStorage.setItem('cart', cart)
//         alert('success')
//     }
// }

const wishListSetAllCart = (id) => {
    const cartId = wishListAllCart();
    if (cartId.includes(id)) {
        toast.error('already exist')
    } else {
        cartId.push(id)
        const cart = JSON.stringify(cartId)
        localStorage.setItem('wishlist', cart)
        toast.success('WishList Successfully Added')
    }
}

const wishListRemove = (id) => {
    const removeCart = wishListAllCart()
    const remainingItems = removeCart.filter(idx => idx != id.toString())
    // console.log(remainingItems)
   localStorage.setItem('wishlist',JSON.stringify(remainingItems))
}
export {setAllCart,getAllCart,remove, wishListAllCart,wishListSetAllCart, wishListRemove}