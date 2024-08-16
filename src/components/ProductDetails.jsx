import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCartContext } from './Payment/CartContext';
import Steps from './Steps';

const ProductDetails = ({ products }) => {
    const { id } = useParams();
    const product = products.find((prod) => prod.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCartContext();
    const [uploadedImage, setUploadedImage] = useState(null);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    const handleImageUpload = (event) => {
        setUploadedImage(URL.createObjectURL(event.target.files[0]));
    };

    const handleOrder = () => {
        addToCart(product, quantity);
        const message = `Order Details:\nProduct: ${product.name}\nQuantity: ${quantity}\nTotal Price: \u20B9${product.price * quantity}`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/yourwhatsappnumber?text=${encodedMessage}`, '_blank');

        // Reset form after order
        setQuantity(1);
        setUploadedImage(null);
    };

    return (
        <div className="product-details container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center mb-8">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full md:w-1/2 h-auto rounded shadow-md mb-4 md:mb-0"
                />
                <div className="md:ml-8 text-center md:text-left">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-lg mb-4">Price: \u20B9 {product.price}</p>
                    <div className="quantity-selector mb-4">
                        <button
                            onClick={decreaseQuantity}
                            className="px-4 py-2 border bg-gray-300 rounded-l"
                        >
                            -
                        </button>
                        <span className="mx-4">{quantity}</span>
                        <button
                            onClick={increaseQuantity}
                            className="px-4 py-2 border bg-gray-300 rounded-r"
                        >
                            +
                        </button>
                    </div>
                    <div className="mt-4">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
                        />
                    </div>

                    {/* Display Uploaded Image */}
                    {uploadedImage && (
                        <div className="uploaded-image mt-4">
                            <h3 className="text-xl font-semibold mb-2">Uploaded Image:</h3>
                            <img src={uploadedImage} alt="Uploaded" className="w-full h-auto rounded shadow-sm" />
                        </div>
                    )}

                    <button
                        onClick={handleOrder}
                        className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
                    >
                        Hassle-Free Order
                    </button>
                </div>
            </div>
            <Steps />
        </div>
    );
};

export default ProductDetails;
