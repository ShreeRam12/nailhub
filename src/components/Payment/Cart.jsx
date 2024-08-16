// Cart.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import '..//..//..//src/components/Nailhub.css';
const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    const handleCheckout = () => {
        // Redirect to checkout page
    };

    return (
        <div className="cart bg-white shadow-lg rounded-lg p-4 mb-4 navfont">
            <h2 className="text-lg font-semibold">Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map(item => (
                    <div key={item.id} className="mb-2">
                        <h3 className="text-md font-semibold">{item.name}</h3>
                        <p className="text-gray-600">{item.price}</p>
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded"
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}
            <button
                onClick={handleCheckout}
                className="mt-4 bg-rose-500 text-white px-4 py-2 rounded"
            >
                Proceed to Checkout
            </button>
        </div>
    );
};

export default Cart;
