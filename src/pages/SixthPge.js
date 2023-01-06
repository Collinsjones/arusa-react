import React from 'react'
import barcode from "../images/barcode.png";
import '../styles/SixthPge.css'

const SixthPge = () => {
  return (
    <div className='sixthpage' >
      <div className='topsec'>
            <section className='lookbook'>
                <h2 className='lbook'>LOOKBOOK</h2>
            </section>
            <article>
                <h3 className='art-header'>
                    Lookbook
                </h3>
                <p className='pieces'>
                    The pieces stand out from their contemporary straight lines and imposing presence. Current, following the world trend of the great masters, the furniture stands out for its noble and innovative materials, composing sophisticated and exclusive enviroments. 
                </p>
            </article>
            <section className='table-container'> 
                <table>
                    
                        <thead>
                            <tr className='hcon'>
                                <th>
                                    ITEMS
                                </th>
                                <th>DESCRIPTION</th>
                            </tr>
                        </thead>
                    
                </table>
                
                    <section className='fig-container'>
            
                            <figure>
                                <img src={barcode} className="barcode" alt="barcode" />
                                <figcaption className="brname">SEE LOOKBOOK </figcaption>
                                <figcaption className="brprice">SHOP ALL</figcaption>
                            </figure>
                            
                    </section>
                    <table>
                        <tbody>
                        <tr>
                            <td>MATERIALS:</td>
                            <td className='description'>CERAMIC,GLASS,IRON, WOOD</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>PRODUCED IN:</td>
                            <td className='description'>CANADA,ITALY, UNITED STATES</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>CATEGORIES:</td>
                            <td className='description'>DECORATION, LAMP, FURNITURE</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td className='empty'></td>
                            <td className='empty'></td>
                        </tr>
                        </tbody>
                    </table>
            </section>
        </div>
        
        <h4 className='efp'>
            Enjoy our feature products
        </h4>
    </div>
  )
}

export default SixthPge