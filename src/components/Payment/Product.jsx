import React from 'react';
import { Link } from 'react-router-dom';
import '..//..//..//src/components/Nailhub.css';
const Product = ({ product }) => {
    return (
        <div className="product-card border p-4 rounded shadow-sm bg-white">
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-lg">{product.price}</p>
            </Link>
        </div>
    );
};

export default Product;
