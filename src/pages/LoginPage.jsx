import React from 'react';
import LoginForm from "../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import "../App.css"


function LoginPage() {
    return ( 
    <div className="pink-tick-bg">
        <div className="white-text-box vertical">
        
        <LoginForm />
        <div className="no-account">

            <p>Don't have an account?</p>
                <Link to="/newuser"><button>Create New User</button></Link>

        </div>

        </div>
    </div>
    )
   }

export default LoginPage;


