import React from "react";
import Navbar from '../components/Navbar';
import Category from "../components/Category";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";

const Shop = () => {
    return(
        <div className="w-full min-h-screen bg-gray-50 flex flex-col">
            <Navbar/>
            <ProductGrid/>
            <Footer/>
        </div>
    )
}

export default Shop;