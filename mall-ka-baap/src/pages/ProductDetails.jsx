import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Star, Heart, Share2, Truck, RefreshCcw, ShieldCheck, ShoppingBag, Minus, Plus, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useAuth } from '../context/AuthContext';

const products = [
    { id: 1, badgeText: "NEW ARRIVAL", badgeColor: "bg-green-600", discount: "-32%", image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776077841/Square_Neck_Textured_Waist-Cinching_Maroon_Dress_vheg55.webp", brand: "AURELIA", title: "Cotton Blend Co-ord Set", material: "100% Cotton", rating: 4, reviews: 128, price: 1299, originalPrice: 1899, savings: 600, category: "women", sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], colors: ['#8B4513', '#DC143C', '#191970', '#000000'] },
    { id: 2, badgeText: "SALE", badgeColor: "bg-orange-500", discount: "-33%", image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776078520/images_6_vfn6rc.jpg", brand: "BIBA", title: "Embroidered Frock", material: "Georgette", rating: 4, reviews: 75, price: 2150, originalPrice: 3200, savings: 1050, category: "women", sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['#FF69B4', '#4682B4'] },
    { id: 3, badgeText: "BESTSELLER", badgeColor: "bg-black", discount: "-31%", image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776077580/images_4_rs50b4.jpg", brand: "FABINDIA", title: "Slim Fit Stretch Jeans", material: "Cotton Blend", rating: 4, reviews: 89, price: 899, originalPrice: 1299, savings: 400, category: "men", sizes: ['28', '30', '32', '34', '36'], colors: ['#1E90FF', '#000080'] },
    { id: 4, badgeText: "TRENDING", badgeColor: "bg-[#e84c3d]", discount: "-32%", image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776077580/images_5_f8olir.jpg", brand: "MANYAVAR", title: "Tropical Rayon Camp Shirt", material: "Rayon", rating: 4, reviews: 214, price: 749, originalPrice: 1100, savings: 351, category: "men", sizes: ['S', 'M', 'L', 'XL'], colors: ['#000000', '#FFFFFF'] },
    { id: 6, badgeText: "SALE", badgeColor: "bg-orange-500", discount: "-28%", image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776078520/k2ujc_512_yf0fzu.webp", brand: "W FOR WOMAN", title: "Palazzo Sharara Set", material: "Silk Blend", rating: 4, reviews: 88, price: 1799, originalPrice: 2499, savings: 700, category: "women", sizes: ['XS', 'S', 'M', 'L'], colors: ['#FF1493', '#800080'] },
];

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart, updateQuantity, toggleWishlist, isInWishlist, cart } = useShop();
    const { isAuthenticated } = useAuth();

    const product = products.find(p => p.id === parseInt(id));

    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(product?.sizes[1] || '');
    const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');

    useEffect(() => {
        window.scrollTo(0, 0);
        setQuantity(1);
        setSelectedSize(product?.sizes[1] || '');
        setSelectedColor(product?.colors?.[0] || '');
    }, [id, product]);

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center text-2xl font-bold">Product not found</div>;
    }

    const handleAction = (actionType) => {
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }

        if (actionType === 'cart' || actionType === 'buy') {
            const existingItem = cart.find(item => item.id === product.id);
            if (existingItem) {
                updateQuantity(product.id, existingItem.quantity + quantity);
            } else {
                addToCart(product);
                if (quantity > 1) {
                    setTimeout(() => updateQuantity(product.id, quantity), 50);
                }
            }
            if (actionType === 'buy') navigate('/cart');
        }

        if (actionType === 'wishlist') {
            toggleWishlist(product);
        }
    };

    const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

    return (
        <div className="w-full bg-[#fafafa] relative font-sans">
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-6 relative z-10">

                <div className="flex items-center text-xs font-bold text-gray-400 mb-8 gap-2">
                    <Link to="/" className="hover:text-orange-500">Home</Link>
                    <ChevronRight size={12} />
                    <Link to="/shop" className="hover:text-orange-500 capitalize">{product.category}</Link>
                    <ChevronRight size={12} />
                    <span className="text-gray-900">{product.title}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    
                    <div className="flex gap-4 h-[600px]">
                        <div className="flex flex-col gap-4 w-20 shrink-0">
                            <button className="w-full aspect-square bg-[#f4f2ee] rounded-xl border-2 border-orange-500 p-2 overflow-hidden flex items-center justify-center">
                                <img src={product.image} alt="thumb" className="w-full h-full object-contain mix-blend-multiply" />
                            </button>
                            <button className="w-full aspect-square bg-[#f4f2ee] rounded-xl border border-gray-200 p-2 overflow-hidden flex items-center justify-center hover:border-orange-500 transition-colors">
                                <img src={product.image} alt="thumb" className="w-full h-full object-contain mix-blend-multiply opacity-50" />
                            </button>
                        </div>

                        <div className="flex-1 bg-[#f4f2ee] rounded-3xl relative p-8 flex items-center justify-center">
                            <div 
                                className={`absolute top-6 left-0 ${product.badgeColor} text-white text-xs font-black tracking-wider px-4 py-2 z-10`}
                                style={{ clipPath: 'polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%)' }}
                            >
                                {product.badgeText}
                            </div>
                            <div className="absolute top-6 right-6 bg-white text-orange-500 text-[11px] font-bold px-3 py-1.5 rounded-full z-10 shadow-sm border border-orange-100">
                                {product.discount}
                            </div>
                            <button 
                                onClick={() => handleAction('wishlist')}
                                className={`absolute top-16 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm z-10 transition-colors ${isInWishlist(product.id) ? 'text-orange-500' : 'text-gray-400 hover:text-orange-500'}`}
                            >
                                <Heart size={18} className={isInWishlist(product.id) ? "fill-current" : ""} />
                            </button>
                            <img src={product.image} alt={product.title} className="w-full h-full object-contain mix-blend-multiply" />
                        </div>
                    </div>

                    <div className="flex flex-col py-4">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2">
                            <span className="w-6 h-[2px] bg-orange-500"></span>
                            <span className="text-orange-500">{product.category}</span>
                            <span className="text-gray-300">•</span>
                            <span className="text-orange-500">{product.brand}</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">{product.title}</h1>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex text-orange-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} className={i < product.rating ? "fill-current" : "text-gray-300"} />
                                ))}
                            </div>
                            <span className="text-xs text-gray-400 font-medium">({product.reviews} Reviews)</span>
                            <span className="text-gray-300">|</span>
                            <span className="text-xs font-bold text-green-500 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> In Stock</span>
                        </div>

                        <div className="flex items-baseline gap-3 mb-6 border-b border-dashed border-gray-200 pb-6">
                            <span className="text-4xl font-black text-orange-500">₹{product.price.toLocaleString('en-IN')}</span>
                            <span className="text-sm font-medium text-gray-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Save ₹{product.savings.toLocaleString('en-IN')}</span>
                        </div>

                        <p className="text-sm text-gray-500 leading-relaxed mb-6">
                            Comfortable everyday garment crafted from breathable {product.material.toLowerCase()} fabric. Perfect for casual outings, brunches, or relaxed days at home.
                        </p>

                        <div className="mb-8">
                            <span className="inline-flex items-center px-3 py-1.5 bg-orange-50 border border-orange-100 rounded text-[10px] font-bold text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span> {product.material}
                            </span>
                        </div>

                        {product.colors && (
                            <div className="mb-6">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">Colour <span className="text-orange-500 font-bold capitalize">— {selectedColor || 'Select'}</span></span>
                                <div className="flex gap-3">
                                    {product.colors.map((color, index) => (
                                        <button 
                                            key={index} 
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === color ? 'border-orange-500 scale-110' : 'border-transparent hover:scale-110'}`}
                                            style={{ backgroundColor: color }}
                                        ></button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="mb-8">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-3">Size</span>
                            <div className="flex flex-wrap gap-3">
                                {product.sizes.map((size) => (
                                    <button 
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`min-w-[40px] h-10 px-4 rounded-full text-xs font-bold transition-all border ${
                                            selectedSize === size 
                                            ? 'bg-orange-500 border-orange-500 text-white shadow-md' 
                                            : 'bg-white border-gray-200 text-gray-600 hover:border-orange-500'
                                        }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            <div className="flex items-center border border-gray-200 rounded-full bg-white h-12 px-2">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-orange-500"><Minus size={14}/></button>
                                <span className="w-8 text-center text-sm font-bold text-gray-900">{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-orange-500"><Plus size={14}/></button>
                            </div>

                            <button 
                                onClick={() => handleAction('buy')}
                                className="h-12 px-8 bg-black hover:bg-gray-800 text-white text-xs font-bold rounded-full flex items-center gap-2 transition-colors shadow-md"
                            >
                                <Sparkles size={14} className="fill-current" /> BUY NOW
                            </button>

                            <button 
                                onClick={() => handleAction('cart')}
                                className="h-12 px-8 bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-50 hover:text-orange-600 text-xs font-bold rounded-full flex items-center gap-2 transition-colors shadow-sm"
                            >
                                <ShoppingBag size={14} strokeWidth={2.5} /> ADD TO BAG
                            </button>

                            <button 
                                onClick={() => handleAction('wishlist')}
                                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors shadow-sm ${isInWishlist(product.id) ? 'bg-orange-50 border-orange-200 text-orange-500' : 'bg-white border-gray-200 text-gray-400 hover:text-orange-500 hover:border-orange-200'}`}
                            >
                                <Heart size={18} className={isInWishlist(product.id) ? "fill-current" : ""} />
                            </button>
                        </div>

                        <div className="mb-4">
                            <button className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-orange-500 transition-colors shadow-sm">
                                <Share2 size={14} />
                            </button>
                        </div>

                    </div>
                </div>

                <div className="w-full max-w-4xl mx-auto mb-20">
                    <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow">
                        
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0"><Truck size={20} /></div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-900 mb-0.5">Free Delivery</h4>
                                <p className="text-[11px] text-gray-400 underline cursor-pointer">Enter postal code</p>
                            </div>
                        </div>

                        <div className="hidden md:block w-px h-12 bg-gray-100"></div>
                        <div className="w-full md:hidden border-t border-gray-100"></div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-500 shrink-0"><RefreshCcw size={20} /></div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-900 mb-0.5">Return Delivery</h4>
                                <p className="text-[11px] text-gray-400">Free 30 Days Returns</p>
                            </div>
                        </div>

                        <div className="hidden md:block w-px h-12 bg-gray-100"></div>
                        <div className="w-full md:hidden border-t border-gray-100"></div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-500 shrink-0"><ShieldCheck size={20} /></div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-900 mb-0.5">Secure Payment</h4>
                                <p className="text-[11px] text-gray-400">100% secure transactions</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="pt-16 border-t border-gray-200/60">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-1">More Like This</span>
                            <h2 className="text-3xl font-black text-gray-900 border-l-4 border-orange-500 pl-3">Related Items</h2>
                        </div>
                        <Link to="/shop" className="text-xs font-bold text-orange-500 hover:text-orange-600 flex items-center gap-1">View All <ChevronRight size={14}/></Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedProducts.map(item => (
                            <div key={item.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm transition-all overflow-hidden group hover:border-orange-500 hover:shadow-lg">
                                <Link to={`/product/${item.id}`} className="block relative bg-[#f4f2ee] aspect-square p-4 flex items-center justify-center cursor-pointer">
                                    <div className={`absolute top-4 left-0 ${item.badgeColor} text-white text-[10px] font-black tracking-wider px-3 py-1.5 z-10 shadow-sm`} style={{ clipPath: 'polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%)' }}>{item.badgeText}</div>
                                    <div className="absolute top-4 right-4 bg-white border border-orange-200 text-orange-500 text-[10px] font-bold px-2.5 py-1 rounded-full z-10 shadow-sm">{item.discount}</div>
                                    <img src={item.image} alt={item.title} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
                                </Link>
                                <div className="p-5 flex flex-col bg-white h-full">
                                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">{item.brand}</span>
                                    <Link to={`/product/${item.id}`} className="text-sm font-bold text-gray-900 leading-tight mb-3 line-clamp-1 hover:text-orange-500 transition-colors block">{item.title}</Link>
                                    <div className="inline-flex items-center self-start px-2 py-1 bg-orange-50 rounded text-[9px] font-semibold text-gray-600 border border-orange-100 mb-3"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-1.5"></span>{item.material}</div>
                                    <div className="flex items-baseline mb-4 space-x-2">
                                        <span className="text-lg font-black text-orange-500">₹{item.price.toLocaleString('en-IN')}</span>
                                        <span className="text-[11px] font-medium text-gray-400 line-through">₹{item.originalPrice.toLocaleString('en-IN')}</span>
                                        <span className="text-[10px] font-bold text-green-500 ml-auto">Save ₹{item.savings.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex items-center mb-5">
                                        <div className="flex text-orange-400">{[...Array(5)].map((_, i) => (<Star key={i} size={12} className={i < item.rating ? "fill-current" : "text-gray-300"} />))}</div>
                                        <span className="text-[10px] text-gray-400 font-medium ml-2">({item.reviews})</span>
                                    </div>
                                    <button 
                                        onClick={() => {
                                            if (!isAuthenticated) navigate('/login');
                                            else addToCart(item);
                                        }}
                                        className="mt-auto bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-3.5 rounded-xl flex items-center justify-center transition-colors w-full shadow-sm"
                                    >
                                        <ShoppingBag size={14} className="mr-2" strokeWidth={2.5} /> ADD TO BAG
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;