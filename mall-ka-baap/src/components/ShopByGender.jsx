import React from 'react';
import { ShoppingBag, Star, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const collections = [
  {
    id: 'men',
    theme: {
      primary: 'bg-orange-500',
      hover: 'hover:bg-orange-600',
      text: 'text-orange-500',
      lightBg: 'bg-orange-50',
      border: 'border-orange-500',
      hoverBorder: 'hover:border-orange-500',
      hoverBg: 'hover:bg-orange-500',
      lightBorder: 'border-orange-200'
    },
    header: {
      icon: '👔',
      title: 'Men',
      subtitle: 'Sharp fits for every occasion'
    },
    product: {
      badgeType: 'circle',
      badgeText: 'SALE\n42%',
      badgeColor: 'bg-orange-500',
      image: 'https://res.cloudinary.com/dquki4xol/image/upload/v1776079502/images_10_lqvavf.jpg',
      category: 'SUITS',
      title: 'Premium Wool Blazer',
      material: 'Wool Blend',
      rating: 4,
      reviews: 214,
      price: '3,499',
      originalPrice: '5,999',
      savings: '2,500',
      colors: ['bg-gray-900', 'bg-gray-500', 'bg-amber-800']
    }
  },
  {
    id: 'women',
    theme: {
      primary: 'bg-pink-500',
      hover: 'hover:bg-pink-600',
      text: 'text-pink-500',
      lightBg: 'bg-pink-50',
      border: 'border-pink-500',
      hoverBorder: 'hover:border-pink-500',
      hoverBg: 'hover:bg-pink-500',
      lightBorder: 'border-pink-200'
    },
    header: {
      icon: '👗',
      title: 'Women',
      subtitle: 'Elegance in every stitch'
    },
    product: {
      badgeType: 'circle',
      badgeText: 'SALE\n33%',
      badgeColor: 'bg-pink-500',
      image: 'https://res.cloudinary.com/dquki4xol/image/upload/v1776079514/PCCGH1466A_1_n4btwb.webp',
      category: 'ETHNIC',
      title: 'Embroidered Lehnga',
      material: 'Georgette',
      rating: 4,
      reviews: 75,
      price: '2,150',
      originalPrice: '3,200',
      savings: '1,050',
      colors: ['bg-purple-600', 'bg-pink-500', 'bg-red-500']
    }
  },
  {
    id: 'kids',
    theme: {
      primary: 'bg-blue-500',
      hover: 'hover:bg-blue-600',
      text: 'text-blue-500',
      lightBg: 'bg-blue-50',
      border: 'border-blue-500',
      hoverBorder: 'hover:border-blue-500',
      hoverBg: 'hover:bg-blue-500',
      lightBorder: 'border-blue-200'
    },
    header: {
      icon: '👧',
      title: 'Kids',
      subtitle: 'Playful styles, comfy fits'
    },
    product: {
      badgeType: 'ribbon',
      badgeText: 'NEW',
      badgeColor: 'bg-green-600',
      image: 'https://res.cloudinary.com/dquki4xol/image/upload/v1776146893/WhatsApp_Image_2026-04-14_at_11.28.19_AM_muem2o.jpg',
      category: 'CASUALS',
      title: 'Kids Dungaree Playsuit',
      material: 'Denim Cotton',
      rating: 4,
      reviews: 61,
      price: '599',
      originalPrice: '899',
      savings: '300',
      colors: ['bg-blue-500', 'bg-yellow-400', 'bg-white border border-gray-200']
    }
  },
  {
    id: 'boy',
    theme: {
      primary: 'bg-emerald-500',
      hover: 'hover:bg-emerald-600',
      text: 'text-emerald-500',
      lightBg: 'bg-emerald-50',
      border: 'border-emerald-500',
      hoverBorder: 'hover:border-emerald-500',
      hoverBg: 'hover:bg-emerald-500',
      lightBorder: 'border-emerald-200'
    },
    header: {
      icon: '👦',
      title: 'Boy',
      subtitle: 'Cool looks for little champs'
    },
    product: {
      badgeType: 'ribbon',
      badgeText: 'NEW',
      badgeColor: 'bg-green-600',
      image: 'https://res.cloudinary.com/dquki4xol/image/upload/v1776079504/images_8_u4lvty.jpg',
      category: 'SHIRTS',
      title: 'Slim Fit Oxford Shirt',
      material: '100% Cotton',
      rating: 4,
      reviews: 58,
      price: '449',
      originalPrice: '799',
      savings: '350',
      colors: ['bg-gray-400', 'bg-blue-400', 'bg-slate-800']
    }
  }
];

const ShopByGender = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto font-sans relative">

      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      ></div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div className="flex flex-col items-start">
          <p className="text-orange-500 font-bold tracking-wider text-xs mb-3 flex items-center uppercase">
            <span className="w-8 h-[2px] bg-orange-500 mr-3"></span> 
            Shop By Gender
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] tracking-tight mb-2">
            Big Saving <span className="text-orange-500">All Products</span>
          </h2>
          <p className="text-gray-400 text-sm font-medium">
            Curated collections for every member of the family
          </p>
        </div>
        
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-6 py-3.5 rounded-full flex items-center transition-colors shadow-md shadow-orange-500/20 whitespace-nowrap">
          VIEW ALL COLLECTIONS <ArrowRight size={16} strokeWidth={2.5} className="ml-2" />
        </button>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map((col) => (
          <div key={col.id} className="flex flex-col h-full">

            <div 
              className={`bg-white rounded-2xl border-2 border-gray-100 transition-all duration-300 overflow-hidden group hover:shadow-xl flex flex-col flex-grow ${col.theme.hoverBorder}`}
            >

              <div className="p-4 flex items-center justify-between border-b border-gray-50 bg-white z-10">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${col.theme.lightBg} flex items-center justify-center text-xl`}>
                    {col.header.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900 text-sm leading-tight">{col.header.title}</span>
                    <span className="text-[9px] text-gray-400 font-medium">{col.header.subtitle}</span>
                  </div>
                </div>
                <div className={`${col.theme.primary} text-white text-[9px] font-black tracking-wider px-3 py-1 rounded-full uppercase`}>
                  Shop
                </div>
              </div>

              <Link to={`/product/${col.product.id || 1}`} className={`relative ${col.theme.lightBg} aspect-[4/5] flex items-center justify-center overflow-hidden block cursor-pointer`}>

                <div 
                  className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
                  style={{ backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                ></div>

                {col.product.badgeType === 'ribbon' ? (
                  <div 
                    className={`absolute top-4 left-0 ${col.product.badgeColor} text-white text-[10px] font-black tracking-wider px-3 py-1.5 z-10 shadow-sm`}
                    style={{ clipPath: 'polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%)' }}
                  >
                    {col.product.badgeText}
                  </div>
                ) : (
                  <div className={`absolute top-4 right-4 ${col.product.badgeColor} text-white text-[11px] font-black leading-tight flex items-center justify-center text-center w-12 h-12 rounded-full z-10 shadow-lg whitespace-pre-line`}>
                    {col.product.badgeText}
                  </div>
                )}

                <button onClick={(e) => e.preventDefault()} className={`absolute right-4 bottom-[4.5rem] bg-white p-2 rounded-full shadow-md text-gray-400 transition-all duration-300 z-20 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 ${col.theme.text}`}>
                  <Heart size={16} strokeWidth={2.5} />
                </button>

                <div className="absolute bottom-0 left-0 right-0 bg-[#222] text-white p-3 flex justify-center items-center transition-transform duration-300 ease-out z-20 overflow-x-auto translate-y-full group-hover:translate-y-0">
                  <div className="flex gap-2">
                    {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                      <button key={size} className="text-[10px] font-medium text-gray-300 border border-gray-600 hover:text-white hover:border-white px-2 py-1 rounded transition-colors whitespace-nowrap">
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <img 
                  src={col.product.image} 
                  alt={col.product.title} 
                  className="relative z-0 w-full h-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              <div className="p-4 flex flex-col flex-grow bg-white">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  {col.product.category}
                </span>
                
                <Link 
                    to={`/product/${col.product.id || 1}`}
                    className="text-sm font-bold text-gray-900 leading-tight mb-3 line-clamp-1 hover:text-orange-500 transition-colors block"
                >
                    {col.product.title}
                </Link>

                <div className={`inline-flex items-center self-start px-2 py-1 ${col.theme.lightBg} rounded text-[9px] font-semibold text-gray-600 border ${col.theme.lightBorder} mb-3`}>
                  <span className={`w-1 h-1 rounded-full ${col.theme.primary} mr-1.5`}></span>
                  {col.product.material}
                </div>

                <div className="flex items-center mb-3">
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className={i < col.product.rating ? "fill-current" : "text-gray-300"} />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium ml-1.5">({col.product.reviews})</span>
                </div>

                <div className="flex items-baseline mb-4 space-x-2 w-full">
                  <span className={`text-lg font-extrabold ${col.theme.text}`}>
                    ₹{col.product.price}
                  </span>
                  <span className="text-[11px] font-medium text-gray-400 line-through">
                    ₹{col.product.originalPrice}
                  </span>
                  <span className="text-[10px] font-bold text-green-500 ml-auto">
                    Save ₹{col.product.savings}
                  </span>
                </div>

                <div className="flex gap-1.5 mb-5 mt-auto">
                  {col.product.colors.map((colorClass, idx) => (
                    <div key={idx} className={`w-3.5 h-3.5 rounded-full ${colorClass} shadow-sm border border-black/10 cursor-pointer hover:scale-110 transition-transform`}></div>
                  ))}
                </div>

                <button className={`w-full ${col.theme.primary} ${col.theme.hover} text-white text-xs font-bold py-3 rounded-xl flex items-center justify-center transition-colors shadow-sm`}>
                  <ShoppingBag size={14} strokeWidth={2.5} className="mr-2" />
                  ADD TO BAG
                </button>
              </div>

            </div>

            <button className={`mt-4 w-full bg-white border border-gray-200 ${col.theme.hoverBg} ${col.theme.hoverBorder} rounded-full py-3 flex items-center justify-center gap-2 group/btn transition-all duration-300 shadow-sm hover:shadow-md`}>
              <span className="text-lg">{col.header.icon}</span>
              <span className="text-[10px] font-bold text-gray-600 group-hover/btn:text-white uppercase tracking-wider transition-colors">
                View More {col.header.title}
              </span>
              <ArrowRight size={14} className="text-gray-400 group-hover/btn:text-white transition-colors" />
            </button>

          </div>
        ))}
      </div>

    </section>
  );
};

export default ShopByGender;