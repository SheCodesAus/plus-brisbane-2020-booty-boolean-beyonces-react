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


    function Loggedfetch(token, category, categoryList, setCategoryList){


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
    const token = window.localStorage.getItem("token")
    

    var categoryDict = {
        "laptop": [`From the boardroom to the beach, laptops are more powerful than ever and enabling employees to work from home with ease. Whether you’re a spreadsheet whiz or a creative champion, we’ve curated the top-notch options on the market today. `,
                `Our experts say… “The soon-to-be released MacBook Air is quickly catching up to the Pro model, now boasting a much faster CPU and Apple’s brand-spanking-new M1 processor. While it doesn’t quite have the same power as the Pro, MacBook Air is a fantastic option for those who want the creative capabilities of Apple with a slightly more reasonable price tag.”`],
        "phone": [`From counting our steps to actually, well, calling people - where would we be in today’s connected world without our phones? We’d pay a pretty penny to hear Alexander Graham Bell’s thoughts on how his original invention has evolved over the years.`,
                    `Our experts say… “While the new iPhone looks flashy and admittedly, has an outstanding camera, it’s lacking the USB-C port that most other Android models have adapted. If you’re not a die-hard Apple fan, we recommend checking out the new Google Pixel 5.”`],
        "tablet": [`For when laptops are too big and phones are too small - enter the tablet. If you’re goldilocks looking for something that’s just right, our selection might just have that perfect bowl of porridge.`,
                `Our experts say… “The new iPad Air is impressively powerful, boasting many of the same features that attract customers to the Pro version.  Even better, you can choose from a range of colours. Match your outfit, your mood, or even your dog’s favourite toy.”`],
        "accessory": [`Pimp my tech - here are the latest and greatest accessories designed to help optimise your laptop, phone or tablet. From WFH essentials such as the bluetooth mouse to a stylish device cover, our selection passes the vibe check.`,]
    };

    const displayCat = () => {
        if (category.category == "laptop") {
            return "Laptops"
        } else if (category.category == "phone") {
            return "Phones"
        } else if (category.category == "tablet") {
            return "Tablets"
        }
        return "Accessories"
    }

    const displayDesc1 = () => {
        return categoryDict[category.category][0]
    }

    const displayDesc2 = () => {
        return categoryDict[category.category][1]
    }

    const thisCat = displayCat()
    const descPartOne = displayDesc1()
    const descPartTwo = displayDesc2()


    if (token){
        Loggedfetch(token, category, categoryList,setCategoryList)
    }

    else {
        Notloggedfetch(category, categoryList, setCategoryList)
    }


    return (
        <div>
            <div>
                <h2 id="category-h2">{thisCat}</h2>
            <p className="category-desc">{descPartOne}</p>
            <p className="category-desc">{descPartTwo}</p>
            </div>
                <div id="product-list">
                {categoryList.map((productData, key) => {
                    return <ProductCard key={key} productData={productData} />
                })}
            </div>
        </div>
    );
}

export default CategoryListPage;