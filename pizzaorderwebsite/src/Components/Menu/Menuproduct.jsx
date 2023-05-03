import React, { useEffect} from 'react'

import './menuproduct.css'
import { useDispatch, useSelector } from 'react-redux'
export default function Menuproduct() {

 const dispatch=useDispatch();
 const {menuproduct}=useSelector((storedata)=>{
  return storedata;
 })

 useEffect(()=>{
  fetch("https://pizzaallapala.p.rapidapi.com/productos-promo/?rapidapi-key=e5badb5bc6msh8707824594488fep1f97bbjsnc8b0b0102300")
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data)
    dispatch({
      type:"menuproduct",
      payLoad2:data.promo
    })
  })
 },[])



  return (
    <div className='menuResult'> 
    {
      menuproduct.map((ele)=>{
        return<div className='menuProduct'>
        
          <img src={ele.linkImagen} alt="img" />
          <p>{ele.descripcion}</p>
          <p>{ele.precioFinal}</p>
        
         
          


        </div>
      })

    }
    
    </div>
  )
}
