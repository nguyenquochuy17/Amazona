import React from 'react'
import './App.css';
import NavBar from './component/NavBar/NavBar'
import Products from './component/Products/Products'
import ProductDetail from './component/Products/Product/ProductDetail/ProductDetail';
import SignIn from './component/SignIn/SignIn';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Cart from './component/Cart/Cart';
import Register from './component/Register/Register';
import Shipping from './component/Shipping/Shipping';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/product/:id" exact component={ProductDetail} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/register" exact component={Register} />
          <Route path="/shipping" exact component={Shipping} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
