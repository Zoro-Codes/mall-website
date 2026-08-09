import React from "react";

const MarqueeBanner = () => {
    const textItems = [
        "FREE DELIVERY EVERY ORDER",
        "FLAT 50% OFF TODAY",
        "MEN'S WEAR",
        "WOMEN'S COLLECTION",
        "ETHNIC WEAR",
        "KIDS FASHION",
        "WESTERN STYLES"
    ];

    return(
        <div className="w-full py-3 flex overflow-hidden relative">
            <style>
                {`
                    @keyframes marquee-scroll{
                        0% {transform: translateX(0);}
                        100% {transform: translateX(-50%);}
                    }

                    .animate-marquee-scroll{
                        animation: marquee-scroll 25s linear infinite;
                    }
                    
                    .animate-marquee-scroll:hover{
                        animation-play-state: paused;
                    }
                `}
            </style>
            <div className="flex items-center animate-marquee-scroll min-w-max">
                <div className="flex items-center">
                    {textItems.map((text,index) => (
                        <div key={`first-${index}`} className="flex items-center mx-4 md:mx-7">
                            <span className="w-2 h-2 rounded-full bg-orange-600 mr-2 md:mr-3"></span>
                            <span className="text-[10px] md:text-[12px] text-gray-400 font-semibold tracking-[3px]">
                                {text}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="flex items-center">
                    {textItems.map((text,index) => (
                        <div key={`first-${index}`} className="flex items-center mx-4 md:mx-7">
                            <span className="w-2 h-2 rounded-full bg-orange-600 mr-2 md:mr-3"></span>
                            <span className="text-[10px] md:text-[12px] text-gray-400 font-semibold tracking-[3px]">
                                {text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarqueeBanner;