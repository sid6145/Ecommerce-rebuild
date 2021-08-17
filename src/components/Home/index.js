import React from "react";
import { Card, Button } from "react-bootstrap";
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
          <button className="header-btn">Products</button>
        </div>
        <img className="header-img" src="images/header-img.svg" />
      </div>

      <div className="electronics-section">
        <Card style={{ width: "18rem", padding:"10px 50px" }}>
          <img className="card-img" src="images/controller.jpg"/>

       
            <Card.Title>Card Title</Card.Title>
          
        </Card>
        <Card style={{ width: "18rem", padding:"10px 50px"  }}>
          <img className="card-img" src="images/laptop.jpg"/>
       
            <Card.Title>Card Title</Card.Title>
        
        </Card>
        <Card style={{ width: "18rem", padding:"10px 50px"  }}>
          <img className="card-img" src="images/game.jpg"/>
     
            <Card.Title>Card Title</Card.Title>
      
        </Card>
        <Card style={{ width: "18rem", padding:"10px 50px"  }}>
          <img className="card-img" src="images/ryzen5.jpg"/>
        
            <Card.Title>Card Title</Card.Title>
     
        </Card>
      </div>
      <div className="fashion-section"></div>
    </div>
  );
}

export default Home;
