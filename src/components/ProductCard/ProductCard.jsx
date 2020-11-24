import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";


function ProductCard(props) {
    const { productData } = props;
    return (
        <div className="product-card">
        <Link to={`/product/${productData.id}`}>
            <img src={productData.image}/>
            <div className="product-card-title">
                <h3>{productData.title}</h3>
                <p></p>
            </div>
        </Link>
        </div>
);
}

export default ProductCard;