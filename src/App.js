import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
