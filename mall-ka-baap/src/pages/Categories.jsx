import React from "react";
import Navbar from "../components/Navbar";
import ShopPage from "../components/ShopPage";
import Footer from "../components/Footer";

const Categories = () => {
    return(
        <div className="w-full min-h-screen bg-gray-50 flex flex-col">
            <Navbar/>
            <ShopPage/>
            <Footer/>
        </div>
    )
}

export default Categories;