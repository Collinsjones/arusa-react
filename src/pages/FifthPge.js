import React from 'react'
import wooden from '../images/wooden.png'
import Iglenix from "../images/Iglenix.png";
import Atajux from "../images/Atajux.jpg";
import '../styles/FifthPge.css'

const FifthPge = () => {
  return (
    <div className='fifthpge'
    style={{backgroundImage: `url(${wooden})`}}
    >
        <hr className='nhr'/>
        <section className='siglenix'>
            <figure>
            <img src={Iglenix} className="iglenix" alt="Iglenix Vase" />
            <figcaption className="nname">IGLENIX VASE</figcaption>
            <figcaption className="nprice">$2,299</figcaption>
            </figure>
        </section>

        <section className='satajux'>
            <figure>
            <img src={Atajux} className="atajux" alt="Atajux lamp" />
            <figcaption className="nname">ATAJUX LAMP</figcaption>
            <figcaption className="nprice">$2,399</figcaption>
            </figure>
        </section>

    </div>
  )
}

export default FifthPge