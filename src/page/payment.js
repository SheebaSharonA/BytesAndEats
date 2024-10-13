import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { QRCodeCanvas } from 'qrcode.react'; 
import '../css/payment.css';

=======
import '../css/payment.css';
>>>>>>> af2ae6b359874e56cd7eaf8f204d578514f2ceec
const Payment = () => {
  const navigate = useNavigate();

// Example orderedItems array
const [orderedItems] = useState([
  { name: 'Item 1', price: 200 },
  { name: 'Item 2', price: 300 },
  { name: 'Item 3', price: 500 }
]);

  const [paymentMethod, setPaymentMethod] = useState('');
  const [billAmount] = useState(2500);
  const upiID = 'user@upi'; // Example UPI ID, replace with actual UPI ID

  const handlePaymentClick = () => {
    if (paymentMethod) {
      navigate('/orderplaced');
    } else {
      alert('Please select a payment method!');
    }
<<<<<<< HEAD
  };
=======
      navigate('/orderplaced', {
        state: {
          billAmount: totalBill,
          orderedItems: orderedItems
        }
      });
    };
>>>>>>> af2ae6b359874e56cd7eaf8f204d578514f2ceec
  

  return (
    <section>
      <div className='Payment'>
        <h1>Payment</h1>

        {/* Bill Section */}
        <div className='bill-section'>
          <h3>Bill Details</h3>
          <p>Bill Amount: ${billAmount}</p>
        </div>

        {/* Payment Options */}
        <div className='payment-options'>
          <h3>Select Payment Method:</h3>
          <div>
            <input
              type='radio'
              id='cash'
              name='paymentMethod'
              value='cash'
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor='cash'>Cash</label>
          </div>

          <div>
            <input
              type='radio'
              id='card'
              name='paymentMethod'
              value='card'
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor='card'>Card</label>
          </div>

          <div>
            <input
              type='radio'
              id='upi'
              name='paymentMethod'
              value='upi'
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor='upi'>UPI</label>
          </div>
        </div>

        {/* Show QR Code for UPI Payment */}
        {paymentMethod === 'upi' && (
          <div className='upi-qr'>
            <h3>Scan to Pay via UPI</h3>
            <QRCodeCanvas 
              value={`upi://pay?pa=${upiID}&pn=UPI Payment&am=${billAmount}&cu=INR`} 
              size={200} // Set the size of the QR code
            />
          </div>
        )}

        {/* Proceed Button */}
        <button className='submit' onClick={handlePaymentClick}>
          Proceed
        </button>
      </div>
    </section>
  );
};

export default Payment;
