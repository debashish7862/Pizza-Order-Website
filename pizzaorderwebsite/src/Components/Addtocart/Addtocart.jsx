import React from 'react'
import './addtocart.css'
import { Link } from 'react-router-dom'


export default function Addtocart() {
  return (
    <div className='container'>
    <div className='addtoCart'>
        <div className='tag'>
        <h2>WELCOME TO ITALIAN PIZZA!</h2>
        <p className=''>We deliver pizza in 40 minutes max . If not-Pizza's on us ! </p>
        </div>
      <form action="yes">
        <div className='email'>
        <h4>Email</h4> 
        <input type="email" /><br/>
        </div>
        <div className='phone'>
        <h4>Phone</h4> 
        <input type="tel" placeholder='123-45-678'  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></input><br/>
        </div>

      <div className='numberOfSlice'>
       <h4>Number of slices</h4> 
        <input type="number" min="1" max="6" />
        </div>
        <div className='selectSize'>
        <h4>Select Size</h4>
        <input type="radio"  name="size"></input>
        <label htmlFor="pizza">8 Inch</label>
        <input type="radio"  name="size"></input>
        <label htmlFor="pizza">10 Inch</label>
       
        <input type="radio"  name="size"></input>
        <label htmlFor="pizza">12 Inch</label>
        <input type="radio"  name="size"></input>
        <label htmlFor="pizza">14 Inch</label>
        </div>
        <div className='toopings'>
        <h4>Toopings</h4>
        <input type="checkbox"  ></input>
        <label htmlFor="pizza">Pepperoni</label>
        

        <input type="checkbox"  ></input>
        <label htmlFor="pizza">Onions</label>
        

        <input type="checkbox"  ></input>
        <label htmlFor="pizza">Mushrooms</label>
        
        <input type="checkbox"  ></input>
        <label htmlFor="pizza">Sausage</label>
        <br/>
        
        
        
        </div>

        <div className='agreement'>
        <input type="checkbox"  ></input>
        <label htmlFor="pizza">I agree to the TERM AND CONDITIONS</label>
        </div>
        
      </form>
    <Link to={"/sucesspage"} ><button id='orderButton'>Order Now</button></Link>
      
    </div>
    </div>
    
  )
}
