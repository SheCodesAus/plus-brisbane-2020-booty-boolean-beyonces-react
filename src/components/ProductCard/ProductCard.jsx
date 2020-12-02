import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";


function ProductCard(props) {
    const { productData } = props;
    console.log("TEST")
    console.log(productData.id, productData.is_fav )

    return (
        <div className="product-card">
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
                <div>
                    {productData.is_fav && <h2>This is a fav</h2>}
                </div>

                <p></p>

            </div>
        </div>
);
}

export default ProductCard;




