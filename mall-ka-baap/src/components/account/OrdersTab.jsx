import React from 'react';
import { Check, Package, ChevronRight } from 'lucide-react';

const OrdersTab = () => (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-6">
            <span className="w-6 h-[2px] bg-orange-500"></span>
            <span className="text-orange-500 text-[10px] font-bold tracking-widest uppercase">Account</span>
        </div>
        <h2 className="text-2xl font-black text-gray-900 mb-6">My Orders</h2>

        <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-gray-100 pb-4">
            <button className="px-4 py-2 bg-orange-500 text-white rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-orange-500/20">ALL <span className="bg-white/20 px-1.5 rounded-full">7</span></button>
            <button className="px-4 py-2 bg-gray-50 text-gray-500 hover:bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 border border-gray-200">PROCESSING <span className="bg-gray-200 px-1.5 rounded-full">1</span></button>
            <button className="px-4 py-2 bg-gray-50 text-gray-500 hover:bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 border border-gray-200">SHIPPED <span className="bg-gray-200 px-1.5 rounded-full">1</span></button>
            <button className="px-4 py-2 bg-gray-50 text-gray-500 hover:bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 border border-gray-200">DELIVERED <span className="bg-gray-200 px-1.5 rounded-full">1</span></button>
            <button className="px-4 py-2 bg-gray-50 text-gray-500 hover:bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 border border-gray-200">RETURNED <span className="bg-gray-200 px-1.5 rounded-full">2</span></button>
            <button className="px-4 py-2 bg-gray-50 text-gray-500 hover:bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 border border-gray-200">CANCELLED <span className="bg-gray-200 px-1.5 rounded-full">2</span></button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-100 rounded-2xl overflow-hidden group cursor-pointer hover:border-orange-500 transition-colors">
                <div className="h-32 bg-[#f4f2ee] relative overflow-hidden flex items-center justify-center">
                    <div className="absolute top-2 left-2 bg-green-50 text-green-600 text-[9px] font-bold px-2 py-1 rounded flex items-center gap-1"><Check size={10}/> Delivered</div>
                    <img src="https://res.cloudinary.com/dquki4xol/image/upload/v1773295573/4_2ab5d4e8-2cc9-4134-83a2-e8a061395274_w6xpfq.webp" className="w-full h-full object-cover opacity-90 mix-blend-multiply" alt="Suit" />
                </div>
                <div className="p-4 relative">
                    <span className="text-[9px] font-bold text-orange-500 uppercase tracking-widest block mb-1">MEN • SUITS</span>
                    <h4 className="text-sm font-bold text-gray-900 mb-2">Premium Wool Blazer</h4>
                    <div className="flex gap-2 text-[10px] text-gray-500 mb-3">
                        <span className="bg-gray-100 px-2 py-0.5 rounded">Size: L</span>
                        <span className="bg-gray-100 px-2 py-0.5 rounded">Charcoal</span>
                        <span className="bg-gray-100 px-2 py-0.5 rounded">Qty: 1</span>
                    </div>
                    <div className="flex justify-between items-end">
                        <span className="text-lg font-black text-orange-500">₹3,499</span>
                        <span className="text-[9px] text-gray-400">ORD-001 • 12 Jun 2025</span>
                    </div>
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors"><ChevronRight size={16}/></button>
                </div>
            </div>

            <div className="border border-gray-100 rounded-2xl overflow-hidden group cursor-pointer hover:border-orange-500 transition-colors">
                <div className="h-32 bg-[#f4f2ee] relative overflow-hidden flex items-center justify-center">
                    <div className="absolute top-2 left-2 bg-blue-50 text-blue-600 text-[9px] font-bold px-2 py-1 rounded flex items-center gap-1"><Package size={10}/> Shipped</div>
                    <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-90 mix-blend-multiply" alt="Dress" />
                </div>
                <div className="p-4 relative">
                    <span className="text-[9px] font-bold text-orange-500 uppercase tracking-widest block mb-1">WOMEN • ETHNIC</span>
                    <h4 className="text-sm font-bold text-gray-900 mb-2">Embroidered Anarkali</h4>
                    <div className="flex gap-2 text-[10px] text-gray-500 mb-3">
                        <span className="bg-gray-100 px-2 py-0.5 rounded">Size: M</span>
                        <span className="bg-gray-100 px-2 py-0.5 rounded">Pink</span>
                        <span className="bg-gray-100 px-2 py-0.5 rounded">Qty: 1</span>
                    </div>
                    <div className="flex justify-between items-end">
                        <span className="text-lg font-black text-orange-500">₹2,150</span>
                        <span className="text-[9px] text-gray-400">ORD-002 • 18 Jun 2025</span>
                    </div>
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors"><ChevronRight size={16}/></button>
                </div>
            </div>
        </div>
    </div>
);

export default OrdersTab;