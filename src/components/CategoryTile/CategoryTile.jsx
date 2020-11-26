import React from "react";

import Laptop from "../assets/Laptop1.jpg";
import Phone from "../assets/Phone1.jpg";
import Tablet from "../assets/Tablet1.jpg";
import Accessory from "../assets/Accessory1.jpg";

import "./CategoryTile.css";

import { Link } from "react-router-dom";



function CategoryTile() {
    return (

        <div class="CategoryPageWrapper">

        <div class="CategoryTileBackground_lap">
        <h1 class="CategoryHeader">Go Shopping</h1>

        <div class="CategoryTileWrapper_lap">
            <Link to="/laptop"> <img class="CategoryImg_lap" src={Laptop} alt="Laptop category" /> </Link>
            <h2 class="CategoryHeading_lap"> Laptops </h2>
            <p class="CategoryBodyCopy_lap"> From the boardroom to the beach, laptops are more powerful than ever and enabling employees to work from home with ease. Whether you’re a spreadsheet whiz or a creative champion, we’ve curated the top-notch options on the market today. 
            </p>
            <div class="Button_lap"> 
          Browse Laptops
          <Link to="/laptop"></Link>
        </div>
        </div>
        </div>


        <div class="CategoryTileBackground_phone">
        <div class="CategoryTileWrapper_phone">
            <Link to="/phone"> <img class="CategoryImg_phone" src={Phone} alt="Phone category" /> </Link>
            <h2 class="CategoryHeading_phone"> Phones </h2>
            <p class="CategoryBodyCopy_phone"> From counting our steps to actually, well, calling people - where would we be in today’s connected world without our phones? We’d pay a pretty penny to hear Alexander Graham Bell’s thoughts on how his original invention has evolved over the years.
            </p>
            <div class="Button_phone"> 
          Browse Phones
          <Link to="/phone"></Link>
          </div>
        </div>
        </div>


        <div class="CategoryTileBackground_tablet">
        <div class="CategoryTileWrapper_tablet">
            <Link to="/tablet"> <img class="CategoryImg_tablet" src={Tablet} alt="Tablet category" /> </Link>
            <h2 class="CategoryHeading_tablet"> Tablets </h2>
            <p class="CategoryBodyCopy_tablet"> For when laptops are too big, and phones are too small - enter the tablet. If you’re goldilocks looking for something that’s just right, our selection might just have that perfect bowl of porridge.
            </p>
            <div class="Button_tablet"> 
          Browse Tablets
          <Link to="/tablet"></Link>
          </div>
        </div>
        </div>


        <div class="CategoryTileBackground_acc">
        <div class="CategoryTileWrapper_acc">
            <Link to="/accessory"> <img class="CategoryImg_acc" src={Accessory} alt="Accessories category" /> </Link>
            <h2 class="CategoryHeading_acc"> Accessories </h2>
            <p class="CategoryBodyCopy_acc"> Bling up your life with all the fun things! Accessories make you feel good and look like a proper professional on a mission to live your best life.
            </p>
            <div class="Button_acc"> 
          Browse Accessories
          <Link to="/accessory"></Link>
          </div>
            </div>
            </div>

            </div>
    )
}

export default CategoryTile;
