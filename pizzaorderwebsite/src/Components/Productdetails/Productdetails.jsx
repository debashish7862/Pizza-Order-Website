import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import'./productdetails.css'
import { Link, useParams } from 'react-router-dom'


export default function Productdetails() {
    const {id}=useParams();

    const {products}=useSelector((store)=>{
        return store;
    })





  const item=products.find((ele)=>ele.id===parseInt(id));


  return (
    <div>
    <div className='productDetails'>
        <div className='leftDetails'>
   <img src={item.linkImagen} alt="img" />
   </div>
   <div className="rightDetails">
    <h2>{item.descripcion}</h2>
    <p>Price:-{item.precio}</p>
    <p>Size:-{item.nombre}</p>
    <p>Weight:-{item.tasaIva}</p>
    <p>Date of manufacture:-{item.created_at}</p>
    
  <Link to={"/addtocart"}><button id='addtocart'>ADD TO CART</button></Link>
   </div>
    
    </div>
    </div>
  )
}
