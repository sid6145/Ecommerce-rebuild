import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { storage, db } from "../../firebase-config";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function NewProduct() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleAddProduct = () => {
    const uploadTask = storage.ref(`products/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("products")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("products")
              .add({
                image: url,
                name: productName,
                price: productPrice,
              })
              .then((res) => {
                if (res) {
                  alert("success");
                }
              });

            setProductName("");
            setProductPrice(0);
            setImage(null);
          });
      }
    );
  };

  console.log(image);

  return (
    <Form className="addproduct">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          type="text"
          placeholder="Product Name"
        />
        <Form.Label>Price</Form.Label>
        <Form.Control
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          type="text"
          placeholder="Product Price"
        />
        <Form.Label>Choose product image</Form.Label>
        <Form.Control onChange={handleChange} type="file" />
      </Form.Group>
      <Button onClick={handleAddProduct}>Add Product</Button>
    </Form>
  );
}

export default NewProduct;
