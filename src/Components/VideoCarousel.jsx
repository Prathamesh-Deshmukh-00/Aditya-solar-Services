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
  const videoRefs = useRef([]);

  // Pause all videos except the active one
  const pauseAllVideosExcept = (exceptIndex) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== exceptIndex) {
        video.pause();
      }
    });
  };

  // Update active dot based on scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const containerWidth = scrollRef.current.clientWidth;
    const index = Math.round(scrollLeft / containerWidth);
    if (index !== activeIndex) {
      setActiveIndex(index);
      pauseAllVideosExcept(index);
    }
  };

  // Scroll to specific video when dot is clicked
  const scrollToVideo = (index) => {
    if (!scrollRef.current) return;
    const containerWidth = scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({
      left: index * containerWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
    pauseAllVideosExcept(index);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
      {/* Scrollable video container with snap scrolling */}
      <div
        ref={scrollRef}
        onWheel={handleWheel}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide bg-gradient-to-r from-orange-50/10 to-orange-100/20 border border-white rounded-xl shadow-md backdrop-blur-sm"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {videoData.map((video, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-full snap-center p-2 sm:p-4 md:p-6"
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={video.src}
                poster={video.poster}
                className="w-full h-48 sm:h-64 md:h-72 object-cover bg-black"
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
            <p className="mt-2 sm:mt-4 text-center font-semibold text-base sm:text-lg md:text-xl text-orange-200">
              {video.title}
            </p>
          </div>
        ))}
      </div>

      {/* Clickable dots navigation */}
      <div className="flex justify-center mt-4 sm:mt-6 space-x-2 sm:space-x-3">
        {videoData.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToVideo(index)}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === index
                ? "w-3.5 h-3.5 sm:w-4 sm:h-4 bg-yellow-400 scale-110"
                : "w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gray-400/60 hover:bg-gray-400"
            }`}
            aria-label={`Go to video ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Optional: Show current video number */}
      <div className="text-center mt-3 sm:mt-4 text-orange-200/80 text-xs sm:text-sm">
        {activeIndex + 1} / {videoData.length}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default VideoCarousel;