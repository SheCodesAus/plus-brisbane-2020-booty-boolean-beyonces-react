import React from "react";
import { Link } from "react-router-dom";
import "./DropdownBar.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";



function DropdownBar() {

    return (
        <div className="bar-bg">
        <DropdownMenu />  
        </div>
    );
}

export default DropdownBar;