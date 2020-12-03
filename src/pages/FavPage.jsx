import React,  { useState, useEffect } from 'react';
import { useParams } from "react-router-dom" 
// the above allows us to dynamically set the url 
import "../App.css"
import FavProductCard from "../components/ProductCard/FavProductCard.jsx"

function FavPage() {
    const [userData, setUserData] = useState ({ fav: [] });
    const usid =  window.localStorage.getItem("userID");

    useEffect(() => {
        // console.log(usid)
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
    // the favproductcard format
        
        <div id="product-list">
            <h3>Favourites List: </h3>

            {userData.fav.map((favData, key) => {
                return <FavProductCard key={key} productData={favData} />;
                    })}

            { userData.fav.length <= 0  && <h3>Your fav list is empty, time to go browsing!</h3>}
            {/* AA 29.11: the above is meant to be conditional rendering, if user.fav.length is equal or
            lesser than zero, meaning that there are no fav, then a message is printed.
            however this message is quickly printed and taken away even when there are fav
            need to ask Michelle why this is happenning */}
        </div>

    );
}

export default FavPage;


