import React from 'react'

function Register() {
  return (
    <div>
        <div className='formcard'>
          <h2 style={{alignSelf:'container'}}>Register</h2>
          
          <div>
            <label>
              Name
            </label>
            <input 
            required
            placeholder='Enter Your Name'
            type='text'
            />
          </div>
          
          <div>
            <label>
              Email
            </label>
            <input 
            required
            placeholder='Enter Your Email'
            type='email'
            />
          </div>
          
          <div>
            <label>
              Password
            </label>
            <input 
            required
            placeholder='Enter Your Password'
            type='password'
            />
          </div>
          
          <div>
            <label>
              Confirm Password
            </label>
            <input 
            required
            placeholder='Confirm Your Password'
            type='password'
            />
          </div>
          
          <div>
             <button>Submit</button>
          </div>
            </div>

            
      
    </div>
  )
}

export default Register
