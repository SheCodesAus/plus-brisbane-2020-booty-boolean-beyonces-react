import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Link, List } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import "../App.css";



// AA 02.12: needed to define 2 different fetches, one for when you are logged in and you pass the token and 
// another one for when you are not logged in, and there is no token to pass. 
// The reason for this is that is order to check whether a product is a fav for a user, you need the user's token, 
// but if the user is not logged in you still want to display the list of products.
// within the CategoryListPage function, we check if there is a token then the loggedfetch is used, otherwise, the 
// notloggedinfetch is used

const token = window.localStorage.getItem("token")



function Loggedfetch(category, categoryList, setCategoryList){


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products/${category.category}`, {
            method: "get",
            headers: {
                "Authorization": `Token ${token}`
            }
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setCategoryList(data)
            // console.log(categoryList)
        });
    }, []);
}


function Notloggedfetch(category, categoryList, setCategoryList) {

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products/${category.category}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setCategoryList(data)
            // console.log(categoryList)
        });
    }, []);

}

function CategoryListPage () {
    const category = useParams();
    const [categoryList, setCategoryList] = useState([]);
    // const category = useParams();
    // const category = props;
    // const [categoryList, setCategoryList] = useState([]);
    // const token = window.localStorage.getItem("token")
 

    if (token){
        Loggedfetch(category, categoryList,setCategoryList)
    }

    else {
        Notloggedfetch(category, categoryList, setCategoryList)
    }


    return (
        <div>
        <div id="product-list">
            {categoryList.map((productData, key) => {
                return <ProductCard key={key} productData={productData} />;
            })}
        </div>
    </div>
    );
}

export default CategoryListPage;