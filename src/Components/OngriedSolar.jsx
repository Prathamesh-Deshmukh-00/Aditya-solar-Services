import React, { useState } from 'react';
import { Sun, Zap, DollarSign,Activity, ArrowDownUp, Grid3x3 , Shield, CheckCircle, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';


export default function SolarBuyingGuide() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Does on-grid solar need a battery?",
      answer: "No. That's the beauty of installing an on-grid solar system. It does not require a battery connection like off-grid and hybrid solar systems, which makes it easier to maintain and the most affordable option of the three types."
    },
    {
      question: "Do solar panels work at night?",
      answer: "No. Solar panels generate electricity when photons from sunlight knock electrons loose in the PV cells. At night, an on-grid solar system draws power from the grid to keep a house running."
    },
    {
      question: "What is the difference between on-grid and hybrid solar systems?",
      answer: "The main difference is that a hybrid system is connected to the grid and batteries, while an on-grid solar system is connected only to the grid."
    },
    {
      question: "What is the on-grid solar panel price in India?",
      answer: "The prices vary based on the type of solar panels. For instance, the latest technology, MonoPERC half-cut solar panels in India, cost Rs. 24 per watt."
    }
  ];

  const advantages = [
    { icon: <CheckCircle className="w-6 h-6" />, title: "Energy Production Monitoring", desc: "It's easy to keep a track of the units of electricity that your solar system generated" },
    { icon: <DollarSign className="w-6 h-6" />, title: "Simplified Solar Billing", desc: "It's easier to understand the solar electricity bill" },
    { icon: <Zap className="w-6 h-6" />, title: "Rapid Payback & Decades of Free Power", desc: "Once the solar on-grid system's price breaks even in 3 to 5 years, you get free solar electricity for the next 20-22 years" },
    { icon: <DollarSign className="w-6 h-6" />, title: "Significant Monthly Savings", desc: "The monthly electricity bill reduces substantially" },
    { icon: <Shield className="w-6 h-6" />, title: "No Battery Requirement", desc: "Your grid plays the role of the battery. The system will directly supply excess units to the grid and take them back when needed" },
    { icon: <DollarSign className="w-6 h-6" />, title: "No Battery Replacement Costs", desc: "Since there's no battery, there are no battery replacement charges involved" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Most Affordable Solar Option", desc: "Out of the 3 types of solar systems, the on-grid solar system for homes is the most affordable option" },
    { icon: <Sun className="w-6 h-6" />, title: "Exclusive Solar Subsidy", desc: "The government offers a subsidy only on an on-grid solar system for residential homes (that use DCR panels)" }
  ];

  const installationSteps = [
    {
      step: 1,
      title: "Rooftop Inspection and Site Assessment",
      desc: "A trained engineer surveys your rooftop to map shadow-casting objects and determine the optimal panel orientation (usually south in India) and tilt angle (approximately equal to your latitude). This analysis maximizes sunlight exposure and long-term energy yield."
    },
    {
      step: 2,
      title: "Roof Mounting and Panel Clamping",
      desc: "Mounting structures are securely fixed to your roof using corrosion-protected rails and fasteners. Panels are then clamped onto these rails, following the manufacturer's torque specifications to prevent damage."
    },
    {
      step: 3,
      title: "Inverter Installation & Electrical Wiring",
      desc: "Solar strings (series-connected panels) are routed to the DC combiner box, then to the inverter, which converts DC into grid-compatible AC. AC output is channeled through an AC combiner box to your bi-directional meter, with all cables protected in conduit or trays."
    },
    {
      step: 4,
      title: "Earthing & Lightning Protection",
      desc: "Dedicated earthing rods and cables bond both DC and AC components to the ground, safeguarding against electrical faults. A lightning arrester mounted above the panels intercepts strikes and diverts surge energy safely to the earthing grid."
    },
    {
      step: 5,
      title: "System Commissioning & Monitoring Setup",
      desc: "Technicians verify string voltages, phase sequence, and inverter settings before energizing the system. Finally, the inverter is linked to your Wi-Fi for real-time performance monitoring, ensuring any issues are spotted and resolved promptly."
    }
  ];

    const components = [
    {
      icon: <Grid3x3 className="w-5 h-5 md:w-8 md:h-8" />,
      title: "Solar Panels",
      description: "Solar panels are the most visible part of the solar system. They're installed on the rooftop, facing the South direction. When sunlight falls on these panels, they absorb that sunlight and convert it into electricity.",
      note: "Solar electricity directly from the panels is DC power. Since homes require alternating current (AC), a solar inverter is needed to convert direct current into AC."
    },
    {
      icon: <Zap className="w-5 h-5 md:w-8 md:h-8" />,
      title: "Solar Inverter",
      description: "Without a solar inverter, the entire solar system would have been an impractical model. The solar inverter converts DC into AC.",
      note: "This conversion is essential because that's the only way to convert electricity generated from an on-grid solar system into a usable form (AC) that can run household appliances."
    },
    {
      icon: <Shield className="w-5 h-5 md:w-8 md:h-8" />,
      title: "Solar Module Mounting Structures",
      description: "These are the pillars that support solar panels. They must be of a standard grade so that they can withstand heavy winds during storms and cyclones and hold the weight of the solar panels for 25 years (that's the life of a solar system).",
      features: [
        "Withstand wind speeds as high as 170 kmph",
        "Prevent rusting for years because they have a high-density galvanized iron (HDGI) coating of 80 microns to withstand corrosion."
      ]
    },
    {
      icon: <Activity className="w-5 h-5 md:w-8 md:h-8" />,
      title: "Solar Accessories",
      description: "They might not sound that important in the entire setup, but solar accessories are as important as a panel, an inverter, or a mounting structure.",
      accessories: [
        {
          name: "AC and DC cables",
          desc: "They are required for wiring solar panels and connecting different parts to make the entire solar grid functional."
        },
        {
          name: "DC combiner boxes",
          desc: "A DC combiner box works like an isolation box. All the cables carrying DC current from the panels are isolated in this box. DC power coming from the panels can be as high as 1,000 volts, even more. It's dangerous (potentially lethal); hence, a DC combiner box is required. This box feeds the DC current into the solar inverter and the solar inverter produces alternating current."
        },
        {
          name: "AC combiner boxes",
          desc: "The AC power from the solar inverter is fed into an AC combiner box (all cables carrying the AC current from multiple inverters are combined in this box)."
        },
        {
          name: "Earthing strips and wires",
          desc: "Once the entire on-grid solar system is set up, earthing is done using earthing strips and wires."
        }
      ]
    },
    {
      icon: <ArrowDownUp className="w-5 h-5 md:w-8 md:h-8" />,
      title: "Bi-directional Meter",
      description: "Also known as a net meter, the bi-directional meter is basically designed to keep a track of electricity supplied to the grid and electricity imported from the grid.",
      note: "An on-grid solar system will not become functional until and unless the regular meter is replaced with a bidirectional meter."
    }
  ];

  const workingSteps = [
    {
      title: "Solar Energy Capture and DC Power Generation",
      content: "Solar panels, composed of photovoltaic (PV) cells, absorb photons from sunlight and free electrons within the cell's semiconductor material. This movement of electrons generates a direct current (DC). The total DC output depends on factors such as panel efficiency, sunlight intensity, and shading. Needless to say, higher irradiance yields more current."
    },
    {
      title: "DC-to-AC Conversion via the Solar Inverter",
      content: "The inverter is the heart of your solar system. It takes the panel-generated DC and inverts it into alternating current (AC), matching the frequency (50 Hz in India) and voltage of the local grid. Modern inverters also perform maximum power point tracking (MPPT) to continually adjust voltage/current inputs, extracting the highest possible power from your panels."
    },
    {
      title: "Bidirectional Meter Integration",
      content: "Once converted to grid-compliant AC, the electricity flows through a bi-directional (net) meter. This meter precisely records both incoming units drawn from the grid and outgoing units exported from your solar system, ensuring you're billed only for the net energy you consume."
    },
    {
      title: "Household Consumption of Solar-Generated AC",
      content: "During the day, your home's appliances, such as lights, fans, fridges, air conditioners, and electronics, draw AC power directly from the inverter output. Because solar power is typically the first source used, it reduces or altogether replaces the need to import electricity from the grid."
    },
    {
      title: "Exporting Excess Solar Power",
      content: "If your panels produce more electricity than your household consumes at any moment, the surplus AC automatically travels back through the bi-directional meter into the grid. Your meter records these exported units, which may earn you financial credit or feed-in benefits under your local net-metering policy."
    },
    {
      title: "Importing Grid Power When Needed",
      content: "After sunset or during low-sunlight periods when it's cloudy, the bi-directional meter switches to import mode if your solar output drops below your home's demand. It draws the shortfall from the grid, using up any previously accrued credits first, so your appliances continue running seamlessly without interruption."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Sun className="w-12 h-12 mr-3 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl font-bold">Aditya Solar Energy</h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">On-Grid Solar System Buying Guide</h2>
          <p className="text-lg md:text-xl opacity-90">Prices, Subsidy, Advantages and Disadvantages Disclosed</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Overview Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4 border-b-4 border-orange-500 pb-2 inline-block">Overview of On-Grid Solar Systems</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            An on-grid solar system is also known as a grid-tied system since it is connected to the main utility grid. One of the best things about installing on-grid solar at home is the subsidy you get. The Indian government offers homeowners a subsidy for installing a rooftop on-grid solar system ranging between Rs. 30,000 and Rs. 78,000 (depending upon the installed system capacity).
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
            <p className="font-semibold text-blue-900 mb-2">Price Examples:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>3 kW on-grid solar system price in Bhopal with subsidy: ~ Rs. 1,35,000</li>
              <li>5 kW on-grid solar system price in Bengaluru with subsidy: ~ Rs. 3,00,000</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 italic">
            *Please note: The prices above are indicative as of 29th April 2025. The final cost depends on various factors including city, DISCOM charges, product variant, panel type, system capacity, and more.
          </p>
        </section>


         {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 md:px-4 py-6 md:py-12">
        {/* Introduction */}
        <section className="mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">What is an On-grid Solar System?</h2>
          <div className="bg-white rounded-xl shadow-md p-4 md:p-8 border-l-4 border-blue-600">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4">
              An on-grid solar system (grid-tied) connects directly to the utility grid through a bi-directional meter (net meter). Most Indian homes with a reliable grid connection choose on-grid solar since this system is powerful enough to support all household energy requirements.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              The on-grid solar system is a careful compilation of many components, listed below, arranged together to convert sunlight into electricity:
            </p>
            <ul className="mt-3 md:mt-4 space-y-2 text-sm md:text-base text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Solar Panels</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>A solar inverter</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Solar module mounting structures</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>A bi-directional meter</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Solar accessories (AC and DC cables, AC and DC combiner boxes, conduit trays, lightning arrester, MC4 connectors)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Did You Know Box */}
        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl shadow-md p-4 md:p-6 mb-8 md:mb-16 border-l-4 border-amber-500">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">Did you know?</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            When maintained properly, an on-grid solar system can last for 25 years. Contrary to popular belief, cleaning your panels with sprinklers can actually damage them. To keep your system operating at its peak efficiency, be sure to sign up for professional after-sales services.
          </p>
        </div>

        {/* Components Section */}
        <section className="mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-8">What Are the On-Grid Solar System Components?</h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
            Here's a breakdown of how every single component in an on-grid solar system comes together to power your home.
          </p>
          
          <div className="space-y-4 md:space-y-8">
            {components.map((component, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-4 md:p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-blue-100 p-2 md:p-4 rounded-lg text-blue-600 flex-shrink-0">
                    {component.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-2 md:mb-4">{index + 1}. {component.title}</h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">{component.description}</p>
                    
                    {component.note && (
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 md:p-4 rounded">
                        <p className="text-xs md:text-sm font-semibold text-blue-900">Did you know?</p>
                        <p className="text-xs md:text-base text-gray-700 mt-1">{component.note}</p>
                      </div>
                    )}
                    
                    {component.features && (
                      <div className="mt-3 md:mt-4">
                        <p className="text-sm md:text-base font-semibold text-gray-800 mb-2">The best solar module mounting structures are prefabricated in precision labs. They're coated with hot-dip galvanizing on steel to make them rust-proof.</p>
                        <p className="text-sm md:text-base text-gray-700 mb-2">For instance, SolarSquare's Intelligent WindPro Mount™ 2.0 mounting structure, which is IIT-Bombay approved, can:</p>
                        <ul className="space-y-2">
                          {component.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-green-600 mr-2">✓</span>
                              <span className="text-xs md:text-base text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {component.accessories && (
                      <div className="mt-3 md:mt-4 space-y-3 md:space-y-4">
                        <p className="text-sm md:text-base font-semibold text-gray-800">Let's see how!</p>
                        {component.accessories.map((acc, idx) => (
                          <div key={idx} className="pl-3 md:pl-4 border-l-2 border-gray-200">
                            <p className="text-sm md:text-base font-semibold text-gray-800">{acc.name}:</p>
                            <p className="text-xs md:text-base text-gray-700">{acc.desc}</p>
                          </div>
                        ))}
                        <p className="text-xs md:text-sm text-gray-600 italic mt-3 md:mt-4">
                          Please note: all the DC cable connections are made using MC4 connectors.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Net Metering Benefits */}
        <section className="mb-8 md:mb-16">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-md p-4 md:p-8 border-l-4 border-green-600">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">How Net Metering Helps</h3>
            <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
              The net meter helps the discom track the power generated by the solar system, the power consumed, the power supplied to the grid, and the power imported.
            </p>
            <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
              At the end of every month, when the electricity bill is generated, the readings from the bidirectional meter give an account of:
            </p>
            <ul className="space-y-2 mb-4 md:mb-6">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-sm md:text-base text-gray-700">How many units were supplied to the grid</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-sm md:text-base text-gray-700">How many units were taken from the grid</span>
              </li>
            </ul>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 md:p-4">
                <p className="text-sm md:text-base text-gray-700">
                  <span className="font-semibold text-green-700">If you supply more units to the grid than you consumed:</span> Those units will be deducted from your bill. It will reduce the bill further.
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 md:p-4">
                <p className="text-sm md:text-base text-gray-700">
                  <span className="font-semibold text-blue-700">If you use extra units from the grid:</span> Those units would be added to your bill in addition to what your solar plant generated.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">How Does an On-grid Solar System Work?</h2>
          <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-8">
            Now you've seen how multiple on-grid solar system components come together, it makes sense to break down the process of sunlight getting converted into electricity.
          </p>
          <p className="text-base md:text-lg font-semibold text-gray-800 mb-4 md:mb-8">Here's how an on-grid solar system works:</p>
          
          <div className="space-y-4 md:space-y-6">
            {workingSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-4 md:p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-blue-600 text-white w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm md:text-base">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base md:text-xl font-bold text-gray-800 mb-2 md:mb-3">{step.title}</h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">{step.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

        {/* Subsidy Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4 border-b-4 border-orange-500 pb-2 inline-block">Solar Subsidy For On-Grid System</h2>
          <p className="text-gray-700 mb-6">The Indian government offers a subsidy when you install an on-grid solar system for home. This subsidy remains the same for all states in India.</p>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="border p-3 text-left">Solar System Size</th>
                  <th className="border p-3 text-left">Solar Subsidy (PM Surya Ghar Muft Bijli Yojana)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border p-3">1 kWp</td>
                  <td className="border p-3 font-semibold text-green-600">Rs. 30,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border p-3">2 kWp</td>
                  <td className="border p-3 font-semibold text-green-600">Rs. 60,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border p-3">3 kWp and higher</td>
                  <td className="border p-3 font-semibold text-green-600">Rs. 78,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4">
            <p className="font-bold text-yellow-900 mb-2">🎉 Special for UP Residents!</p>
            <p className="text-gray-700 mb-2">The state government of UP offers an additional subsidy on top of the central government subsidy:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li><strong>1-2 kW systems:</strong> Rs. 15,000/kW</li>
              <li><strong>Systems ≥2 kW:</strong> Rs. 30,000</li>
            </ul>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-4 border-orange-500 pb-2 inline-block">
            Advantages of On-Grid Solar System
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <div className="text-green-600 flex-shrink-0">{advantage.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{advantage.title}</h3>
                  <p className="text-gray-700 text-sm">{advantage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Disadvantages Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-4 border-orange-500 pb-2 inline-block">
            Limitation of On-Grid Solar System
          </h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <div className="flex items-start space-x-4">
              <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-red-900 text-xl mb-3">Power Outages</h3>
                <p className="text-gray-700 mb-4">
                  Although connection with the grid is a sure benefit, it's also a limitation. When there's a power cut from the grid, the on-grid solar system automatically shuts down. This interruption in the supply of power is known as a power outage.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Anti-Islanding Protection</p>
                  <p className="text-gray-700 text-sm">
                    The main reason an on-grid solar inverter is designed to automatically shut down if the grid fails is to eliminate safety risks. This feature protects electrical maintenance personnel from electric shocks while working on the grid.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <h3 className="font-bold text-blue-900 text-xl mb-3">So, which is better: off-grid or on-grid?</h3>
            <p className="text-gray-700 mb-3">
              Hands down, on-grid solar systems in urban areas with a reliable grid are unbeatable for meeting a home's power requirements.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>No costs related to battery upkeep</li>
              <li>More affordable than an off-grid solar system</li>
              <li>Government offers subsidy on on-grid systems, not off-grid</li>
            </ul>
            <p className="text-gray-800 font-semibold mt-4">
              ✅ If your power grid is reliable, investing in an on-grid solar system is the smarter choice!
            </p>
          </div>
        </section>

        {/* Installation Process */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-4 border-orange-500 pb-2 inline-block">
            How to Install an On-Grid Solar System at Home?
          </h2>
          
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 mb-6">
            <p className="font-bold text-yellow-900 mb-2">⚠️ Important Note:</p>
            <p className="text-gray-700">
              Installing rooftop solar is NOT a DIY task. You must leave it in the hands of experts because it's critical to identify rooftop capacity, determine shadow-free areas, set optimal tilt angles, and carry out safe installation.
            </p>
          </div>

          <div className="space-y-6">
            {installationSteps.map((step) => (
              <div key={step.step} className="flex items-start space-x-4 p-5 bg-gray-50 rounded-lg border-l-4 border-orange-500">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-2">Why Choose Aditya Solar Energy?</h2>
          <p className="text-xl mb-6 italic opacity-90">Making your journey from expensive electricity to free solar power easy!</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <h3 className="font-bold text-yellow-400 mb-2 text-lg">💰 Zero-Investment Solar Scheme</h3>
              <p className="text-sm">Easy loans and financing options where government subsidy offsets initial down payment. EMI schedules from 3 to 60 months available.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <h3 className="font-bold text-yellow-400 mb-2 text-lg">⚡ Swift Installation</h3>
              <p className="text-sm">No middlemen involved. Complete system setup executed by our team in 8 hours.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <h3 className="font-bold text-yellow-400 mb-2 text-lg">🛠️ Solid After-Sales Support</h3>
              <p className="text-sm">Minimum 45 maintenance visits over 5 years for deep cleaning and preventive checks.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <h3 className="font-bold text-yellow-400 mb-2 text-lg">🛡️ Leakage-Free Guarantee</h3>
              <p className="text-sm">HILTI AirTight chemical anchoring protects your roof. Rs. 1 lakh guarantee for 1 year.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 md:col-span-2">
              <h3 className="font-bold text-yellow-400 mb-2 text-lg">💵 Money-Back Guarantee</h3>
              <p className="text-sm">First and only solar company in India to offer money-back guarantee at Rs. 8 per unit if we fall short on promised generation.</p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-4 border-orange-500 pb-2 inline-block">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-left text-gray-900">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-900 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-900 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="p-5 bg-white border-t-2 border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
          <p className="mb-4 leading-relaxed">
            Installing an on-grid solar system is a big decision, and it's your right to be critical about it. When you choose the right quality components, a system you install today can last for at least 25 years.
          </p>
          <p className="mb-4 leading-relaxed">
            The solar panel installation cost in India varies from city to city, and you should trust a company that's highly rated by customers.
          </p>
          <p className="font-semibold text-lg">
            ☀️ The Indian government subsidy is available only till they meet the target of solarizing 1 crore homes under PM Surya Ghar Muft Bijli Yojana. Go solar now and get freedom from paying for electricity!
          </p>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Sun className="w-8 h-8 mr-2 text-yellow-400" />
            <h3 className="text-2xl font-bold">Aditya Solar Energy</h3>
          </div>
          <p className="opacity-90">Your Trusted Partner in Solar Solutions</p>
          <p className="text-sm mt-4 opacity-75">© 2025 Aditya Solar Energy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}