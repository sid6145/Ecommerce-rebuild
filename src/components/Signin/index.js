import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

function Signin() {
  return (
    <div className="signin-container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div>
          <Link to="/signup">Don't have an account? Click here to signup</Link>
        </div>
        <Button variant="primary" type="submit">
          Sign in
        </Button>
        
      </Form>
    </div>
  );
}

export default Signin;
