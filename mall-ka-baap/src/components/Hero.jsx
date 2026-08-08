import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    type: 'image',
    badgeText: "New Arrivals — Summer '25",
    badgeColor: "bg-orange-500",
    title: (
      <>
        Discover the <br />
        <span className="text-orange-500">Latest</span> <br />
        Fashion for <br />
        Everyone
      </>
    ),
    description: "Mall Ka Baap brings you stylish, high-quality garments at unbeatable prices — for men, women & kids.",
    buttonText: "Shop Now",
    image: "https://res.cloudinary.com/ni0rf0la/image/upload/v1786083525/ChatGPT_Image_Aug_7_2026_11_47_00_AM_lvfhng.png",
  },
  {
    id: 2,
    type: 'image',
    badgeText: "Men's Exclusive — New In",
    badgeColor: "bg-blue-500",
    title: (
      <>
        Style That <br />
        <span className="text-blue-600">Defines</span> <br />
        The Modern <br />
        Man
      </>
    ),
    description: "Premium menswear crafted for the bold — from sharp formals to relaxed casuals.",
    buttonText: "Shop Now",
    image: "https://res.cloudinary.com/ni0rf0la/image/upload/v1786083813/ChatGPT_Image_Aug_7_2026_11_53_11_AM_moyoss.png",
  },
  {
    id: 3,
    type: 'image',
    badgeText: "Women's Collection — Trending",
    badgeColor: "bg-red-400",
    title: (
      <>
        Elegance <br />
        <span className="text-red-400">Redefined</span> <br />
        For Every <br />
        Woman
      </>
    ),
    description: "From ethnic elegance to western chic — discover our women's collection.",
    buttonText: "Shop Now",
    image: "https://res.cloudinary.com/ni0rf0la/image/upload/v1786083869/ChatGPT_Image_Aug_7_2026_11_54_11_AM_ncwmcn.png",
  },
  {
    id: 4,
    type: 'video',
    badgeText: "Featured Collection",
    badgeColor: "bg-gray-800",
    title: (
      <>
        Experience <br />
        <span className="text-orange-500">The Vibe</span> <br />
        Of Fashion
      </>
    ),
    description: "Watch our latest campaign video and get inspired for your next wardrobe upgrade.",
    buttonText: "Watch Now",
    videoUrl: "", 
    image: "", 
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-[calc(100vh-76px)] min-h-[500px] bg-[#f4f2ee] overflow-hidden">
      
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <div className="absolute inset-0 w-full h-full">
            {slide.type === 'image' ? (
              <img 
                src={slide.image} 
                alt="Hero Background" 
                className="w-full h-full object-cover object-center md:object-right"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                {slide.videoUrl ? (
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover"
                  >
                    <source src={slide.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <div className="text-gray-400 font-semibold text-lg flex flex-col items-center">
                    {/* <span>[ Video Placeholder ]</span>
                    <span className="text-sm font-normal mt-2">Add video URL in the slides array</span> */}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#f4f2ee] via-[#f4f2ee]/90 to-transparent w-full md:w-2/3"></div>

          <div className="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 h-full flex flex-col justify-center">
            <div className={`max-w-lg md:max-w-xl transition-all duration-700 delay-300 ${
              index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm mb-6">
                <span className={`w-2 h-2 rounded-full ${slide.badgeColor} mr-2`}></span>
                <span className="text-xs md:text-sm font-semibold text-gray-800">{slide.badgeText}</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6">
                {slide.title}
              </h1>

              <p className="text-base md:text-lg text-gray-600 mb-8 max-w-md">
                {slide.description}
              </p>

              <button className="bg-[#1a1a1a] hover:bg-black text-white font-semibold py-3.5 px-8 rounded-xl transition-all duration-300 flex items-center group">
                {slide.buttonText}
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 flex items-center justify-center space-x-6">

          <button 
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-orange-500 hover:scale-105 transition-all"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-orange-500 w-8' // Active dot is orange and wide
                    : 'bg-gray-400 hover:bg-gray-600 w-2' // Inactive dots are gray circles
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-orange-500 hover:scale-105 transition-all"
            aria-label="Next Slide"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
          
        </div>
      </div>
      
    </div>
  );
};

export default Hero;