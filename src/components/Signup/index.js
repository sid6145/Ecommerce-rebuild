import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import {auth, db} from '../../firebase-config'
import "./style.css"

function Signup() {
  const history = useHistory()
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [errorMsg, setErrorMsg] = useState("")
  const [successMsg, setSuccessMsg] = useState("")

  const handleSignup = (e) => {
    e.preventDefault()

    auth.createUserWithEmailAndPassword(email, password)
    .then((res) =>  {
      console.log(res)  
      db.collection("users").doc(res.user.uid).set({
        name: name,
        email: email,
        password: password
      }).then(() => {
        setSuccessMsg("Signup Successful :)")
        setName("")
        setEmail("")
        setPassword("")
        setErrorMsg("")
        setTimeout(() => {
          setSuccessMsg("")
          history.push("/signin")
        }, 3000)   
      })
      .catch((error) => setErrorMsg(error.message))
    }) 
    .catch((error) => setErrorMsg(error.message))
  }



  return (
    <div className="signup-container">
      <Form>
          {successMsg ? <p className="success-msg">{successMsg}</p> : ""} 
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <div>
          <Link to="/signin">Already have an account? click here to signin</Link>
        </div>
        <Button onClick={handleSignup} variant="primary" type="submit">
          Sign Up
        </Button>
        {errorMsg ? <p className="error-msg">{errorMsg}</p> : ""}
      </Form>
    </div>
  );
}

export default Signup;
