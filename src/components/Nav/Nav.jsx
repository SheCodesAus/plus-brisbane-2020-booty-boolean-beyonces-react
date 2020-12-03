import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
    // const isLoggedIn = this.state.isLoggedIn;
    
    
    return (
    
        <nav className="nav-bar">
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login</Link>
        </nav>
    );
}

export default Nav;