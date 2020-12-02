import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./LoginForm.css"

function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: "",
    // name: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );

    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        console.log(response, "response");
        if (response.non_field_errors) {
          window.alert("Login failed, soz");
          history.push("/profile");
          return;
        }
        window.localStorage.setItem("token", response.token);
        // window.localStorage.setItem("username", credentials.username)
        // window.localStorage.setItem("name", credentials.name)
        window.localStorage.setItem("userID", response.id)

        history.push("/");
      });
    }
  };


  return (
    <form className="form-wrapper">
      <h1 className="FormHeader">Login</h1>

      <div className="form-item">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
      </div>

      {/* AA 29.11: commented the nickname box out - I dont think we need it */}
      {/* <div className="form-item">
        <label htmlFor="name">Nickname:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter name"
          onChange={handleChange}
        />
      </div> */}
      <div className="form-item">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <div className="login-buttons">
        <button type="submit" onClick={handleSubmit} className="my-button"> 
          Login
        </button>
        <div className="logout">
          <Link to="/logout">Logout</Link>
          </div>
      </div>
    </form>
  );
  
}

export default LoginForm;
