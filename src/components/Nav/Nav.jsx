import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import DropdownCategories from "../DropdownCategories/DropdownCategories";


function Nav() {
    // const isLoggedIn = this.state.isLoggedIn;

    const [userData, setUserData] = useState ([]); 
    const usid =  window.localStorage.getItem("userID");

    useEffect(() => {
        
        fetch(`${process.env.REACT_APP_API_URL}/users/${usid}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserData(data)
            console.log(data)
        });
    }, []);

    const userName = () => {
        if (userData.first_name == "") {
            return "there!"
        }
        return userData.first_name
    }

    const name = userName()

    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
        const [windowSize, setWindowSize] = useState({
          width: undefined,
          height: undefined,
        });
      
        useEffect(() => {
          // Handler to call on window resize
          function handleResize() {
            // Set window width/height to state
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
            });
          }
          
          // Add event listener
          window.addEventListener("resize", handleResize);
          
          // Call handler right away so state gets updated with initial window size
          handleResize();
          
          // Remove event listener on cleanup
          return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount
      
        return windowSize;
      }

      const size = useWindowSize();

    
    
    return (
    
        <nav className="nav-bar">
            <Link to="/about">About Us</Link>
            
            <DropdownMenu /> 
            
        
        </nav>
    );
}

export default Nav;