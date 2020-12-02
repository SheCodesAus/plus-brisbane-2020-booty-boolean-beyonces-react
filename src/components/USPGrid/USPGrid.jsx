import React from "react";
import { Link } from "react-router-dom";
import "./USPGrid.css";
import Tick from "../assets/opt-in_tick.png";



function USPGrid() {

    return (
        <div>
                <div className="grid-wrapper-4x1">
                    <div>
                        <img className="tick" src={Tick}/>
                        <h5>Top-notch Product Recommendations</h5>
                        <p>Our team of tech experts only include products that they would happily spend their 
                            money on. True tech geeks at heart, this causes more (respectful) arguments than 
                            we’d like to admit.</p>
                    </div>
                    <div>
                        <img className="tick" src={Tick}/>
                        <h5 >Compare and Contrast With Ease</h5>
                        <p >Our mums all tell us we’re unique, but our comparison tool is what really makes us 
                            different. All you have to do is add a product to wishlist, then our clever designers 
                            have enabled you to see its specs side-by-side with other items in your list. </p>
                    </div>
                    <div>
                        <img className="tick" src={Tick}/>
                        <h5 > Female-Founded and Fabulous</h5>
                        <p >Opt-in is led by an amazing CEO (who happens to be a woman) and as a team, we are 
                            passionate about championing diversity and inclusivity within our team to ensure we 
                            deliver the best product for you. We are also very passionate about cupcakes.</p>
                    </div>
                    <div>
                        <img className="tick" src={Tick}/>
                        <h5 >We Give a S#!+</h5>
                        <p  >Our mission is to help you enrich your life with technology that actually delivers, 
                            and empower you to feel confident purchasing new products. If you’ve got an point 
                            that should be included in our product breakdown, or just want to say hi - get in 
                            touch. We also accept compliments in the form of haikus. </p>
                    </div>
                </div>
        </div>
    );
}

export default USPGrid;