'use client';

import Link from 'next/link';
import Navbar from '../../../components/Navbar';

/**
 * Window Tint Service Page
 * @returns {JSX.Element}
 */
export default function WindowTintPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-black"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="text-9xl font-black text-yellow-400/20 mb-4">01</div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter">
              <span className="bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent">
                WINDOW TINT
              </span>
            </h1>
            <div className="w-32 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Premium ceramic and carbon films engineered for maximum heat rejection, UV protection, and privacy enhancement
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl">
              <img 
                src="/tint.jpg" 
                alt="Professional Window Tint Installation" 
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
              <h2 className="text-4xl font-bold text-yellow-400 mb-6">Why Choose Our Window Tint?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Premium Ceramic Films</h3>
                    <p className="text-gray-300">Advanced ceramic technology for superior heat rejection and clarity</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">UV Protection</h3>
                    <p className="text-gray-300">99% UV ray blocking to protect your interior and skin</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Professional Installation</h3>
                    <p className="text-gray-300">Expert installation with lifetime warranty</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-yellow-400/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Tint Options</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-white">5% (Limo Dark)</span>
                    <span className="text-gray-300">Maximum Privacy</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-white">15% (Dark)</span>
                    <span className="text-gray-300">High Privacy</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-white">35% (Medium)</span>
                    <span className="text-gray-300">Balanced</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-white">50% (Light)</span>
                    <span className="text-gray-300">Subtle Tint</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-yellow-400 mb-4">Our Work</h2>
            <p className="text-xl text-gray-300">See the difference professional window tinting makes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Image Placeholder 1 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-yellow-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Before/After Image 1</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 2 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-yellow-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Installation Process</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 3 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-yellow-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Finished Result</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 4 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-yellow-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Luxury Vehicle</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 5 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-yellow-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">SUV Tinting</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 6 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-yellow-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Detail Close-up</span>
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
          <h2 className="text-4xl font-bold text-yellow-400 mb-6">Ready to Enhance Your Vehicle?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get professional window tinting with premium materials and expert installation
          </p>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl opacity-30"></div>
            <button className="relative px-12 py-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black text-xl rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl">
              GET FREE QUOTE
            </button>
          </div>
          <div className="mt-6 flex justify-center space-x-8 text-gray-400">
            <span>Free Consultation</span>
            <span>•</span>
            <span>Lifetime Warranty</span>
            <span>•</span>
            <span>Professional Installation</span>
          </div>
        </div>
      </section>
    </div>
  );
}
