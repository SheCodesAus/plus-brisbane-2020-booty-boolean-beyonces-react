import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import "../App.css";


function ProductListPage() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products/`).then((results) => {
            return results.json();
        }).then((data) => {
            setProductList(data);
        });
    }, []);

    return (

    <div>
        <div id="product-list">
            {productList.map((productData, key) => {
                return <ProductCard key={key} productData={productData} />;
            })}
        </div>
    </div>
    );
}

export default ProductListPage;