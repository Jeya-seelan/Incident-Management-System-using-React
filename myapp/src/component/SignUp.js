import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp(){
    const navigate = useNavigate()

    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSignup = ()=>{
        axios.post("http://localhost:3003/users",{
            "username": username,
            "email": email,
            "password": password
        }).then(()=>{
            alert("Sign up successfull!...")
            navigate('/login')
        }).catch(()=>{
            alert("Something went wrong!...")
        })
        
    }

  return(
    <div className='Signup'>
      <div className="container">
          <form onSubmit={handleSignup}>
            <h1>Sign up</h1>

            <div className='input-box'>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Username" required/>
            </div>

            <div className='input-box'>
                
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email" required/>
            </div>

            <div className='input-box'>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" required/>
            </div>

            <button type="submit">Sign up</button>
            <p>Have an account?<Link to='/login'>Login</Link></p>
          </form>
        </div>
    </div>
  )
}
