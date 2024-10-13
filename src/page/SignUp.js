import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp =()=> {

    
    const navigate = useNavigate();
    const handleSignUpClick = ()=>{
        navigate('/products');
    }
    return (
        
            <section>
            <div className='SignUp'>
               <h1>Sign Up</h1>
               <button className='submit' onClick={handleSignUpClick}>submit</button>
                </div>
            </section>
                 
       
       
    );
};

export default SignUp