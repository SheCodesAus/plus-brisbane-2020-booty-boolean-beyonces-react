import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, List } from "react-router-dom";
import { useHistory } from 'react-router-dom';

import "../App.css";

function ProductPage() {

    const userID = window.localStorage.getItem("userID")
    const [productData, setProductData] = useState([]);
    const { id } = useParams();
    const history = useHistory();

    // get product info from URL id
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProductData(data)
        });
    }, []);
    
    // put request to update favs list for user
    const putData = async () => {
        const token = window.localStorage.getItem("token") 
        
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/users/${userID}/fav`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify({"add_fav": `${id}`}),
            }
            );
            return response.json();
    };

    // function to handle the button clickity-click
    const handleSubmit = (e) => {
        e.preventDefault();

        putData().then((response) => {
            console.log(response)
        history.push("/");
        });
        
    };
    

      
    return (

      <div>
      <img src={productData.image} className="product-img" />
      <div className="outer-wrapper">
        <div className="project-details">
        <h2>{productData.model_tech}</h2>
        <p>{productData.brand}</p>
        <p>${productData.price}</p>
        <p>${productData.justification}</p>

        <button className="blue-button-rounded" onClick={handleSubmit}>Add to Wishlist</button>
      </div>
      </div>

      
  </div>
);
}

export default ProductPage;