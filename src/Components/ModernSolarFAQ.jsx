import React, { useState, useEffect } from "react";
import { ChevronDown, Search, Sun, Settings, DollarSign } from "lucide-react";

export default function ModernSolarFAQ() {
  const [activeTab, setActiveTab] = useState("general");
  const [openQuestion, setOpenQuestion] = useState("maintenance-0");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const tabs = [
    { id: "general", label: "General", icon: Sun, shortLabel: "General" },
    {
      id: "maintenance",
      label: "Maintenance",
      icon: Settings,
      shortLabel: "Maintenance",
    },
    {
      id: "economics",
      label: "Economics",
      icon: DollarSign,
      shortLabel: "Economics",
    },
  ];

  const faqData = {
    general: [
      {
        question: "What is Aditya Solar Energy?",
        answer: `Aditya Solar Energy designs and installs solar panel systems for homes, housing societies and businesses across Maharashtra.

1. Over 3 years of dedicated experience in the solar industry.
2. Committed to making solar energy accessible and affordable for every household and business.
3. Mission: To drive the clean energy revolution forward, one rooftop at a time.
4. Government-authorized vendor with all necessary certifications and registrations.
5. Trusted partner for reliable and high-quality solar solutions.
6. We believe solar reduces electricity costs and creates a sustainable future for generations to come.`,
      },
      {
        question: "What is a solar rooftop system?",
        answer: `A solar rooftop system is a combination of many components that convert sunlight into usable electricity.

Components include:
1. Solar panels with PV cells
2. Solar inverter
3. Solar panel mounting structures
4. AC and DC cables
5. AC combiner box
6. DC combiner box
7. Earthing cables
8. MC4 connectors`,
      },
      {
        question: "How does a solar rooftop system work?",
        answer: `A solar rooftop system works on the principle of converting sunlight into electricity (the photovoltaic effect).

1. Sunlight falls on the PV cells in the solar panel.
2. The sunlight is converted into DC electricity.
3. The inverter converts DC power into usable AC power.
4. The AC electricity is fed into a bidirectional meter.
5. It supplies power to the house.
6. Excess power is exported to the DISCOM (grid).
7. If solar power is insufficient, power is imported from the grid.`,
      },
      {
        question: "How to apply for a solar rooftop subsidy?",
        answer: `Under the DBT (Direct Benefit Transfer) scheme, applying for a solar rooftop subsidy is simple. Follow these steps:

1. Visit the National Portal for Rooftop Solar website — https://solarrooftop.gov.in/
2. Download and install the Sandes app from the website.
3. Register as a customer on the Sandes app.
4. A DISCOM official will visit your home to check technical feasibility.
5. After approval, you’ll receive a No Objection Certificate (NOC).
6. Choose Aditya Solar Energy as your solar installation company.
7. Discuss project details and sign the agreement.
8. After receiving payment, installation begins.
9. We’ll submit a work completion report and apply for net meter installation.
10. Receive the commissioning certificate.
11. Upload bank details and a cancelled cheque on the National Portal.
12. The subsidy amount will be credited to your bank account within 30 days.

Aditya Solar Energy assists you throughout this process to ensure a smooth and hassle-free subsidy claim.`,
      },
      {
        question:
          "What is the price of a solar system in India without a subsidy?",
        answer: `Aditya Solar Energy offers affordable and high-quality solar solutions.

Pricing for Maharashtra:
1. 3 kW rooftop solar system: ₹1,30,000
2. 5 kW rooftop solar system: ₹1,70,000

For other system sizes (2 kW, 4 kW, 7 kW, or 10 kW), contact us for a customized quote. We provide multiple options based on your energy requirements and budget.`,
      },
      {
        question: "Why should I go solar?",
        answer: `1. Save money on monthly electric bills.
2. Contribute to protecting the planet by going green.
3. Solar energy is renewable, clean, and non-polluting.
4. Emits no greenhouse gases and mitigates climate change.
5. With Aditya Solar Energy’s affordable pricing and quality service, solar is now accessible for all Maharashtra residents.`,
      },
      {
        question: "Is solar power safe?",
        answer: `1. The electricity produced by a solar system is the same as grid electricity — only the source differs.
2. Solar power is among the safest sources of electricity.
3. It is non-hazardous and does not release any toxic or harmful gases.`,
      },
      {
        question: "What do I need to install a rooftop solar system?",
        answer: `To qualify for a solar system, you need:
1. Empty space on your roof.
2. Access to your rooftop.

Process:
3. Fill out the enquiry form on our website or contact us directly.
4. Our team will visit to discuss your requirement.
5. Once finalized, we handle design, installation, and maintenance.

Aditya Solar Energy, based in Telhara, Akola, serves customers across Maharashtra with prompt service.`,
      },
      {
        question: "What are the different types of Solar systems?",
        answer: `There are 3 types of solar systems:

1. On-grid solar systems:
   - Connected to the public electricity grid.
   - Excess power is exported to the grid.
   - Net-Metering Policy applies in Maharashtra.

2. Off-grid solar systems:
   - Not connected to the grid.
   - Require battery storage.
   - Designed to generate enough power even during low sunlight.

3. Hybrid solar systems:
   - Combine solar and battery storage.
   - Store energy generated during the day for night-time use.
   - Grid acts as backup when stored energy is depleted.`,
      },
      {
        question:
          "Do solar panels generate electricity even during monsoon and winter?",
        answer: `1. Yes, solar panels produce electricity even in cloudy or rainy weather.
2. Efficiency reduces slightly, but this is accounted for in design.
3. Even during Maharashtra’s monsoon season, panels continue to generate power.`,
      },
      {
        question:
          "Does a rooftop solar PV generate power during a power failure?",
        answer: `1. No, rooftop solar systems do not generate electricity during blackouts.
2. This is to protect people repairing damaged grids.
3. Aditya Solar Energy offers Li-ion battery storage for backup.
4. Stored electricity can be used during the night or power failure.`,
      },
      {
        question: "How much electricity does a solar plant produce?",
        answer: `1. Depends on sunlight, plant design, and component quality.
2. On average, 1 kW solar plant produces 4 units per day.
3. Maharashtra’s strong sunlight makes it ideal for solar generation.`,
      },
      {
        question: "What kind of appliances can I use on Solar Power?",
        answer: `1. Can power both heavy industrial machines and home appliances.
2. Electricity is synchronized with grid/diesel generators.
3. Ensures no voltage fluctuations regardless of usage.`,
      },
      {
        question: "How do I decide what size of plant I need?",
        answer: `The size depends on:
1. Your electricity consumption.
2. Available shadow-free area.
3. Solar irradiation in your area.

Aditya Solar Energy conducts an assessment to recommend the best size for maximum savings.`,
      },
      {
        question: "What is Net metering?",
        answer: `1. Net Metering allows solar owners to earn credits for power added to the grid.
2. Excess power sent to the grid can be taken back when needed.
3. The bi-directional meter runs backward when excess power is exported.
4. You are billed only for the net power used.
5. Available for both residential and commercial consumers in Maharashtra.`,
      },
    ],

    maintenance: [
      {
        question: "What is the life of a rooftop solar system?",
        answer: `1. The solar plant’s lifespan is 25 years.
2. Solar panels: 25-year warranty.
3. Inverters: 5–12-year warranty.
4. Aditya Solar Energy uses high-quality components for long-term efficiency.`,
      },
      {
        question: "Do Solar Rooftop projects have a high maintenance cost?",
        answer: `1. No, solar systems have very low maintenance costs.
2. Minimal moving parts reduce maintenance needs.
3. Aditya Solar Energy provides 5 years of free maintenance.`,
      },
      {
        question: "Can Solar projects damage my roof?",
        answer: `1. No, Aditya Solar Energy ensures no damage during installation.
2. We use non-penetrating structures and waterproofing methods.
3. We are government-authorized with proper certifications.`,
      },
      {
        question: "Do I need to clean my Solar plant?",
        answer: `1. Clean the panels 1–2 times a month.
2. Best time: early morning or night.
3. Use a clean wet cloth, nylon brush, or sponge.
4. Avoid detergents or metal brushes.
5. During the 5-year free maintenance period, our team assists with cleaning.`,
      },
      {
        question:
          "My roof is not made of concrete; can I still install a Solar Project?",
        answer: `1. Yes, solar can be installed on almost any roof type.
2. For brittle materials like asbestos, we provide safe solutions.
3. Aditya Solar Energy ensures secure installation for all roof types.`,
      },
    ],

    economics: [
      {
        question: "How much does a solar Plant cost?",
        answer: `Pricing at Aditya Solar Energy (after subsidy):

1. 3 kW rooftop system: ₹1,12,000
2. 5 kW rooftop system: ₹1,67,000

Includes:
3. High-quality components
4. Professional installation
5. 5 years of free maintenance`,
      },
      {
        question: "What is the break-even period for Solar rooftop projects?",
        answer: `1. Typical breakeven: 3–5 years.
2. Project life: 25 years.
3. You start saving from day one.
4. Aditya Solar Energy ensures quick ROI through affordable installation.`,
      },
      {
        question:
          "Are there any subsidies provided by the government for solar projects?",
        answer: `1. No subsidies for commercial entities.
2. Residential rooftop projects in Maharashtra receive subsidies within 30 days.
3. Aditya Solar Energy assists with the entire subsidy process.

Subsidy slabs:
────────────────────────────
Segment          | Size | Subsidy
────────────────────────────
Individual house | 1kW  | ₹30,000
Individual house | 2kW  | ₹60,000
Individual house | 3kW+ | ₹78,000
────────────────────────────

We guide you through every step, ensuring a hassle-free claim.`,
      },
      {
        question: "What is the difference between CapEx and OpEx models?",
        answer: `1. CapEx Model:
   - Consumer invests the full amount.
   - Solar EPC company installs and maintains the system.
   - Ownership lies with the consumer.

2. OpEx Model:
   - Investor/developer invests in the system.
   - Consumer pays only for energy used (via PPA agreement).
   - Suitable for users wanting zero upfront cost.

Aditya Solar Energy helps you choose the best model for your needs.`,
      },
      {
        question: "Are financing options available for Solar Rooftop projects?",
        answer: `Yes, Aditya Solar Energy provides attractive EMI options.

1. Interest Rate: 6% per annum
2. Repayment Period: Up to 10 years
3. Minimal documentation required
4. Start saving immediately while paying in easy monthly installments.
5. Savings on electricity often cover the EMI amount.`,
      },
    ],
  };

  useEffect(() => {
    if (searchTerm.trim() === "") {
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
            id: `${category}-${index}`,
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
    setOpenQuestion(openQuestion === id ? "" : id);
    setActiveTab(category);
  };

  const highlightText = (text, highlight) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <mark key={i} className="bg-orange-200 text-orange-900 px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const displayData =
    searchTerm.trim() !== ""
      ? searchResults
      : faqData[activeTab].map((faq, index) => ({
          ...faq,
          category: activeTab,
          index,
          id: `${activeTab}-${index}`,
        }));

  return (
    <div className="min-h-screen border-t-1 rounded-md ">
      {/* Header with Blue Background */}
      <div className=" pt-8 pb-24 md:pb-32 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/30">
              <Sun className="w-4 h-4 text-orange-300" />
              <span className=" text-orange-300 font-medium text-md">
                Solar Energy Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent mb-4 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base md:text-lg text-blue-400">
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
              {searchResults.length} result
              {searchResults.length !== 1 ? "s" : ""} found
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative -mt-16 md:-mt-24 px-4 pb-12">
        <div className="max-w-5xl mx-auto">
          {/* Tabs - Fixed on mobile, always visible */}
          {searchTerm.trim() === "" && (
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
                        ? "bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-5 h-5 md:w-5 md:h-5 flex-shrink-0" />
                    <span className="text-xs md:text-base leading-tight text-center md:text-left">
                      {tab.shortLabel}
                    </span>
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
                      ? "shadow-xl border-2 border-blue-500"
                      : "shadow-md border-2 border-gray-100 hover:border-blue-200"
                  }`}
                >
                  <button
                    onClick={() => toggleQuestion(faq.category, faq.index)}
                    className="w-full p-4 md:p-5 text-left flex items-start gap-3 md:gap-4"
                  >
                    <div
                      className={`flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        openQuestion === faq.id
                          ? "bg-gradient-to-br from-orange-500 to-orange-600 shadow-md"
                          : "bg-blue-100"
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ${
                          openQuestion === faq.id
                            ? "rotate-180 text-white"
                            : "text-blue-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      {searchTerm.trim() !== "" && (
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
                    className={`transition-all duration-500 ${
                      openQuestion === faq.id
                        ? "opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    <div className="px-4 md:px-5 pb-4 md:pb-5 pl-12 md:pl-14">
                      <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg p-4 border border-blue-100">
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed whitespace-pre-line">
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
                <p className="text-gray-700 text-base font-semibold">
                  No questions found
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Try different keywords
                </p>
              </div>
            )}
          </div>

          {/* Footer CTA */}
          <div className="mt-8 md:mt-12">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-5 md:p-6 text-center shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="text-white">
                  <p className="font-bold text-base md:text-lg mb-1">
                    Still have questions?
                  </p>
                  <p className="text-sm text-blue-100">
                    Our solar experts are ready to assist you
                  </p>
                </div>
                <a
                  href="tel:9422809337"
                  className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
