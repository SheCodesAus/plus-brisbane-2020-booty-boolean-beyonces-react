import React from 'react';
import "./App.css"
import { Link } from "react-router-dom";

function AboutUsPage() {
    return (
        <div>
        <div>
            <div>
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="about-img"/>
            </div>
            <div>

                <h2>About Us</h2>

                <p>The rate of technological advancement in today’s world is… well, a bit bonkers. With over a million tech 
                    startups worldwide and a new product launching seemingly each day, it can be overwhelming for anyone to 
                    cut through the marketing noise.</p>

                <p>The idea for Opt-in was conceived when our founder - Ash - was on the hunt for a new laptop. She was 
                    researching all of her options online and was frustrated that there wasn’t a tool where she could easily 
                    compare models from a variety of sources. After all - Macbooks are great, but how do they really stack up 
                    against the latest from Microsoft? She had an idea for an online space that actually gave customers the 
                    essential specs with explanations and recommendations, without the BS.</p>

                <p>And after six months, three design iterations and a few too many wines… Opt-in was born. Opt-in is an online 
                    platform designed to help you navigate the complicated world of tech specs and enrich your life with the 
                    best products for your lifestyle. Here, it’s okay if you don’t know what the difference is between a 
                    transistor and a tablet - our  team of tech experts who use their wizardry and industry know-how to find 
                    the top 10 products on today’s market and highlight what you actually need to know about them so you can 
                    make an informed purchasing decision.</p>

                <p>From laptops to smartphones, Opt-in is your friend in the tech industry. Why not browse our latest 
                    recommendations?</p>

                <p>Opt-in was designed and built by the Booty Boolean Beyonce development team, a subsidiary of SheCodes Australia.</p>
            </div>

        </div>
        <div className="about-part-two">
            <img src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="new-img" />
            <div className="button-wrapper">
                <Link to="/projects"><button className="yellow-button">Browse All Products</button></Link>
            </div>
            <p></p>
        </div>
        </div>
    )

}

export default AboutUsPage;