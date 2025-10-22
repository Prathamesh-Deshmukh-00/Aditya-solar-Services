import React from 'react';
import { Link } from "react-router-dom";

export default function SolarTimeline() {
  const steps = [
    {
      icon: "https://sse-website.s3.ap-south-1.amazonaws.com/homes/free-in-home.svg",
      title: "Free in-home consultation",
      description: "A Aditya Solar Energy consultant will survey your home, answer your questions and generate a custom digital design of what the solar system will look like on your roof.",
      hasButton: true
    },
    {
      icon: "https://sse-website.s3.ap-south-1.amazonaws.com/homes/personalized-manager.svg",
      title: "Personalised solar proposal & dedicated manager",
      description: "Based on your requirements, our team will create a custom proposal for you. A Delight Manager is also assigned to answer your queries and keep you updated on the project."
    },
    {
      icon: "https://sse-website.s3.ap-south-1.amazonaws.com/homes/paperwork.svg",
      title: "Paperwork and subsidy assistance",
      description: "End-to-end paperwork management by us for hassle-free coordination with the local discom and securing subsidy."
    },
    {
      icon: "https://sse-website.s3.ap-south-1.amazonaws.com/homes/solar-installation.svg",
      title: "Step-by-step professional & safe installation",
      description: "Once you submit the advance amount, your rooftop system will arrive in stylish delivery vans and installed in a timely, clean and professional manner."
    },
    {
      icon: "https://sse-website.s3.ap-south-1.amazonaws.com/homes/grid-connection.svg",
      title: "Connection to the grid",
      description: "We coordinate with the discom to connect your system to the power grid and install a new electricity meter."
    },
    {
      icon: "https://sse-website.s3.ap-south-1.amazonaws.com/homes/power-new-system.svg",
      title: "Power on your new system",
      description: "Switch on your system to enjoy reduced electricity bills and an energy-independent future!"
    },
    {
      icon: "https://sse-website.s3.ap-south-1.amazonaws.com/homes/deep-cleaning.svg",
      title: "Deep cleaning and maintenance",
      description: "We'll call you to schedule quarterly deep cleaning and preventive health checks of your system for 5 years."
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-10 px-3 sm:py-12 sm:px-4 md:py-16 mb-2">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight px-2">
            The solar switch made simple
          </h2>
          <p className="text-white text-sm sm:text-base opacity-90 max-w-xl mx-auto px-2 leading-relaxed">
            Switching to solar can seem daunting, but we've got you covered. Here's how it works
          </p>
        </div>

        {/* Timeline - Mobile View */}
        <div className="md:hidden relative max-w-md mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[22px] sm:left-[26px] top-0 bottom-0 w-[2px] bg-white/20"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative pb-10 sm:pb-12 last:pb-0">
              {/* Timeline dot */}
              <div className="absolute left-[13px] sm:left-[15px] top-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#00d4ff] border-[3px] sm:border-4 border-[#0a1f5c] z-10"></div>

              {/* Content */}
              <div className="ml-12 sm:ml-16">
                {/* Icon */}
                <div className="mb-3 sm:mb-4">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-14 h-14 sm:w-16 sm:h-16"
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white text-xs sm:text-sm opacity-90 leading-relaxed">
                  {step.description}
                </p>

                {/* Button (only for first step) */}
                {step.hasButton && (
                  <a
                    href="#hero-form"
                    className="block w-full mt-5 sm:mt-6 bg-[#00d4ff] hover:bg-[#00c4ef] active:bg-[#00b4df] text-[#0a1f5c] font-bold text-sm sm:text-base py-3 sm:py-3.5 px-5 sm:px-6 rounded-lg transition-colors duration-300 text-center"
                  >
                    Schedule a free consultation
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline - Desktop Zig-Zag View */}
        <div className="hidden md:block relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/20 transform -translate-x-1/2"></div>

          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <div key={index} className="relative pb-16 last:pb-0">
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-8 w-6 h-6 rounded-full bg-[#00d4ff] border-4 border-[#0a1f5c] z-10 transform -translate-x-1/2"></div>

                {/* Content Container */}
                <div className={`flex items-start ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-1/2 ${isLeft ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    {/* Button (only for first step) */}
                    {step.hasButton && (
                      <Link
                        className="mb-6 bg-[#00d4ff] hover:bg-[#00c4ef] text-[#0a1f5c] font-bold text-lg py-4 px-8 rounded-lg transition-colors duration-300 inline-block"
                        to='/'
                      >
                        Schedule a free consultation
                      </Link>
                    )}

                    {/* Icon */}
                    <div className={`mb-5 ${isLeft ? 'flex justify-end' : 'flex justify-start'}`}>
                      <img
                        src={step.icon}
                        alt={step.title}
                        className="w-20 h-20"
                        loading="lazy"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-2xl font-bold mb-4 leading-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white text-base opacity-90 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Empty space on the other side */}
                  <div className="w-1/2"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}