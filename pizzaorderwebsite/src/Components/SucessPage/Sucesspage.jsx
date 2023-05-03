import React from 'react'
import './sucesspage.css'
import gif from './boy.gif'
import gif2 from './boySpeed.gif'
export default function Sucesspage() {
  return (
    <div className='sucessPage'> 

        <h1>Congratulations</h1>
        <p>Hot Pizza On The Way</p>
        <h1>Thank You</h1>
        
        <div className='bigBoy'>
          <img src={gif2} alt="img" />
          
          
        </div>
        


    </div>
  )
}
