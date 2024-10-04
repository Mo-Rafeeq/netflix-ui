import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

    const[show,setshow]=useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>500){
                setshow(true)
            }
            else{
                setshow(false)
            }
        })

    })

  return (
<div className={`nav ${show&& 'blackNav'}`}>
        <img 
        style={{width:'80px', marginLeft:'50px'}}
         src="https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png" alt="Nav image" />
    </div>
  )
}

export default Nav