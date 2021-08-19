import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { db } from "../../firebase-config";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    db.collection("products").onSnapshot((querySnapshot) => {
      setProducts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          image: doc.data().image,
          name: doc.data().name,
          price: doc.data().price,
        }))
      );
    });
  };

 

  return (
    <div className="home-container" fluid>
      <div className="header-section">
        <div className="header-text">
          <h1>Ecommerce</h1>
          <h5>
            Get best deals on your favorite products with free delivery and
            shipping all over India
          </h5>
          <a href="#products">
            <button className="header-btn">Shop now</button>
          </a>
        </div>
        <img className="header-img" src="images/header-img.svg" />
      </div>

      <div id="products" className="products-section">
        <Row>

          {products.map((item) => (
            <Col md="3" sm="6">
            <div className="product-card">
              <img src={item.image}/>
              <h5>{item.name}</h5>
              <h5>Rs {item.price}</h5>
              <button>Add to cart</button>
            </div>
          </Col>
          ))}
          
        </Row>
      </div>
    </div>
  );
}

export default Home;
