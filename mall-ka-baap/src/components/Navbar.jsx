import React, { useEffect, useRef, useState } from "react";
import { Search, Heart, User, ShoppingCart, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useClickOutside } from '../hooks/useClickOutside';
import { useAuth } from '../context/AuthContext'; 

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const { isAuthenticated } = useAuth(); 

    const handleProtectedAction = (e, path) => {
        e.preventDefault();
        if (!isAuthenticated) {
            navigate('/login');
        } else {
            navigate(path);
        }
    }

    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const searchContainRef = useClickOutside(() => {
        setIsSearchOpen(false);
    });

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const getLinkClass = (path) => {
        const baseClass = 'transition-colors font-semibold tracking-wide';

        return location.pathname === path
            ? `${baseClass} text-orange-500`
            : `${baseClass} text-gray-600 hover:text-orange-500`
    };

    const getMobileLinkClass = (path) => {
        const baseClass = 'block px-3 py-2 text-base font-semibold rounded-md transition-colors';

        return location.pathname === path
            ? `${baseClass} text-orange-500 bg-orange-50`
            : `${baseClass} hover:text-orange-500 hover:bg-orange-50`
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
        setIsSearchOpen(false);
    }

    return (
        <nav className="w-full bg-white shadow-sm relative z-50">
            <div className="px-4 md:px-4 lg:px-8 py-4 flex justify-between items-center">
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-600 hover:text-orange-500 transition-colors"
                        aria-label="Toggle Mobile Menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <div className="flex justify-center flex-1 md:flex-none md:justify-start cursor-pointer">
                    <Link to="/">
                        <img 
                            src="https://res.cloudinary.com/ni0rf0la/image/upload/v1785847384/logo_fezuvk.png" 
                            alt="Navbar Logo"
                            className="h-10 sm:h-12 w-auto object-contain"
                        />
                    </Link>
                </div>

                <div className="hidden md:flex flex-1 justify-center space-x-4 lg:space-x-8 text-sm font-semibold tracking-wide text-gray-600">
                    <Link to="/" className={getLinkClass("/")}>HOME</Link>
                    <Link to="/about" className={getLinkClass("/about")}>ABOUT US</Link>
                    <Link to="/shop" className={getLinkClass("/shop")}>SHOP</Link>
                    <Link to="/categories" className={getLinkClass("/categories")}>CATEGORIES</Link>
                    <Link to="/contact" className={getLinkClass("/contact")}>CONTACT</Link>
                </div>

                <div className="flex items-center space-x-3 lg:space-x-5 text-gray-600">
                    <div ref={searchContainRef} className="flex items-center">
                        {isSearchOpen ? (
                            <form 
                                onSubmit={handleSearch}
                                className="flex items-center"
                            >
                                <input 
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    autoFocus
                                    className="bg-transparent outline-none text-sm w-24 sm:w-28 lg:w-40 text-gray-700 placeholder-gray-400"
                                />

                                <button
                                    type="button"
                                    onClick={() => setIsSearchOpen(false)}
                                    className="hover:text-red-500 transition-colors ml-1 text-gray-400"
                                    aria-label="Close Search"
                                >
                                    <X className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={2}/>
                                </button>
                            </form>
                        ) : (
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="hover:text-orange-500 transition-colors flex items-center h-full"
                                aria-label="Open Search"
                            >
                                <Search className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={2}/>
                            </button>
                        )}
                    </div>

                    <button onClick={(e) => handleProtectedAction(e, '/wishlist')} className="hover:text-orange-500 transition-colors hidden sm:block" aria-label="Wishlist">
                        <Heart className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={2}/>
                    </button>

                    <button onClick={(e) => handleProtectedAction(e, '/account')} className="hover:text-orange-500 transition-colors hidden sm:block" aria-label="User Profile">
                        <User className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={2}/>
                    </button>

                    <button onClick={(e) => handleProtectedAction(e, '/cart')} className="hover:text-orange-500 transition-colors relative" aria-label="Add To Cart">
                        <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={2}/>

                        {isAuthenticated && (
                            <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-[9px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 border-white">
                                3
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg pb-4">
                    <div className="flex flex-col px-4 pt-2 space-y-2">
                        <Link to="/" onClick={toggleMenu} className={getMobileLinkClass("/")}>HOME</Link>
                        <Link to="/about" onClick={toggleMenu} className={getMobileLinkClass("/about")}>ABOUT US</Link>
                        <Link to="/shop" onClick={toggleMenu} className={getMobileLinkClass("/shop")}>SHOP</Link>
                        <Link to="/categories" onClick={toggleMenu} className={getMobileLinkClass("/categories")}>CATEGORIES</Link>
                        <Link to="/contact" onClick={toggleMenu} className={getMobileLinkClass("/contact")}>CONTACT</Link>

                        <div className="border-t border-gray-100 mt-2 pt-2 sm:hidden flex justify-around">
                            <button 
                                onClick={(e) => { handleProtectedAction(e, '/wishlist'); toggleMenu(); }} 
                                className="flex items-center text-gray-600 hover:text-orange-500 font-medium"
                            >
                                <Heart size={15} className="mr-2"/> Wishlist
                            </button>

                            <button 
                                onClick={(e) => { handleProtectedAction(e, '/account'); toggleMenu(); }} 
                                className="flex items-center text-gray-600 hover:text-orange-500 font-medium"
                            >
                                <User size={15} className="mr-2"/> Profile
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;