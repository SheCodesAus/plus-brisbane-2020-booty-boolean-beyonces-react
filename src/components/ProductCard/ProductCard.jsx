import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";


function ProductCard(props) {
    const { productData } = props;
    // console.log("TEST")
    // console.log(productData.id, productData.is_fav )

    return (
        <div className="product-card">
        <Link to={`/products/${productData.id}`}>
            <img src={productData.image}/>
            <div className="product-card-title">
                <h3 className="model">{productData.model_tech}</h3>
                <p className="overview">{productData.overview}</p>
                <p className="price">${productData.price}</p>
                <p className="see-details">See Details here<Link to={`/products/${productData.id}`}></Link></p>

        {/* ----------------------this is where the is_fav is displayed */}
        {/* Rather than printing This is fav, you can change for displaying an img */}
                <div>
                    {productData.is_fav && <h2>This is a fav</h2>}
                </div>

                <p></p>
            </div>
        </Link>
        </div>
);
}

export default ProductCard;




