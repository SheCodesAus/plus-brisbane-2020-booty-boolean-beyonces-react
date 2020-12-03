import React from 'react';
import "../App.css"
import { Link } from "react-router-dom";
import aboutus from "../components/assets/aboutus.jpg";

import OptIn_Logo from "../components/assets/OptIn_Logo.png";


function OopsPage() {
    return (
        <div className="pink-tick-bg">
            <div className="white-text-box vertical">
                <h2>Error 404</h2>
                <h3>Much like the fucks we have left to give in 2020, this page doesn't exist. Someone pass the wine please!</h3>
                <Link to="/">Go Home</Link>
            </div>
        </div>

    )
}

export default OopsPage;