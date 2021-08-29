import "./App.css";
import { useState, useEffect } from "react";
import { auth, db } from "./firebase-config";
import {
  BrowserRouter,
  Redirect,
  Route,
  useHistory,
  Switch,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import NewProduct from "./components/AddProduct";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  const history = useHistory();

  const GetUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          db.collection("users")
            .doc(user.uid)
            .get()
            .then((snapshot) => {
              setUser(snapshot.data().name);
            });
        } else {
          setUser(null);
        }
      });
    }, [user]);
    return user;
  };

  const user = GetUser();

  console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
      <Header user={user} />
        <Switch>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route path="/addproduct" component={NewProduct} />
          {!user ? (
            <Redirect from="/cart" to="/signin" />
          ) : (
            <Route path="/cart">
              <Cart />
            </Route>
          )}

          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
