import React from 'react';
import { Link } from "react-router-dom";
import "../App.css"

function LogoutPage() {
    
    const token = window.localStorage.getItem("token")
    // const userID = window.localStorage.getItem("userID")
    
    const removeToken = () => { 
        localStorage.removeItem("token")
        localStorage.removeItem("userID")
        // AA 01.12 - removed userID too when user logs out
    }
    
    const userLog = () => {
      if (token) {
        return <Link to="/" onClick={removeToken}>Logout</Link>
      }
      return <Link to="/login">Whoops, looks like you're not logged in yet! Login here</Link>
      
    }

    // handleLogoutClick = () => {
    //     this.setState({isLoggedIn: false});
    // }

    const Log = userLog()

    return (
      <div>
        <p>See ya later, alligator!</p>
        <h3>{Log}</h3>
      </div>
    )
    
   }

export default LogoutPage;
