import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./DropdownCategories.css";


const DropdownCategories = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    const [userData, setUserData] = useState ([]); 
    const usid =  window.localStorage.getItem("userID");

    // useEffect(() => {
        
    //     fetch(`${process.env.REACT_APP_API_URL}/users/${usid}`)
    //     .then((results) => {
    //         return results.json();
    //     })
    //     .then((data) => {
    //         setUserData(data)
    //         console.log(data)
    //     });
    // }, []);

    // const userName = () => {
    //     if (userData.first_name == "") {
    //         return "there!"
    //     }
    //     return userData.first_name
    // }

    // const name = userName()

    useEffect(() => {

        const pageClickEvent = (e) => {
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsActive(!isActive);
            }};
        
          // If the item is active (ie open) then listen for clicks
          if (isActive) {
            window.addEventListener('click', pageClickEvent);
          }
        
          return () => {
            window.removeEventListener('click', pageClickEvent);
          }
        
        }, [isActive]);

            
    

    return (
        <div className="menu-container">
                <button onClick={onClick} className="menu-trigger" id="nav-button">Browse</button>
                <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li><a href="/laptop">Laptops</a></li>
                    <li><a href="/phone">Phones</a></li>
                    <li><a href="/tablet">Tablets</a></li>
                    <li><a href="/accessory">Accessories</a></li>
                </ul>
                </nav>
        </div>
    );
    };





  export default DropdownCategories;
