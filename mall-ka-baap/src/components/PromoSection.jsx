import React from 'react';
import { ArrowRight } from 'lucide-react';

const PromoSection = () => {
  return (
    <section className="relative w-full py-20 px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto overflow-hidden bg-white">

      <div 
        className="absolute inset-0 z-0 opacity-50" 
        style={{ backgroundImage: 'radial-gradient(#d1d5db 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}
      ></div>

      <style>
        {`
          /* Animation for the main image (slower, smoother) */
          @keyframes float-image {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }
          
          /* Animations for the badges */
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          @keyframes float-medium {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes float-fast {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }
          
          .animate-float-image { animation: float-image 6s ease-in-out infinite; }
          .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
          .animate-float-medium { animation: float-medium 3.5s ease-in-out infinite; }
          .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
        `}
      </style>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">

        <div className="flex-1 flex flex-col items-start max-w-xl">

          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-orange-100 bg-orange-50 text-orange-500 text-[10px] font-extrabold tracking-widest mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>
            NEW COLLECTION 2025
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#1a1a1a] leading-[1.05] mb-6 tracking-tight">
            Upgrade <br />
            <span className="text-orange-500 italic">Your Style</span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-md">
            Precision tailoring meets contemporary design. Limited availability — reserve yours before the offer expires.
          </p>

          <div className="flex items-center gap-8 md:gap-12 mb-10">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-orange-500 mb-1">2.4k+</span>
              <span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase">Happy Clients</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-orange-500 mb-1">48h</span>
              <span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase">Express Delivery</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-orange-500 mb-1">100%</span>
              <span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase">Premium Fabric</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-[#1a1a1a] hover:bg-black text-white text-xs font-bold px-8 py-4 rounded-full flex items-center transition-all hover:shadow-lg hover:shadow-gray-900/20">
              RESERVE NOW <ArrowRight size={16} strokeWidth={2.5} className="ml-2" />
            </button>
            <button className="bg-white border border-gray-200 hover:border-gray-300 text-[#1a1a1a] text-xs font-bold px-8 py-4 rounded-full transition-all hover:bg-gray-50">
              VIEW COLLECTION
            </button>
          </div>
        </div>

        <div className="flex-1 relative w-full flex items-center justify-center min-h-[500px]">
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-[350px] h-[350px] sm:w-[480px] sm:h-[480px] rounded-full border border-orange-200/50 border-dashed"></div>
            <div className="absolute w-[250px] h-[250px] sm:w-[340px] sm:h-[340px] rounded-full border border-orange-300/40 border-dashed"></div>
            <div className="absolute w-[250px] h-[250px] bg-orange-400/5 rounded-full blur-3xl"></div>
            <div className="absolute w-2 h-2 bg-orange-200 rounded-full right-[5%] top-[30%]"></div>
            <div className="absolute w-1.5 h-1.5 bg-orange-300 rounded-full left-[10%] bottom-[20%]"></div>
          </div>

          <div className="relative z-10 w-[300px] sm:w-[340px] h-[360px] sm:h-[400px] rounded-3xl overflow-hidden animate-float-image">
            <img 
              src="https://res.cloudinary.com/dquki4xol/image/upload/v1775912499/mall-ka-baap-deshbandhunagar-kolkata-shopping-mall-display-system-dealers-71yxyjc8fl-250_rv9gi5.avif" 
              alt="Premium Collection" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute z-20 top-4 right-0 sm:-right-8 w-[72px] h-[72px] rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white flex flex-col items-center justify-center shadow-lg shadow-orange-500/30 animate-float-slow">
            <span className="text-[9px] font-bold tracking-widest uppercase mb-0.5">Sale</span>
            <span className="text-xl font-black leading-none">30%</span>
          </div>

          <div className="absolute z-20 top-[45%] -translate-y-1/2 -left-4 sm:-left-12 bg-white px-4 py-2.5 rounded-full shadow-lg shadow-gray-200 border border-gray-50 flex items-center animate-float-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>
            <span className="text-[11px] font-bold text-gray-800">Premium Wool Blend</span>
          </div>

          <div className="absolute z-20 bottom-12 right-2 sm:-right-6 bg-white px-4 py-2.5 rounded-full shadow-lg shadow-gray-200 border border-gray-50 flex items-center animate-float-fast">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>
            <span className="text-[11px] font-bold text-gray-800">Custom Tailored Fit</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PromoSection;