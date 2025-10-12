import React from 'react';
import { Shield, Mail, Lock, UserCheck, Bell, RefreshCw ,X } from 'lucide-react';

export default function PrivacyPolicy({setClick}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
    {/* Header */}
<div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-8 sm:py-12 md:py-16 px-4 relative">
  {/* X Button on top-left */}
  <div className="absolute top-4 left-4 group cursor-pointer">
    <X className="w-6 h-6 sm:w-8 sm:h-8"  onClick={()=>{
      setClick(false)
    }} />
    <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      Back
    </span>
  </div>

  <div className="max-w-4xl mx-auto">
    <div className="flex items-center justify-center mb-3 sm:mb-4">
      <Shield className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
    </div>
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 px-2">
      Privacy Policy
    </h1>
    <p className="text-center text-blue-100 text-base sm:text-lg">
      Aditya Solar Energy
    </p>
    <p className="text-center text-blue-100 mt-2 text-sm sm:text-base">
      Effective Date: October 12, 2025
    </p>
  </div>
</div>


      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Website Info */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8 border-l-4 border-blue-600">
          <p className="text-sm sm:text-base text-gray-700 mb-2 break-words">
            <strong>Website:</strong>{' '}
            <a 
              href="https://aditya-solar-services.vercel.app/" 
              className="text-blue-600 hover:underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://aditya-solar-services.vercel.app/
            </a>
          </p>
          <p className="text-sm sm:text-base text-gray-700 break-words">
            <strong>Contact Email:</strong>{' '}
            <a 
              href="mailto:adityasolarservices01@gmail.com" 
              className="text-blue-600 hover:underline break-all"
            >
              adityasolarservices01@gmail.com
            </a>
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-8 sm:mb-10">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
              <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              1. Information We Collect
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              We collect information you provide when using our website, such as:
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1 text-lg flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-gray-700">
                  Name, email, phone number, and address through online forms (for quotations, inquiries, or service requests).
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1 text-lg flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-gray-700">
                  Data collected automatically via tools like Google Analytics, Facebook Pixel, and WhatsApp chat widgets, including website usage and device information.
                </p>
              </div>
            </div>
            <div className="mt-4 p-3 sm:p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-sm sm:text-base text-gray-700 font-medium">
                We do not knowingly collect information from minors under 18 years of age.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-8 sm:mb-10">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="bg-green-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
              <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              2. How We Use Your Information
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              Your information is used to:
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-600 mr-3 mt-1 text-lg flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-gray-700">
                  Provide our products and services and respond to your inquiries.
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 mt-1 text-lg flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-gray-700">
                  Improve our website, services, and user experience.
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 mt-1 text-lg flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-gray-700">
                  Send administrative messages, updates, and promotional offers (if you've opted in).
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 mt-1 text-lg flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-gray-700">
                  Analyze website usage through tools like Google Analytics and Facebook Pixel.
                </p>
              </div>
            </div>
            <div className="mt-4 p-3 sm:p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
              <p className="text-sm sm:text-base text-gray-700">
                We do not sell or share your personal information with third parties, except with service providers who help us operate our website or comply with the law.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-8 sm:mb-10">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="bg-purple-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
              <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              3. Your Choices & Security
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1 text-lg flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-gray-700">
                  You can opt-out of marketing communications anytime by contacting us at{' '}
                  <a 
                    href="mailto:adityasolarservices01@gmail.com" 
                    className="text-blue-600 hover:underline break-all"
                  >
                    adityasolarservices01@gmail.com
                  </a>.
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1 text-lg flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-gray-700">
                  You can request access, correction, or deletion of your personal information.
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1 text-lg flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-gray-700">
                  We take reasonable measures to protect your information, but please be aware that no method of online storage or transmission is completely secure.
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 sm:p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 flex items-center">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-orange-600 flex-shrink-0" />
                Grievance Officer
              </h3>
              <div className="text-sm sm:text-base text-gray-700 space-y-1">
                <p><strong>Name:</strong> Mr. Aditya Deshmukh</p>
                <p><strong>Address:</strong> Old City, Telhara, Akola, Maharashtra</p>
                <p className="break-words">
                  <strong>Email:</strong>{' '}
                  <a 
                    href="mailto:adityasolarservices01@gmail.com" 
                    className="text-blue-600 hover:underline break-all"
                  >
                    adityasolarservices01@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-8 sm:mb-10">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="bg-indigo-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
              <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              4. Updates to This Policy
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <p className="text-sm sm:text-base text-gray-700">
              We may update this Privacy Policy from time to time. Updates will be posted on our website, and continued use of the website constitutes acceptance of the updated policy.
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg text-white text-center">
          <p className="text-base sm:text-lg font-semibold mb-2">
            Questions About Our Privacy Policy?
          </p>
          <p className="text-sm sm:text-base text-blue-100 mb-4">
            We're here to help. Contact us anytime.
          </p>
          <a 
            href="mailto:adityasolarservices01@gmail.com"
            className="inline-flex items-center bg-white text-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-blue-50 transition-colors"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}