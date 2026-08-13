import React, { useState, useEffect } from 'react';

const AnimatedCounter = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const end = parseInt(target, 10);

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [target, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatsBanner = () => {
  const stats = [
    {
      id: 1,
      target: 12000,
      suffix: "+",
      label: "HAPPY CUSTOMERS"
    },
    {
      id: 2,
      target: 50,
      suffix: "+",
      label: "BRANDS"
    },
    {
      id: 3,
      target: 380,
      suffix: "+",
      label: "STYLES"
    },
    {
      id: 4,
      target: 18,
      suffix: "+",
      label: "STATES SERVED"
    }
  ];

  return (
    <section className="w-full bg-[#111111] py-16 md:py-20 lg:py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center justify-center text-center">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </h3>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium tracking-[0.2em] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;