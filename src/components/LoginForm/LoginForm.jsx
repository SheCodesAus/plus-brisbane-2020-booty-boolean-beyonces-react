import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./LoginForm.css"

function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: "",
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
        window.location.reload();
        history.push("/");
      });
    }
  };


  return (
    <form className="form-wrapper">

      <h2 id="category-h2">Login</h2>
      <p>We thought you looked familiar… log in using your details here.</p>


      <div className="form-item">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
      </div>
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
        <button type="submit" onClick={handleSubmit}> 
          Login
        </button>
      </div>
    </form>
  );
  
}

export default LoginForm;
