import React from 'react';
import { XCircle, Check } from 'lucide-react';

const CancellationsTab = () => (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-6">
            <span className="w-6 h-[2px] bg-orange-500"></span>
            <span className="text-orange-500 text-[10px] font-bold tracking-widest uppercase">Account</span>
        </div>
        <h2 className="text-2xl font-black text-gray-900 mb-6">My Cancellations</h2>

        <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex items-center gap-3 mb-6">
            <XCircle size={16} className="text-red-500" />
            <p className="text-sm text-red-900"><span className="font-bold">Cancellation Policy:</span> Orders cancelled before shipment. Refunds in 3-5 business days.</p>
        </div>

        <div className="space-y-4">
            <div className="border border-gray-100 rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4 relative group cursor-pointer hover:border-orange-500">
                <div className="w-full sm:w-24 h-24 bg-[#f4f2ee] rounded-xl overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover mix-blend-multiply" alt="Suit" />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                        <span className="text-[9px] font-bold text-orange-500 uppercase tracking-widest">WOMEN • ETHNIC</span>
                        <span className="text-[10px] font-bold text-gray-400">ORD-004 • 5 Jun 2025</span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Palazzo Sharara Set</h4>
                    <span className="text-[10px] text-gray-500 block mb-2">Size: S • Red</span>
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-black text-orange-500">₹1,799</span>
                        <span className="bg-green-50 text-green-600 text-[9px] font-bold px-2 py-0.5 rounded flex items-center gap-1"><Check size={10}/> Refunded</span>
                    </div>
                </div>
                <span className="absolute top-4 right-4 text-[10px] font-bold text-red-500 uppercase tracking-wider flex items-center gap-1"><XCircle size={12}/> Cancelled</span>
            </div>
        </div>
    </div>
);

export default CancellationsTab;