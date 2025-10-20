'use client';

import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import { motion } from 'framer-motion';

/**
 * Trim & Accessories Service Page
 * @returns {JSX.Element}
 */
export default function TrimAccessoriesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-transparent to-black"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="text-9xl font-black text-green-400/20 mb-4">04</div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter">
              <span className="bg-gradient-to-r from-green-400 via-white to-green-400 bg-clip-text text-transparent">
                TRIM & ACCESSORIES
              </span>
            </h1>
            <div className="w-32 h-1 bg-green-400 mx-auto mb-8"></div>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Custom accent pieces and trim wrapping for personalized vehicle aesthetics with premium materials
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/trim.jpg"
                alt="Professional Trim & Accessories Installation"
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
              <h2 className="text-4xl font-bold text-green-400 mb-6">Premium Customization</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Interior Accents</h3>
                    <p className="text-gray-300">Dashboard, door panels, and console wrapping</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Exterior Trim</h3>
                    <p className="text-gray-300">Mirror caps, door handles, and window trim</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Carbon Fiber</h3>
                    <p className="text-gray-300">Authentic carbon fiber textures and patterns</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Custom Graphics</h3>
                    <p className="text-gray-300">Personalized designs and logos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-green-400/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Popular Options</h3>
                <div className="space-y-4">
                  {[
                    {
                      name: 'Piano Black',
                      description: 'High-gloss finish',
                      background: 'linear-gradient(135deg, rgba(20,20,20,0.9) 0%, rgba(10,10,10,0.95) 50%, rgba(20,20,20,0.9) 100%)',
                      shine: true
                    },
                    {
                      name: 'Brushed Metal',
                      description: 'Aluminum texture',
                      background: 'repeating-linear-gradient(90deg, rgba(180,180,190,0.3) 0px, rgba(200,200,210,0.4) 1px, rgba(180,180,190,0.3) 2px)',
                      shine: true
                    },
                    {
                      name: 'Carbon Fiber',
                      description: '3D textured pattern',
                      background: 'repeating-linear-gradient(45deg, rgba(40,40,45,0.5) 0px, rgba(40,40,45,0.5) 3px, rgba(25,25,30,0.6) 3px, rgba(25,25,30,0.6) 6px), repeating-linear-gradient(-45deg, rgba(35,35,40,0.4) 0px, rgba(35,35,40,0.4) 3px, rgba(20,20,25,0.5) 3px, rgba(20,20,25,0.5) 6px)',
                      shine: false
                    },
                    {
                      name: 'Wood Grain',
                      description: 'Natural wood look',
                      background: 'linear-gradient(90deg, rgba(101,67,33,0.4) 0%, rgba(139,90,43,0.5) 20%, rgba(101,67,33,0.4) 40%, rgba(120,80,40,0.45) 60%, rgba(101,67,33,0.4) 80%, rgba(139,90,43,0.5) 100%)',
                      shine: false
                    }
                  ].map((trim, index) => (
                      <motion.div
                          key={trim.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{
                            opacity: 1,
                            x: 0
                          }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.1,
                            ease: "easeOut"
                          }}
                          whileHover={{
                            scale: 1.02,
                            boxShadow: trim.shine ? '0 4px 20px rgba(255,255,255,0.15)' : '0 4px 20px rgba(0,0,0,0.4)',
                            transition: { duration: 0.3 }
                          }}
                          className={`flex justify-between items-center py-4 px-4 ${
                              index < 3 ? 'border-b border-gray-700' : ''
                          } rounded-lg cursor-pointer backdrop-blur-sm`}
                          style={{ background: trim.background }}
                      >
                        <span className="text-white font-medium">{trim.name}</span>
                        <span className="text-gray-300">{trim.description}</span>
                      </motion.div>
                  ))}
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
            <h2 className="text-5xl font-bold text-green-400 mb-4">Detail Perfection</h2>
            <p className="text-xl text-gray-300">See how custom accents transform your vehicle</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Image Placeholder 1 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-green-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Dashboard Wrapping</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 2 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-green-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Mirror Caps</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 3 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-green-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Carbon Fiber Trim</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 4 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-green-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Door Handles</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 5 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-green-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Custom Graphics</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 6 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-green-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Interior Details</span>
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
          <h2 className="text-4xl font-bold text-green-400 mb-6">Perfect the Details</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Add custom accents that make your vehicle uniquely yours with professional installation
          </p>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-xl opacity-30"></div>
            <button className="relative px-12 py-6 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-black text-xl rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl">
              GET FREE QUOTE
            </button>
          </div>
          <div className="mt-6 flex justify-center space-x-8 text-gray-400">
            <span>Custom Design</span>
            <span>•</span>
            <span>Premium Materials</span>
            <span>•</span>
            <span>Perfect Fit Guarantee</span>
          </div>
        </div>
      </section>
    </div>
  );
}
