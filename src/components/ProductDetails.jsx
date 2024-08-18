import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../components/Payment/CartContext';
import Steps from './Steps';
import '../components/Nailhub.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../Firebase';  

// Function to upload image to Firebase storage
const uploadImageToCloud = async (file) => {
    if (!file) return null;

    const storageRef = ref(storage, file.name);  // Create a reference to the storage location
    await uploadBytes(storageRef, file);         // Upload the file to the specified storage reference
    const downloadURL = await getDownloadURL(storageRef); // Get the download URL for the uploaded image
    return downloadURL;
};

const ProductDetails = ({ products }) => {
    const { id } = useParams();
    const product = products.find((prod) => prod.id === parseInt(id)); // Find the product by ID

    const [quantity, setQuantity] = useState(1);  // State to track the quantity of the product
    const [totalPrice, setTotalPrice] = useState(product.price);  // State to track the total price
    const [uploadedImage, setUploadedImage] = useState(null);  // State to track the uploaded image file
    const [uploadedImageUrl, setUploadedImageUrl] = useState(null);  // State to track the URL of the uploaded image

    const { addToCart } = useCartContext();  // Function to add the product to the cart

    // Effect to update the total price whenever the quantity changes
    useEffect(() => {
        setTotalPrice(product.price * quantity);
    }, [quantity, product.price]);

    // Function to increase the quantity
    const increaseQuantity = () => setQuantity(quantity + 1);

    // Function to decrease the quantity (ensuring it doesn't go below 1)
    const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    // Function to handle image upload
    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        setUploadedImage(file);

        if (file) {
            const imageUrl = await uploadImageToCloud(file);  // Upload image and get the URL
            setUploadedImageUrl(imageUrl);
        }
    };

    // Function to handle the order process
    const handleOrder = () => {
        addToCart(product, quantity);  // Add the product to the cart

        const message = `Order Details:\n` +
            `Product Name: ${product.name}\n` +
            `Quantity: ${quantity}\n` +
            `Total Price: ₹${totalPrice}\n` +
            `Product Image: ${product.image}\n` +
            (uploadedImageUrl ? `Uploaded Image: ${uploadedImageUrl}\n` : '');  // Include the uploaded image URL if available

        const encodedMessage = encodeURIComponent(message);  // Encode the message for WhatsApp

        // Open WhatsApp with the encoded message
        window.open(`https://wa.me/9886662344?text=${encodedMessage}`, '_blank');

        // Reset form after order
        setQuantity(1);
        setUploadedImage(null);
        setUploadedImageUrl(null);
        setTotalPrice(product.price);
    };

    return (
        <>
            <Navbar />
            <div className="product-details container mx-auto px-4 py-8 navfont">
                <div className="flex flex-col md:flex-row items-center mb-8">
                    <img
                        src={product.image} // Ensure this is a full URL for the product image
                        alt={product.name}
                        className="w-full md:w-1/2 h-auto rounded shadow-md mb-4 md:mb-0"
                    />
                    <div className="md:ml-8 text-center md:text-left">
                        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                        <p className="text-lg mb-4">Price: {product.price}</p>

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

                        {/* <p className="text-lg mb-4">Total Price: ₹{totalPrice}</p> */}

                        <div className="mt-4">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="block w-full lg:w-52 text-center bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
                            />
                        </div>

                        {/* Display Uploaded Image */}
                        {uploadedImage && (
                            <div className="uploaded-image mt-4">
                                <h3 className="text-xl font-semibold mb-2">Uploaded Image:</h3>
                                <img src={uploadedImageUrl || URL.createObjectURL(uploadedImage)} alt="Uploaded" className="w-full lg:w-52 h-auto rounded shadow-sm" />
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
            <Footer />
        </>
    );
};

export default ProductDetails;
