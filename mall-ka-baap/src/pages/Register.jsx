import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Zap, Mail, Lock, Eye, EyeOff, ShoppingBag, User, Phone, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    login();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden min-h-[650px]">

          <div className="md:w-1/2 bg-[#1a1a1a] text-white p-8 md:p-12 flex flex-col justify-between relative">

            <div className="flex items-center space-x-2">
              <div className="bg-orange-500 p-2 rounded-lg">
                <ShoppingBag size={20} strokeWidth={2.5} className="text-white" />
              </div>
              <span className="text-xl font-bold">GarmentStore</span>
            </div>

            <div className="mt-12 mb-12">
              <p className="text-orange-500 font-semibold tracking-wider text-sm mb-4 flex items-center">
                <span className="w-6 h-[2px] bg-orange-500 mr-2"></span> NEW HERE?
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                Join the<br/>
                <span className="text-orange-500">Fashion Club.</span>
              </h1>
              <p className="text-gray-400 text-sm mb-8 max-w-sm">
                Create your free account and unlock exclusive deals, faster checkout, and a personalised shopping experience.
              </p>

              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle2 size={18} className="mr-3 text-orange-500 fill-orange-500/20" /> 
                  Free account, no credit card needed
                </li>
                <li className="flex items-center">
                  <CheckCircle2 size={18} className="mr-3 text-orange-500 fill-orange-500/20" /> 
                  Early access to new arrivals
                </li>
                <li className="flex items-center">
                  <CheckCircle2 size={18} className="mr-3 text-orange-500 fill-orange-500/20" /> 
                  Members-only sale alerts
                </li>
                <li className="flex items-center">
                  <CheckCircle2 size={18} className="mr-3 text-orange-500 fill-orange-500/20" /> 
                  Easy returns & tracking
                </li>
              </ul>
            </div>

            <div className="text-sm text-gray-400 font-medium">
              Already have an account? <Link to="/login" className="text-orange-500 hover:underline font-semibold">Sign in &rarr;</Link>
            </div>
          </div>

          <div className="md:w-1/2 bg-[#f4f2ee] p-8 md:p-12 flex flex-col justify-center">
            <p className="text-orange-500 font-semibold tracking-wider text-sm mb-2 flex items-center">
              <span className="w-6 h-[2px] bg-orange-500 mr-2"></span> CREATE ACCOUNT
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Start your <span className="text-orange-500">free account</span></h2>
            <p className="text-sm text-gray-500 mb-8">
              Already have one? <Link to="/login" className="text-orange-500 hover:underline font-semibold">Sign in &rarr;</Link>
            </p>

            <form className="space-y-5" onSubmit={handleRegister}>

              <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-4">
                <div className="flex-1">
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">First Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User size={18} className="text-gray-400" />
                    </div>
                    <input 
                      type="text" 
                      required
                      placeholder="Uttam" 
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 bg-transparent focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors text-sm"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Last Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User size={18} className="text-gray-400" />
                    </div>
                    <input 
                      type="text" 
                      required
                      placeholder="Gupta" 
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 bg-transparent focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors text-sm"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Email *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <input 
                    type="email" 
                    required
                    placeholder="you@email.com" 
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 bg-transparent focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Phone (Optional)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone size={18} className="text-gray-400" />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX" 
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 bg-transparent focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Password *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Min 6 characters" 
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

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Confirm Password *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input 
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    placeholder="Repeat your password" 
                    className="w-full pl-11 pr-12 py-3 rounded-xl border border-gray-300 bg-transparent focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors text-sm"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-4 rounded-xl transition-colors flex justify-center items-center group mt-2">
                <Zap size={18} className="mr-2 fill-current" /> 
                CREATE ACCOUNT &rarr;
              </button>
            </form>

            <p className="text-center text-[10px] sm:text-xs text-gray-400 mt-6 font-medium">
              By signing up you agree to our <a href="#" className="hover:text-orange-500 hover:underline">Terms</a> & <a href="#" className="hover:text-orange-500 hover:underline">Privacy Policy</a>
            </p>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Register;