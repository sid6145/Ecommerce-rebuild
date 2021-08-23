import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'
import NewProduct from './components/AddProduct';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/addproduct" component={NewProduct} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      </BrowserRouter> 
    </div>
  );
}

export default App;
