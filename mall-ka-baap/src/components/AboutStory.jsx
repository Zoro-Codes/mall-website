import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const AboutStory = () => {
  return (
    <section className="w-full py-20 px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto font-sans bg-[#fffcf9]">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          
          <div className="inline-flex items-center px-5 py-1.5 rounded-full border border-orange-200 text-orange-400 text-[10px] font-bold tracking-widest mb-6 uppercase bg-white/50">
            Our Story
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-[#1a1a1a] leading-[1.1] mb-6 tracking-tight">
            How It All <br />
            <span className="text-orange-500">Began</span>
          </h2>

          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
            Mall Ka Baap started with a simple vision: to make shopping convenient, enjoyable, and accessible to everyone. What began as a small venture has now grown into a thriving online marketplace, serving customers across 18+ states in India.
          </p>

          <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 sm:p-8 mb-8 max-w-xl">
            <p className="text-gray-600 italic text-sm sm:text-base leading-relaxed mb-6">
              "We started small, with a big dream. Today, every package we ship carries that same original promise — fashion that's for everyone, not just a few."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
                AA
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 text-sm">Ankit Agarwal</span>
                <span className="text-orange-500 text-xs font-medium">Founder & CEO</span>
              </div>
            </div>
          </div>

          <button className="group relative overflow-hidden bg-[#1a1a1a] text-white text-sm font-bold px-8 py-3.5 rounded-full flex items-center shadow-md">
            <span className="absolute inset-0 bg-orange-500 transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
            
            <span className="relative z-10 flex items-center transition-colors duration-300">
              Shop Now <ArrowUpRight size={18} className="ml-2" />
            </span>
          </button>

        </div>

        <div className="w-full lg:w-1/2 relative h-[450px] sm:h-[550px] lg:h-[600px] w-full max-w-[600px] mx-auto">
          
          <img 
            src="https://res.cloudinary.com/dquki4xol/image/upload/v1775912499/mall-ka-baap-deshbandhunagar-kolkata-shopping-mall-display-system-dealers-71yxyjc8fl-250_rv9gi5.avif" 
            alt="Store Interior" 
            className="absolute top-0 right-0 w-[65%] h-[65%] object-cover rounded-3xl shadow-sm z-0"
          />

          <img 
            src="https://res.cloudinary.com/dquki4xol/image/upload/v1775910600/girl-friends-shopping-clothes-store-picture-143749390_cyu9tc.webp" 
            alt="Customers Shopping" 
            className="absolute bottom-[10%] left-0 w-[70%] h-[65%] object-cover rounded-3xl shadow-xl z-10 border-8 border-[#fffcf9]"
          />

          <div className="absolute bottom-[5%] right-[5%] z-20 bg-white px-6 py-5 rounded-2xl shadow-xl flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-black text-[#1a1a1a] mb-1">12,000+</span>
            <span className="text-[10px] sm:text-xs text-gray-400 font-medium">Happy Customers</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutStory;