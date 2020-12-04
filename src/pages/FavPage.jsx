import React,  { useState, useEffect } from 'react';
import { useParams } from "react-router-dom" 
// the above allows us to dynamically set the url 
import "../App.css"
import FavProductCard from "../components/ProductCard/FavProductCard.jsx"
import { Link, List } from "react-router-dom";
import ProfileToggle from "../components/ProfileToggle/ProfileToggle"


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
            console.log(data)
        });
    }, []);

    // const categoryFilter = (category) => {
        
    //     const filteredList = userData.fav.filter(function(category) {
    //         return userData.fav.category == category;
    //     });
    // };

    // const laptopList = categoryFilter("laptop")
    // console.log(laptopList)



    return (

    // AA 29.11:  the below is mapping through the user's fav list and displaying it in 
    // the favproductcard format
        <div>

            <div className="fav-category">
            <h2 className="white-header">Favourites</h2>
            <div className="profile-photo-wrapper">
                        <div className="profile-header pink-bg"></div>
                        
                        <div className="profile-photo" alt="User Profile Image">
                            <img src={userData.image}/>
                        </div>
                    </div>
                    <ProfileToggle />
                <p></p>
                <h3 className="pink-header">Laptops</h3>
                {userData.fav.filter(fav => fav.category == "laptop").length <= 0  && 
                    <div>
                        <p className="faded-text"><i>You haven't saved any laptops yet. <Link to="/laptop" className="grey-link">Browse them all here!</Link></i></p>
                    </div>}
                <div className="fav-product-list">
                    {userData.fav.filter(fav => fav.category == "laptop").map((filteredFav, key)=> {
                        return <FavProductCard key={key} productData={filteredFav} />;
                    
                    
                    
                    })}
                </div>
            </div>

            <div className="fav-category">
                <h3 className="pink-header">Phones</h3>
                {userData.fav.filter(fav => fav.category == "phone").length <= 0  && 
                    <div>
                        <p className="faded-text"><i>You haven't saved any phones yet. <Link to="/phone" className="grey-link">Browse them all here!</Link></i></p>
                    </div>}
                <div className="fav-product-list">
                    {/* {userData.fav.filter(fav => fav.category == "phone").length <= 0  && <h3>Your fav list is empty, time to go browsing!</h3>} */}
                    {userData.fav.filter(fav => fav.category == "phone").map((filteredFav, key)=> {
                        return <FavProductCard key={key} productData={filteredFav} />;
                    })}
                </div>
            </div>

            <div className="fav-category">
                <h3 className="pink-header">Tablets</h3>
                {userData.fav.filter(fav => fav.category == "tablet").length <= 0  && 
                    <div>
                        <p className="faded-text"><i>You haven't saved any tablets yet. <Link to="/tablet" className="grey-link">Browse them all here!</Link></i></p>
                    </div>}
                <div className="fav-product-list">
                    {userData.fav.filter(fav => fav.category == "tablet").map((filteredFav, key)=> {
                        return <FavProductCard key={key} productData={filteredFav} />;
                    })}
                </div>
            </div>

            <div className="fav-category">
                <h3 className="pink-header">Accessories</h3>
                {userData.fav.filter(fav => fav.category == "accessory").length <= 0  && 
                    <div>
                        <p className="faded-text"><i>You haven't saved any accessories yet. <Link to="/accessory" className="grey-link">Browse them all here!</Link></i></p>
                    </div>}
                <div className="fav-product-list">
                    {userData.fav.filter(fav => fav.category == "accessory").map((filteredFav, key)=> {
                        return <FavProductCard key={key} productData={filteredFav} />;
                    })}
                </div>
            </div>

        </div>

    );
}

export default FavPage;


