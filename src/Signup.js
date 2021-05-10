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
    <div className="wrapper">
            <form onSubmit={handleSubmit} autoComplete="off">
               <div className="title">
                   Lets Get Started...
               </div>
              <div className="hot">
              <div className="field">
                <div className="control">
                  <input className="inpu" type="text" placeholder="Firstname" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
                </div>
                </div>
                <div className="field">
                <div className="control">
                  <input className="inpu" type="text" placeholder="Lastname" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
                </div>
                </div>
                </div>
              <div className="field">
               
                <div className="control">
                  <input className="input" type="email" placeholder="Email" name="email" onChange={handleInputChange} value={inputs.email} required />
                </div>
              </div>
              <div className="field">
               
                <div className="control">
                  <input className="input" type="password" placeholder="Password" name="password1" onChange={handleInputChange} value={inputs.password1}/>
                </div>
              </div>
              <div className="end">
        
                      By continuing, you agree to Drreamz<span> <a href="www.google.com">Terms and Conditions</a></span> &nbsp;and&nbsp; <span><a href="www.gooogle.com">Privacy</a></span>
            
              </div>
             
            </form>
          </div>
  )
}

export default Signup;