import React, { useState } from 'react'
import './home.css'
import Products from '../Products/Products'
import { Link } from 'react-router-dom'

import Addtocart from '../Addtocart/Addtocart'
import { useDispatch } from 'react-redux'


export default function Home() {
const dispatch =useDispatch();

const[state,setState]=useState("")
const[issuscribe,setIsuscribe]=useState(false)



const suscribe=()=>{


if(state.length>=5){
   setIsuscribe(true)
   dispatch({
      type:"email",
      emaildata:state,

     })
     dispatch({
      type:"suscribe",
      isData:issuscribe
     })
   }else{
   alert("Please enter your proper email ")
}
  
   

}





  return (
    <>
    <div className='home'>   
    <div className='left'>
        <img src="https://www.48hourslogo.com/oss/works/2022/06/03/17596766289/118869_65353_1a9b8875-0e65-4d69-a94e-e89fec31bc5c.jpg" alt="logo" />
        <div className='nav'>
            <Link to ="/">HOME</Link >
            <Link to ="/pages">PAGES</Link >
            <Link to ="/menu">MENU</Link >
            <Link to ="/blog">BLOG</Link >
            <Link to ="/landing">LANDING</Link >

        </div>
        
   <div className='orderOnline'>
    <Link to={"/orderonline"}>ORDER ONLINE</Link>
    </div>
        
    </div>
    <div className='right'>
    <div className='logoLink'>
          <h3>DELIVERY TO THE DOORSTEP</h3>
          <p>Choose your ingredients</p>
          <p>Get free delivery 24/7</p>
          <p>Special gift coupons</p>
          <input type="email" placeholder='email@xyz.com'  pattern=".+@gmail\.com" onChange={(e)=>{setState(e.target.value)} }/>
         <button onClick={suscribe}>SUSCRIBE</button>
          <p>Check delivery zone</p>
     </div>
     <div className='scrollDown'>
        <p>Scroll Down 	&darr;</p>


     </div>

    </div>
   



    


    </div>
    <Products/>
   
     </>
  )
}
