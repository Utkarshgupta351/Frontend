import React from 'react'
import img1 from '../asset/img/dashboard.jpg'
import { Link, useNavigate } from 'react-router-dom'
function Homepage() {
  const navigate = useNavigate();
  const doLogin = ()=> {
    console.log("Cliked");
    navigate("/dashboard");
  };
  return (
    <div className='container'>
        <div className='leftcontainer'>
        <p>Welcome to Expense Tracker
      </p>
      <p>Manage all your expenses here</p>
            <img src={img1} />
        </div>
        <div className='rightcontainer'>
            <div className='formcard'>
              <div>
                <h2 style={{alignSelf:'center'}}>Login</h2>
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
            <button onClick={doLogin}>Login</button>
          </div>
          <div>
            <span style={{alignSelf:'center'}}>Not A User?<Link to="/register">Register</Link></span>
          </div>
              </div>
            </div>
            
        </div>
      

    </div>
  )
}

export default Homepage
