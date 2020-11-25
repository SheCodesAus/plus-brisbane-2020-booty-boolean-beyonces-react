import logo from './logo.svg';

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import ProductListPage from "./pages/ProductListPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage"
import CategoryListPage from "./pages/CategoryListPage"

import './App.css';


function App() {
  return (
    <Router>
      <div> 

      <div id="app-header"> 
      <Header />
        <Nav />
      </div>


        <Switch>


        <Route path="/login">
          <LoginPage />
          </Route>

        <Route path="/logout">
          <LogoutPage />
        </Route>

        <Route path="/products/:id">
          <ProductPage />
        </Route>

        <Route path="/products">
          <ProductListPage />
        </Route>

        <Route path="/:category">
          <CategoryListPage />
        </Route>

        <Route path="/about">
          <AboutPage />
        </Route>

        <Route path="/">
            <HomePage />
        </Route>


        </Switch>

      </div>
    </Router>
  );
}

export default App;
