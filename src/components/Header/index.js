import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { auth } from '../../firebase-config'
import { Link, useHistory } from 'react-router-dom'
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
       <Link className="navlink" to="/"><Nav>Home</Nav></Link> 
       <Link className="navlink" to="/cart"><Nav>Cart</Nav></Link>  

      {
        user ?
        <> 
        <Nav><button className="signout" onClick={handleSignout}>Sign out</button></Nav>
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
