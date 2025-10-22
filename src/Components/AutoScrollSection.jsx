import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";

const HeroScrollContent = () => {
  const slides = [
    {
      heading1: "Switch to Solar",
      heading2: "Pay Less, Get More!",
      details: [
        "Pay just ₹1300 EMI/month for 10 years",
        "Enjoy up to 400 units/month — worth ₹4000!",
        "After 10 years: almost free power for 20+ years ⚡",
        "30-year panel warranty included",
      ],
    },
    {
      heading1: "Smart Solar Investment",
      heading2: "Save Big, Live Green!",
      details: [
        "Save ₹45,000/year on electricity bills",
        "Increase home value by up to 8%",
        "100% maintenance-free system",
        "Government subsidy available 🌞",
      ],
    },
    {
      heading1: "Future-Ready Homes",
      heading2: "Clean Power for Generations!",
      details: [
        "30-year performance warranty",
        "Zero noise & zero pollution",
        "Remote system monitoring",
        "Trusted by 10,000+ Indian families 🇮🇳",
      ],
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-scroll every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Touch swipe handlers
  let startX = 0;
  let endX = 0;

  const handleTouchStart = (e) => (startX = e.touches[0].clientX);
  const handleTouchMove = (e) => (endX = e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (startX - endX > 50) setCurrent((prev) => (prev + 1) % slides.length);
    else if (endX - startX > 50)
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Main Container with lighter border & shadow */}
      <div
        className="relative overflow-hidden w-full max-w-6xl min-h-[350px] sm:min-h-[450px] 
                   border border-gray-200 rounded-2xl shadow-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full space-y-5 sm:space-y-6 px-4 py-6">
              <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight text-center lg:text-left">
                <span className="text-cyan-400">{slide.heading1}</span> —<br className="hidden sm:block" />
                <span className="text-white">{slide.heading2}</span>
              </h2>

              <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-400 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
                <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed mb-3 sm:mb-4 text-center lg:text-left">
                  If you pay more than{" "}
                  <span className="font-bold text-yellow-300">₹1500/month</span> for electricity,
                  go solar today with{" "}
                  <span className="font-bold text-yellow-300">zero down payment!</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-white">
                  {slide.details.map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5 sm:mt-1" />
                      <p className="text-xs sm:text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Below Container */}
      <div className="flex justify-center mt-4 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-4 h-4 bg-yellow-400 scale-110"
                : "w-2.5 h-2.5 bg-gray-400/60"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroScrollContent;
