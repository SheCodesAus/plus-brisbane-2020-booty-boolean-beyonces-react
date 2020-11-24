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
                <h3>{productData.model_tech}</h3>
                <p>{productData.brand}</p>
                <p>${productData.price}</p>
                <p></p>
            </div>
        </Link>
        </div>
);
}

export default ProductCard;