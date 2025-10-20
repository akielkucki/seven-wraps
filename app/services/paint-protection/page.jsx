'use client';

import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import { motion } from 'framer-motion';

/**
 * Paint Protection Service Page
 * @returns {JSX.Element}
 */
export default function PaintProtectionPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-black"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="text-9xl font-black text-blue-400/20 mb-4">02</div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter">
              <span className="bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent">
                PAINT PROTECTION
              </span>
            </h1>
            <div className="w-32 h-1 bg-blue-400 mx-auto mb-8"></div>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Advanced PPF technology with self-healing properties to safeguard your vehicle's finish from environmental damage
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/ppf.jpg"
                alt="Professional Paint Protection Film Installation"
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
              <h2 className="text-4xl font-bold text-blue-400 mb-6">Ultimate Paint Protection</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Self-Healing Technology</h3>
                    <p className="text-gray-300">Minor scratches disappear with heat application</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Chemical Resistance</h3>
                    <p className="text-gray-300">Protection against acids, bird droppings, and road salts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Impact Protection</h3>
                    <p className="text-gray-300">Shield against rock chips and road debris</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Invisible Coverage</h3>
                    <p className="text-gray-300">Crystal clear film maintains your paint's original appearance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-400/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Coverage Options</h3>
                <div className="space-y-4">
                  {[
                    {
                      name: 'Partial Front',
                      description: 'Hood, Bumper, Mirrors',
                      coverage: 0.25
                    },
                    {
                      name: 'Full Front',
                      description: 'Full Hood, Fenders, Bumper',
                      coverage: 0.45
                    },
                    {
                      name: 'Track Package',
                      description: 'High-Impact Areas',
                      coverage: 0.70
                    },
                    {
                      name: 'Full Vehicle',
                      description: 'Complete Protection',
                      coverage: 1.0
                    }
                  ].map((option, index) => (
                      <motion.div
                          key={option.name}
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
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            transition: { duration: 0.3 }
                          }}
                          className={`flex justify-between items-center py-4 px-4 ${
                              index < 3 ? 'border-b border-gray-700' : ''
                          } rounded-lg cursor-pointer relative overflow-hidden`}
                      >
                        <motion.div
                            initial={{ width: '0%' }}
                            animate={{ width: `${100 * option.coverage}%` }}
                            transition={{
                              duration: 1,
                              delay: index * 0.1 + 0.3,
                              ease: "easeOut"
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/30"
                        />
                        <span className="text-white font-medium relative z-10">{option.name}</span>
                        <span className="text-gray-300 relative z-10">{option.description}</span>
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
            <h2 className="text-5xl font-bold text-blue-400 mb-4">Protection in Action</h2>
            <p className="text-xl text-gray-300">See how PPF preserves your vehicle's finish</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Image Placeholder 1 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Installation Process</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 2 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Self-Healing Demo</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 3 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Full Front Coverage</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 4 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Precision Cutting</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 5 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Edge Finishing</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 6 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Completed Project</span>
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
          <h2 className="text-4xl font-bold text-blue-400 mb-6">Protect Your Investment</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Preserve your vehicle's paint with advanced PPF technology and professional installation
          </p>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-30"></div>
            <button className="relative px-12 py-6 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-black text-xl rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl">
              GET FREE QUOTE
            </button>
          </div>
          <div className="mt-6 flex justify-center space-x-8 text-gray-400">
            <span>10-Year Warranty</span>
            <span>•</span>
            <span>Self-Healing Technology</span>
            <span>•</span>
            <span>Expert Installation</span>
          </div>
        </div>
      </section>
    </div>
  );
}
