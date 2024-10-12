
import './App.css';
import MainPage from './page/MainPage'
import Login from './page/Login'
import SignUp from './page/SignUp'
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
      </Routes>
    </Router>
   </div>
  );
}

export default App;
