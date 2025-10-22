import React, { useRef, useState, useEffect } from "react";
import video from "../assets/SolarVideo.mp4";
import SolarVideoEnglish from "../assets/SolarVideoEnglish.mp4";
import solarInfo from "../assets/solarInfo.mp4";
import SolarHome from "../Images/SolarHome.jpeg";

// Placeholder videos & images
const videoData = [
  {
    src: SolarVideoEnglish,
    poster: SolarHome,
    title: "Solar Installation Basics",
  },
  {
    src: video,
    poster: SolarHome,
    title: "How Solar Panels Work",
  },
  {
    src: SolarVideoEnglish,
    poster: SolarHome,
    title: "Maintenance Tips",
  },
  {
    src: video,
    poster: SolarHome,
    title: "Benefits of Solar Energy",
  },
];

const VideoCarousel = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update active dot based on scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const containerWidth = scrollRef.current.clientWidth;
    const index = Math.round(scrollLeft / (containerWidth * 0.75)); // approximate index
    setActiveIndex(index);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="w-full">
      {/* Scrollable video container with border and shadow */}
      <div
        ref={scrollRef}
        onWheel={handleWheel}
        onScroll={handleScroll}
        className="flex overflow-x-auto space-x-4   shadow-md scroll-smooth scrollbar-hide bg-gradient-to-r from-orange-50/10 to-orange-100/20 border border-white rounded-xl p-4 sm:p-6 backdrop-blur-sm"
      >
        {videoData.map((video, index) => (
          <div key={index} className="flex-shrink-0 w-72 sm:w-80 md:w-96">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <video
                src={video.src}
                poster={video.poster}
                className="w-full h-41 sm:h-54 md:h-54 object-contain bg-black" // keep poster fully visible
                controls={false}
                onMouseEnter={(e) => (e.currentTarget.controls = true)}
                onMouseLeave={(e) => (e.currentTarget.controls = false)}
                onTouchStart={(e) => (e.currentTarget.controls = true)}
                onTouchEnd={(e) => {
                  setTimeout(() => {
                    e.currentTarget.controls = false;
                  }, 3000);
                }}
              />
            </div>
            {/* Video title below video */}
            <p className="mt-2 text-center font-semibold text-base sm:text-lg text-orange-200">
              {video.title}
            </p>
          </div>
        ))}
      </div>

      {/* Functional dots */}
      <div className="flex justify-center mt-2 space-x-2">
        {videoData.map((_, index) => (
           <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === index
                ? "w-4 h-4 bg-yellow-400 scale-110"
                : "w-2.5 h-2.5 bg-gray-400/60"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
