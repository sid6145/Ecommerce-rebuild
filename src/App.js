import './App.css';
import { useState, useEffect } from 'react';
import { auth, db } from './firebase-config';
import { BrowserRouter, Redirect, Route, useHistory } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'
import NewProduct from './components/AddProduct';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Cart from './components/Cart';

function App() {
  const history = useHistory()
  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        db.collection("users").doc(user.uid).get().then(snapshot => {
          setUser(snapshot.data().name);
        })
      }
      else{
        setUser(null)
      }
    })
  }, [])

  console.log(user)
  return (
    <div className="App">
      <BrowserRouter>
      <Header user={user}/>
      <Route exact path="/">
        <Home user={user}/>
      </Route>
      <Route path="/addproduct" component={NewProduct} />
      {
       user ? <Route path="/cart" component={Cart} /> : <Redirect to="/signin" />
      }
      
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      </BrowserRouter> 
    </div>
  );
}

export default App;
