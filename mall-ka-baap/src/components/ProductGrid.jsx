import { useState, useEffect, useRef, React } from "react";
import {ChevronDown, Search, Grid, List, Heart, ShoppingBag, User, Baby, Sparkles, Crown, Star, ChevronLeft, ChevronRight} from 'lucide-react';
import { useClickOutside } from '../hooks/useClickOutside';
import { useShop } from "../context/ShopContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

// const products = [
//     {
//         id: 1,
//         badgeText: "NEW ARRIVAL",
//         badgeColor: "bg-green-600",
//         discount: "-32%",
//         image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776077841/Square_Neck_Textured_Waist-Cinching_Maroon_Dress_vheg55.webp",
//         brand: "AURELIA",
//         title: "Cotton Blend Co-ord Set",
//         material: "100% Cotton",
//         rating: 4,
//         reviews: 128,
//         price: 1299,
//         originalPrice: 1899,
//         savings: 300,
//         category: "women",
//         ethnic: false,
//         western: true,
//         sizes: ['XS', 'S', 'M', 'L', 'XL']
//     },
//     {
//         id: 2,
//         badgeText: "SALE",
//         badgeColor: "bg-orange-500",
//         discount: "-33%",
//         image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776078520/images_6_vfn6rc.jpg",
//         brand: "BIBA",
//         title: "Embroidered Frock",
//         material: "Georgette",
//         rating: 4,
//         reviews: 75,
//         price: 2150,
//         originalPrice: 3200,
//         savings: 1050,
//         category: "women",
//         ethnic: false,
//         western: true,
//         sizes: ['S', 'M', 'L', 'XL', 'XXL']
//     },
//     {
//         id: 3,
//         badgeText: "BESTSELLER",
//         badgeColor: "bg-black",
//         discount: "-31%",
//         image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776077580/images_4_rs50b4.jpg",
//         brand: "FABINDIA",
//         title: "Slim Fit Stretch Jeans",
//         material: "Cotton Blend",
//         rating: 4,
//         reviews: 89,
//         price: 899,
//         originalPrice: 1299,
//         savings: 400,
//         category: "men",
//         ethnic: false,
//         western: true,
//         sizes: ['28', '30', '32', '34', '36']
//     },
//         {
//         id: 4,
//         badgeText: "TRENDING",
//         badgeColor: "bg-[#e84c3d]",
//         discount: "-32%",
//         image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776077580/images_5_f8olir.jpg",
//         brand: "MANYAVAR",
//         title: "Tropical Rayon Camp Shirt",
//         material: "Rayon",
//         rating: 4,
//         reviews: 204,
//         price: 749,
//         originalPrice: 1099,
//         savings: 350,
//         category: "men",
//         ethnic: false,
//         western: true,
//         sizes: ['S', 'M', 'L', 'XL']
//     },
//     {
//         id: 5,
//         badgeText: "NEW ARRIVAL",
//         badgeColor: "bg-green-600",
//         discount: "-22%",
//         image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776152849/kidsno.1_y5j49b.png",
//         brand: "NARI KIDS",
//         title: "Kids Dungaree Playsuit",
//         material: "Super Cotton",
//         rating: 4,
//         reviews: 42,
//         price: 599,
//         originalPrice: 799,
//         savings: 200,
//         category: "kids",
//         ethnic: true,
//         western: true,
//         sizes: ['2Y', '3Y', '4Y', '5Y']
//     },
//     {
//         id: 6,
//         badgeText: "SALE",
//         badgeColor: "bg-orange-500",
//         discount: "-28%",
//         image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776078520/k2ujc_512_yf0fzu.webp",
//         brand: "W FOR WOMAN",
//         title: "Palazzo Sharara Set",
//         material: "Silk Blend",
//         rating: 4,
//         reviews: 56,
//         price: 1799,
//         originalPrice: 2499,
//         savings: 700,
//         category: "women",
//         ethnic: true,
//         western: false,
//         sizes: ['XS', 'S', 'M', 'L']
//     },
//     {
//         id: 7,
//         badgeText: "TRENDING",
//         badgeColor: "bg-[#e84c3d]",
//         discount: "-31%",
//         image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776077580/images_3_prsjj5.jpg",
//         brand: "LEVI'S",
//         title: "Flared Denim Jeans",
//         material: "90% Denim",
//         rating: 4,
//         reviews: 152,
//         price: 1499,
//         originalPrice: 2199,
//         savings: 700,
//         category: "kids",
//         ethnic: false,
//         western: true,
//         sizes: ['26', '28', '30', '32']
//     },
//     {
//         id: 8,
//         badgeText: "NEW ARRIVAL",
//         badgeColor: "bg-green-600",
//         discount: "-34%",
//         image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776078689/three-elegant-mens-suits-different-colors-perfect-business-formal-events-highquality-fabrics-tailoring_191095-85761_ilaw9v.avif",
//         brand: "MANYAVAR",
//         title: "Bandhgala Nehru Jacket",
//         material: "Silk",
//         rating: 4,
//         reviews: 67,
//         price: 3299,
//         originalPrice: 4999,
//         savings: 1700,
//         category: "men",
//         ethnic: true,
//         western: false,
//         sizes: ['38', '40', '42', '44']
//     }
// ];

const sortOptions = [
    "Relevance",
    "Price: Low To High",
    "Price: High To Low",
    "Top Rated"
];


const ProductGrid = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [activeCategory, setActiveCategory] = useState('ALL');
    const [sortOption, setSortOption] = useState('Relevance');
    const [searchQuery, setSearchQuery] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [viewMode, setViewMode] = useState('grid');
    const [currentPage, setCurrentPage] = useState(1);
    const { addToCart, toggleWishlist, isInWishlist } = useShop();
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const dropdownRef = useClickOutside(() => setIsDropdownOpen(false));
    const itemPerPage=8;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products');
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const categories = [
        {id: 'ALL', label: 'ALL', icon: null},
        {id: 'MEN', label: 'MEN', icon: <User size={14} className="mr-1.5"/>},
        {id: 'WOMEN', label: 'WOMEN', icon: <User size={14} className="mr-1.5"/>},
        {id: 'KIDS', label: 'KIDS', icon: <Baby size={14} className="mr-1.5"/>},
        {id: 'ETHNIC', label: 'ETHNIC', icon: <Sparkles size={14} className="mr-1.5"/>},
        {id: 'WESTERN', label: 'WESTERN', icon: <Crown size={14} className="mr-1.5"/>}
    ];

    useEffect(() => {
        setCurrentPage(1);
    }, [activeCategory, searchQuery, sortOption]);

    let filterProducts = products.filter(product => {
        let matchCategory = false;

        if(activeCategory === 'ALL') matchCategory=true;
        else if(activeCategory === 'MEN') matchCategory= product.category === 'men';
        else if(activeCategory === 'WOMEN') matchCategory= product.category === 'women';
        else if(activeCategory === 'KIDS') matchCategory= product.category === 'kids';
        else if(activeCategory === 'ETHNIC') matchCategory= product.ethnic === true;
        else if(activeCategory === 'WESTERN') matchCategory= product.category === true;

        const matchSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.brand.toLowerCase().includes(searchQuery.toLowerCase())

        return matchCategory && matchSearch;
    });

    if(sortOption === "Price: Low To High"){
        filterProducts.sort((a,b) => a.price - b.price);
    }
    else if(sortOption === "Price: High To Low"){
        filterProducts.sort((a,b) => b.price - a.price);
    }
    else if(sortOption === "Top Rated"){
        filterProducts.sort((a,b) => (b.rating - a.rating) || (b.reviews - a.reviews));
    }

    const totalPages = Math.ceil(filterProducts.length / itemPerPage) || 1;

    const paginatedProducts = filterProducts.slice(
        (currentPage - 1) * itemPerPage,
        currentPage * itemPerPage
    );

    const handleAction = (action, product) => {
        if (!isAuthenticated) {
            navigate('/login');
        } else {
            action(product);
        }
    }

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[40vh]">
                <div className="w-10 h-10 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mb-4"></div>
                <p className="text-gray-500 font-bold">Loading products...</p>
            </div>
        );
    }

    return(
        <section className="w-full py-12 px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
            <div className="flex flex-col items-start mb-8">
                <p className="text-orange-500 font-semibold text-xs tracking-wider mb-2 flex items-center gap-3">
                    <span className="w-10 h-[2px] bg-orange-500"></span>
                    OUR COLLECTION
                </p>
                <h2 className="text-[28px] md:text-5xl font-bold text-[#1a1a1a] tracking-tight mb-2">
                    Big Saving <span className="text-orange-500 italic">Men's Collection</span>
                </h2>
                <p className="text-sm text-gray-400 font-[400]">Handpicked garments • Fresh Fabrics • Every Season</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-5 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-3 relative">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`flex items-center px-4 py-2 rounded-full text-xs text-gray-400 font-semibold tracking-wide transition-all border ${
                                activeCategory === cat.id
                                    ? "bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/20"
                                    : "bg-white text-gray-500 border-gray-200 hover:border-orange-500 hover:bg-orange-100 hover:text-orange-500"
                            }`}
                        >
                            {cat.icon}
                            {cat.label}
                        </button>
                    ))}

                    <div ref={dropdownRef} className="relative ml-2">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className={`flex items-center px-4 py-2 rounded-full border text-xs font-semibold tracking-wide transition-all ${
                                isDropdownOpen
                                    ?"border-orange-500 ring-1 ring-orange-500 text-gray-800"
                                    :"bg-white text-gray-600 border-gray-200"
                            }`}
                        >
                            {sortOption} <ChevronDown size={14} className="ml-5"/>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute top-full  mt-2 w-37 bg-white border border-gray-200 shadow-lg rounded-lg z-30 py-1 overflow-hidden">
                                {sortOptions.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => {
                                        setSortOption(option);
                                        setIsDropdownOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                                            option === sortOption
                                                ?"bg-blue-600 text-white"
                                                :"text-gray-700 hover:bg-gray-100"
                                        }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-4 w-full lg:w-auto">
                    <div className="relative flex-grow lg:flex-grow-0">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search size={16} className="text-gray-400"/>
                        </div>
                        <input 
                            type="text" 
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full lg:w-55 pl-10 pr-4 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-[14px] transition-colors ${
                                viewMode === 'grid'
                                    ?"bg-orange-500 text-white shadow-sm"
                                    :"bg-white text-gray-400 border border-gray-200 hover:text-orange-500 hover:border-orange-500"
                            }`}
                        >
                            <Grid size={18}/>
                        </button>

                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-[14px] transition-colors ${
                                viewMode === 'list'
                                    ?"bg-orange-500 text-white shadow-sm"
                                    :"bg-white text-gray-400 border border-gray-200 hover:text-orange-500 hover:border-orange-500"
                            }`}
                        >
                            <List size={18}/>
                        </button>
                        <span className="text-xs font-semibold text-gray-500 ml-2 whitespace-nowrap">
                            <span className="text-orange-500 font-bold">{filterProducts.length}</span> items
                        </span>
                    </div>
                </div>
            </div>

            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1'}`}>
                {paginatedProducts.length > 0 ? (
                    paginatedProducts.map((product) => (
                    <div 
                    key={product._id} 
                    className={`bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 overflow-hidden group hover:shadow-lg hover:border-orange-500 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : 'flex flex-col'}`}
                    >

                    <Link 
                        to={`/product/${product._id}`} 
                        className={`relative bg-[#f4f2ee] flex items-center justify-center overflow-hidden ${viewMode === 'list' ? 'w-full md:w-[260px] h-[265px] shrink-0' : 'aspect-square p-4'} cursor-pointer block`}
                    >
                        <div className={`absolute top-4 left-0 ${product.badgeColor} text-white text-[10px] font-black tracking-wider px-3 py-1.5 z-10 shadow-sm`} style={{ clipPath: 'polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%)' }}>
                            {product.badgeText}
                        </div>

                        <div className="absolute top-4 right-4 bg-white border border-orange-200 text-orange-500 text-[10px] font-bold px-2.5 py-1 rounded-full z-10 shadow-sm">
                            {product.discount}
                        </div>

                        <button 
                            onClick={(e) => { e.preventDefault(); handleAction(toggleWishlist, product); }}
                            className="absolute right-4 bottom-[4.5rem] bg-white p-2 rounded-full shadow-md text-gray-400 hover:text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 translate-y-2 group-hover:translate-y-0"
                        >
                            <Heart size={16} strokeWidth={2.5} className={isInWishlist(product.id) ? "fill-current" : ""}/>
                        </button>

                        <img 
                            src={product.image} 
                            alt={product.title} 
                            className={`w-full h-full object-contain transition-transform duration-500 mix-blend-multiply group-hover:scale-105 ${viewMode === 'list' ? 'p-6 aspect-[3/4]' : ''}`}
                        />
                    </Link>

                    <div className={`p-4 flex flex-col flex-grow bg-white ${viewMode === 'list' ? 'md:p-6' : ''}`}>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        {product.brand}
                        </span>

                        <Link 
                            to={`/product/${product.id}`}
                            className={`${viewMode === 'list' ? 'text-lg' : 'text-sm'} font-bold text-gray-900 leading-tight mb-3 line-clamp-2 hover:text-orange-500 transition-colors block`}
                        >
                            {product.title}
                        </Link>
                        
                        <div className="inline-flex items-center self-start px-2 py-1 bg-orange-50 rounded text-[9px] font-semibold text-gray-600 border border-orange-100 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-1.5"></span>
                        {product.material}
                        </div>

                        <div className="flex items-center mb-4">
                        <div className="flex text-orange-400">
                            {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className={i < product.rating ? "fill-current" : "text-gray-300"} />
                            ))}
                        </div>
                        <span className="text-[11px] text-gray-400 font-medium ml-2">({product.reviews})</span>
                        </div>

                        {viewMode === 'grid' && <div className="w-full border-t border-dashed border-gray-200 mb-4"></div>}

                        <div className="flex items-baseline mb-5 space-x-3 w-full">
                        <span className={`${viewMode === 'list' ? 'text-xl' : 'text-lg'} font-extrabold text-orange-500`}>
                            ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        <span className={`${viewMode === 'list' ? 'text-xs' : 'text-[11px]'} font-medium text-gray-400 line-through`}>
                            ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                        <span className={`${viewMode === 'list' ? 'text-xs' : 'text-[10px]'} font-bold text-green-500 ml-auto`}>
                            Save ₹{product.savings.toLocaleString('en-IN')}
                        </span>
                        </div>

                        <button
                            onClick={() => handleAction(addToCart, product)}
                            className={`mt-auto bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-3.5 rounded-xl flex items-center justify-center transition-colors shadow-sm w-full`}
                        >
                            <ShoppingBag size={14} strokeWidth={2.5} className="mr-2" />
                            ADD TO CART
                        </button>
                    </div>
                    </div>
                ))
                ) : (
                <div className="col-span-full py-12 text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Search size={24} className="text-gray-400" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">No products found</h3>
                    <p className="text-gray-500 text-sm">Try adjusting your filters or search criteria.</p>
                </div>
                )}
            </div>

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
        </section>
    )
}

export default ProductGrid;