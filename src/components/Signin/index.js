import React,{ useState } from "react";
import { Form, Button } from "react-bootstrap";
import {auth, db} from '../../firebase-config'
import { Link, useHistory } from "react-router-dom";
import "./style.css";

function Signin() {
  const history = useHistory()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [successMsg, setSuccessMsg] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const handleSignin = (e) => {
    e.preventDefault()
  
    auth.signInWithEmailAndPassword(email, password)
    
    .then(() => {
      setSuccessMsg("Login Successful")
      setEmail("")
      setPassword("")
      setTimeout(() => {
        setSuccessMsg("")
        history.push("/")
      },2000)
    })
    
    .catch((error) => setErrorMsg(error.message))


  }

  return (
    <div className="signin-container">
      <Form>
      {successMsg ? <p className="success-msg">{successMsg}</p> : ""} 
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <div>
          <Link to="/signup">Don't have an account? Click here to signup</Link>
        </div>
        <Button onClick={handleSignin} variant="primary" type="submit">
          Sign in
        </Button>
        {errorMsg ? <p className="error-msg">{errorMsg}</p> : ""}
      </Form>
    </div>
  );
}

export default Signin;
