import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar" >
        <Container>
        <Navbar.Brand className="logo">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav>Home</Nav>
          <Nav>Features</Nav>
          <Nav>Pricing</Nav>
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header
