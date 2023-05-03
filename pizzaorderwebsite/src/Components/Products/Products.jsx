import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './product.css'
export default function Products() {
    const key="e5badb5bc6msh8707824594488fep1f97bbjsnc8b0b0102300";
    
 const dispatch=useDispatch();

 const {products}=useSelector((storedata)=>{
    return storedata;
 })
    
    useEffect(()=>{

      if(products==0){



        fetch("https://pizzaallapala.p.rapidapi.com/productos/?rapidapi-key=e5badb5bc6msh8707824594488fep1f97bbjsnc8b0b0102300")
       

        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
          dispatch({
            type:"products",
            payLoad:data.productos,
          })
           
        })
      }

    },[])
  

    
  return (
    <div className='products'>
        {
            products.map((ele)=>{
                return<div className='card'>
                    <div className='cardBody'>
                    <img src={ele.linkImagen} alt="image" />
                    <p>{ele.descripcion}</p>
                    <p>{ele.precio}</p>
                    </div>
                    <div className='hideButton'>
                  <Link to={"/addtocart"}><button id='first'>ADD TO CART</button></Link>
                 <Link to={`/quickview/${ele.id}`}><button>QUICK VIEW</button></Link>  

                    </div>


                    </div>
            })
        }

    </div>

    
   
    
  )
}
