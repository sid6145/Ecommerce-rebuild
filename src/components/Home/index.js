import React, { useEffect, useState } from "react";
import { Row, Col, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import {auth, db } from "../../firebase-config";
import Product from "./products";

function Home() {
  const history = useHistory()
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState(null)
  const [successMsg, setSuccessMsg] = useState("")

  useEffect(() => {
    getProducts()
    getUserId()
  }, [])

  const getUserId = () => {
    auth.onAuthStateChanged(user => {
      if(user){
        setUserId(user.uid)
      }
    })
  }

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


  const addtoCart = (product) => {
   if(userId){
     db.collection(`cart ${userId}`).doc(product.id).set(product).then(() => {
       setSuccessMsg("Added product to cart")
        setTimeout(() => {
          setSuccessMsg("")
        }, 2000)
      })
   }else{
     history.push("/signin")
   }
  }
 
  

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
      {successMsg ? <h3 className="success-msg">{successMsg}</h3> : ""}
        <Row>
          
          {products.map((item) => (
            <Col md="4" sm="6">
              <Product image={item.image} name={item.name} price={item.price} id={item.id} addtoCart={addtoCart}/>
          </Col>
          ))}
          
        </Row>
      </div>
    </div>
  );
}

export default Home;
