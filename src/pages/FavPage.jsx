import React,  { useState, useEffect } from 'react';
import { useParams } from "react-router-dom" 
// the above allows us to dynamically set the url 
import "../App.css"
import ProductCard from "../components/ProductCard/ProductCard.jsx";

function FavPage() {
    const [userData, setUserData] = useState ({ fav: [] });
    // const { id } = useParams(); 
    const usid =  window.localStorage.getItem("userID");

    useEffect(() => {
        console.log(usid)
        fetch(`${process.env.REACT_APP_API_URL}/users/${usid}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserData(data)
        });
    }, []);




    return (

    // AA 29.11:  the below is mapping through the user's fav list and displaying it in 
    // the productcard format
    // feel free to change 
        
        <div id="product-list">
            <h3>Favourites List: </h3>
            {userData.fav.map((favData, key) => {
                return <ProductCard key={key} productData={favData} />;
                })}
        </div>

    );
}

export default FavPage;


