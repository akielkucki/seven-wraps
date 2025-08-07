'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../../../components/Navbar';

/**
 * Color Changes Service Page
 * @returns {JSX.Element}
 */
export default function ColorChangesPage() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderMove = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    const container = e.currentTarget;

    const handleMouseMove = (moveEvent) => {
      const rect = container.getBoundingClientRect();
      const x = moveEvent.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, percentage)));
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    handleMouseMove(e);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 via-transparent to-black"></div>
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="text-9xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent opacity-30 mb-4">03</div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                COLOR CHANGES
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Complete vehicle transformation with premium vinyl wraps. From subtle elegance to bold statements
            </p>
          </div>

          {/* Featured Before/After Slider */}
          <div
            className="relative h-96 rounded-3xl overflow-hidden group cursor-ew-resize max-w-6xl mx-auto"
            onMouseMove={handleSliderMove}
            onMouseDown={handleMouseDown}
          >
            {/* Before Image (Green) */}
            <div className="absolute inset-0">
              <img
                src="/green.jpeg"
                alt="Vehicle Before Color Change"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>

            {/* After Image (Blue) - Clipped and Positioned */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)`
              }}
            >
              <img
                src="/blue.jpg"
                alt="Vehicle After Color Change"
                className="w-full h-full object-cover pointer-events-none"
                style={{
                  transform: 'translateY(30px)',
                  objectPosition: 'center center'
                }}
              />
            </div>

            {/* BEFORE Label */}
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full z-20">
              <span className="text-white font-bold text-sm">BEFORE</span>
            </div>

            {/* AFTER Label */}
            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full z-20">
              <span className="text-white font-bold text-sm">AFTER</span>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize z-10 group-hover:w-2 transition-all duration-0"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-0">
                <div className="w-3 h-3 border-2 border-gray-800 rounded-full"></div>
              </div>
            </div>

            {/* Instructions */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm px-6 py-2 rounded-full">
              <span className="text-white font-semibold text-sm">← Drag to Compare →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Transform Your Vision</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Premium Materials</h3>
                    <p className="text-gray-300">High-performance vinyls with superior conformability</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Color Matching</h3>
                    <p className="text-gray-300">Exact color reproduction and custom solutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Reversible Process</h3>
                    <p className="text-gray-300">Preserves original paint underneath</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Durability</h3>
                    <p className="text-gray-300">5-7 year lifespan with proper maintenance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Popular Finishes</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-white">Gloss</span>
                    <span className="text-gray-300">High-shine finish</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-white">Satin</span>
                    <span className="text-gray-300">Sophisticated matte</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-white">Chrome</span>
                    <span className="text-gray-300">Mirror-like reflection</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-white">Carbon Fiber</span>
                    <span className="text-gray-300">Textured premium look</span>
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
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Transformation Gallery</h2>
            <p className="text-xl text-gray-300">See the dramatic changes we create</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Image Placeholder 1 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Matte Black Wrap</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 2 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Chrome Blue</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 3 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Pearl White</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 4 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Carbon Fiber</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 5 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Neon Green</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>

            {/* Image Placeholder 6 */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Rose Gold</span>
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
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Ready for a Complete Transformation?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Create a unique look that reflects your personality with premium vinyl wrapping
          </p>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-full blur-xl opacity-30"></div>
            <button className="relative px-12 py-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-white font-black text-xl rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl">
              GET FREE QUOTE
            </button>
          </div>
          <div className="mt-6 flex justify-center space-x-8 text-gray-400">
            <span>Free Design Consultation</span>
            <span>•</span>
            <span>Premium Materials</span>
            <span>•</span>
            <span>Expert Installation</span>
          </div>
        </div>
      </section>
    </div>
  );
}
