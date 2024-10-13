
import './App.css';
import MainPage from './page/MainPage'
import Login from './page/Login'
import SignUp from './page/SignUp'
import Products from './page/products'
import Cart from './page/cart'
import Payment from './page/payment'
import QRcode from './page/qrcode';
import OrderPlaced from './page/OrderPlaced'
import LastPage from './page/LastPage'

import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
   <div>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/OrderPlaced" element={<OrderPlaced/>} />
        <Route path="/lastpage" element={<LastPage />} />
        <Route path='/qrcode' element={<qrcode/>} /> 
        
      </Routes>
    </Router>
   </div>
  );
}

export default App;
