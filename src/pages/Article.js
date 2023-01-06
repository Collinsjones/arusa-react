import React from "react";
import blacksofa from "../images/blacksofa.jpg";
import bigbed from "../images/bigbed.jpg";
import pinkpillow from "../images/pinkpillow.jpg";
import bluesetie from "../images/bluesetie.jpg";
import "../styles/Article.css";

const Article = () => {
  return (
    <div>
      <section className="seceoa">
        <h5 className="eoa">Enjoy our articles</h5>
      </section>

      <section className="topart">
        <section className="secres">
          <h5 className="res">READER STORIES</h5>
        </section>

        <article className="artone">
          <h3 className="manh">
            Manhattan Pià-terre for a new Chicago apartment
          </h3>
          <p className="inte">
            Interior designer Sarah Vaile remembers eyeing a New York City
            apartment—one with bold colors and a personality as distinct as its
            chic owner—in a 2014 issue of House Beautiful, and tucking it away
            for future design inspiration. Years later, in a serendipitous turn
            of events, the woman she'd seen in the magazine—a stylish figure now
            in her 30s—just moved to Chicago.
          </p>
          <a href="" className="ra">
            READ ARTICLE
          </a>
        </article>
        <figure className="fblacksofa">
          <img src={blacksofa} className="blacksofa" alt="black sofa" />
        </figure>
      </section>
      <section className="secsaa">
        <a href="" className="saa">SEE ALL ARTICLE</a>
      </section>
      <section className="lowart">
        <article className="bohemian">
          <figure>
            <img src={bigbed} className="bigbed" alt="big bed" />
          </figure>
          <h5 className="boh5">Inside a playful, bohemian beach house on Martha's Vineyard</h5>
          <p className="bohp">
            I would follow Jessica to the end of the Earth,” Johanna Hynes says,
            referring to her designer, Jessica Stambaugh. The Nashville-based
            principal of JS Interiors designed Hynes' Boston wellness studio,
            Asana Charlestown, her family's townhouse—and most recently, their
            beach chalet in Katama on Martha's Vineyard.
          </p>
          <a href="" className="boha">READ ARTICLE</a>
        </article>
        <article className="texas">
          <figure>
            <img src={pinkpillow} className="pinkpillow" alt="twin couch" />
          </figure>
          <h5 className="texash5">Modern Texas home is beautiful and completely kid-friendly</h5>
          <p className="texasp">
            I would follow Jessica to the end of the Earth,” Johanna Hynes says,
            referring to her designer, Jessica Stambaugh. The Nashville-based
            principal of JS Interiors designed Hynes' Boston wellness studio,
            Asana Charlestown, her family's townhouse—and most recently, their
            beach chalet in Katama on Martha's Vineyard.
          </p>
          <a href="" className="texasa">READ ARTICLE</a>
        </article>
        <article className="tudor">
          <figure>
            <img src={bluesetie} className="bluesetie" alt="set of chairs" />
          </figure>
          <h5 className="tudorh5">Tudor-style home in Chicago's North Shore is chock-full</h5>
          <p className="tudorp">
            I would follow Jessica to the end of the Earth,” Johanna Hynes says,
            referring to her designer, Jessica Stambaugh. The Nashville-based
            principal of JS Interiors designed Hynes' Boston wellness studio,
            Asana Charlestown, her family's townhouse—and most recently, their
            beach chalet in Katama on Martha's Vineyard.
          </p>
          <a href="" className="tudora">READ ARTICLE</a>
        </article>
      </section>
    </div>
  );
};

export default Article;
