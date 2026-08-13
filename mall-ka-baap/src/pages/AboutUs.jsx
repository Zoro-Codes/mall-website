import React from "react";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import AboutWelcome from "../components/AboutWelcome";
import AboutStory from "../components/AboutStory";
import StatsBanner from "../components/StatsBanner";
import CoreValues from "../components/CoreValues";
import GetInTouch from "../components/GetInTouch";

const AboutUs = () => {
    return(
        <div className="w-full min-h-screen bg-gray-50 flex flex-col">
            <Navbar/>
            <AboutWelcome/>
            <AboutStory/>
            <StatsBanner/>
            <CoreValues/>
            <GetInTouch/>
            <Footer/>
        </div>
    )
}

export default AboutUs;