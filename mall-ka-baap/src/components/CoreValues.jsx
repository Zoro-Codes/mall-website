import React from 'react';
import { Heart, ShieldCheck, Truck, Award, Users, Star } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      id: 1,
      title: "Customer First",
      description: "Every decision starts and ends with what's best for our customers.",
      icon: <Heart size={20} strokeWidth={2.5} />
    },
    {
      id: 2,
      title: "Quality Assured",
      description: "Every garment passes our 12-point quality check before it reaches you.",
      icon: <ShieldCheck size={20} strokeWidth={2.5} />
    },
    {
      id: 3,
      title: "Fast & Reliable",
      description: "Same-day dispatch with real-time tracking on every order.",
      icon: <Truck size={20} strokeWidth={2.5} />
    },
    {
      id: 4,
      title: "Best Value",
      description: "Premium fashion at prices that respect your budget — always.",
      icon: <Award size={20} strokeWidth={2.5} />
    },
    {
      id: 5,
      title: "Inclusive Fashion",
      description: "Styles for men, women, boys and girls across every age group.",
      icon: <Users size={20} strokeWidth={2.5} />
    },
    {
      id: 6,
      title: "Community Driven",
      description: "Built on 12,000+ happy customers and counting.",
      icon: <Star size={20} strokeWidth={2.5} />
    }
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto font-sans bg-white">

      <div className="flex flex-col items-center justify-center text-center mb-16">
        <span className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.2em] mb-4">
          What We Stand For
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-[#1a1a1a] tracking-tight">
          Our Core Values
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {values.map((value) => (
          <div 
            key={value.id} 
            className="group bg-[#fffaf5] border border-orange-50/50 p-8 rounded-3xl cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_50px_-12px_rgba(249,115,22,0.15)]"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#ff6b00] text-white flex items-center justify-center mb-6 shadow-md shadow-orange-500/20 group-hover:scale-110 group-hover:shadow-orange-500/40 transition-all duration-300">
              {value.icon}
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-3">
              {value.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed font-medium">
              {value.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default CoreValues;