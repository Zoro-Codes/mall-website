import React from "react";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import BusinessHours from "../components/BusinessHours";

const Contact = () => {
    return(
        <div className="w-full min-h-screen bg-gray-50 flex flex-col">
            <Navbar/>
            <ContactUs/>
            <BusinessHours/>
            <Footer/>
        </div>
    )
}

export default Contact;