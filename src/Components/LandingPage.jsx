import React, { useState, useEffect } from 'react';
import { Sun, Phone, Mail, Menu, X, Star, ArrowRight, Zap, Shield, Wrench, Check, Info, Clock, MapPin } from 'lucide-react';

import { SolarSquarePromo, Footer, ModernSolarFAQ, Header, SolarTimeline, SolarBuyingGuide, OnGridSolarSystem, Services ,HeroScrollContent ,VideoCarousel  } from "./index.js";

export default function AdityaSolarServices({ setClick, setTermuse }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pincode: '',
    service: '',
    bill: ''
  });
  const [showStickyFooter, setShowStickyFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const formSection = document.getElementById('hero-form');
      if (formSection) {
        const rect = formSection.getBoundingClientRect();
        setShowStickyFooter(rect.top > window.innerHeight || rect.bottom < 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const billRanges = [
    { value: '<1500', label: 'Less than ₹1500' },
    { value: '1500-2500', label: '₹1500 - ₹2500' },
    { value: '2500-4000', label: '₹2500 - ₹4000' },
    { value: '4000-8000', label: '₹4000 - ₹8000' },
    { value: '>8000', label: 'More than ₹8000' }
  ];

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.service || !formData.bill) {
      alert('Please fill all required fields');
      return;
    }
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', phone: '', pincode: '', service: '', bill: '' });
  };

  return (
    <div className="min-h-screen min-w-full bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-6 sm:py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">

            {/* Left Section */}
            <div className="space-y-5 sm:space-y-6">
             <HeroScrollContent/>

{/* Video */}
<VideoCarousel />





              {/* Contact Cards - Hidden on Mobile */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-orange-400" />
                    <div>
                      <p className="text-xs text-blue-200 font-medium">Call Now</p>
                      <a href="tel:9284287565" className="text-lg font-bold text-white hover:text-orange-400">
                        9284287565
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-orange-400" />
                    <div>
                      <p className="text-xs text-blue-200 font-medium">Business Hours</p>
                      <p className="text-sm font-bold text-white">Mon-Sat: 9 AM - 6 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div id="hero-form" className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-5 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">Book a FREE Solar Consultation</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-5 sm:mb-6">And save up to ₹78,000 with subsidy</p>

              <div className="space-y-3 sm:space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    WhatsApp number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                    placeholder="Enter WhatsApp number"
                  />
                </div>

                {/* Pincode */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Pin code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                    placeholder="Enter Pincode"
                  />
                </div>

                {/* Bill */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs sm:text-sm font-medium text-gray-700">
                      Average monthly bill <span className="text-red-500">*</span>
                    </label>
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {billRanges.map((range) => (
                      <button
                        key={range.value}
                        onClick={() => setFormData({ ...formData, bill: range.value })}
                        className={`px-2 sm:px-3 py-2 rounded-lg border text-xs sm:text-sm font-medium text-left transition ${
                          formData.bill === range.value
                            ? 'border-blue-600 bg-blue-50 text-blue-700'
                            : 'border-gray-300 bg-white text-gray-700 hover:border-blue-300'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-2 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    required
                  />
                  <label htmlFor="terms" className="text-xs text-gray-600 leading-snug">
                    I agree to Aditya Solar's{' '}
                    <a href="#" onClick={() => setTermuse(true)} className="text-blue-600 underline">
                      terms of service
                    </a>{' '}
                    &{' '}
                    <a href="#" onClick={() => setClick(true)} className="text-blue-600 underline">
                      privacy policy
                    </a>
                  </label>
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white font-bold py-3 sm:py-3.5 rounded-full hover:shadow-xl transform hover:scale-[1.02] transition text-sm sm:text-base"
                >
                  Get a FREE Quote
                </button>
              </div>
            </div>
          </div>

          {/* Google Review */}
          <div className="flex items-center justify-center mt-6 sm:mt-8 space-x-3 sm:space-x-4 flex-wrap">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-white font-medium text-xs sm:text-sm">
              4.8/5 Google Rating • 10+ reviews
            </span>
          </div>
        </div>
      </section>

      {/* Sticky Footer (Mobile Only) */}
      {showStickyFooter && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2.5 sm:py-3 px-3 sm:px-4 shadow-2xl md:hidden z-50">
          <div className="flex items-center justify-between max-w-xl mx-auto">
            <span className="font-semibold text-xs sm:text-sm">Book FREE Consultation</span>
            <a
              href="#hero-form"
              className="bg-orange-500 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm hover:bg-orange-600"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
