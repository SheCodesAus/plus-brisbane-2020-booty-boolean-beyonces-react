import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import "./NewUserForm.css";

function NewUserForm () {

    const history = useHistory();
    const [user, setUser] = useState({
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        image: "",
		password: ""
    });
    

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [id]: value,
        }));
    };
    
    const postData = async () => {
        
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/users/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": `Token ${token}`
            },
            body: JSON.stringify(user),
            }
            );
            console.log(response)
            return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.username) {
        postData().then((response) => {
            console.log(response)
        setUser("user", response.user);
        window.alert("Congrats! You've successfully created a user profile.");
        history.push("/profile");
        });
        }
    };

    return (
        <form className="form-wrapper">

        <h2 id="category-h2">Why hello, it's nice to meet you!</h2>
        <p>Come here often? Sign up for an Opt-in account so that you can save our recommended products to your wishlist.</p>

        <div className="form-item">
        <label htmlFor="username">Username:</label>
        <input
            type="text"
            id="username"
            placeholder="Choose a username"
            onChange={handleChange}
        />
        </div>
        <div className="form-item">
        <label htmlFor="first_name">First name:</label>
        <input 
            type="text"
            id="first_name"
            placeholder="Your name"
            onChange={handleChange}
        />
        </div>
        <div className="form-item">
        <label htmlFor="last_name">Last name:</label>
        <input
            type="text"
            id="last_name"
            placeholder="Last name"
            onChange={handleChange}
        />
        </div>
        <div className="form-item">
        <label htmlFor="email">Email:</label>
        <input
            type="text"
            id="email"
            placeholder="Your email"
            onChange={handleChange}
        />
        </div>
        <div className="form-item">
        <label htmlFor="profile_picture">Profile picture:</label>
        <input
            type="text"
            id="profile_picture"
            placeholder="enter image url"
            onChange={handleChange}
        />
        </div>
        <div className="form-item">
        <label htmlFor="password">Password:</label>
        <input
            type="password"
            id="password"
            onChange={handleChange}
        />
        </div>
        
        <div className="login-buttons">
            <button type="submit" onClick={handleSubmit}>
                Opt-In
            </button>
        </div>
        </form>
    );
}
export default NewUserForm;