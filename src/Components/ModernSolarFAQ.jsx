import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Sun, Settings, DollarSign } from 'lucide-react';

export default function ModernSolarFAQ() {
  const [activeTab, setActiveTab] = useState('maintenance');
  const [openQuestion, setOpenQuestion] = useState('maintenance-0');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const tabs = [
    { id: 'general', label: 'General', icon: Sun, shortLabel: 'General' },
    { id: 'maintenance', label: 'Maintenance', icon: Settings, shortLabel: 'Maintenance' },
    { id: 'economics', label: 'Economics', icon: DollarSign, shortLabel: 'Economics' }
  ];

  const faqData = {
    general: [
      {
        question: 'What is solar energy?',
        answer: 'Solar energy is power derived from the sun\'s radiation. It can be converted into electricity or heat using solar panels and other solar technologies.'
      },
      {
        question: 'How do solar panels work?',
        answer: 'Solar panels work by absorbing sunlight with photovoltaic cells, generating direct current (DC) energy, and then converting it to usable alternating current (AC) energy with the help of inverter technology.'
      },
      {
        question: 'Is solar energy renewable?',
        answer: 'Yes, solar energy is completely renewable and sustainable. The sun provides more energy in one hour than the entire world uses in a year, making it an inexhaustible resource for our energy needs.'
      }
    ],
    maintenance: [
      {
        question: 'What is the life of a rooftop solar system?',
        answer: 'The Solar Plant life is 25 years. The main components are solar panels and inverters. Solar panels have a warranty of 25 years and inverter warranty ranges from 5-12 years.'
      },
      {
        question: 'Do Solar Rooftop projects have a high maintenance cost?',
        answer: 'No, solar rooftop systems have minimal maintenance costs. They require occasional cleaning and periodic inspections to ensure optimal performance. Most maintenance involves simple cleaning of the panels to remove dust and debris.'
      },
      {
        question: 'Can Solar projects damage my roof?',
        answer: 'When installed properly by certified professionals, solar panels will not damage your roof. In fact, they can protect the portion of the roof they cover. Professional installers ensure proper mounting and waterproofing to maintain roof integrity.'
      },
      {
        question: 'Do I need to clean my Solar plant?',
        answer: 'Yes, periodic cleaning is recommended to maintain optimal efficiency. Dust, leaves, and bird droppings can reduce panel performance. Cleaning frequency depends on your location and environmental factors, typically 2-4 times per year.'
      },
      {
        question: 'My roof is not made of concrete; can I still install a Solar Project?',
        answer: 'Yes, solar panels can be installed on various roof types including metal, tile, and asphalt shingle roofs. Professional installers use appropriate mounting systems designed for different roof materials to ensure safe and secure installation.'
      }
    ],
    economics: [
      {
        question: 'What is the return on investment for solar panels?',
        answer: 'The ROI for solar panels typically ranges from 5-10 years, depending on your location, electricity rates, system size, and available incentives. After the payback period, you enjoy essentially free electricity for the remaining life of the system.'
      },
      {
        question: 'Are there government incentives for solar installation?',
        answer: 'Yes, many governments offer incentives such as tax credits, rebates, and subsidies to encourage solar adoption. These incentives vary by country and region, significantly reducing the initial installation cost.'
      },
      {
        question: 'How much can I save with solar panels?',
        answer: 'Savings vary based on your location, energy consumption, and system size. On average, homeowners can save 50-90% on their electricity bills. Over 25 years, this can amount to substantial savings while also increasing property value.'
      }
    ]
  };

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = [];
    Object.keys(faqData).forEach((category) => {
      faqData[category].forEach((faq, index) => {
        if (
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          results.push({
            ...faq,
            category,
            index,
            id: `${category}-${index}`
          });
        }
      });
    });
    setSearchResults(results);

    if (results.length > 0) {
      setActiveTab(results[0].category);
      setOpenQuestion(results[0].id);
    }
  }, [searchTerm]);

  const toggleQuestion = (category, index) => {
    const id = `${category}-${index}`;
    setOpenQuestion(openQuestion === id ? '' : id);
    setActiveTab(category);
  };

  const highlightText = (text, highlight) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === highlight.toLowerCase() ? 
        <mark key={i} className="bg-orange-200 text-orange-900 px-1 rounded">{part}</mark> : part
    );
  };

  const displayData = searchTerm.trim() !== '' ? searchResults : 
    faqData[activeTab].map((faq, index) => ({
      ...faq,
      category: activeTab,
      index,
      id: `${activeTab}-${index}`
    }));

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Blue Background */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 pt-8 pb-24 md:pb-32 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/30">
              <Sun className="w-4 h-4 text-orange-300" />
              <span className="text-white font-medium text-sm">Solar Energy Solutions</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base md:text-lg text-blue-100">
              Find answers to all your solar energy questions
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search across all categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all shadow-lg"
            />
          </div>
          {searchTerm && (
            <div className="mt-3 text-sm text-blue-100 text-center">
              {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative -mt-16 md:-mt-24 px-4 pb-12">
        <div className="max-w-5xl mx-auto">
          {/* Tabs - Fixed on mobile, always visible */}
          {searchTerm.trim() === '' && (
            <div className="bg-white rounded-xl shadow-xl p-2 mb-6 grid grid-cols-3 gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setOpenQuestion(`${tab.id}-0`);
                    }}
                    className={`flex flex-col md:flex-row items-center justify-center gap-1.5 md:gap-2 px-2 md:px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5 md:w-5 md:h-5 flex-shrink-0" />
                    <span className="text-xs md:text-base leading-tight text-center md:text-left">{tab.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* FAQ Cards */}
          <div className="space-y-3">
            {displayData.length > 0 ? (
              displayData.map((faq) => (
                <div
                  key={faq.id}
                  className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${
                    openQuestion === faq.id 
                      ? 'shadow-xl border-2 border-blue-500' 
                      : 'shadow-md border-2 border-gray-100 hover:border-blue-200'
                  }`}
                >
                  <button
                    onClick={() => toggleQuestion(faq.category, faq.index)}
                    className="w-full p-4 md:p-5 text-left flex items-start gap-3 md:gap-4"
                  >
                    <div className={`flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      openQuestion === faq.id 
                        ? 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-md' 
                        : 'bg-blue-100'
                    }`}>
                      <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ${
                        openQuestion === faq.id ? 'rotate-180 text-white' : 'text-blue-600'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      {searchTerm.trim() !== '' && (
                        <span className="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-2 capitalize">
                          {faq.category}
                        </span>
                      )}
                      <h3 className="text-base md:text-lg font-bold text-gray-800 leading-snug">
                        {highlightText(faq.question, searchTerm)}
                      </h3>
                    </div>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openQuestion === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 md:px-5 pb-4 md:pb-5 pl-12 md:pl-14">
                      <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg p-4 border border-blue-100">
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                          {highlightText(faq.answer, searchTerm)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-xl shadow-md border-2 border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search className="w-7 h-7 text-blue-500" />
                </div>
                <p className="text-gray-700 text-base font-semibold">No questions found</p>
                <p className="text-gray-500 text-sm mt-1">Try different keywords</p>
              </div>
            )}
          </div>

          {/* Footer CTA */}
          <div className="mt-8 md:mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-5 md:p-6 text-center shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="text-white">
                  <p className="font-bold text-base md:text-lg mb-1">Still have questions?</p>
                  <p className="text-sm text-blue-100">Our solar experts are ready to assist you</p>
                </div>
                <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}