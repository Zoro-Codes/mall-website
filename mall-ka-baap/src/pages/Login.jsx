import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Package, Heart, Sparkles, Zap, Mail, Lock, Eye, EyeOff, ShoppingBag } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden min-h-[500px]">

          <div className="md:w-1/2 bg-[#1a1a1a] text-white p-8 md:p-12 flex flex-col justify-center relative">
            <div className="mb-8 flex items-center space-x-2">
              <div className="bg-orange-500 p-2 rounded-lg">
                <ShoppingBag size={20} strokeWidth={2.5} className="text-white" />
              </div>
              <span className="text-xl font-bold">GarmentStore</span>
            </div>
            
            <p className="text-orange-500 font-semibold tracking-wider text-sm mb-4 flex items-center">
              <span className="w-6 h-[2px] bg-orange-500 mr-2"></span> WELCOME BACK
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Your Style,<br/>
              <span className="text-orange-500">Your Cart.</span>
            </h1>
            <p className="text-gray-400 text-sm mb-8 max-w-sm">
              Sign in to access your wishlist, track orders, and enjoy personalized fashion recommendations.
            </p>

            <ul className="space-y-4 text-sm text-gray-300 flex-1">
              <li className="flex items-center">
                <Sparkles size={18} className="mr-3 text-orange-500 fill-orange-500/20" /> 
                Exclusive member discounts
              </li>
              <li className="flex items-center">
                <Package size={18} className="mr-3 text-orange-500" /> 
                Real-time order tracking
              </li>
              <li className="flex items-center">
                <Heart size={18} className="mr-3 text-orange-500 fill-orange-500/20" /> 
                Save items to wishlist
              </li>
            </ul>

            <div className="mt-12 flex items-center space-x-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-[#1a1a1a] flex items-center justify-center text-xs font-bold">U</div>
                <div className="w-8 h-8 rounded-full bg-orange-700 border-2 border-[#1a1a1a] flex items-center justify-center text-xs font-bold">G</div>
                <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-[#1a1a1a] flex items-center justify-center text-xs font-bold">A</div>
              </div>
              <span className="text-xs text-gray-400 font-medium">
                <span className="text-white font-bold">2,400+</span> shoppers joined this week
              </span>
            </div>
          </div>

          <div className="md:w-1/2 bg-[#f4f2ee] p-8 md:p-12 flex flex-col justify-center">
            <p className="text-orange-500 font-semibold tracking-wider text-sm mb-2 flex items-center">
              <span className="w-6 h-[2px] bg-orange-500 mr-2"></span> WELCOME BACK
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign in to your <span className="text-orange-500">account</span></h2>
            <p className="text-sm text-gray-500 mb-8">
              Don't have an account? <Link to="/register" className="text-orange-500 hover:underline font-semibold">Sign up free &rarr;</Link>
            </p>

            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <input 
                    type="email" 
                    required
                    placeholder="your@email.com" 
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 bg-transparent focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Password</label>
                  <a href="#" className="text-xs font-semibold text-orange-500 hover:underline">Forgot password?</a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Enter your password" 
                    className="w-full pl-11 pr-12 py-3 rounded-xl border border-gray-300 bg-transparent focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors text-sm"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-4 rounded-xl transition-colors flex justify-center items-center group">
                <Zap size={18} className="mr-2 fill-current" /> 
                SIGN IN &rarr;
              </button>
            </form>

            <div className="mt-8 flex items-center justify-center space-x-4">
              <span className="text-xs text-gray-400 font-medium">or continue with</span>
            </div>
            
            <div className="mt-4 flex space-x-4">
              <button className="flex-1 flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors text-sm font-semibold text-gray-700">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0112 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115z"/>
                  <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 01-6.723-4.806L1.24 17.35a11.967 11.967 0 0010.76 6.65c2.73 0 5.127-.946 6.836-2.588L16.04 18.013z"/>
                  <path fill="#4A90E2" d="M23.989 12.276a10.6 10.6 0 00-.164-2.276H12v4.63h6.918c-.318 1.582-1.164 2.873-2.345 3.736l2.927 2.277c1.718-1.582 2.764-3.964 2.764-6.837z"/>
                  <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 014.909 12c0-.782.145-1.536.418-2.235L1.24 6.65A11.934 11.934 0 000 12c0 1.927.464 3.736 1.273 5.35l4.004-3.082z"/>
                </svg>
                Google
              </button>
              <button className="flex-1 flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors text-sm font-semibold text-gray-700">
                <svg className="w-4 h-4 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
            </div>
            
            <p className="text-center text-[10px] sm:text-xs text-gray-400 mt-8">
              By signing in, you agree to our <a href="#" className="hover:text-orange-500 hover:underline">Terms</a> & <a href="#" className="hover:text-orange-500 hover:underline">Privacy Policy</a>
            </p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Login;