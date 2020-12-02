import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";


function ProductCard(props) {
    const { productData } = props;
    return (
        <div className="product-card">
        <Link to={`/products/${productData.id}`}>
            <img src={productData.image}/>
        </Link>
            <div id="product-card-title">
                <div className="product-desc">
                    <div>
                        <h3 class="model">{productData.model_tech}</h3>
                        <p class="overview">{productData.overview}</p>
                    </div>
                    <p class="price">${productData.price}</p>
                </div>
                {/* <p class="price">Is fav: ${productData.is_fav}</p> */}
                <Link to={`/products/${productData.id}`}><button id="btn-full-width">Show me more</button></Link>
            </div>
        </div>
);
}

export default ProductCard;




