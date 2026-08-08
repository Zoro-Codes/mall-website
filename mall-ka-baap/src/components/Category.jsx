import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: "MEN'S WEAR",
    subtitle: "480+ STYLES",
    image: "https://res.cloudinary.com/ni0rf0la/image/upload/v1786085860/ChatGPT_Image_Aug_7_2026_12_21_30_PM_nqbrva.png",
    link: "/shop/mens"
  },
  {
    id: 2,
    title: "WOMEN'S COLLECTION",
    subtitle: "620+ STYLES",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800",
    link: "/shop/womens"
  },
  {
    id: 3,
    title: "BOYS FASHION",
    subtitle: "210+ STYLES",
    image: "https://res.cloudinary.com/ni0rf0la/image/upload/v1786085962/ChatGPT_Image_Aug_7_2026_12_24_07_PM_joqtzq.png",
    link: "/shop/boys"
  },
  {
    id: 4,
    title: "GIRLS FASHION",
    subtitle: "340+ STYLES",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=800",
    link: "/shop/girls"
  },
  {
    id: 5,
    title: "ETHNIC WEAR",
    subtitle: "150+ STYLES",
    image: "https://res.cloudinary.com/ni0rf0la/image/upload/v1786086066/ChatGPT_Image_Aug_7_2026_12_30_40_PM_vo8qur.png",
    link: "/shop/ethnic"
  },
  {
    id: 6,
    title: "WESTERN STYLES",
    subtitle: "290+ STYLES",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=800",
    link: "/shop/western"
  }
];

const Category = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="w-full flex flex-col md:flex-row h-auto md:h-66 border-b border-gray-300 bg-[#f4f2ee]">
      {categories.map((category, index) => {
        const isActive = activeIdx === index;

        return (
          <div
            key={category.id}
            onMouseEnter={() => setActiveIdx(index)}
            className={`relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer border-b md:border-b-0 md:border-r border-gray-300 last:border-r-0 flex items-center justify-center group ${
              isActive 
                ? 'h-48 md:h-full md:w-[40%] bg-black' 
                : 'h-16 md:h-full md:w-[12%] bg-transparent hover:bg-white'
            }`}
          >
            <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${isActive ? 'opacity-50' : 'opacity-0'}`}
            >
              <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
            </div>

            <div className={`absolute top-0 left-0 right-0 h-1 bg-orange-500 transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></div>

            <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
              {isActive ? (
                <Link to={category.link} className="flex flex-col items-center justify-end h-full w-full pb-4 md:pb-8 animate-in fade-in zoom-in duration-500 delay-100">
                  <span className="text-[10px] md:text-xs font-bold text-gray-300 tracking-widest mb-1">
                    {category.subtitle}
                  </span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-white text-center tracking-wide mb-3">
                    {category.title}
                  </h3>
                  <ArrowRight size={20} className="text-orange-500 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              ) : (
                <div className="text-center w-full px-2">
                  <h3 className="text-[10px] md:text-xs font-bold text-gray-600 tracking-wider uppercase md:leading-relaxed">
                    {category.title.split(' ').map((word, i) => (
                      <React.Fragment key={i}>
                        {word} <br className="hidden md:block" />
                      </React.Fragment>
                    ))}
                  </h3>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;