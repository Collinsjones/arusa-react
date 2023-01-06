import React from 'react'
import Sofa from '../images/Sofa.png'
import '../styles/Native.css'

const Native = () => {
  return (
    <div className='native'>
        <section className='natsec'>
            <h4 className='nlc'>
                Native light chair
            </h4>
            <p className='refine'>
                Refinement Chair with Ripped Seat, made of retro Eucalyptus wood, of great resistance, kiln dried,made a spike system and painted with P.U. Polyurethane With its entire structure painted in wood, it offers a lot of elegance to your enviroment and when cleaning is very easy, as it is washable and light for movement. Enough of recieving visitors and not having a place to accomodate them. With the chair, your days as a host will be marked by a lot of elegance  and sophistication.
            </p>
            <a href="" className='viewproduct'>VIEW PRODUCT </a>
        </section>
        <figure className='secsofa'>
          <img src={Sofa} className="sofa" alt="sofa" />
        </figure>
    </div>
  )
}

export default Native