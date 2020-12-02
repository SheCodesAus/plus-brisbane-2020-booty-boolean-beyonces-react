import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, List } from "react-router-dom";
import { useHistory } from 'react-router-dom';
// import JB from "../assets/images.png";


import "../App.css";

const token = window.localStorage.getItem("token")

function Loggedfetch(id, productData, setProductData){
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products/${id}`, {
            method: "get",
            headers: {
                "Authorization": `Token ${token}`

            }

        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProductData(data)
        });
    }, []);

}

function Notloggedfetch(id, productData, setProductData){
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProductData(data)
        });
    }, []);

}


function ProductPage() {

    const userID = window.localStorage.getItem("userID")
    const [productData, setProductData] = useState([]);
    const { id } = useParams();
    const history = useHistory();
    

    // get product info from URL id
    if (token){
        Loggedfetch(id, productData, setProductData)
    }

    else {
        Notloggedfetch(id, productData, setProductData)
    }
     
    
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
        
        if (token){
            putData().then((response) => {
                console.log(response)
            history.push("/");
            });
        }
        else{
            window.alert("you need to be logged in to save to your favourites list")
        }
        
    };
    

      
    return (

      <div>

      <img src={productData.image} className="product-card" />
      <div className="outer-wrapper">
        <div className="project-details">
        <h2 className="model">{productData.model_tech}</h2>
        <p className="overview ">Why Opt-in? {productData.justification}</p>
        <p className="overview ">{productData.brand}</p>
        <p className="overview ">{productData.spec1}</p>
        <p className="overview ">{productData.spec2}</p>
        <p className="overview ">{productData.spec3}</p>
        <p className="overview ">{productData.spec4}</p>
        <p className="overview ">{productData.spec5}</p>
        <p className="overview ">{productData.spec6}</p>
        <p className="price">${productData.price}</p>

        {/* ----------------------this is where the is_fav is displayed */}
        {/* Rather than printing This is fav, you can change for displaying an img */}
        <div>
            {productData.is_fav && <h2>This is a fav</h2>}
        </div>

     
        <button type="submit" className="see-details" onClick={handleSubmit}>
            Save To Your Favourites
        </button>

        <p>{productData.supplier1}</p>

        {/* <Link to={productData.supplier1}> <img class="SupplierLogo" src={JB} alt="Go to JB HiFi Product Listing" /> </Link> */}

      </div>
      </div>

      
  </div>
);
}

export default ProductPage;