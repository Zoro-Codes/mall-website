import React from 'react';
import { Edit2, Trash2, Check } from 'lucide-react';

const PaymentTab = () => (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-6">
            <span className="w-6 h-[2px] bg-orange-500"></span>
            <span className="text-orange-500 text-[10px] font-bold tracking-widest uppercase">Account</span>
        </div>
        <h2 className="text-2xl font-black text-gray-900 mb-8">My Payment Options</h2>

        <div className="space-y-4">
            <div className="border border-orange-400 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-8 rounded bg-blue-600 text-white font-black italic text-xs flex items-center justify-center">VISA</div>
                    <div>
                        <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-sm font-bold text-gray-900">Visa Card</span>
                            <span className="bg-orange-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Default</span>
                        </div>
                        <span className="text-xs text-gray-500">•••• •••• •••• 4242 · Exp 08/27</span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-orange-500"><Edit2 size={14}/></button>
                    <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500"><Trash2 size={14}/></button>
                </div>
            </div>

            <div className="border border-gray-200 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-8 rounded bg-red-600 text-white font-bold text-xs flex items-center justify-center">MC</div>
                    <div>
                        <span className="text-sm font-bold text-gray-900 block mb-0.5">Mastercard</span>
                        <span className="text-xs text-gray-500">•••• •••• •••• 5353 · Exp 11/26</span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-orange-500"><Edit2 size={14}/></button>
                    <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-green-500"><Check size={14}/></button>
                    <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500"><Trash2 size={14}/></button>
                </div>
            </div>

            <div className="border border-gray-200 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-8 rounded bg-purple-600 text-white font-bold text-xs flex items-center justify-center">UPI</div>
                    <div>
                        <span className="text-sm font-bold text-gray-900 block mb-0.5">GPay UPI</span>
                        <span className="text-xs text-gray-500">uttam@oksbi</span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-orange-500"><Edit2 size={14}/></button>
                    <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-green-500"><Check size={14}/></button>
                    <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500"><Trash2 size={14}/></button>
                </div>
            </div>

            <button className="w-full border-2 border-dashed border-orange-200 hover:border-orange-500 bg-orange-50 hover:bg-orange-100 text-orange-500 rounded-2xl py-4 flex items-center justify-center gap-2 text-sm font-bold transition-all">
                + Add Payment Method
            </button>
        </div>
    </div>
);

export default PaymentTab;