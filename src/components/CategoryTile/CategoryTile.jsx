import React from "react";

import Laptop from "../assets/Laptop1.jpg";
import Phone from "../assets/Phone1.jpg";
import Tablet from "../assets/Tablet1.jpg";
import Accessory from "../assets/Accessory1.jpg";

import "./CategoryTile.css";

import { Link } from "react-router-dom";



function CategoryTile() {
    return (
        <div>

        <div className="category-section">
            <h3>Let's Go Shopping!</h3>
            <div className="grid-wrapper-2x2">
                <div>
                    <Link to="/laptop"> 
                        <div className="img-white-bg">
                            <img src={Laptop} alt="Laptop category" />    
                        </div>
                    </Link>
                        <h5> Laptops </h5>
                        <p> From the boardroom to the beach, laptops are more powerful 
                        than ever and enabling employees to work from home with ease. Whether you’re a spreadsheet 
                        whiz or a creative champion, we’ve curated the top-notch options on the market today. </p>
                        <Link to="/laptop"><button>BROWSE LAPTOPS</button></Link> 
                     
                </div>

                <div>
                    <Link to="/phone"> 
                        <div className="img-white-bg">
                            <img src={Phone} alt="Phone category" /> 
                        </div>
                    </Link>
                        <h5 > Phones </h5>
                        <p c> From counting our steps to actually, well, calling people - 
                        where would we be in today’s connected world without our phones? We’d pay a pretty penny to 
                        hear Alexander Graham Bell’s thoughts on how his original invention has evolved over the years.</p>                
                        <Link to="/phone"><button>BROWSE PHONES</button></Link> 
                </div>


                <div>
                    <Link to="/tablet"> 
                        <div className="img-white-bg">
                            <img src={Tablet} alt="Tablet category" /> 
                        </div>
                    </Link>
                    <h5 > Tablets </h5>
                    <p > For when laptops are too big, and phones are too small - enter the tablet. If you’re goldilocks looking for something that’s just right, our selection might just have that perfect bowl of porridge.
                    </p>
                
                    <Link to="/tablet"><button>BROWSE TABLETS</button></Link> 
                </div>



                <div>
                    <Link to="/accessory"> 
                        <div className="img-white-bg">
                            <img class="CategoryImg_acc" src={Accessory} alt="Accessories category" /> 
                        </div>
                    </Link>
                    <h5 > Accessories </h5>
                    <p > Bling up your life with all the fun things! Accessories make you feel good and look like a proper professional on a mission to live your best life.
                    </p>

                
                    <Link to="/accessory"><button>BROWSE ACCESSORIES</button></Link> 
                </div>
                </div>
                
        </div>
        </div>

    )
};

export default CategoryTile;
