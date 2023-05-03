import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'
import Menumiddle from './Menumiddle'
import Menuproduct from './Menuproduct'
export default function Menu() {
  return (
<div className='menuContainer'>
  <header>
    <nav>
      <div className='upperNav'>
        <div className='leftSide'>
      <i class="fa fa-mobile-phone">CALL US ON - +91 7008979288</i>
     
      <i class="	fas fa-route">ODISHA INDIA 751010</i>
        
        </div>
        <div className='rightSide'>
        <i class="fa fa-heart">LOYALTY CARD</i>
        <i class="fas fa-map-marker-alt">LOCATIONS</i>
        <i class="fas fa-location-arrow">CAREERS</i>
        </div>

      </div>
      <div className='lowerNav'>
       <div className='lowerLeft'>
       <img src="https://www.48hourslogo.com/oss/works/2022/06/03/17596766289/118869_65353_1a9b8875-0e65-4d69-a94e-e89fec31bc5c.jpg" alt="logo" />
       
           
            <Link to ="/">HOME</Link >
            <Link to ="/pages">PAGES</Link >
            <Link to ="/menu">MENU</Link >
            <Link to ="/blog">BLOG</Link >
            <Link to ="/landing">LANDING</Link >
            </div>
            <div className='lowerRight'>
            <button id='cart'>  <i class='fas fa-shipping-fast'></i>CART</button> 
            <button id='search'> <i class='fa fa-search'></i>SEARCH</button> 
            <button id='orderOnline'> ORDER ONLINE</button> 
            </div>

            </div>
    </nav>
  </header>
<Menumiddle/>
<Menuproduct/>
</div>
    
  )
}
