'use client';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
/**
 * Hero Option 1: Luxury Automotive Showcase with Video Background
 * Premium design featuring video background with elegant overlay
 * @returns {JSX.Element}
 */


export default function HeroLuxuryVideo() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 bg-black">


        {/* Bottom Half - Second Video */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <p className="text-lg">Second video not supported.</p>
            </div>
          </div>
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={'flex items-center gap-3 py-4 px-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-gray-700/50'}
        >
          <div className="flex items-center gap-1">
            {Array.from({length: 5}).map((_, index) => (
                <motion.div
                    key={index}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: 'backOut'
                    }}
                    whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                >
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </motion.div>
            ))}
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold">5.0 Stars on Google</span>
            <span className="text-gray-400 text-sm">Rated by 200+ customers</span>
          </div>
        </motion.div>
        {/* Main Heading */}
          <div className="relative overflow-hidden">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight">
                  {/* SEVEN - reveals left to right */}
                  <motion.span
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="block font-extralight text-white relative overflow-hidden"
                  >
                      <motion.span
                          initial={{ clipPath: 'inset(0 100% 0 0)' }}
                          animate={{ clipPath: 'inset(0 0% 0 0)' }}
                          transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
                          className="block"
                      >
                          SEVEN
                      </motion.span>
                      {/* Vertical line moving left to right */}
                      <motion.div
                          initial={{ left: '0%' }}
                          animate={{ left: '100%' }}
                          transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
                          className="absolute top-0 bottom-0 w-[2px] bg-white"
                      />
                  </motion.span>

                  {/* WRAPS - reveals right to left */}
                  <motion.span
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="relative overflow-hidden block"
                  >
                      <motion.span
                          initial={{ clipPath: 'inset(0 0 0 100%)' }}
                          animate={{ clipPath: 'inset(0 0 0 0%)' }}
                          transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
                          className="font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent block"
                      >
                          WRAPS
                      </motion.span>
                      {/* Vertical line moving right to left */}
                      <motion.div
                          initial={{ right: '0%' }}
                          animate={{ right: '100%' }}
                          transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
                          className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-400 to-yellow-500"
                      />
                  </motion.span>
              </h1>
          </div>

        {/* CTA Buttons */}
          <div

              className="flex flex-col sm:flex-row gap-4 justify-center"
          >
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.6, ease: 'easeOut' }}
              >
                  <motion.button

                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-white font-semibold rounded-lg overflow-hidden shadow-lg"
              >

                  <span className="relative flex items-center justify-center gap-2">
      Get a Quote
      <motion.svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </motion.svg>
    </span>
              </motion.button>
              </motion.div>
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.8, ease: 'easeOut' }}
              >
                  <motion.button
                      whileHover={{
                          scale: 1.05,
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          borderColor: 'rgba(255, 255, 255, 0.6)'
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="relative px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg backdrop-blur-sm overflow-hidden group"
                  >
                      <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                      />
                      <span className="relative">View Gallery</span>
                  </motion.button>
              </motion.div>
          </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 text-white animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-wider">Discover Excellence</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
