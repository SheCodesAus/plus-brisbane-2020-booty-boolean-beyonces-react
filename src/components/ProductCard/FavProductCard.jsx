import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

// AA 29.11:  this is a copy of product card jsx.
// The only difference is the delete button so the user can delete the item from their
// fav list

function FavProductCard(props) {
    const { productData } = props;
    
    // put request to update favs list for user
    const putData = async () => {
        const userID = window.localStorage.getItem("userID")
        const token = window.localStorage.getItem("token") 
        
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/users/${userID}/fav`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify({"rem_fav": `${productData.id}`}),
            // AA 29.11: rem_fav is used to remove product from fav list.
            }
            );
            return response.json();
    };

    // function to handle the button clickity-click
    const handleSubmit = (e) => {
        console.log("testie")
        e.preventDefault();

        putData().then((response) => {
            console.log(response)
        window.location.reload(false);
        // AA 29.11: the above refreshes the current page, so once the user deletes a product from their
        // fav list, it will refresh to show the resulting list
        });
        
    };


    return (
        <div className="product-card">
        <Link to={`/products/${productData.id}`}>
            <img src={productData.image}/>
            <div className="product-card-title">
                <h3 className="model">{productData.model_tech}</h3>
                <p className="overview">{productData.overview}</p>
                <p className="price">${productData.price}</p>
                <p className="see-details">See Details here<Link to={`/products/${productData.id}`}></Link></p>



                {/* AA 29.11: Delete button */}
                <button type="submit" className="see-details" onClick={handleSubmit}>
                    Delete From Your Favourites
                </button>
                <p></p>
            </div>
        </Link>
        </div>
);
}

export default FavProductCard;




