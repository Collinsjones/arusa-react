import React from 'react'
import Rectangle from '../images/Rectangle.jpg'
import '../styles/OurClub.css'

const OurClub = ({email}) => {
  return (
    <div className='club' >
        <section className='OurClub'
            style={{backgroundImage: `url(${Rectangle})`}}>
                <hr className='clubhr'/>
            <h2 className='clubh2'>
                Be part of our club for discount
            </h2>
            <form className='email' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="email"></label>
                <input
                    id='email'
                    type="text"
                    placeholder='YOUR EMAIL'
                    value={email}
                    onChange={(e) => (e.target.value)}
                />
            </form>
        </section>
    </div>
  )
}

export default OurClub