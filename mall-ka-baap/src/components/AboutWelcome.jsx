import React from 'react';
import { ShoppingBag, Zap, RefreshCw } from 'lucide-react';

const AboutWelcome = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto font-sans bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start pt-6 pl-6 sm:pt-10 sm:pl-10">
          <div className="relative w-full max-w-[460px]">
            <div className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-full h-full bg-[#fff7f2] rounded-3xl z-0"></div>
            
            <img 
              src="https://res.cloudinary.com/dquki4xol/image/upload/v1775912499/mall-ka-baap-deshbandhunagar-kolkata-shopping-mall-display-system-dealers-71yxyjc8fl-250_rv9gi5.avif" 
              alt="Mall Ka Baap Store" 
              className="relative z-10 w-full h-auto rounded-3xl object-cover"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-start">
          
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-orange-100 bg-orange-50 text-orange-400 text-[10px] font-extrabold tracking-widest mb-6 uppercase">
            Welcome
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#1a1a1a] leading-[1.1] mb-6 tracking-tight">
            Welcome to <br />
            <span className="text-orange-500">Mall Ka Baap</span>
          </h2>

          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            We're passionate about providing you with a seamless online shopping experience. From our story to our mission and our unwavering commitment to customer satisfaction — everything we do is built around <em className="italic text-gray-700">you</em>.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Our Mission
          </h3>

          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10 max-w-xl">
            Our mission is to offer a diverse selection of high-quality products at competitive prices. We strive to exceed customer expectations by delivering an outstanding shopping experience every time.
          </p>

          <div className="flex flex-col gap-6">
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <ShoppingBag size={18} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col pt-0.5">
                <h4 className="text-sm font-bold text-gray-900 mb-1">Diverse Selection</h4>
                <p className="text-xs sm:text-sm text-gray-500">High-quality products across every category, curated for every family.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Zap size={18} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col pt-0.5">
                <h4 className="text-sm font-bold text-gray-900 mb-1">Fast Shipping</h4>
                <p className="text-xs sm:text-sm text-gray-500">Same-day dispatch with real-time tracking on every single order.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <RefreshCw size={18} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col pt-0.5">
                <h4 className="text-sm font-bold text-gray-900 mb-1">Hassle-Free Returns</h4>
                <p className="text-xs sm:text-sm text-gray-500">Easy, no-questions-asked returns because your satisfaction comes first.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutWelcome;