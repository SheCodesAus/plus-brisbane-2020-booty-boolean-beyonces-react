import React,  { useState, useEffect } from 'react';
import { useParams } from "react-router-dom" 
import "../App.css"
import { Link, List } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import UpdateUserForm from "../components/UpdateUserForm/UpdateUserForm"
import macbook from "../components/assets/macbook.jpg";

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


    const profileMessage = () => {
        if (usid) {
            return (
                <div>
                    <div className="profile-photo-wrapper">
                        <div className="profile-header"></div>
                        <div className="profile-photo" alt="User Profile Image">
                            <img src={userData.image} onerror="this.src='../components/assets/macbook.jpg'"/>
                        </div>
                    </div>


                    <div className="single-user">
                        <h2>{userData.first_name} {userData.last_name}</h2>
                        <h3 className="faded-h3">{userData.username} | {userData.email}</h3>
                        
                        <UpdateUserForm />

                        <div className="logout">
                            <Link to="/logout">Logout</Link>
                        </div>

                    </div>
            </div>

            );
        }
        return (
            <div>
                <h3>Whoops, looks like you're not logged in yet.</h3>
                <LoginForm />
            </div>

        )
    }

    const userMessage = profileMessage()




    return (
        <div>
            {userMessage}
        </div>

    );
}

export default UserPage;


