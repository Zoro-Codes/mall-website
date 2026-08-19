import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Package, Trash2, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import { useShop } from '../context/ShopContext';

const Wishlist = () => {
    const { wishlist, moveToCart, toggleWishlist } = useShop();

    const moveAllToBag = () => {
        wishlist.forEach(item => moveToCart(item));
    };

    return (
        <div className="min-h-screen flex flex-col bg-white font-sans">
            <Navbar />

            <main className="flex-grow w-full py-8 px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
                <div className="flex justify-between items-end mb-10">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Wishlist ({wishlist.length})
                    </h1>
                    {wishlist.length > 0 && (
                        <button 
                            onClick={moveAllToBag}
                            className="px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors"
                        >
                            Move All To Bag
                        </button>
                    )}
                </div>

                {wishlist.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Heart size={80} strokeWidth={1} className="text-gray-300 mb-6" />
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
                        <p className="text-sm text-gray-500 mb-8">Start adding products you love!</p>
                        <Link to="/shop" className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold transition-colors shadow-sm">
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {wishlist.map((item) => (
                            <div key={item.id} className="border border-gray-100 rounded-2xl overflow-hidden group">
                                <div className="h-64 bg-[#f4f2ee] relative flex items-center justify-center p-4">
                                    <button 
                                        onClick={() => toggleWishlist(item)}
                                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 text-orange-500 flex items-center justify-center shadow-sm hover:bg-white transition-colors z-10"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                    <img src={item.image} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" alt={item.title} />
                                </div>
                                <div className="p-5">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">{item.brand}</span>
                                    <h4 className="text-sm font-bold text-gray-900 mb-3 truncate">{item.title}</h4>
                                    <div className="flex items-baseline gap-2 mb-5">
                                        <span className="text-lg font-black text-orange-500">₹{item.price.toLocaleString('en-IN')}</span>
                                        <span className="text-[11px] text-gray-400 line-through">₹{item.originalPrice.toLocaleString('en-IN')}</span>
                                    </div>
                                    <button 
                                        onClick={() => moveToCart(item)}
                                        className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-3 rounded-xl transition-colors flex justify-center items-center gap-2 shadow-sm"
                                    >
                                        <Package size={16} /> Move to Bag
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Wishlist;