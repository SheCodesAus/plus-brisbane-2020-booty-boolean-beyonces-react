import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";
import "./UpdateUserForm.css";

function UpdateUserForm () {

    const { id } = useParams();
    const userID =  window.localStorage.getItem("userID");

    const [user, setUser] = useState({
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        location: "",
        image: "",
    });

    useEffect(() => {
        console.log(userID)
        fetch(`${process.env.REACT_APP_API_URL}/users/${userID}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUser(data)
        });
    }, []);

 
    const history = useHistory();
    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [id]: value,
        }));
    };


    const putData = async () => {
        const token = window.localStorage.getItem("token")
        
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/users/${userID}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify(user),
            }
            );
            return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.username) {
        putData().then((response) => {
            console.log(response)
        setUser("user", response.user);
        history.push("/");
        });
        }
    };

return (
    <form className="update-user-form">
        <div className="form-item">
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                placeholder="Enter New Username"
                value={user.username}
                onChange={handleChange}
            />
        </div>
        <div className="form-item">
            <label htmlFor="first_name">First Name</label>
            <input
                type="text"
                id="first_name"
                placeholder="Update First Name"
                value={user.first_name}
                onChange={handleChange}
                
            />
        </div>
        <div className="form-item">
            <label htmlFor="last_name">Last Name</label>
            <input
                type="text"
                id="last_name"
                placeholder="Update Last Name"
                value={user.last_name}
                onChange={handleChange}
            />
        </div>
        <div className="form-item">
            <label htmlFor="image">Profile Image</label>
            <input
                type="text"
                id="image"
                placeholder="Update Profile Image"
                value={user.image}
                onChange={handleChange}
            />
        </div>

        <div className="button-wrapper">
            <button type="submit" onClick={handleSubmit}>
                Submit Changes
            </button>
        </div>
    </form>
    )
} ;

export default UpdateUserForm;