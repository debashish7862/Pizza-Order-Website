import React from 'react'
import { useSelector } from 'react-redux'
import'./suscribe.css'
import gif from './suscribe.gif'
export default function Suscribe() {

 const {emaildata}=useSelector((store)=>{
    return store;
 })

  return (
    <div className='suscribe'>
        <h1>You suscribe suscessfully</h1>
        <p>With your email id:-{emaildata}</p>
        <p>Thank you @-{emaildata}</p>
        <img src={gif} alt="" />
</div>
  )
}
