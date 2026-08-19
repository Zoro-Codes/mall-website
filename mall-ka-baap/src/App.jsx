import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Shop from './pages/Shop';
import Categories from './pages/Categories';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from "./pages/Register";
import UserAccount from "./pages/UserAccount"; 
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import { ShopProvider } from "./context/ShopContext";

const App = () => {
    return (
        <AuthProvider>
            <ShopProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<AboutUs/>}/>
                        <Route path="/shop" element={<Shop/>}/>
                        <Route path="/categories" element={<Categories/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/register" element={<Register />}/>
                        <Route path="/account" element={<UserAccount />}/>
                        <Route path="/wishlist" element={<Wishlist />}/>
                        <Route path="/cart" element={<Cart />}/>
                    </Routes>
                </Router>
            </ShopProvider>
        </AuthProvider>
    );
};

export default App;