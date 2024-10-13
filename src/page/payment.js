import React from 'react';
import { useNavigate } from 'react-router-dom';

const Payment =()=> {
    const navigate = useNavigate();

    const handlePaymentClick = ()=>{
        navigate('/orderplaced');
    }

    return (
       
            <section>
            <div className='Payment'>
               <h1>Payment</h1>
               <button className='submit' onClick={handlePaymentClick}>Proceed</button>
                </div>
            </section>
                 
       
       
    )
}

export default Payment