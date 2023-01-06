import React from "react";
import { useState, useEffect } from "react";
import background from "./background.svg";
import { VscMenu } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";
import { ReactComponent as Union } from "./Union.svg";
import ShoppingBag from "./ShoppingBag";
import "./Index.css";
import product1 from "./bluecouch.jpg";
import product2 from "./woodenbox.jpg";
import product3 from "./chand.jpg";
import product4 from "./drawer.png";
import product5 from "./couch.jpg";
import product6 from "./stool.jpg";
import product7 from "./multichand.jpg";
import product8 from "./lamp.jpg";

import ScndPage from "./pages/ScndPage";
import ThrdPge from "./pages/ThrdPge";
import Native from "./pages/Native";
import FifthPge from "./pages/FifthPge";
import SixthPge from "./pages/SixthPge";
import Details from "./pages/Details";
import Article from "./pages/Article";
import OurClub from "./pages/OurClub";
import Footer from "./pages/Footer";
import Blackvas from "./pages/Blackvas";
import Navigation from "./Navigation";

const PRODUCTS = [
  {
    id: 1,
    productName: "NATIVE IRON CHAIR",
    price: 4990,
    productImage: product1,
  },
  {
    id: 2,
    productName: "CENTURY DASHE",
    price: 1799,
    productImage: product2,
  },
  {
    id: 3,
    productName: "NATIVE LIGHT CHAIR",
    price: 4990,
    productImage: product3,
  },
  {
    id: 4,
    productName: "PAOLA WOOD LAMP",
    price: 5990,
    productImage: product4,
  },
  {
    id: 5,
    productName: "NATIVE IRON CHAIR",
    price: 4990,
    productImage: product5,
  },
  {
    id: 6,
    productName: "CENTURY DASHE",
    price: 1799,
    productImage: product6,
  },
  {
    id: 7,
    productName: "NATIVE LIGHT CHAIR",
    price: 4990,
    productImage: product7,
  },
  {
    id: 8,
    productName: "PAOLA WOOD LAMP",
    price: 5990,
    productImage: product8,
  },
];

function App() {
  const [bagVisibilty, setBagVisible] = useState(false);
  const [navVisibilty, setnavVisible] = useState(false);
  const [productsInBag, setProducts] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInBag));
  }, [productsInBag]);

  const addProductToBag = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    };
    setProducts([...productsInBag, newProduct]);
  };

  const onQuantityChange = (productId, count) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId);
      if (productsIndex !== -1) {
        oldState[productsIndex].count = count;
      }
      return [...oldState];
    });
  };

  const onProductRemove = (product) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex(
        (item) => item.id === product.id
      );
      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
  };
  const hambugerIcon =  <VscMenu className="vsc" size={25}
        onClick={() => setnavVisible(true)}/>
  
  const closeIcon = <VscClose className="vsc" size={25}
  onClick={() => setnavVisible(false)}/>

  return (
    <div className="App">
      <main
        className="Toppage"
        style={{ backgroundImage: `url(${background})` }}
      >
        <ShoppingBag
          visibility={bagVisibilty}
          products={productsInBag}
          onClose={() => setBagVisible(false)}
          onQuantityChange={onQuantityChange}
          onProductRemove={onProductRemove}
        />

        <div className="header">
          <section className="menucontainer">
            <button >
              {navVisibilty ? closeIcon :hambugerIcon}
            </button>
            <p className="headershop">SHOP</p>
          </section>
          <Union className="union" />
          <div className="bag-con">
            <p>BAG</p>
            <button onClick={() => setBagVisible(true)}>
              {productsInBag.length > 0 && (
                <span className="product-count">{productsInBag.length}</span>
              )}
            </button>
          </div>
        </div>
        <Navigation
        visibility={navVisibilty}/>
        <h1 className="Seam">Seamless furniture with natural fabrics</h1>
        <button className="shop">SHOP ALL</button>
      </main>
      <ScndPage />
      <ThrdPge />
      <Native />
      <FifthPge />
      <SixthPge />
      <div className="products">
        {PRODUCTS.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.productImage} alt="" />
            <div className="description">
              <p>{product.productName}</p>
              <p>${product.price}</p>
            </div>

            <div className="buttons">
              <button className="btn">DETAIL</button>
              <button className="btn" onClick={() => addProductToBag(product)}>
                Add to bag
              </button>
            </div>
          </div>
        ))}
         <div className='shopal'>
            <a href="">SHOP ALL</a>
         </div>
      </div>
     
      <Details />
      <Blackvas />
      <Article />
      <OurClub />
      <Footer />
    </div>
  );
}

export default App;
