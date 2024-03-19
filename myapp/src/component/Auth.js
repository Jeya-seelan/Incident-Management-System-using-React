import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = React.createContext(null)

export default function Auth({children}){
    const [user,setUser] = useState()
    const navigate = useNavigate()

    const login = (user)=>{
        setUser(user)
        navigate('/user')
    }

    const logout = ()=>{
        setUser(null)
        navigate('/')
    }

  return (
    <div>
      <AuthContext.Provider value={{user,login,logout}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export const useAuth = ()=>{
    return useContext(AuthContext)
}
