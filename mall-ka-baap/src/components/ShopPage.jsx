import React, { useState, useEffect, useRef } from "react";
import { 
    ChevronDown, Search, Heart, ShoppingBag, User, 
    Baby, Sparkles, Crown, Star, ChevronLeft, ChevronRight,
    LayoutGrid, Lightbulb, SlidersHorizontal
} from 'lucide-react';

// Note: Ensure you have useClickOutside hook in your project
// import { useClickOutside } from '../hooks/useClickOutside'; 

// Mock implementation of useClickOutside if you don't have it handy
const useClickOutside = (handler) => {
    const domNode = useRef();
    useEffect(() => {
        const maybeHandler = (event) => {
            if (domNode.current && !domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return () => document.removeEventListener("mousedown", maybeHandler);
    }, [handler]);
    return domNode;
};

const products = [
    {
        id: 1,
        badgeText: "NEW ARRIVAL",
        badgeColor: "bg-green-600",
        discount: "-32%",
        image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776077841/Square_Neck_Textured_Waist-Cinching_Maroon_Dress_vheg55.webp",
        brand: "AURELIA",
        title: "Cotton Blend Co-ord Set",
        material: "100% Cotton",
        rating: 4,
        reviews: 128,
        price: 1299,
        originalPrice: 1899,
        savings: 300,
        category: "women",
        ethnic: false,
        western: true,
        sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
        id: 2,
        badgeText: "SALE",
        badgeColor: "bg-orange-500",
        discount: "-33%",
        image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776078520/images_6_vfn6rc.jpg",
        brand: "BIBA",
        title: "Embroidered Frock",
        material: "Georgette",
        rating: 4,
        reviews: 75,
        price: 2150,
        originalPrice: 3200,
        savings: 1050,
        category: "women",
        ethnic: false,
        western: true,
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
        id: 3,
        badgeText: "BESTSELLER",
        badgeColor: "bg-black",
        discount: "-31%",
        image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776077580/images_4_rs50b4.jpg",
        brand: "FABINDIA",
        title: "Slim Fit Stretch Jeans",
        material: "Cotton Blend",
        rating: 4,
        reviews: 89,
        price: 899,
        originalPrice: 1299,
        savings: 400,
        category: "men",
        ethnic: false,
        western: true,
        sizes: ['28', '30', '32', '34', '36']
    },
    {
        id: 4,
        badgeText: "TRENDING",
        badgeColor: "bg-[#e84c3d]",
        discount: "-32%",
        image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776077580/images_5_f8olir.jpg",
        brand: "MANYAVAR",
        title: "Tropical Rayon Camp Shirt",
        material: "Rayon",
        rating: 4,
        reviews: 204,
        price: 749,
        originalPrice: 1099,
        savings: 350,
        category: "men",
        ethnic: false,
        western: true,
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 5,
        badgeText: "NEW ARRIVAL",
        badgeColor: "bg-green-600",
        discount: "-22%",
        image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776152849/kidsno.1_y5j49b.png",
        brand: "NARI KIDS",
        title: "Kids Dungaree Playsuit",
        material: "Super Cotton",
        rating: 4,
        reviews: 42,
        price: 599,
        originalPrice: 799,
        savings: 200,
        category: "kids",
        ethnic: true,
        western: true,
        sizes: ['2Y', '3Y', '4Y', '5Y']
    },
    {
        id: 6,
        badgeText: "SALE",
        badgeColor: "bg-orange-500",
        discount: "-28%",
        image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776078520/k2ujc_512_yf0fzu.webp",
        brand: "W FOR WOMAN",
        title: "Palazzo Sharara Set",
        material: "Silk Blend",
        rating: 4,
        reviews: 56,
        price: 1799,
        originalPrice: 2499,
        savings: 700,
        category: "women",
        ethnic: true,
        western: false,
        sizes: ['XS', 'S', 'M', 'L']
    },
    {
        id: 7,
        badgeText: "TRENDING",
        badgeColor: "bg-[#e84c3d]",
        discount: "-31%",
        image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776077580/images_3_prsjj5.jpg",
        brand: "LEVI'S",
        title: "Flared Denim Jeans",
        material: "90% Denim",
        rating: 4,
        reviews: 152,
        price: 1499,
        originalPrice: 2199,
        savings: 700,
        category: "kids",
        ethnic: false,
        western: true,
        sizes: ['26', '28', '30', '32']
    },
    {
        id: 8,
        badgeText: "NEW ARRIVAL",
        badgeColor: "bg-green-600",
        discount: "-34%",
        image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776078689/three-elegant-mens-suits-different-colors-perfect-business-formal-events-highquality-fabrics-tailoring_191095-85761_ilaw9v.avif",
        brand: "MANYAVAR",
        title: "Bandhgala Nehru Jacket",
        material: "Silk",
        rating: 4,
        reviews: 67,
        price: 3299,
        originalPrice: 4999,
        savings: 1700,
        category: "men",
        ethnic: true,
        western: false,
        sizes: ['38', '40', '42', '44']
    }
];

const sortOptions = [
    "Featured",
    "Price: Low To High",
    "Price: High To Low",
    "Top Rated"
];

const ShopPage = () => {
    const [activeCategory, setActiveCategory] = useState('ALL');
    const [sortOption, setSortOption] = useState('Featured');
    const [searchQuery, setSearchQuery] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    
    const dropdownRef = useClickOutside(() => setIsDropdownOpen(false));
    const itemPerPage = 8;

    const categories = [
        { id: 'ALL', label: 'All', icon: <LayoutGrid size={16} /> },
        { id: 'WOMEN', label: 'Women', icon: <User size={16} /> },
        { id: 'MEN', label: 'Men', icon: <User size={16} /> },
        { id: 'KIDS', label: 'Kids', icon: <Baby size={16} /> },
        { id: 'ETHNIC', label: 'Ethnic', icon: <Sparkles size={16} /> },
        { id: 'WESTERN', label: 'Western', icon: <Crown size={16} /> }
    ];

    // Helper to dynamically calculate item counts per category
    const getCategoryCount = (catId) => {
        if (catId === 'ALL') return products.length;
        return products.filter(product => {
            if (catId === 'MEN') return product.category === 'men';
            if (catId === 'WOMEN') return product.category === 'women';
            if (catId === 'KIDS') return product.category === 'kids';
            if (catId === 'ETHNIC') return product.ethnic === true;
            if (catId === 'WESTERN') return product.western === true;
            return false;
        }).length;
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [activeCategory, searchQuery, sortOption]);

    let filterProducts = products.filter(product => {
        let matchCategory = false;

        if (activeCategory === 'ALL') matchCategory = true;
        else if (activeCategory === 'MEN') matchCategory = product.category === 'men';
        else if (activeCategory === 'WOMEN') matchCategory = product.category === 'women';
        else if (activeCategory === 'KIDS') matchCategory = product.category === 'kids';
        else if (activeCategory === 'ETHNIC') matchCategory = product.ethnic === true;
        else if (activeCategory === 'WESTERN') matchCategory = product.western === true;

        const matchSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.brand.toLowerCase().includes(searchQuery.toLowerCase());

        return matchCategory && matchSearch;
    });

    if (sortOption === "Price: Low To High") {
        filterProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price: High To Low") {
        filterProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "Top Rated") {
        filterProducts.sort((a, b) => (b.rating - a.rating) || (b.reviews - a.reviews));
    }

    const totalPages = Math.ceil(filterProducts.length / itemPerPage) || 1;
    const paginatedProducts = filterProducts.slice(
        (currentPage - 1) * itemPerPage,
        currentPage * itemPerPage
    );

    return (
        <section className="w-full py-12 px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto bg-[#fafafa] min-h-screen">
            
            {/* Top Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-gray-200 pb-6">
                <div>
                    <p className="text-orange-500 font-bold text-[10px] tracking-widest uppercase flex items-center gap-2 mb-2">
                        <span className="w-6 h-[2px] bg-orange-500"></span> Shop By Category
                    </p>
                    <h1 className="text-4xl font-black text-gray-900 mb-1 tracking-tight">Browse All</h1>
                    <p className="text-sm text-gray-400">{filterProducts.length} items found</p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 md:mt-0 w-full md:w-auto">
                    {/* Search Bar */}
                    <div className="relative w-full sm:w-64">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search size={16} className="text-gray-400" />
                        </div>
                        <input 
                            type="text" 
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-white"
                        />
                    </div>

                    {/* Sort Dropdown */}
                    <div ref={dropdownRef} className="relative w-full sm:w-auto">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full sm:w-auto flex items-center justify-between px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-700 hover:border-orange-500 transition-colors"
                        >
                            <span className="flex items-center gap-2">
                                <SlidersHorizontal size={14} className="text-gray-400" />
                                {sortOption}
                            </span>
                            <ChevronDown size={14} className="ml-4" />
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute top-full mt-2 w-full sm:w-48 right-0 bg-white border border-gray-200 shadow-lg rounded-xl z-30 py-2 overflow-hidden">
                                {sortOptions.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => {
                                            setSortOption(option);
                                            setIsDropdownOpen(false);
                                        }}
                                        className={`w-full text-left px-5 py-2 text-sm transition-colors ${
                                            option === sortOption
                                                ? "bg-orange-50 text-orange-600 font-semibold"
                                                : "text-gray-600 hover:bg-gray-50"
                                        }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Layout Area */}
            <div className="flex flex-col lg:flex-row gap-10">
                
                {/* Left Sidebar */}
                <div className="w-full lg:w-64 shrink-0">
                    <h3 className="text-[11px] font-bold text-orange-500 uppercase tracking-widest flex items-center gap-3 mb-6">
                        <span className="w-4 h-[2px] bg-orange-500"></span> Categories
                    </h3>
                    
                    <div className="flex flex-col gap-2 mb-8">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
                                    activeCategory === cat.id
                                        ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                                        : "bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                                }`}
                            >
                                <div className="flex items-center gap-3 font-semibold text-sm">
                                    {cat.icon}
                                    {cat.label}
                                </div>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                    activeCategory === cat.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                                }`}>
                                    {getCategoryCount(cat.id)}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Filter Tip Card */}
                    <div className="bg-[#fff7f2] border border-orange-100 p-5 rounded-2xl flex flex-col items-start hidden lg:flex">
                        <div className="flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-widest mb-3">
                            <Lightbulb size={16} /> TIP
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Click any category to instantly filter your view.
                        </p>
                    </div>
                </div>

                {/* Right Product Grid */}
                <div className="flex-grow">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                        {paginatedProducts.length > 0 ? (
                            paginatedProducts.map((product) => (
                                <div 
                                    key={product.id} 
                                    className="bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 overflow-hidden group hover:shadow-xl hover:border-orange-500 flex flex-col"
                                >
                                    <div className="relative bg-[#f4f2ee] aspect-[4/5] flex items-center justify-center overflow-hidden p-4">
                                        <div 
                                            className={`absolute top-4 left-0 ${product.badgeColor} text-white text-[10px] font-black tracking-wider px-3 py-1.5 z-10 shadow-sm`}
                                            style={{ clipPath: 'polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%)' }}
                                        >
                                            {product.badgeText}
                                        </div>

                                        <div className="absolute top-4 right-4 bg-white border border-orange-200 text-orange-500 text-[10px] font-bold px-2.5 py-1 rounded-full z-10 shadow-sm">
                                            {product.discount}
                                        </div>

                                        <button className="absolute right-4 bottom-[4.5rem] bg-white p-2 rounded-full shadow-md text-gray-400 hover:text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 translate-y-2 group-hover:translate-y-0">
                                            <Heart size={16} strokeWidth={2.5} />
                                        </button>

                                        <div className="absolute bottom-0 left-0 right-0 bg-[#222] text-white p-3 flex justify-center items-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20 overflow-x-auto">
                                            <div className="flex gap-2">
                                                {product.sizes.map(size => (
                                                    <button key={size} className="text-xs font-medium text-gray-300 border border-gray-600 hover:text-white hover:border-white px-2 py-1 rounded transition-colors whitespace-nowrap">
                                                        {size}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <img 
                                            src={product.image} 
                                            alt={product.title} 
                                            className="w-full h-full object-contain transition-transform duration-500 mix-blend-multiply group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="p-5 flex flex-col flex-grow bg-white">
                                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                                            {product.brand}
                                        </span>
                                        
                                        <h3 className="text-sm font-bold text-gray-900 leading-tight mb-3 line-clamp-1">
                                            {product.title}
                                        </h3>
                                        
                                        <div className="inline-flex items-center self-start px-2 py-1 bg-orange-50 rounded text-[9px] font-semibold text-gray-600 border border-orange-100 mb-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-1.5"></span>
                                            {product.material}
                                        </div>

                                        <div className="flex items-center mb-4">
                                            <div className="flex text-orange-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={12} className={i < product.rating ? "fill-current" : "text-gray-300"} />
                                                ))}
                                            </div>
                                            <span className="text-[10px] text-gray-400 font-medium ml-2">({product.reviews})</span>
                                        </div>

                                        <div className="w-full border-t border-dashed border-gray-100 mb-4"></div>

                                        <div className="flex items-baseline mb-5 space-x-2 w-full">
                                            <span className="text-lg font-extrabold text-orange-500">
                                                ₹{product.price.toLocaleString('en-IN')}
                                            </span>
                                            <span className="text-[11px] font-medium text-gray-400 line-through">
                                                ₹{product.originalPrice.toLocaleString('en-IN')}
                                            </span>
                                            <span className="text-[10px] font-bold text-green-500 ml-auto">
                                                Save ₹{product.savings.toLocaleString('en-IN')}
                                            </span>
                                        </div>

                                        <button className="mt-auto bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-3.5 rounded-xl flex items-center justify-center transition-colors shadow-sm w-full">
                                            <ShoppingBag size={14} strokeWidth={2.5} className="mr-2" />
                                            ADD TO BAG
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center flex flex-col items-center bg-white rounded-3xl border border-gray-100">
                                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                    <Search size={24} className="text-gray-400" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">No products found</h3>
                                <p className="text-gray-500 text-sm">Try adjusting your filters or search criteria.</p>
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-center mt-12 space-x-2">
                            <button 
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-orange-50 hover:text-orange-500 hover:border-orange-500 disabled:opacity-50 disabled:pointer-events-none transition-colors"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            
                            <div className="flex space-x-1 mx-4">
                                {[...Array(totalPages)].map((_, i) => {
                                    const pageNum = i + 1;
                                    return (
                                        <button
                                            key={pageNum}
                                            onClick={() => setCurrentPage(pageNum)}
                                            className={`w-10 h-10 rounded-full text-sm font-bold transition-colors ${
                                                currentPage === pageNum 
                                                    ? 'bg-orange-500 text-white shadow-md' 
                                                    : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                        >
                                            {pageNum}
                                        </button>
                                    );
                                })}
                            </div>

                            <button 
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-orange-50 hover:text-orange-500 hover:border-orange-500 disabled:opacity-50 disabled:pointer-events-none transition-colors"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ShopPage;