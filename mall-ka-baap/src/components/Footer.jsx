import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.8l.5-4h-4.3v-3a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-gray-300 pt-16 pb-8 border-t border-gray-800 font-sans relative">

      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      ></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          <div className="flex flex-col items-start">
            <div className="mb-6">
              <img 
                src="https://res.cloudinary.com/ni0rf0la/image/upload/v1785847384/logo_fezuvk.png" 
                alt="Mall Ka Baap Logo" 
                className="h-14 w-auto object-contain brightness-0 invert" 
              />
            </div>
            
            <h3 className="text-white font-bold text-lg mb-2">Subscribe</h3>
            <p className="text-sm text-gray-400 mb-4">Get 10% off your first order</p>

            <div className="flex items-center w-full max-w-sm border border-gray-700 rounded-md overflow-hidden mb-6 focus-within:border-orange-500 transition-colors bg-transparent">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent w-full px-4 py-2.5 text-sm text-white outline-none placeholder-gray-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 transition-colors flex items-center justify-center">
                <Send size={18} />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><LinkedinIcon size={18} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Support
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-orange-500"></span>
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-orange-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  EB 20, Shop No 2 & 3, Near Baguiati AC Market, VIP Road, Deshbandhunagar, Kolkata-700059, West Bengal
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-orange-500 shrink-0" />
                <a href="mailto:agarwal.ankit0193@gmail.com" className="hover:text-orange-500 transition-colors">
                  agarwal.ankit0193@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-orange-500 shrink-0" />
                <a href="tel:07942700870" className="hover:text-orange-500 transition-colors">
                  07942700870
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Account
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-orange-500"></span>
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/profile" className="hover:text-orange-500 transition-colors">My Account</Link></li>
              <li><Link to="/login" className="hover:text-orange-500 transition-colors">Login / Register</Link></li>
              <li><Link to="/cart" className="hover:text-orange-500 transition-colors">Cart</Link></li>
              <li><Link to="/wishlist" className="hover:text-orange-500 transition-colors">Wishlist</Link></li>
              <li><Link to="/shop" className="hover:text-orange-500 transition-colors">Shop</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Link
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-orange-500"></span>
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/shop" className="hover:text-orange-500 transition-colors">Shop</Link></li>
              <li><Link to="/categories" className="hover:text-orange-500 transition-colors">Categories</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p className="mb-4 md:mb-0">
            © 2026 Mall Ka Baap. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;