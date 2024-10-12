import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login =()=> {
    const navigate = useNavigate();

    const handleLoginClick = ()=>{
        navigate('/signup');
    }

    return (
       
            <section>
            <div className='login'>
               <h1>Login</h1>
               <button className='submit' onClick={handleLoginClick}>Start</button>
                </div>
            </section>
                 
       
       
    )
}

export default Login