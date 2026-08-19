import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    title: "Ethnic Wear",
    discount: "50-80% OFF",
    image: "https://mall-ka-baap.vercel.app/assets/kids4-BJ1Kmh7U.png",
  },
  {
    id: 2,
    title: "Casual Wear",
    discount: "40-80% OFF",
    image: "https://mall-ka-baap.vercel.app/assets/thsirt-Ddf8q0mS.png",
  },
  {
    id: 3,
    title: "Men's Activewear",
    discount: "30-70% OFF",
    image: "https://mall-ka-baap.vercel.app/assets/mensuit-AjF1hLcX.png",
  },
  {
    id: 4,
    title: "Women's Activewear",
    discount: "30-70% OFF",
    image: "https://mall-ka-baap.vercel.app/assets/shopping-PYb0stRi.webp",
  },
  {
    id: 5,
    title: "Western Wear",
    discount: "40-80% OFF",
    image: "https://mall-ka-baap.vercel.app/assets/kids5-VeYk-9PD.png",
  },
  {
    id: 6,
    title: "Sportswear",
    discount: "30-80% OFF",
    image: "https://mall-ka-baap.vercel.app/assets/images21-C2wjcXte.png", 
  },
  {
    id: 7,
    title: "Ethnic Wear",
    discount: "50-80% OFF",
    image: "https://mall-ka-baap.vercel.app/assets/kids4-BJ1Kmh7U.png",
  },
  {
    id: 8,
    title: "Casual Wear",
    discount: "40-80% OFF",
    image: "https://mall-ka-baap.vercel.app/assets/thsirt-Ddf8q0mS.png", 
  },
  {
    id: 9,
    title: "Men's Activewear",
    discount: "30-70% OFF",
    image: "https://mall-ka-baap.vercel.app/assets/mensuit-AjF1hLcX.png",
  },
  {
    id: 10,
    title: "Women's Activewear",
    discount: "30-70% OFF",
    image: "https://mall-ka-baap.vercel.app/assets/shopping-PYb0stRi.webp",
  },
  {
    id: 11,
    title: "Western Wear",
    discount: "40-80% OFF",
    image: "https://mall-ka-baap.vercel.app/assets/kids5-VeYk-9PD.png",
  },
  {
    id: 12,
    title: "Sportswear",
    discount: "30-80% OFF",
    image: "https://mall-ka-baap.vercel.app/assets/images21-C2wjcXte.png",
  },
];

const ShopCategory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(categories.length / ITEMS_PER_PAGE);

  const paginatedCategories = categories.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto font-sans relative">

      <div 
        className="absolute inset-0 z-0 opacity-30 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center mb-8">

        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 sm:w-16 h-[1px] bg-orange-400"></div>
          <span className="text-orange-500 text-[10px] font-bold tracking-widest uppercase">Our Products</span>
          <div className="w-10 sm:w-16 h-[1px] bg-orange-400"></div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6 text-center tracking-tight">
          Shop <span className="text-orange-500">Our Category</span>
        </h2>
        
        <button className="bg-[#1a1a1a] hover:bg-black text-white text-[11px] font-bold px-6 py-2.5 rounded-full flex items-center transition-all shadow-md">
          SHOP NOW <ArrowRight size={14} className="ml-2" />
        </button>

      </div>

      <div className="relative z-10 w-full h-[1px] bg-orange-300 mb-8"></div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {paginatedCategories.map((cat) => (
          <Link 
              to="/shop"
              key={cat.id} 
              className="group relative h-[280px] md:h-[320px] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300 block"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#fff5f0] via-[#ffdccc] to-[#f97316] opacity-90 group-hover:opacity-100 transition-opacity z-0"></div>

            <img 
              src={cat.image} 
              alt={cat.title} 
              className="absolute bottom-16 left-1/2 -translate-x-1/2 h-[75%] w-[85%] object-contain drop-shadow-2xl z-10 transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#ea580c] to-transparent z-10"></div>

            <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
              <p className="text-[10px] md:text-xs font-semibold text-orange-50 mb-0.5">
                {cat.title}
              </p>
              <p className="text-sm md:text-lg font-bold leading-tight mb-1">
                {cat.discount}
              </p>
              <p className="text-[9px] md:text-[10px] font-bold flex items-center group-hover:underline uppercase tracking-wider">
                Shop Now <ArrowRight size={12} className="ml-1 transition-transform group-hover:translate-x-1" />
              </p>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="relative z-10 flex flex-col items-center justify-center mt-10">
          
          <div className="flex items-center gap-4 mb-3">
            <button 
              onClick={prevPage}
              disabled={currentPage === 1}
              className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-orange-500 hover:border-orange-500 disabled:opacity-50 disabled:pointer-events-none transition-all shadow-sm"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-1.5">
              {[...Array(totalPages)].map((_, idx) => (
                <div 
                  key={idx} 
                  className={`rounded-full transition-all duration-300 ${
                    currentPage === idx + 1 
                      ? 'w-5 h-1.5 bg-orange-500' // Active Dash
                      : 'w-1.5 h-1.5 bg-gray-300' // Inactive Dot
                  }`}
                ></div>
              ))}
            </div>

            <button 
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-orange-500 hover:border-orange-500 disabled:opacity-50 disabled:pointer-events-none transition-all shadow-sm"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          <span className="text-[10px] font-bold text-gray-400 tracking-widest">
            {currentPage}/{totalPages}
          </span>
          
        </div>
      )}

    </section>
  );
};

export default ShopCategory;