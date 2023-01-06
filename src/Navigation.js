import React from 'react'

const Navigation = ({
  visibility,
}) => {
  return (
    <div className='navigation'
    style={{
      display: visibility ? "block" : "none",
    }}>
        <ul>
          <li> <a href="/" >Home</a> </li>
          <li> <a href="../pages/Scndpage.js" >About Us</a></li>
          <li> <a href="/#Article" >Read Article</a></li>
          <li> <a href="../pages/ThrdPge.js" >Products</a></li>
          <li> <a href="../pages/sixthPge.js" >SHOP ALL</a></li>
          <li> <a href="../pages/Details.js" >Details</a></li>
          <li> <a href="../pages/OurClub.js" >Our Club</a></li>
        </ul>
    </div>
  )
}

export default Navigation