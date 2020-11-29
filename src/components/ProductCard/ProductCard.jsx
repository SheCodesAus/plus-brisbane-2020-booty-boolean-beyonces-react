import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";


function ProductCard(props) {
    const { productData } = props;
    return (
        <div className="product-card">
        <Link to={`/products/${productData.id}`}>
            <img src={productData.image}/>
            <div className="product-card-title">
                <h3 class="model">{productData.model_tech}</h3>
                <p class="overview">{productData.overview}</p>
                <p class="price">${productData.price}</p>
                {/* <p class="price">Is fav: ${productData.is_fav}</p> */}
                <p class="see-details">See Details here<Link to={`/products/${productData.id}`}></Link></p>

                <p></p>
            </div>
        </Link>
        </div>
);
}

export default ProductCard;




