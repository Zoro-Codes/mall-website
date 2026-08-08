import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Shop from './pages/Shop';
import Categories from './pages/Categories';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from "./pages/Register";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/categories" element={<Categories/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
            </Routes>
        </Router>
    );
};

export default App;