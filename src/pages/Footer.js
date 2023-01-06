import React from 'react'
import { ReactComponent as Bigunion } from "../images/Bigunion.svg";
import '../styles/Footer.css'

const Footer = () => {
    const today = new Date();
  return (
    <div className='foot'>
        <section className='topfoot'>
            <section className='secfoot'>
                <h6>STORE</h6>
                <a href="/">Home</a>
                <a href="">About</a>
                <a href=""> Journal</a>
                <a href=""> Conatact</a>
            </section>
            <section className='secfoot'>
                <h6>SHOP</h6>
                <a href="">All</a>
                <a href="">Lookbook</a>
                <a href=""> Collections</a>
                <a href="">Featured</a>
            </section>
            <section className='secfoot'>
                <h6>COLLECTIONS</h6>
                <a href="">Decors</a>
                <a href="">Furniture</a>
                <a href="">Ceramics</a>
                <a href=""> Lamp</a>
            </section>
            <section className='secfoot'>
                <h6>HELP</h6>
                <a href="">Contact</a>
                <a href="">Login & Account</a>
                <a href="">Privacy Policy</a>
                <a href="">Refund Policy</a>
            </section>
        </section>
        <Bigunion className='bigunion'/>
        <footer>
            <p>
                &copy; ARUSA {today.getFullYear()} | OLABIYI COLLINS
            </p>
        </footer>
    </div>
  )
}

export default Footer