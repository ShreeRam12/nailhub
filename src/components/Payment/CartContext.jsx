// src/components/Payment/CartContext.js
import React, { createContext, useContext, useState } from 'react';
import '..//..//..//src/components/Nailhub.css';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    return (
        <div className='navfont'>
            <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
                {children}
            </CartContext.Provider>
        </div>
    );


};

// Creating useCartContext hook
export const useCartContext = () => {
    return useContext(CartContext);
};
