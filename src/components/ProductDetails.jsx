import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../components/Payment/CartContext';
import Steps from './Steps';
import '../components/Nailhub.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../Firebase';

const parsePrice = (price) => {
    const cleanedPrice = parseFloat(price.replace(/[^0-9.-]/g, ''));
    return isNaN(cleanedPrice) ? 0 : cleanedPrice;
};


const uploadImageToCloud = async (file) => {
    try {
        if (!file) return null;
        const storageRef = ref(storage, `nailhubimages/${file.name}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL;
    } catch (error) {
        console.error('Error uploading image:', error);
        return null;
    }
};


const getFileDownloadURL = async (filePath) => {
    try {
        const fileRef = ref(storage, filePath);
        const downloadURL = await getDownloadURL(fileRef);
        return downloadURL;
    } catch (error) {
        console.error('Error getting file download URL:', error);
        return null;
    }
};

const ProductDetails = ({ products }) => {
    const { id } = useParams();
    const product = products.find((prod) => prod.id === parseInt(id));

    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

    const fileInputRef = useRef(null); 

    const { addToCart } = useCartContext();

    useEffect(() => {
        if (product) {
            const price = parsePrice(product.price);
            setTotalPrice(price * quantity);
        }
    }, [quantity, product]);

    const increaseQuantity = () => setQuantity((prevQuantity) => prevQuantity + 1);
    const decreaseQuantity = () => setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = await uploadImageToCloud(file);
            setUploadedImageUrl(imageUrl);
        }
    };

    const handleOrder = async () => {
        if (!product) return;

        addToCart(product, quantity);

        const message = `Order Details:\n` +
            `Product Name: ${product.name}\n` +
            `Quantity: ${quantity}\n` +
            `Total Price: ₹${totalPrice}\n` +
            (uploadedImageUrl ? `Uploaded Image: ${uploadedImageUrl}\n` : 'No additional image uploaded.');

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/9886662344?text=${encodedMessage}`, '_blank');

      
        setQuantity(1);
        setTotalPrice(parsePrice(product.price));
        setUploadedImageUrl(null);

        if (fileInputRef.current) {
            fileInputRef.current.value = ''; 
        }
    };

    return (
        <>
            <Navbar />
            <div className="product-details container mx-auto px-4 py-8 navfont">
                <div className="flex flex-col md:flex-row items-center mb-8">
                    <img
                        src={product?.image || ''}
                        alt={product?.name || 'Product Image'}
                        className="w-full md:w-1/2 h-auto rounded shadow-md mb-4 md:mb-0"
                    />
                    <div className="md:ml-8 text-center md:text-left">
                        <h1 className="text-3xl font-bold mb-4">{product?.name || 'Product Name'}</h1>
                        <p className="text-lg mb-4">Price: {product?.price || '0'}</p>

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

                        <p className="text-lg mb-4">Total Price: ₹{totalPrice}</p>

                        <div className="mt-4">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="block w-full lg:w-52 text-center bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
                                ref={fileInputRef} 
                            />
                        </div>

                        {uploadedImageUrl && (
                            <div className="uploaded-image mt-4">
                                <h3 className="text-xl font-semibold mb-2">Uploaded Image:</h3>
                                <img src={uploadedImageUrl} alt="Uploaded" className="w-full lg:w-52 h-auto rounded shadow-sm" />
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
