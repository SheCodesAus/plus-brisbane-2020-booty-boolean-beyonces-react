import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, List } from "react-router-dom";
import ProductCard from "/ProductCard/ProductCard";
import "./CategoryList.css"

function CategoryList (props) {

    const { category } = props;
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products/${category}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setCategoryList(data)
        });
    }, []);


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

export default CategoryList;