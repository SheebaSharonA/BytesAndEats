import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [billAmount] = useState(1000); // Example bill amount
  const upiID = 'user@upi'; // Example UPI ID, replace with actual UPI ID
  const totalBill = orderedItems.reduce((total, item) => total + item.price, 0);

  const handlePaymentClick = () => {
    if (paymentMethod === 'upi') {
      // Navigate to QR code page with state
      navigate('/qrcode', { state: { billAmount, upiID } });
    } else if (paymentMethod) {
      navigate('/orderplaced');
    } else {
      alert('Please select a payment method!');
    }
      navigate('/orderplaced', {
        state: {
          billAmount: totalBill,
          orderedItems: orderedItems
        }
      });
    };
  };

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

        {/* Proceed Button */}
        <button className='submit' onClick={handlePaymentClick}>
          Proceed
        </button>
      </div>
    </section>
  );

export default Payment;
