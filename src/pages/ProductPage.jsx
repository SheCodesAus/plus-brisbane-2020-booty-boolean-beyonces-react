import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, List } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import "./ProductPage.css"
import jbhifi from "../components/assets/jbhifi.jpg";

import UseModal from "../components/UseModal/UseModal"
import Modal from "../components/Modal/Modal"

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
   
        // e.preventDefault();
        
        if (token){
            putData().then((response) => {
                console.log(response)
            history.push("/fav");
            });
        }
        else{
            window.alert("You need to be logged in to save to your favourites list")
        }
        
    };



    const inFavList = () => {
        // const {isShowing, toggle} = UseModal();

        // function buttonClick() {
        //     toggle();
        //     handleSubmit();
        //   }

        if (productData.is_fav) {
            return (
                <div>
                    <p>This product is already on your favourites list!</p>
                    <Link to="/Fav"><button className="btn-full-width">Go to List</button></Link>
                </div>
            )
        }
        return (
            <div>
            <button type="submit" onClick={handleSubmit}>Save To Your Favourites</button>
      </div>
        )
    }

    const favButton = inFavList()

    


      
    return (

      <div>

          <div className="product-wrapper">      
          <h3>{productData.model_tech}</h3>
          <p>{productData.overview}</p>
              <div className="product-page"> 
                  <div>
                  <div className="prod-img">
                        <img src={productData.image} />
                    </div>
                  </div>
                  <div>
                  
                    <p class="overview "><i>Why we think you should Opt-in...</i></p>
                    <p class="overview ">{productData.justification}</p>
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
                <div className="supplier">
                    <p>The {productData.model_tech} is available at:</p>
                    <a href={productData.supplier1} target="_blank" >
                        <img src="https://theme.zdassets.com/theme_assets/9481415/ca04e11084c5c97a4022fa6831761b32566428d5.png" className="supplier-logo"/>
                    </a>
                </div>
          </div>

      
  </div>
);
}

export default ProductPage;