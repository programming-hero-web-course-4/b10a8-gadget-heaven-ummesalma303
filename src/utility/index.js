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
    if (cartId.includes(id)) {
        alert('already exist')
    } else {
        cartId.push(id)
        const cart = JSON.stringify(cartId)
        localStorage.setItem('cart', cart)
        alert('success')
    }
}


const remove = (id) => {
    const removeCart = getAllCart()
    const remainingItems = removeCart.filter(idx => idx != id)
    localStorage.setItem('cart',JSON.stringify(remainingItems))
}

export {setAllCart,getAllCart}