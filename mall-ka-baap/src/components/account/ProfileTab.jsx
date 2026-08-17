import React from 'react';
import { Eye } from 'lucide-react';

const ProfileTab = () => (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-6">
            <span className="w-6 h-[2px] bg-orange-500"></span>
            <span className="text-orange-500 text-[10px] font-bold tracking-widest uppercase">Account</span>
        </div>
        <h2 className="text-2xl font-black text-gray-900 mb-8">Edit Your Profile</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">First Name</label>
                <input type="text" defaultValue="Uttam" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 text-gray-700" />
            </div>
            <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Last Name</label>
                <input type="text" defaultValue="Gupta" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 text-gray-700" />
            </div>
            <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Email</label>
                <input type="email" defaultValue="uttamgupta628@gmail.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 text-gray-700" />
            </div>
            <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Phone</label>
                <input type="tel" defaultValue="+91 98765 43210" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 text-gray-700" />
            </div>
            <div className="md:col-span-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Address</label>
                <input type="text" defaultValue="42, MG Road, Kolkata 700001" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 text-gray-700" />
            </div>
        </div>

        <div className="border-t border-dashed border-gray-200 my-8"></div>

        <div className="flex items-center gap-2 mb-6 text-gray-500">
            <span className="w-4 h-5 border-2 border-orange-400 rounded-sm rounded-t-full relative flex justify-center"><span className="absolute top-1 w-1 h-1 bg-orange-400 rounded-full"></span></span>
            <span className="text-[10px] font-bold tracking-widest uppercase">Password Changes</span>
        </div>

        <div className="space-y-4 mb-8">
            <div className="relative">
                <input type="password" placeholder="Current Password" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500" />
                <Eye size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
            </div>
            <div className="relative">
                <input type="password" placeholder="New Password" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500" />
                <Eye size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
            </div>
            <div className="relative">
                <input type="password" placeholder="Confirm New Password" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500" />
                <Eye size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
            </div>
        </div>

        <div className="flex justify-end gap-4">
            <button className="px-6 py-3 border border-gray-200 rounded-full text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">Cancel</button>
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-bold transition-colors">Save Changes</button>
        </div>
    </div>
);

export default ProfileTab;