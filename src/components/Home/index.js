import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function Home() {
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
          <Col md="3" sm="6">
            <div className="product-card">
              <img src="images/game.jpg" />
              <h5>Red Dead Redemption 2</h5>
              <button>Add to cart</button>
            </div>
          </Col>
          <Col md="3" sm="6">
            <div className="product-card">
              <img src="images/game.jpg" />
              <h5>Red Dead Redemption 2</h5>
              <button>Add to cart</button>
            </div>
          </Col>
          <Col md="3" sm="6">
            <div className="product-card">
              <img src="images/game.jpg" />
              <h5>Red Dead Redemption 2</h5>
              <button>Add to cart</button>
            </div>
          </Col>
          <Col md="3" sm="6">
            <div className="product-card">
              <img src="images/game.jpg" />
              <h5>Red Dead Redemption 2</h5>
              <button>Add to cart</button>
            </div>
          </Col>
        
          <Col md="3" sm="6">
            <div className="product-card">
              <img src="images/game.jpg" />
              <h5>Red Dead Redemption 2</h5>
              <button>Add to cart</button>
            </div>
          </Col>
          <Col md="3" sm="6">
            <div className="product-card">
              <img src="images/game.jpg" />
              <h5>Red Dead Redemption 2</h5>
              <button>Add to cart</button>
            </div>
          </Col>
          <Col md="3" sm="6">
            <div className="product-card">
              <img src="images/game.jpg" />
              <h5>Red Dead Redemption 2</h5>
              <button>Add to cart</button>
            </div>
          </Col>

          <Col md="3" sm="6">
            <div className="product-card">
              <img src="images/game.jpg" />
              <h5>Red Dead Redemption 2</h5>
              <button>Add to cart</button>
            </div>
          </Col>
        </Row>


      </div>
    </div>
  );
}

export default Home;
