import React from 'react';
import LoginForm from "../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import "../App.css"


function LoginPage() {
    return ( 
    <div>
        <LoginForm />
        <div class="no-account">
            <p class="form-item">Don't have an account?</p>
            <Link to="/newuser"><button className="see-details">Create New User</button></Link>
        </div>


    </div>
    )
   }

export default LoginPage;


