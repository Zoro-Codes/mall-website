import React, { useState } from 'react';
import { User, MapPin, CreditCard, Package, RefreshCcw, XCircle, Heart, LogOut, Camera, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import ProfileTab from '../components/account/ProfileTab';
import AddressTab from '../components/account/AddressTab';
import PaymentTab from '../components/account/PaymentTab';
import OrdersTab from '../components/account/OrdersTab';
import ReturnsTab from '../components/account/ReturnsTab';
import CancellationsTab from '../components/account/CancellationsTab';
import SavedItemsTab from '../components/account/SavedItemsTab';

const UserAccount = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    const renderActiveTab = () => {
        switch(activeTab) {
            case 'profile': return <ProfileTab />;
            case 'address': return <AddressTab />;
            case 'payments': return <PaymentTab />;
            case 'orders': return <OrdersTab />;
            case 'returns': return <ReturnsTab />;
            case 'cancellations': return <CancellationsTab />;
            case 'saved': return <SavedItemsTab />;
            default: return <ProfileTab />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#fafafa]">
            <Navbar />

            <main className="flex-grow w-full py-12 px-4 sm:px-8 lg:px-12 font-sans relative">

                <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="max-w-[1200px] mx-auto relative z-10">

                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
                        <div className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest gap-2">
                            <span>Home</span> <ChevronRight size={12} /> <span className="text-gray-900">My Account</span>
                        </div>
                        <div className="text-sm text-gray-500">
                            Welcome, <span className="text-orange-500 font-bold">Uttam</span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-start gap-8">

                        <div className="w-full lg:w-72 shrink-0 flex flex-col gap-8">

                            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-6 text-white shadow-lg shadow-orange-500/20 relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                                
                                <div className="relative mb-4 inline-block">
                                    <div className="w-16 h-16 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-xl font-black">
                                        UG
                                    </div>
                                    <button className="absolute bottom-0 right-0 w-6 h-6 bg-white text-orange-500 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                                        <Camera size={12} />
                                    </button>
                                </div>
                                
                                <h3 className="text-lg font-bold mb-0.5">Uttam Gupta</h3>
                                <p className="text-xs font-medium text-orange-100 opacity-90">uttamgupta628@gmail.com</p>
                            </div>

                            <div className="flex flex-col">
                                
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 ml-4">Manage My Account</span>
                                <div className="flex flex-col gap-1 mb-6">
                                    <button onClick={() => setActiveTab('profile')} className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === 'profile' ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'}`}>
                                        <User size={16} /> My Profile
                                    </button>
                                    <button onClick={() => setActiveTab('address')} className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === 'address' ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'}`}>
                                        <MapPin size={16} /> Address Book
                                    </button>
                                    <button onClick={() => setActiveTab('payments')} className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === 'payments' ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'}`}>
                                        <CreditCard size={16} /> My Payment Options
                                    </button>
                                </div>

                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 ml-4">My Orders</span>
                                <div className="flex flex-col gap-1 mb-6">
                                    <button onClick={() => setActiveTab('orders')} className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === 'orders' ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'}`}>
                                        <span className="flex items-center gap-3"><Package size={16} /> My Orders</span>
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${activeTab === 'orders' ? 'bg-white/20' : 'bg-orange-50 text-orange-500'}`}>7</span>
                                    </button>
                                    <button onClick={() => setActiveTab('returns')} className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === 'returns' ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'}`}>
                                        <span className="flex items-center gap-3"><RefreshCcw size={16} /> My Returns</span>
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${activeTab === 'returns' ? 'bg-white/20' : 'bg-purple-50 text-purple-500'}`}>2</span>
                                    </button>
                                    <button onClick={() => setActiveTab('cancellations')} className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === 'cancellations' ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'}`}>
                                        <span className="flex items-center gap-3"><XCircle size={16} /> My Cancellations</span>
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${activeTab === 'cancellations' ? 'bg-white/20' : 'bg-red-50 text-red-500'}`}>2</span>
                                    </button>
                                </div>

                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 ml-4">My Wishlist</span>
                                <div className="flex flex-col gap-1 mb-8">
                                    <button onClick={() => setActiveTab('saved')} className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === 'saved' ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'}`}>
                                        <Heart size={16} /> Saved Items
                                    </button>
                                </div>

                                <div className="border-t border-gray-200 pt-4 mt-auto">
                                    <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-semibold text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors">
                                        <LogOut size={16} /> Logout
                                    </button>
                                </div>

                            </div>
                        </div>

                        <div className="flex-1">
                            {renderActiveTab()}
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default UserAccount;