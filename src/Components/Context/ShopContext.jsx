import React, { createContext } from "react";
import all_product from '../Assets/all_product.js'

export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {}
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0
    }
    return cart
}
const ShopContextProvider = (props) => {


    const [cartItems, setCartItems] = React.useState(getDefaultCart())

    const addToCart = (itemId) =>{
        setCartItems((prev) => 
            ({...prev, [itemId]: prev[itemId]+1}))
        console.log(cartItems)
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev) => 
            ({...prev, [itemId]: prev[itemId]-1}))
        console.log(cartItems)
    }
    const contextValue = { all_product, cartItems,addToCart,removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider