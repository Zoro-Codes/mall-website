import React from "react";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Category from "../components/Category";
import MarqueeBanner from "../components/MarqueeBanner";
import ProductGrid from "../components/ProductGrid";

const Home = () => {
    return(
        <div className="w-full min-h-screen bg-gray-50 flex flex-col">
            <Navbar/>
            <Hero/>
            <Category/>
            <MarqueeBanner/>
            <ProductGrid/>
        </div>
    )
}

export default Home;