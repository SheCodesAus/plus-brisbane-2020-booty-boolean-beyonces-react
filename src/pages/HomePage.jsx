import React, { useEffect, useState } from "react";  
import UserWelcome from "../components/UserWelcome/UserWelcome";
import LoginForm from "../components/LoginForm/LoginForm"
import "../App.css"
import CategoryTile from "../components/CategoryTile/CategoryTile";
import USPGrid from "../components/USPGrid/USPGrid";
import imagetick from "../components/assets/opt-in_mobile.jpg";



    
    function HomePage() {

        return (
            <div>
                <div className="pink-tick-bg">
                    <div className="white-text-box">
                        <div>
                            <h2>Welcome to Opt-In</h2>
                            <p>So… you need a new phone? Laptop? A million dollars?</p>

                            <p>Well, we can’t really help you with the latter, but we can help 
                                you find the absolute best tech products available on the market today. 
                                Our platform delivers you the top ten products in each category and 
                                highlights what you actually need to know so that you can get the best for 
                                your buck. With a fancy comparison tool, wishlist functionality and tips 
                                from industry experts, Opt-In is the nerdy friend everybody needs. <br></br><br></br>Browse products below.</p>

                        </div>


                    </div>
                </div>
                <CategoryTile />

                <USPGrid />


            </div>
        )

    }

    
    export default HomePage;
