import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, ChevronLeft, Minus, Plus, Trash2, Heart, ArrowRight, Package, Sparkles, Star, Truck, ShieldCheck, RefreshCcw } from 'lucide-react';
import Navbar from '../components/Navbar';
import { useShop } from '../context/ShopContext';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, clearCart, toggleWishlist, isInWishlist } = useShop();
    const navigate = useNavigate();

    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const gst = Math.round(subtotal * 0.05);
    const total = subtotal + gst;

    return (
        <div className="min-h-screen flex flex-col bg-[#fafafa] font-sans">
            <Navbar />

            <main className="flex-grow w-full py-8 px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
                
                {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16">
                        <div className="w-24 h-24 border-2 border-dashed border-orange-200 bg-orange-50/50 rounded-3xl flex items-center justify-center mb-8">
                            <ShoppingBag size={32} className="text-orange-400" />
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="w-12 h-[2px] bg-orange-500"></span>
                            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.2em]">Empty Bag</span>
                            <span className="w-12 h-[2px] bg-orange-500"></span>
                        </div>
                        <h2 className="text-3xl font-black text-gray-900 mb-2">Your bag is empty</h2>
                        <p className="text-sm text-gray-500 mb-10">Browse our collection and add items you love!</p>
                        
                        <div className="flex flex-col gap-3 w-full max-w-xs">
                            <Link to="/shop" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 transition-colors">
                                <ShoppingBag size={18} /> BROWSE SHOP <ArrowRight size={18} />
                            </Link>
                            <Link to="/" className="w-full bg-white border border-gray-200 hover:border-orange-500 text-gray-700 hover:text-orange-500 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors">
                                GO HOME
                            </Link>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="mb-8">
                            <p className="text-orange-500 font-bold text-[10px] tracking-widest uppercase flex items-center gap-2 mb-2">
                                <span className="w-6 h-[2px] bg-orange-500"></span> CHECKOUT
                            </p>
                            <h1 className="text-4xl font-black text-gray-900 flex items-center gap-3 tracking-tight">
                                Shopping <span className="text-orange-500 font-medium italic">Cart</span>
                                <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold ml-2 shadow-sm">{cart.length} Items</span>
                            </h1>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8 items-start">

                            <div className="flex-1 w-full">
                                <div className="grid grid-cols-12 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">
                                    <div className="col-span-6">Product</div>
                                    <div className="col-span-3 text-center">Quantity</div>
                                    <div className="col-span-3 text-center pl-8">Price</div>
                                </div>

                                <div className="space-y-4">
                                    {cart.map((item) => (
                                        <div key={item.id} className="bg-[#fcfbf9] border border-gray-200/60 rounded-2xl p-4 flex items-center gap-4 relative shadow-sm hover:shadow-md transition-shadow">

                                            <div className="w-24 h-24 bg-[#e8e6e1] rounded-xl overflow-hidden shrink-0 p-2 shadow-inner">
                                                <img src={item.image} alt={item.title} className="w-full h-full object-contain mix-blend-multiply" />
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <span className="text-[9px] font-bold text-orange-500 uppercase tracking-widest block mb-1">{item.category} • {item.brand}</span>
                                                <h3 className="text-sm font-bold text-gray-900 mb-2 truncate">{item.title}</h3>
                                                <div className="flex gap-2 mb-2">
                                                    <span className="bg-orange-50 text-orange-600 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-orange-100">Size: M</span>
                                                    <span className="bg-white text-gray-500 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-gray-200">{item.material || 'Cotton'}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <div className="flex text-orange-400">
                                                        <Star size={10} className="fill-current" />
                                                        <Star size={10} className="fill-current" />
                                                        <Star size={10} className="fill-current" />
                                                        <Star size={10} className="fill-current" />
                                                        <Star size={10} className="text-gray-300" />
                                                    </div>
                                                    <span className="text-[10px] text-gray-400 font-medium">({item.reviews || '128'})</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-col items-center justify-center w-28">
                                                <div className="flex items-center border border-gray-200 rounded-full bg-white shadow-sm mb-2">
                                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-orange-500"><Minus size={14}/></button>
                                                    <span className="w-8 text-center text-sm font-bold text-gray-900">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-orange-500"><Plus size={14}/></button>
                                                </div>
                                                <span className="text-[9px] text-gray-400 font-medium tracking-wide">Subtotal: <span className="text-orange-500 font-bold">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span></span>
                                            </div>

                                            <div className="flex flex-col items-center justify-center w-28">
                                                <span className="text-lg font-black text-gray-900">₹{item.price.toLocaleString('en-IN')}</span>
                                                <span className="text-[11px] text-gray-400 line-through mb-1">₹{item.originalPrice.toLocaleString('en-IN')}</span>
                                                <span className="text-[10px] font-bold text-green-500">{item.discount}</span>
                                            </div>

                                            <div className="flex flex-col gap-2 ml-2 pl-4 border-l border-gray-100">
                                                <button onClick={() => removeFromCart(item.id)} className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 transition-colors shadow-sm"><Trash2 size={14}/></button>
                                                <button onClick={() => toggleWishlist(item)} className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors shadow-sm ${isInWishlist(item.id) ? 'bg-orange-50 border-orange-200 text-orange-500' : 'bg-white border-gray-200 text-gray-400 hover:text-orange-500 hover:border-orange-200'}`}>
                                                    <Heart size={14} className={isInWishlist(item.id) ? "fill-current" : ""} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 flex justify-between items-center border-t border-gray-200 pt-6 px-2">
                                    <button onClick={clearCart} className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-red-500 transition-colors">
                                        <Trash2 size={16} /> Clear all items
                                    </button>
                                    <button onClick={() => navigate('/shop')} className="flex items-center gap-2 text-xs font-bold text-orange-500 hover:underline">
                                        <ChevronLeft size={16} /> Continue shopping
                                    </button>
                                </div>
                            </div>

                            <div className="w-full lg:w-[340px] bg-[#f9f8f4] rounded-3xl p-6 shadow-sm border border-gray-200 shrink-0 sticky top-4">
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="w-4 h-[2px] bg-orange-500"></span>
                                    <h3 className="text-base font-bold text-gray-900">Order Summary</h3>
                                </div>

                                <div className="mb-6">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1 mb-2">
                                        <Package size={12} /> Coupon Code
                                    </label>
                                    <div className="flex gap-2">
                                        <input type="text" placeholder="SAVE10" className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-orange-500 font-bold uppercase placeholder-gray-300 shadow-sm" />
                                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 rounded-xl text-sm font-bold transition-colors shadow-sm">Apply</button>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-6 text-sm">
                                    <div className="flex justify-between text-gray-600 font-medium">
                                        <span>Subtotal ({cart.length} items)</span>
                                        <span className="font-bold text-gray-900">₹{subtotal.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600 font-medium">
                                        <span>Shipping</span>
                                        <span className="font-bold text-green-500 flex items-center gap-1">FREE <Sparkles size={12}/></span>
                                    </div>
                                    <div className="flex justify-between text-gray-600 border-b border-gray-200 pb-4 font-medium">
                                        <span>GST (5%)</span>
                                        <span className="font-bold text-gray-900">₹{gst.toLocaleString('en-IN')}</span>
                                    </div>
                                    
                                    <div className="flex justify-between items-end pt-2">
                                        <span className="text-xl font-black text-gray-900">Total</span>
                                        <div className="text-right">
                                            <span className="text-2xl font-black text-orange-500 block">₹{total.toLocaleString('en-IN')}</span>
                                            <span className="text-[9px] text-gray-400 font-medium">Incl. all taxes</span>
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 shadow-md shadow-orange-500/20 transition-all hover:-translate-y-0.5 mb-3">
                                    <Package size={18} /> PROCEED TO CHECKOUT <ArrowRight size={18} />
                                </button>
                                
                                <button 
                                    className="w-full bg-transparent border border-gray-300 hover:border-orange-500 text-gray-600 hover:text-orange-500 font-bold py-3 rounded-xl flex justify-center items-center gap-2 transition-colors text-xs shadow-sm"
                                    onClick={() => navigate('/wishlist')}
                                >
                                    <Heart size={14} /> Go to Wishlist
                                </button>

                                <div className="mt-8 space-y-3 pt-6 border-t border-gray-200/60">
                                    <div className="flex items-center gap-3 text-xs font-medium text-gray-500">
                                        <Truck size={16} className="text-orange-500" /> Free delivery on orders above ₹999
                                    </div>
                                    <div className="flex items-center gap-3 text-xs font-medium text-gray-500">
                                        <ShieldCheck size={16} className="text-orange-500" /> 100% secure & encrypted payments
                                    </div>
                                    <div className="flex items-center gap-3 text-xs font-medium text-gray-500">
                                        <RefreshCcw size={16} className="text-orange-500" /> Easy 30-day returns & exchanges
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </main>
        </div>
    );
};

export default Cart;