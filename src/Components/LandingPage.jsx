import React, { useState, useEffect } from 'react';
import { Sun, Phone, Mail, Menu, X, Star, ArrowRight, Zap, Shield, Wrench, Check, Info, Clock, MapPin } from 'lucide-react';
import { SolarSquarePromo, Footer ,ModernSolarFAQ ,Header,SolarTimeline} from "./index.js";

export default function AdityaSolarServices({setClick, setTermuse}) {
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

  const services = [
    'Solar Panel Installation',
    'On-Grid System',
    'Off-Grid System',
    'Maintenance & Repairs'
  ];

  const billRanges = [
    { value: '<1500', label: 'Less than ₹1500' },
    { value: '1500-2500', label: '₹1500 - ₹2500' },
    { value: '2500-4000', label: '₹2500 - ₹4000' },
    { value: '4000-8000', label: '₹4000 - ₹8000' },
    { value: '>8000', label: 'More than ₹8000' }
  ];

  const keyServices = [
    { title: 'Solar Panel Installation', icon: <Sun className="w-8 h-8" />, desc: 'Professional installation of high-efficiency solar panels' },
    { title: 'On-Grid & Off-Grid Systems', icon: <Zap className="w-8 h-8" />, desc: 'Both grid-connected and standalone solar solutions' },
    { title: 'Residential & Commercial', icon: <Shield className="w-8 h-8" />, desc: 'Tailored solutions for homes and businesses' },
    { title: 'Maintenance & Repairs', icon: <Wrench className="w-8 h-8" />, desc: 'Regular maintenance and emergency repair services' }
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

     {/* Hader */}
     <Header isMenuOpen={isMenuOpen}/>

      {/* Hero Section with Image and Form */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left - Content with Image */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                <span className="text-cyan-400">Switch to Solar</span> —<br />
                <span className="text-white">Pay Less, Get More!</span>
              </h2>
              
              <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border-2 border-orange-400 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-lg md:text-xl text-white leading-relaxed mb-4">
                  If you pay more than <span className="font-bold text-yellow-300">₹1500/month</span> for electricity, go solar today with <span className="font-bold text-yellow-300">zero down payment!</span>
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-white">
                  <div className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-sm">Pay just <span className="font-bold text-yellow-300">₹1300 EMI/month for 10 years</span></p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-sm">Enjoy <span className="font-bold text-yellow-300">up to 400 units/month</span> — worth ₹4000!</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-sm">After 10 years: <span className="font-bold text-yellow-300">almost free power for 20+ years</span> ⚡</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-sm"><span className="font-bold text-yellow-300">30-year panel warranty</span> included</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=500&fit=crop" 
                  alt="Solar Installation Team" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-cyan-400 to-blue-500 py-4 text-center">
                  <p className="text-white font-bold text-xl md:text-2xl">
                    Bharat ki <span className="text-3xl">#1</span> home solar company*
                  </p>
                </div>
              </div>

              {/* Contact Cards - Desktop Only */}
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

            {/* Right - Form */}
            <div id="hero-form" className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Book a FREE Solar Consultation</h3>
              <p className="text-gray-600 text-sm mb-6">And save up to ₹78,000 with subsidy</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-start  font-medium text-gray-700 mb-1.5">
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-start font-medium text-gray-700 mb-1.5">
                    WhatsApp number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                    placeholder="Enter WhatsApp number"
                  />
                </div>

                <div>
                  <label className="block text-sm text-start  font-medium text-gray-700 mb-1.5">
                    Pin code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.pincode}
                    onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                    placeholder="Enter Pincode"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">
                      What is your average monthly bill? <span className="text-red-500">*</span>
                    </label>
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {billRanges.map((range) => (
                      <button
                        key={range.value}
                        onClick={() => setFormData({...formData, bill: range.value})}
                        className={`px-3 py-2 rounded-lg border text-xs font-medium text-left transition ${
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

                <div className="flex items-start space-x-2 pt-2">
                  <input 
                    type="checkbox" 
                    id="terms"
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    required
                  />
                  <label htmlFor="terms" className="text-xs text-gray-600" >
                    I agree to Aditya Solar's 
                    <a href="#" className="text-blue-600 underline" onClick={()=>{ setTermuse(true)}} > terms of service</a>
                     & 
                     <a href="#" onClick={()=>{ setClick(true)}} className="text-blue-600 underline">privacy policy</a>
                  </label>
                </div>

                <button 
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white font-bold py-3.5 rounded-full hover:shadow-xl transform hover:scale-105 transition text-sm"
                >
                  Get a FREE Quote
                </button>
              </div>
            </div>
          </div>

          {/* Google Review - Below Hero */}
          <div className="flex items-center justify-center mt-8 space-x-4 flex-wrap">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-white font-medium text-sm">4.8/5 Google Rating • 10+ reviews</span>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Key Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solar solutions for all your energy needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyServices.map((service, i) => (
              <div key={i} className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transform hover:scale-105 transition">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Aditya Solar Services?
              </h2>
              <div className="space-y-4">
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
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-orange-500">
              <div className="space-y-6">
                <div className="text-center pb-4 border-b">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h3>
                  <p className="text-gray-600">Get in touch with us today</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <div className='flex flex-col'>
                      <a href="tel:9422809337" className="text-orange-500 hover:underline text-lg font-bold">
                        9422809337
                      </a>
                      <a href="tel:9284287565" className="text-orange-500 hover:underline text-lg font-bold">
                        9284287565
                      </a>
                      </div>
                    </div>

                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Business Hours</p>
                      <p className="text-gray-600">Monday - Saturday</p>
                      <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a 
                      href="tel:9284287565"
                      className="block w-full text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition"
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

       {/* Freqreltly asked questions  */}
       <ModernSolarFAQ/>


       {/* solar time line */}
       <SolarTimeline/>


 {/* Footer section */}
   <Footer/>

      
     

      {/* Sticky Mobile Footer */}
      {showStickyFooter && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-900 to-blue-800 text-white py-3 px-4 shadow-2xl md:hidden z-50">
          <div className="flex items-center justify-between max-w-xl mx-auto">
            <span className="font-semibold text-sm">Book FREE Consultation</span>
            <a 
              href="#hero-form" 
              className="bg-orange-500 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-orange-600"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </div>
  );
}