import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import mainLogo from "../assets/opt-in_logo.png";

function Header() {

    return (
        <div className="my-header">
            <Link to={'/'}>
            <img className="logo" src={mainLogo}/> </Link>
        </div>
    );
}

export default Header;