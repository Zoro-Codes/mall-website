import React from "react";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const ContactUs = () =>{
    const contactInfo = [
        {
            id: 1,
            icon: <Phone size={20} strokeWidth={2.5}/>,
            label: "CALL US",
            value: "+91 07942700870"
        },
        {
            id: 2,
            icon: <MessageCircle size={20} strokeWidth={2.5}/>,
            label: "WHATSAPP",
            value: "Chat with us"
        },
        {
            id: 3,
            icon: <Mail size={20} strokeWidth={2.5}/>,
            label: "EMAIL",
            value: "agarwal.ankit0193@gmail.com"
        },
        {
            id: 4,
            icon: <MapPin size={20} strokeWidth={2.5}/>,
            label: "VISIT US",
            value: "EB 20, Shop No 2 & 3, Near Beguiati AC Market, VIP Road, Deshbandhunagar, Kolkata-700059, West Bengal"
        }
    ];

    return(
        <section className="w-full py-15 px-8 sm:px-16 lg:px-30 bg-[#fcfbf9]">
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-15">
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6 border border-orange-300">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        Contact Us
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black font-bold mb-6 leading-[1.1] tracking-tight">
                        We're Here <br />
                        To Help You
                    </h2>

                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6">
                        Questions, bulk orders, returns or just a quick chat - our <br />
                        support team responds fast.
                    </p>

                    <div className="flex flex-col gap-4 w-full max-w-lg">
                        {contactInfo.map((info) => (
                            <div
                                key={info.id}
                                className="group flex items-center gap-5 p-5 rounded-2xl border border-gray-200/40 bg-white shadow-2xs hover:border-orange-200 hover:shadow-md transition-all cursor-pointer"
                            >
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-orange-500 bg-orange-50 group-hover:bg-orange-500 group-hover:text-white duration-300 transition-colors shrink-0">
                                    {info.icon}
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-xs font-semibold text-gray-400 tracking-widest mb-1">
                                        {info.label}
                                    </span>
                                    <span className="text-sm text-gray-800 leading-snug group-hover:text-orange-500">
                                        {info.value}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex items-center">
                    <div className="w-full max-w-xl bg-white p-8 sm:p-10 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100/50">
                        <h3 className="text-2xl font-bold mb-2">
                            Send Us a Message
                        </h3>
                        <p className="text-sm text-gray-500 mb-5">
                            We'll get back to you within 24 hours.
                        </p>

                        <form className="flex flex-col gap-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <input 
                                    type="text"
                                    placeholder="Your Name *"
                                    required
                                    className="w-full bg-transparent border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder-gray-500"
                                />

                                <input 
                                    type="email"
                                    placeholder="Email *"
                                    required
                                    className="w-full bg-transparent border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder-gray-500"
                                />
                            </div>

                            <div className="relative">
                                <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>
                                <input 
                                    type="tel"
                                    placeholder="Phone Number"
                                    required
                                    className="w-full bg-transparent border border-gray-300 rounded-xl pl-11 pr-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder-gray-500"
                                />
                            </div>

                            <textarea
                                placeholder="Your message *"
                                required
                                rows={5}
                                className="w-full bg-transparent border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder-gray-500 resize-none"
                            ></textarea>

                            <button
                                type="button"
                                className="group relative overflow-hidden w-full bg-[#1a1a1a] rounded-xl text-white text-sm font-bold py-4 flex items-center justify-center shadow-md mt-2"
                            >
                                <span className="absolute inset-0 bg-orange-500 transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
                                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
                                    <Mail size={16} strokeWidth={2.5}/>
                                    Send Message
                                </span>
                            </button>
                        </form>

                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;