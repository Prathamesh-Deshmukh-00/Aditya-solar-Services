import React from 'react'
import { Sun, Phone,Zap, Shield, Wrench, Check,  Clock } from 'lucide-react';
import {SolarSquarePromo ,SolarTimeline} from "./index.js"

function Services() {
      const keyServices = [
    { title: 'Solar Panel Installation', icon: <Sun className="w-7 h-7 sm:w-8 sm:h-8" />, desc: 'Professional installation of high-efficiency solar panels' },
    { title: 'On-Grid & Off-Grid Systems', icon: <Zap className="w-7 h-7 sm:w-8 sm:h-8" />, desc: 'Both grid-connected and standalone solar solutions' },
    { title: 'Residential & Commercial', icon: <Shield className="w-7 h-7 sm:w-8 sm:h-8" />, desc: 'Tailored solutions for homes and businesses' },
    { title: 'Maintenance & Repairs', icon: <Wrench className="w-7 h-7 sm:w-8 sm:h-8" />, desc: 'Regular maintenance and emergency repair services' }
  ];

  return (
    <div className=''>
{/* Key Services Section */}
<section id="services" className="pt-0 pb-12 sm:pb-16 ">
  {/* Hero Banner */}
  <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
    <div className="relative max-w-7xl mx-auto px-4 py-10 sm:py-12 lg:py-20">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 leading-tight">Our Key Services</h2>
        <p className="text-sm sm:text-base lg:text-xl opacity-95 mb-2 px-2">
          Comprehensive solar solutions for all your energy needs
        </p>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full sm:h-16 md:h-20"
      >
        <path
          d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
          fill="#F9FAFB"
        />
      </svg>
    </div>
  </div>

  <div className="max-w-7xl mx-auto px-3 sm:px-4 mt-6 sm:mt-10 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {keyServices.map((service, i) => (
        <div
          key={i}
          className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-5 sm:p-6 border border-gray-100 hover:shadow-xl active:scale-95 sm:hover:scale-105 transition transform"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white mb-3 sm:mb-4">
            {service.icon}
          </div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug">{service.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Why Choose Us */}
      <section id="about" className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5 sm:mb-6 leading-tight">
                Why Choose Aditya Solar Services?
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {[
                  'Expert team with years of experience in solar installation',
                  'High-quality solar panels and equipment',
                  'Customized solutions for residential and commercial needs',
                  'Professional maintenance and repair services',
                  'On-Grid and Off-Grid system expertise',
                  'Competitive pricing and transparent quotes',
                  'Post-installation support and warranty'
                ].map((point, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-t-4 border-orange-500">
              <div className="space-y-5 sm:space-y-6">
                <div className="text-center pb-4 border-b">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Contact Information</h3>
                  <p className="text-sm sm:text-base text-gray-600">Get in touch with us today</p>
                </div>

                <div className="space-y-4 sm:space-y-5">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <Phone className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm sm:text-base mb-2">Phone</p>
                      <div className='flex flex-col space-y-1'>
                      <a href="tel:9422809337" className="text-orange-500 hover:underline active:text-orange-600 text-base sm:text-lg font-bold">
                        9422809337
                      </a>
                      <a href="tel:9284287565" className="text-orange-500 hover:underline active:text-orange-600 text-base sm:text-lg font-bold">
                        9284287565
                      </a>
                      </div>
                    </div>

                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <Clock className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Business Hours</p>
                      <p className="text-sm sm:text-base text-gray-600">Monday - Saturday</p>
                      <p className="text-sm sm:text-base text-gray-600">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4">
                    <a 
                      href="tel:9284287565"
                      className="block w-full text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3.5 sm:py-4 rounded-lg hover:shadow-lg active:scale-95 transition text-sm sm:text-base"
                    >
                      Call Now for Free Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SolarSquarePromo/>

      
       {/* solar time line */}
       <SolarTimeline/>

    </div>
  )
}

export default Services