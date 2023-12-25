import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../Composants/Header/Header'
import { Link, useParams } from 'react-router-dom'
import { Footer } from '../Composants/footer/footer'
import { Button } from '@mui/material'
import axios from 'axios'
import { UserContext } from '../Context/UserContext'

export const Acceuill = () => {
 const {user,setuser,setAuth,userId}=useContext(UserContext)
  
  const [users,setusers]=useState([]) 
    useEffect(()=>{
        fetchUsers() 
       },[])

       const fetchUsers =async () =>{
        try{
            const res = await axios.get("http://127.0.0.1:8000/api/GetUsers")
            setusers(res.data)
            const filtred = res.data.find((user)=>(
                user.id === userId
            ))
             setuser(filtred)
             setAuth(true)          
        }catch(err){
            console.log(err)
        }
       }
  return (
    <>
    <div>
    <div style={{ boxShadow: "0 4px 6px 0 rgba(0,0,0,0.2)" }}>
				<Header />
			</div>
        <div style={{padding:"40px",marginTop:'66px',textAlign:"center"}}>
        <h1 style={{
            fontSize:'34px',
            letterSpacing:'5px',
            textAlign:"center",
            marginBottom:'20px'
        }}>YOUR ACCOUNT HAS BEEN CREATED</h1>
    <p>Thank you for creating your account at mt fashion. Your account details have been emailed to <b>{user.email}</b></p>
        </div>
        </div>
    <div style={{marginBottom:"55px"}}>
   <Link to='/shop'>
   <Button style={{
     marginLeft:'510px'
   }} variant="outlined" color='secondary'>Continue shopping</Button>
   </Link>
    </div>
    <Footer />
    </>
  )
}
