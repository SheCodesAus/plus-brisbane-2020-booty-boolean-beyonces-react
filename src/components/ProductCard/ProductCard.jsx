import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import OptIn_Logo from "../assets/OptIn_Logo.png";
import OptIn_OpenCircle from "../assets/OptIn_OpenCircle.png";
import { useHistory } from 'react-router-dom';


function ProductCard(props) {
    const { productData } = props;

    const token = window.localStorage.getItem("token")
    const userID = window.localStorage.getItem("userID")
    const history = useHistory();
    // console.log("TEST")
    // console.log(productData.id, productData.is_fav )




    // get product info from URL id
    // if (token){
    //     Loggedfetch(id, productData, setProductData)
    // }

    // else {
    //     Notloggedfetch(id, productData, setProductData)
    // }
     
    
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
            body: JSON.stringify({"add_fav": `${productData.id}`}),
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
                history.push(`/fav`);
                });
            }
            else{
                window.alert("You need to be logged in to save to your favourites list")
            }
            
        };

    return (
        <div className="product-card">
        <div className="fav-icon">
            {productData.is_fav ? 
                <div className="fav-icon-inner">
                    <img src={OptIn_Logo} id="on-fav-list"/> 
                    <p className="faded-text">On your list!</p>
                </div> 
                :
                
                <div>
                    <div className="fav-icon-inner">
                        <button className="add-fave" type="submit" onClick={handleSubmit}>   </button>
                    </div>
                </div>            
            }
        </div>
        <Link to={`/products/${productData.id}`}>
            <img src={productData.image}/>
        </Link>
            <div id="product-card-title">
                <div className="product-desc">
                    <div>
                        <h3 className="model">{productData.model_tech}</h3>
                        <p className="overview">{productData.overview}</p>
                    </div>
                    <p className="price">${productData.price}</p>
                </div>
                {/* <p class="price">Is fav: ${productData.is_fav}</p> */}
                <Link to={`/products/${productData.id}`}><button id="btn-full-width">Show me more</button></Link>


        {/* ----------------------this is where the is_fav is displayed */}
        {/* Rather than printing This is fav, you can change for displaying an img */}


                <p></p>

            </div>
        </div>
);
}

export default ProductCard;




