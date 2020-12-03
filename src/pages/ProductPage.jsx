import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, List } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import "./ProductPage.css"
import jbhifi from "../components/assets/jbhifi.jpg";

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
            window.alert("You need to be logged in to save to your favourites list")
        }
        
    };

    const inFavList = () => {
        if (productData.is_fav) {
            return (
                <div>
                    <p>This product is already on your favourites list!</p>
                    <Link to="/Fav"><button>Go to List</button></Link>
                </div>
            )
        }
        return (
            <button type="submit" onClick={handleSubmit}>Save To Your Favourites</button>
        )
    }

    const favButton = inFavList()
    

      
    return (

      <div>

          <div className="product-wrapper">
          <h2 class="model">{productData.model_tech}</h2>
              <div className="grid-wrapper-2x2"> 
                  <div>
                  <div className="img-white-bg">
                        <img src={productData.image} />
                    </div>
                  </div>
                  <div>
                  
                    <p class="overview ">Why Opt-in? {productData.justification}</p>
                    <p class="overview ">{productData.brand}</p>
                    <p class="overview ">{productData.spec1}</p>
                    <p class="overview ">{productData.spec2}</p>
                    <p class="overview ">{productData.spec3}</p>
                    <p class="overview ">{productData.spec4}</p>
                    <p class="overview ">{productData.spec5}</p>
                    <p class="overview ">{productData.spec6}</p>
                    <p class="price">${productData.price}</p>

                    <div>
                        {favButton}
                    </div>

                  </div>

              </div>
          </div>

      
      <div className="outer-wrapper">
        <div className="project-details">
        

        {/* <button className="blue-button-rounded" onClick={handleSubmit}>Add to Wishlist</button> */}
        {/* <p class="see-details">Save To Your Favourites<Link onClick={handleSubmit}></Link></p> */}

        {/* AA 28.11: the above was not quite working, unsure why, changed to button below and the functionality works now */}


        
    <p>Shop the {productData.model_tech} here!</p>

        <Link to={`/products/${productData.supplier1}`}>
            <img src={jbhifi}/>
        </Link>


        {/* <Link to={productData.supplier1}> <img class="SupplierLogo" src={JB} alt="Go to JB HiFi Product Listing" /> </Link> */}

      </div>
      </div>

      
  </div>
);
}

export default ProductPage;