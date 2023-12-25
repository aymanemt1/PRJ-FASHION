import React, { createContext, useState } from 'react'

export const UserContext = createContext()

 export const UserProvider = ({children}) => {

const [user,setuser]=useState([])
const [auth,setAuth]=useState(false)
const [userId,setuserId]=useState('')

  return (

    <UserContext.Provider value={{auth,setAuth,user,setuser,setuserId,userId}}>
     {children}
    </UserContext.Provider>
    
  )
}
