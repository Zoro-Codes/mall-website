import React from 'react';
import { MapPin, Edit2, Trash2, Check } from 'lucide-react';

const AddressTab = () => (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-6">
            <span className="w-6 h-[2px] bg-orange-500"></span>
            <span className="text-orange-500 text-[10px] font-bold tracking-widest uppercase">Account</span>
        </div>
        <h2 className="text-2xl font-black text-gray-900 mb-8">Address Book</h2>

        <div className="space-y-4">
            <div className="border border-orange-400 rounded-2xl p-6 relative">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0">
                        <MapPin size={18} />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-sm font-bold text-gray-900">Home</h3>
                            <span className="bg-orange-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Default</span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed mb-1">42, MG Road, Near Park Street<br/>Kolkata, West Bengal - 700001</p>
                        <p className="text-xs text-gray-400 font-medium mb-3">+91 98765 43210</p>
                        <div className="flex gap-4">
                            <button className="flex items-center gap-1 text-[10px] font-bold text-orange-500 uppercase tracking-wider hover:underline"><Edit2 size={12}/> Edit</button>
                            <button className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider hover:text-gray-600"><Trash2 size={12}/> Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 relative">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center shrink-0">
                        <MapPin size={18} />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-sm font-bold text-gray-900 mb-1">Office</h3>
                        <p className="text-xs text-gray-500 leading-relaxed mb-1">10, Salt Lake, Sector V<br/>Kolkata, West Bengal - 700091</p>
                        <p className="text-xs text-gray-400 font-medium mb-3">+91 91234 56789</p>
                        <div className="flex gap-4">
                            <button className="flex items-center gap-1 text-[10px] font-bold text-orange-500 uppercase tracking-wider hover:underline"><Edit2 size={12}/> Edit</button>
                            <button className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider hover:text-gray-600"><Check size={12}/> Set Default</button>
                            <button className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider hover:text-gray-600"><Trash2 size={12}/> Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            <button className="w-full border-2 border-dashed border-orange-200 hover:border-orange-500 bg-orange-50 hover:bg-orange-100 text-orange-500 rounded-2xl py-4 flex items-center justify-center gap-2 text-sm font-bold transition-all">
                + Add New Address
            </button>
        </div>
    </div>
);

export default AddressTab;