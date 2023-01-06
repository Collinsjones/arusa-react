import React from 'react'
import '../styles/ScndPage.css'
import Simgone from '../images/Simgone.png'
import Simgtwo from '../images/Simgtwo.png'
import Simgfour from '../images/Simgfour.png'
import Simgthree from '../images/Simgthree.png'
import Simgfive from '../images/Simgfive.png'
import Simgsix from '../images/Simgsix.jpg'

const ScndPage = () => {
  return (
    <div className='scndpage'>
      <figure className='tsfig'>
        <img src={Simgone} className="Simgone" alt="dining table" />
        <img src={Simgtwo} className="Simgtwo" alt="pillow" />
        <img src={Simgfour} className="Simgfour" alt="dining table" />
      </figure>
        <h1 className='create'> Creating perfect lines and imposing presence</h1>
        <p className='develop'>
            developed the concept of exclusivity, a Arusa features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, whichcan be incoporated into any decor project. The pieces enchant for thier sobriety , to last for generations, faithful to the shapes of each period, with a touch of the present.
        </p>
        <button className='read'>READ ABOUT US</button>
      <figure className='lsfig'>
        <img src={Simgthree} className="Simgthree" alt="bed" />
        <img src={Simgfive} className="Simgfive" alt="bed" />
        <img src={Simgsix} className="Simgsix" alt="bed" />
      </figure>

        
    </div>
  )
}

export default ScndPage