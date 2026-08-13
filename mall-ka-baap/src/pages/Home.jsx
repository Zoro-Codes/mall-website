import React from "react";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Category from "../components/Category";
import MarqueeBanner from "../components/MarqueeBanner";
import ProductGrid from "../components/ProductGrid";
import PromoSection from "../components/PromoSection";
import ShopByGender from "../components/ShopByGender";
import ShopCategory from "../components/ShopCategory";
import Footer from "../components/Footer";

const Home = () => {
    return(
        <div className="w-full min-h-screen bg-gray-50 flex flex-col">
            <Navbar/>
            <Hero/>
            <Category/>
            <MarqueeBanner/>
            <ProductGrid/>
            <PromoSection/>
            <ShopByGender/>
            <ShopCategory/>
            <Footer/>
        </div>
    )
}

export default Home;