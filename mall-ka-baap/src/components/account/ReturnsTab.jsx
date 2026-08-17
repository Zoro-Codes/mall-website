import React from 'react';
import { RefreshCcw, Check } from 'lucide-react';

const ReturnsTab = () => (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-6">
            <span className="w-6 h-[2px] bg-orange-500"></span>
            <span className="text-orange-500 text-[10px] font-bold tracking-widest uppercase">Account</span>
        </div>
        <h2 className="text-2xl font-black text-gray-900 mb-6">My Returns</h2>

        <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 flex items-center gap-3 mb-6">
            <RefreshCcw size={16} className="text-purple-500" />
            <p className="text-sm text-purple-900"><span className="font-bold">Return Policy:</span> Returns accepted within 7 days of delivery. Refunds in 5-7 business days.</p>
        </div>

        <div className="space-y-4">
            <div className="border border-gray-100 rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4 relative group cursor-pointer hover:border-orange-500">
                <div className="w-full sm:w-24 h-24 bg-[#f4f2ee] rounded-xl overflow-hidden shrink-0">
                    <img src="https://res.cloudinary.com/dquki4xol/image/upload/v1773295573/4_2ab5d4e8-2cc9-4134-83a2-e8a061395274_w6xpfq.webp" className="w-full h-full object-cover mix-blend-multiply" alt="Suit" />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                        <span className="text-[9px] font-bold text-orange-500 uppercase tracking-widest">MEN • SUITS</span>
                        <span className="text-[10px] font-bold text-gray-400">ORD-006 • 22 May 2025</span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Premium Wool Blazer</h4>
                    <span className="text-[10px] text-gray-500 block mb-2">Size: M • Navy</span>
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-black text-orange-500">₹3,499</span>
                        <span className="bg-green-50 text-green-600 text-[9px] font-bold px-2 py-0.5 rounded flex items-center gap-1"><Check size={10}/> Refunded</span>
                    </div>
                </div>
                <span className="absolute top-4 right-4 text-[10px] font-bold text-purple-500 uppercase tracking-wider flex items-center gap-1"><RefreshCcw size={12}/> Returned</span>
            </div>
        </div>
    </div>
);

export default ReturnsTab;