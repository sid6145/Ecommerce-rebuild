import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'
import NewProduct from './components/AddProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/addproduct" component={NewProduct} />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
