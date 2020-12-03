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
import ProductPage from "./pages/ProductPage";
import CategoryListPage from "./pages/CategoryListPage";
import UserPage from "./pages/UserPage";
import FavPage from "./pages/FavPage";
import OopsPage from "./pages/OopsPage";

import './App.css';
import NewUserPage from './pages/NewUserPage';


function App() {
  return (
    <Router>

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

          {/* AA 28/11: added this here to start with the user page */}
          <Route path="/profile">
            <UserPage />
          </Route>

          {/* AA 29/11: added this here to start with the fav page */}
          <Route path="/Fav">
            <FavPage />
          </Route>


          <Route path="/products/:id">
            <ProductPage />
          </Route>

          <Route path="/products">
            <ProductListPage />
          </Route>


          <Route path="/about">
            <AboutPage />
          </Route>

          <Route path="/newuser">
            <NewUserPage />
          </Route>


          <Route path="/oops">
            <OopsPage />
          </Route>

          <Route path="/:category">
            <CategoryListPage />
          </Route>


          <Route path="/">
              <HomePage />
          </Route>

        </Switch>


    </Router>
  );
}

export default App;