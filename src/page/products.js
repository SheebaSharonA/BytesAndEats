import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products =()=> {
    const navigate = useNavigate();

    const handleProductClick = ()=>{
        navigate('/cart');
    }

    return (
       
            <section>
            <div className='product'>
               <h1>Products</h1>
               <button className='submit' onClick={handleProductClick}>view cart</button>
                </div>
            </section>
                 
       
       
    )
}

export default Products