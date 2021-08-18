import React from "react";
import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'


function NewProduct() {
  return (
    <Form style={{textAlign:"center"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Product Name" />
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Product Price" />
         <Form.Label>Choose product image</Form.Label>
        <Form.Control type="file" />
          
        </Form.Group>
        <Button>Add Product</Button>
    </Form>
  );
}

export default NewProduct;
