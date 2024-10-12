import React from 'react';


const SignUp =()=> {

    

    const handleSignUpClick = ()=>{
        alert("Successful");
    }
    return (
        
            <section>
            <div className='SignUp'>
               <h1>Sign Up</h1>
               <button className='submit' onClick={handleSignUpClick}>Start</button>
                </div>
            </section>
                 
       
       
    );
};

export default SignUp