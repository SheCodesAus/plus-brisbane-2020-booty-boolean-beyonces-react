import logo from './logo.svg';

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage"
import LogoutPage from "./pages/LogoutPage"
import ProductListPage from "./pages/ProductListPage"
import AboutPage from "./pages/AboutPage"

import './App.css';


function App() {
  return (
    <Router>
      <div> 


        <Switch>


        <Route path="/login">
          <LoginPage />
          </Route>

        <Route path="/logout">
          <LogoutPage />
        </Route>

        <Route path="/products">
          <ProductListPage />
        </Route>

        <Route path="/about">
          <AboutPage />
        </Route>


        </Switch>

      </div>
    </Router>
  );
}

export default App;
