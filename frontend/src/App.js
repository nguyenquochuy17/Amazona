import React from 'react'
import './App.css';
import NavBar from './component/NavBar/NavBar'
import Products from './component/Products/Products'
import ProductDetail from './component/Products/Product/ProductDetail/ProductDetail';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Cart from './component/Cart/Cart';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/product/:id" exact component={ProductDetail} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
