import React from "react";
import demo from "../images/demo.jpg";
import sflowe from "../images/sflowe.jpg";
import flower from "../images/flower.jpg";
import '../styles/Details.css'

const Details = () => {
  return (
    <div>
      <section className="topdet">
        <h2 className="deth2">Every detail matter</h2>
        <p className="detp1">
          WE ARE SPECIALIZED IN ADORNMENTS, THAT BRING CHARM TO ANY ENVIRONMENT.
        </p>
        <p className="detp2">
          There are multiples of high quality pieces, with styles that
          transition from classic to contemporary. An exclusive selection of lampshades, vases, murals, pillows, paintings and many gifts to compose great projects. In order selection, a mix of basic style, stricter customization and more compact dimensions, composing sophisticated and exclusive environments.
        </p>
      </section>
      <section className="lowdet">
        <section className="conth5">
        <h5 className="deth5">
            DETAILS
        </h5>
        </section>
        <figure className="fdemo">
          <img src={demo} className="demo" alt="democracy" />
        </figure>
        <figure className="fsflowe">
          <img src={sflowe} className="sflowe" alt="flower" />
          <img src={flower} className="flower" alt="flower" />
        </figure>
      </section>
    </div>
  );
};

export default Details;
