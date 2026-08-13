import React from 'react';
import { MapPin } from 'lucide-react';

const BusinessHours = () => {
  return (
    <section className="w-full pb-24 px-4 sm:px-8 lg:px-12 bg-[#fcfbf9] font-sans">
      <div className="max-w-[1300px] mx-auto relative flex flex-col lg:block">
        
        <div className="w-full lg:w-[70%] h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.25556214041!2d88.4239845!3d22.6179836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e3a6c117d69%3A0xfdb515320e4b855!2sBaguiati%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Store Location Map"
          ></iframe>
        </div>

        <div className="w-full lg:w-[42%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 mt-6 lg:mt-0 bg-[#141414] rounded-3xl p-8 sm:p-10 shadow-2xl z-10 border border-white/5">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            HOURS
          </div>

          <h3 className="text-2xl font-bold text-white mb-8">
            Business Hours
          </h3>

          <div className="flex flex-col mb-8">
            <div className="flex justify-between items-center py-4 border-b border-gray-800">
              <span className="text-sm text-gray-300">Monday – Friday</span>
              <span className="text-sm font-bold text-orange-500">10 AM – 9 PM</span>
            </div>
            
            <div className="flex justify-between items-center py-4 border-b border-gray-800">
              <span className="text-sm text-gray-300">Saturday</span>
              <span className="text-sm font-bold text-orange-500">10 AM – 10 PM</span>
            </div>
            
            <div className="flex justify-between items-center py-4 border-b border-gray-800">
              <span className="text-sm text-gray-300">Sunday</span>
              <span className="text-sm font-bold text-orange-500">11 AM – 8 PM</span>
            </div>
          </div>

          <div className="bg-[#211611] border border-[#3b2116] rounded-2xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#ff6b00]/20 text-[#ff6b00] flex items-center justify-center shrink-0">
              <MapPin size={20} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col pt-0.5">
              <span className="text-xs text-gray-400 mb-1">Store Address</span>
              <span className="text-sm font-medium text-gray-200 leading-snug">
                EB 20, Shop No 2 & 3, Near Baguiati AC Market, VIP Road, Deshbandhunagar, Kolkata-700059
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BusinessHours;