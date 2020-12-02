import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import "../App.css";

// AA 02.12: needed to define 2 different fetches, one for when you are logged in and you pass the token and 
// another one for when you are not logged in, and there is no token to pass. 
// The reason for this is that is order to check whether a product is a fav for a user, you need the user's token, 
// but if the user is not logged in you still want to display the list of products.

const token = window.localStorage.getItem("token")

function Loggedfetch(productList, setProductList) {

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products/`, {
            method: "get",
            headers: {
                "Authorization": `Token ${token}`
            }
        }).then((results) => {
            return results.json();
        }).then((data) => {
            setProductList(data);
        });
    }, []);


}


function Notloggedfetch(productList, setProductList){
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products/`)
        .then((results) => {
            return results.json();
        }).then((data) => {
            setProductList(data);
        });
    }, []);


}


function ProductListPage() {
    const [productList, setProductList] = useState([]);
     

    if (token){
        Loggedfetch(productList, setProductList)
    }

    else {
        Notloggedfetch(productList, setProductList)
    }
     
    return (

    <div>

        <div className="product-bg">

        <div id="product-list">
            {productList.map((productData, key) => {
                return <ProductCard key={key} productData={productData} />;
            })}
        </div>


        </div>
    </div>
    );
}

export default ProductListPage;