// Wishlist.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import '..//..//..//src/components/Nailhub.css';
const Wishlist = () => {
    const { wishlist, addToCart, removeFromWishlist } = useContext(CartContext);

    return (
        <div className="wishlist bg-white shadow-lg rounded-lg p-4 mb-4 navfont">
            <h2 className="text-lg font-semibold">Your Wishlist</h2>
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                wishlist.map(item => (
                    <div key={item.id} className="mb-2">
                        <h3 className="text-md font-semibold">{item.name}</h3>
                        <p className="text-gray-600">{item.price}</p>
                        <button
                            onClick={() => addToCart(item)}
                            className="bg-green-500 text-white px-4 py-2 rounded"
                        >
                            Move to Cart
                        </button>
                        <button
                            onClick={() => removeFromWishlist(item.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded"
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Wishlist;
