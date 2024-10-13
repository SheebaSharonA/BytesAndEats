import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import '../css/qrcode.css';

const QRCodePage = ({ location }) => {
  const { billAmount, upiID } = location.state; 

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Scan to Pay via UPI</h1>
      <QRCodeCanvas
        value={`upi://pay?pa=${upiID}&pn=UPI Payment&am=${billAmount}&cu=INR`}
        size={250} 
      />
      <p>Bill Amount: ${billAmount}</p>
    </div>
  );
};

export default QRCodePage;
