import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

 export const ThemeProvider = ({children}) => {



   const [modeColor,setmodeColor]=useState("lightcolor")
  
    const [deletedItem,setdeletedItem]=useState(false)
    const [addedtocart,setaddedtocart]=useState(false)

    const [modeBackground,setmodeBackground]=useState('lightBackground')
    const styleDark = modeBackground === 'darkBackground' ? {backgroundColor:"rgb(34, 43, 69)" } : {backgroundColor:"white"};

    const toggle =()=>{
      setmodeColor((prev)=>(prev === "lightcolor" ? 'darkcolor' :"lightcolor"))
      setmodeBackground((prev)=>(prev === "lightBackground" ? 'darkBackground' :"lightBackground"))
    }



  return (

    <ThemeContext.Provider value={{toggle,modeColor,modeBackground,styleDark,
    deletedItem,
    setdeletedItem,
    addedtocart,
    setaddedtocart
    }}>
     <div className={` theme ${modeColor} ${modeBackground}`}>
     {children}
     </div>
    </ThemeContext.Provider>
    
  )
}
