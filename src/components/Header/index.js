import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { auth } from '../../firebase-config'
import { Link } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

function Header({user}) {

  const handleSignout = () => {
    auth.signOut()
  
  }

    return (
        <Navbar collapseOnSelect expand="lg" className="navbar" >
        <Container>
        <Link className="logo" to="/">
        <Nav>Ecommerce</Nav>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
       <Link className="navlink" to="/"><Nav><i class="bi bi-house"></i>Home</Nav></Link> 
       <Link className="navlink" to="/cart"><Nav><i class="bi bi-cart3"></i>Cart</Nav></Link>  

      {
        user ?
        <> 
        <Nav className="navlink">Hi - {user.toUpperCase()}</Nav>
        <Nav><button className="signout" onClick={handleSignout}><i class="bi bi-box-arrow-right"></i>Sign out</button></Nav>
        </>     
        : 
        <Link className="navlink" to="/signin"><Nav>Sign in</Nav></Link>   
      }
       
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header
