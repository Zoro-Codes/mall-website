import React from 'react';
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';

const GetInTouch = () => {
  return (
    <section className="w-full py-24 px-4 sm:px-8 lg:px-12 bg-[#fffdfa] font-sans flex flex-col items-center">
      
      <span className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.15em] mb-4">
        Get In Touch
      </span>
      
      <h2 className="text-4xl sm:text-5xl font-black text-[#1a1a1a] mb-16 tracking-tight text-center">
        We'd Love to Hear From You
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full mb-16">
        
        <div className="bg-white rounded-3xl p-10 flex flex-col items-center text-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(255,107,0,0.25)]">
          <div className="w-14 h-14 rounded-2xl bg-[#ff6b00] text-white flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
            <MapPin size={24} strokeWidth={2} />
          </div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
            Visit Us
          </span>
          <p className="text-sm font-medium text-gray-900 leading-relaxed max-w-[220px]">
            EB 20, Shop No 2 & 3, Near Baguiati AC Market, Vip Road, Deshbandhunagar, Kolkata-700059, West Bengal
          </p>
        </div>

        <div className="bg-white rounded-3xl p-10 flex flex-col items-center text-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(255,107,0,0.25)]">
          <div className="w-14 h-14 rounded-2xl bg-[#ff6b00] text-white flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
            <Mail size={24} strokeWidth={2} />
          </div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
            Email Us
          </span>
          <p className="text-sm font-medium text-gray-900 leading-relaxed max-w-[220px]">
            agarwal.ankit0193@gmail.com
          </p>
        </div>

        <div className="bg-white rounded-3xl p-10 flex flex-col items-center text-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(255,107,0,0.25)]">
          <div className="w-14 h-14 rounded-2xl bg-[#ff6b00] text-white flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
            <Phone size={24} strokeWidth={2} />
          </div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
            Call Us
          </span>
          <p className="text-sm font-medium text-gray-900 leading-relaxed max-w-[220px]">
            07942700870
          </p>
        </div>

      </div>

      <button className="bg-[#111111] hover:bg-black text-white text-sm font-semibold px-8 py-4 rounded-full flex items-center transition-all shadow-md">
        Shop the Collection <ArrowUpRight size={18} className="ml-2" />
      </button>

    </section>
  );
};

export default GetInTouch;