import React from 'react';
import useSignUpForm from './CustomHooks';

const Signup = () => {
  const signup = () => {
    alert(`User Created! 
Name: ${inputs.firstName} ${inputs.lastName}
Email: ${inputs.email}`);
  }
  const {inputs, handleInputChange, handleSubmit} = useSignUpForm({firstName: '', lastName: '', email: '', password1: ''},signup);
  return (
            <div className="regform"><h1>Let's Get Started... </h1>
	              	<div class="main">
                  <form onSubmit={handleSubmit} autoComplete="off">
			                   <div id="name">
         
                  <input className ="firstname" type="text" placeholder="FIRSTNAME" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
                
               
                  <input className="lastname" type="text" placeholder="LASTNAME" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
                     </div>
              
                  <input className="company" type="email" placeholder="EMAIL" name="email" onChange={handleInputChange} value={inputs.email} required />
                      
                  <input className="company" type="password" placeholder="PASSWORD" name="password1" onChange={handleInputChange} value={inputs.password1}/>
                  <div className="end">
        
                 <h5> By continuing, you agree to Drreamz<span> <a href="www.google.com">Terms and Conditions</a></span> &nbsp;and&nbsp; <span><a href="www.gooogle.com">Privacy</a></span></h5>

                </div>
                  </form>
                  </div>
             
              </div>
             
           
  )
}

export default Signup;