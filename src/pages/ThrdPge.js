import React from "react";
import "../styles/ThrdPge.css";
import Timgone from "../images/Timgone.png";
import Timgtwo from "../images/Timgtwo.png";
import Timgthree from "../images/Timgthree.png";
import Timgfour from "../images/Timgfour.png";

const ThrdPge = () => {
  return (
    <div>
      <section className="topsech3">
        <h3 className="enjoy">Enjoy our feature product</h3>
      </section>
      <section className="thrdpge">
        <figure>
          <img src={Timgone} className="Timgone" alt="Native iron chair" />
          <figcaption className="name">NATIVE IRON CHAIR </figcaption>
          <figcaption className="price">$4,990</figcaption>
        </figure>

        <figure>
          <img src={Timgtwo} className="Timgtwo" alt="Century dashe" />
          <figcaption className="name">CENTURY DASHE </figcaption>
          <figcaption className="price">$1,990</figcaption>
        </figure>

        <figure>
          <img src={Timgthree} className="Timgthree" alt="Native light chair" />
          <figcaption className="name">NATIVE LIGHT CHAIR</figcaption>
          <figcaption className="price"> $4,990</figcaption>
        </figure>

        <figure>
          <img src={Timgfour} className="Timgfour" alt="paola wood lamp" />
          <figcaption className="name">PAOLA WOOD LAM</figcaption>
          <figcaption className="price">$5,990</figcaption>
        </figure>
      </section>
     <section className="shpsec">
        <a href="" className="shopall">SHOP ALL</a>
     </section>
    </div>
  );
};

export default ThrdPge;
