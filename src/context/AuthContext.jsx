import { createContext } from 'react';

import { useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
const [product, setProduct] = useState([]);
const [cart, setCart] = useState([]);
const addCart = (product) => {
    cart.push(product);
    setCart([...cart])
    

}
const removeCart = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };


const auth={
    product,
    cart,
    addCart,
    removeCart
}

    return (
        <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
    )
}