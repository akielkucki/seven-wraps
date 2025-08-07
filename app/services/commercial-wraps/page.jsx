'use client';

import Link from 'next/link';
import Navbar from '../../../components/Navbar';

/**
 * Commercial Wraps Service Page
 * @returns {JSX.Element}
 */
export default function CommercialWrapsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 via-transparent to-black"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="text-9xl font-black text-orange-400/20 mb-4">05</div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter">
              <span className="bg-gradient-to-r from-orange-400 via-white to-orange-400 bg-clip-text text-transparent">
                COMMERCIAL WRAPS
              </span>
            </h1>
            <div className="w-32 h-1 bg-orange-400 mx-auto mb-8"></div>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Professional fleet graphics and advertising solutions for maximum business visibility and impactful brand presence
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/Commerical.jpg"
                alt="Professional Commercial Vehicle Wraps"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-orange-400 mb-6">Drive Your Business Forward</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Fleet Graphics</h3>
                    <p className="text-gray-300">Consistent branding across your entire vehicle fleet</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Mobile Advertising</h3>
                    <p className="text-gray-300">Turn your vehicles into moving billboards</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Custom Design</h3>
                    <p className="text-gray-300">Tailored graphics that match your brand identity</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">ROI Tracking</h3>
                    <p className="text-gray-300">Measurable results for your advertising investment</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-orange-400/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">Vehicle Types</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-white">Vans & Trucks</span>
                    <span className="text-gray-300">Maximum coverage area</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-white">Service Vehicles</span>
                    <span className="text-gray-300">Professional appearance</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-white">Box Trucks</span>
                    <span className="text-gray-300">Large format graphics</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-white">Trailers</span>
                    <span className="text-gray-300">Highway advertising</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-orange-400 mb-6">Proven Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Commercial vehicle wraps deliver exceptional return on investment compared to traditional advertising
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center bg-orange-400/5 rounded-2xl p-8">
              <div className="text-5xl font-black text-orange-400 mb-4">96%</div>
              <div className="text-lg font-semibold text-white mb-2">Recall Rate</div>
              <div className="text-gray-300">People remember vehicle graphics</div>
            </div>
            <div className="text-center bg-orange-400/5 rounded-2xl p-8">
              <div className="text-5xl font-black text-orange-400 mb-4">$0.70</div>
              <div className="text-lg font-semibold text-white mb-2">Cost Per Impression</div>
              <div className="text-gray-300">Lowest cost advertising medium</div>
            </div>
            <div className="text-center bg-orange-400/5 rounded-2xl p-8">
              <div className="text-5xl font-black text-orange-400 mb-4">30K+</div>
              <div className="text-lg font-semibold text-white mb-2">Daily Impressions</div>
              <div className="text-gray-300">Views per vehicle per day</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-orange-400 mb-4">Commercial Portfolio</h2>
            <p className="text-xl text-gray-300">See how we've helped businesses stand out</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Image Placeholder 1 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-orange-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Service Van Wrap</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 2 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-orange-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Box Truck Graphics</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 3 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-orange-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Fleet Branding</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 4 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-orange-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Delivery Vehicle</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 5 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-orange-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Trailer Wrap</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 6 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-orange-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Food Truck Design</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-orange-400 mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your vehicles into powerful marketing tools with professional commercial wrapping
          </p>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-xl opacity-30"></div>
            <button className="relative px-12 py-6 bg-gradient-to-r from-orange-400 to-red-500 text-white font-black text-xl rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl">
              GET FREE QUOTE
            </button>
          </div>
          <div className="mt-6 flex justify-center space-x-8 text-gray-400">
            <span>Free Design Mockup</span>
            <span>•</span>
            <span>ROI Analysis</span>
            <span>•</span>
            <span>Fleet Discounts</span>
          </div>
        </div>
      </section>
    </div>
  );
}
