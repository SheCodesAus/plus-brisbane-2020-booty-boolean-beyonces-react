import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import mainTick from "../assets/opt-in_favicon.jpg";
import fb from "../assets/opt-in_fb_white.png";


function Footer() {

    return (
        <div className="my-footer">
            <Link to={'/'}>
            <img className="footer-tick" src={mainTick}/> </Link>
            <h2 className="footer">2020 Booty Boolean Beyonces</h2>
            <img className="footer-fb" src={fb}/>    
        </div>
    );
}

export default Footer;