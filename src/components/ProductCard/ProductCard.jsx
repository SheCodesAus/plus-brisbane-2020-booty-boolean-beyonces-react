import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import OptIn_Logo from "../assets/OptIn_Logo.png";
import OptIn_OpenCircle from "../assets/OptIn_OpenCircle.png";

function ProductCard(props) {
    const { productData } = props;
    // console.log("TEST")
    // console.log(productData.id, productData.is_fav )

    return (
        <div className="product-card">
        <div className="fav-icon">
            {productData.is_fav ? 
                <div className="fav-icon-inner">
                    <img src={OptIn_Logo} id="on-fav-list"/> 
                    <p className="faded-text">On your list!</p>
                </div> 
                :
                <div className="fav-icon-inner">
                    <img src={OptIn_OpenCircle} id="on-fav-list"/> 
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




