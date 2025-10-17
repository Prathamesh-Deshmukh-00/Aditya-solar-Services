import React from "react";
import { Calculator, Wind, Settings, FileText } from "lucide-react";
import solar_installitation from "../Images/solar_installitation.webp";
import { Link, Navigate } from "react-router-dom";

export default function SolarSquarePromo() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
            Why Choose Aditya Solar Energy for Your Solar Installation
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Get the best financing options, premium quality installations, and
            comprehensive support
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {/* Left Column - Features */}
          <div className="space-y-4 md:space-y-5 lg:space-y-6">
            {/* EMI Financing Feature */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 md:p-2.5 lg:p-3 rounded-lg md:rounded-xl flex-shrink-0 shadow-md">
                  <Calculator className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                    Easily approval for EMI financing
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm lg:text-base leading-relaxed">
                    We make your switch to solar affordable with our financing
                    plans. Plus you get instant EMI approvals!
                  </p>
                </div>
              </div>

              {/* Pricing Table */}
              <div className="overflow-x-auto -mx-2 px-2 mt-4">
                <table className="w-full min-w-[280px] border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-cyan-400 to-cyan-500">
                      <th className="text-left p-2 md:p-3 lg:p-4 text-white font-semibold text-xs md:text-sm lg:text-base rounded-tl-lg">
                        Solar System Size
                      </th>
                      <th className="text-center p-2 md:p-3 lg:p-4 text-white font-semibold text-xs md:text-sm lg:text-base">
                        Monthly Installment
                        <br />
                        <span className="text-[10px] md:text-xs font-normal">
                          (for 5 years)
                        </span>
                      </th>
                      <th className="text-center p-2 md:p-3 lg:p-4 text-white font-semibold text-xs md:text-sm lg:text-base rounded-tr-lg">
                        Monthly savings
                        <br />
                        <span className="text-[10px] md:text-xs font-normal">
                          (for 25 years)
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        size: "3kW",
                        installment: "₹2,165",
                        savings: "₹3,600+",
                      },
                      {
                        size: "4kW",
                        installment: "₹2,513",
                        savings: "₹4,800+",
                      },
                      {
                        size: "5kW",
                        installment: "₹2,803",
                        savings: "₹6,000+",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="p-2 md:p-3 lg:p-4 font-bold text-xs md:text-sm lg:text-base text-gray-900">
                          {row.size}
                        </td>
                        <td className="p-2 md:p-3 lg:p-4 text-center font-semibold text-xs md:text-sm lg:text-base text-gray-700">
                          {row.installment}
                        </td>
                        <td className="p-2 md:p-3 lg:p-4 text-center font-bold text-blue-600 text-xs md:text-sm lg:text-base">
                          {row.savings}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cyclone-proof Feature */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 md:p-2.5 lg:p-3 rounded-lg md:rounded-xl flex-shrink-0 shadow-md">
                  <Wind className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                    Strong & Safe Solar Structures
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm lg:text-base leading-relaxed">
                    Our solar panels are built to stay strong in all weather
                    conditions. Each system is carefully designed by expert
                    engineers. At Aditya Solar Energy, your safety always comes
                    first.
                  </p>
                </div>
              </div>
            </div>

            {/* Maintenance Promise */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 md:p-2.5 lg:p-3 rounded-lg md:rounded-xl flex-shrink-0 shadow-md">
                  <Settings className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                    5-year maintenance promise
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm lg:text-base leading-relaxed">
                    This includes quarterly deep cleaning, health checks &
                    repairs
                  </p>
                </div>
              </div>
            </div>

            {/* Government Subsidy */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 md:p-2.5 lg:p-3 rounded-lg md:rounded-xl flex-shrink-0 shadow-md">
                  <FileText className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                    Up to ₹78,000 government subsidy
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm lg:text-base leading-relaxed">
                    We take care of your subsidy paperwork. With us your subsidy
                    disbursal is quick and assured.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="space-y-4 md:space-y-5 lg:space-y-6">
            {/* Installation Image */}
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <img
                src={solar_installitation}
                alt="Professional solar panel installation on rooftop"
                className="w-full h-48 md:h-56 lg:h-64 object-cover"
              />
            </div>

            {/* Service Van Image */}
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <img
                src="https://imgs.search.brave.com/cg9LnETyQEwzCoMtz91rDEbITDZ6HjzEi9ChriXHhEY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9tYWxl/LW1vdmVycy11bmxv/YWRpbmctY2FyZGJv/YXJkLWJveGVzLWZv/cm0tdHJ1Y2stb3Zl/cmhlYWQtdmlldy1z/dHJlZXQtMjEwNjI2/NjczLmpwZw"
                alt="SolarSquare service team ready to install"
                className="w-full h-48 md:h-56 lg:h-64 object-cover"
              />
            </div>

            {/* Consultation Image */}
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <img
                src="https://imgs.search.brave.com/ZPvDCp0vfS-5qjFrDriPmZVNyCV3lWpXfwfvvcY0xsE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zc2Ut/d2Vic2l0ZS5zMy5h/cC1zb3V0aC0xLmFt/YXpvbmF3cy5jb20v/aG9tZS1wYWdlL2lu/X3RoZV9uZXdzXzQu/d2VicA"
                alt="Expert consultation with solar panel"
                className="w-full h-48 md:h-56 lg:h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 md:mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-6 md:p-8 shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Ready to Switch to Solar?
            </h3>
            <p className="text-blue-200 mb-4 text-sm md:text-base">
              Get your free consultation today and start saving on electricity
              bills
            </p>
            <Link
              to="/"
              className="inline-block bg-orange-500 text-white font-bold px-8 py-3 rounded-full hover:bg-orange-600 transform hover:scale-105 transition text-sm md:text-base"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
