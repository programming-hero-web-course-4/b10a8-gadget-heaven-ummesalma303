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

export {setAllCart,getAllCart}