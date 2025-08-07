'use client';

import HeroLuxuryVideo from '../components/HeroLuxuryVideo';
import Services from '../components/Services';
import Navbar from '../components/Navbar';
import IntroSequence from '../components/IntroSequence';
import { useState, useEffect } from 'react';

/**
 * SevenWraps Luxury Hero Showcase - Premium automotive hero designs
 * @returns {JSX.Element}
 */
export default function HeroShowcase() {
  const [showIntro, setShowIntro] = useState(false);
  
  useEffect(() => {
    // Check if intro has been shown in this session
    const hasSeenIntro = sessionStorage.getItem('sevenWrapsIntroSeen');
    
    if (!hasSeenIntro) {
      setShowIntro(true);
    }
  }, []);
  
  const handleIntroComplete = () => {
    setShowIntro(false);
    // Mark intro as seen in this session
    sessionStorage.setItem('sevenWrapsIntroSeen', 'true');
  };

  

  return (
    <>
      <style jsx global>{`
        html, body {
          overflow-x: hidden;
          overscroll-behavior: none;
        }
        
        body {
          position: relative;
          min-height: 100vh;
        }
        
        /* Prevent overscroll and rubber band effect */
        html {
          overscroll-behavior-y: none;
        }
      `}</style>
      
      <div className="min-h-screen overflow-x-hidden relative" style={{scrollBehavior: 'smooth'}}>
        {/* Intro Sequence */}
        {showIntro && <IntroSequence onComplete={handleIntroComplete} />}
        
        {/* Navigation - Hidden during intro */}
        {!showIntro && <Navbar />}

        {/* Hero Content - Anchored to top */}
        <div className="relative min-h-screen">
          <HeroLuxuryVideo />
        </div>

        {/* Services Section - Flowing Timeline Design */}
        <section className="bg-black text-white py-32 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-purple-500/5"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Header */}
           <Services />

            {/* Call to Action */}
            <div className="text-center mt-32">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl opacity-30"></div>
                <button className="relative px-16 py-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black text-2xl rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl">
                  BEGIN YOUR TRANSFORMATION
                </button>
              </div>
              <div className="mt-8 flex justify-center space-x-8 text-gray-400">
                <span>Free Consultation</span>
                <span>•</span>
                <span>Premium Results</span>
                <span>•</span>
                <span>Lifetime Support</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
