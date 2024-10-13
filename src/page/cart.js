import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart =()=> {
    const navigate = useNavigate();

    const handleCartClick = ()=>{
        navigate('/payment');
    }

    return (
       
            <section>
            <div className='cart'>
               <h1>cart</h1>
               <button className='submit' onClick={handleCartClick}>Place order</button>
                </div>
            </section>
                 
       
       
    )
}

export default Cart