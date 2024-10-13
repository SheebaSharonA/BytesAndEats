import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderPlaced =()=> {
    const navigate = useNavigate();

    const handleOrderPlacedClick = ()=>{
        navigate('/lastpage');
    }

    return (
       
            <section>
            <div className='orderplaced'>
               <h1>Order Placed</h1>
               
               <button className='submit' onClick={handleOrderPlacedClick}>Confirm</button>
                </div>
            </section>
                 
       
       
    )
}

export default OrderPlaced