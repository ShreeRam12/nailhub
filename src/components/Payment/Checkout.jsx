// Checkout.js
import React, { useState } from 'react';
import '..//..//..//src/components/Nailhub.css';
const Checkout = () => {
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handlePayment = (method) => {
        // Integrate with payment gateway here
        setPaymentSuccess(true);
    };

    return (
        <div className="checkout bg-white shadow-lg rounded-lg p-4 mb-4 navfont">
            <h2 className="text-lg font-semibold">Checkout</h2>
            <button
                onClick={() => handlePayment('qr')}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Pay with QR Code
            </button>
            <button
                onClick={() => handlePayment('card')}
                className="bg-green-500 text-white px-4 py-2 rounded"
            >
                Pay with Debit Card
            </button>
            {paymentSuccess && (
                <div className="mt-4 bg-green-100 text-green-800 p-2 rounded">
                    Payment Successful!
                </div>
            )}
        </div>
    );
};

export default Checkout;
