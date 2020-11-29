import React,  { useState, useEffect } from 'react';
import { useParams } from "react-router-dom" 
// the above allows us to dynamically set the url 
import "../App.css"


function UserPage() {
    const [userData, setUserData] = useState ([]); 
    const usid =  window.localStorage.getItem("userID");

    useEffect(() => {
        console.log(usid)
        fetch(`${process.env.REACT_APP_API_URL}/users/${usid}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserData(data)
        });
    }, []);




    return (
        
       
        <div className="single-user">
            <div className="single-user-box">
                <h2>{userData.username}</h2>
                <img src={userData.image} alt="Profile"/>
            </div>
            
            <div className="single-user-box">
                <h3>First name: {userData.first_name}</h3>
                <h3>Last name: {userData.last_name}</h3>
                <h3>Email: {userData.email}</h3>
                <h3>Location: {userData.location}</h3>
                
           
            </div>
        </div>

    );
}

export default UserPage;


