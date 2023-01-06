import React from 'react'
import whitechair from "../images/whitechair.jpg";
import blackvase from '../images/blackvase.jpg'
import '../styles/Blackvas.css'

const Blackvas = () => {
  return (
    <div className='Blackvas'
    style={{backgroundImage: `url(${whitechair})`}}>
      <figure>
          <img src={blackvase} className="blackvase" alt="blackvase" />   
       </figure> 
        
    </div>
  )
}

export default Blackvas