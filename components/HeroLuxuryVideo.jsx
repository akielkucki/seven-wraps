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

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight">
          <span className="block font-extralight">SEVEN</span>
          <span className="font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            WRAPS
          </span>
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-lg hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-xl">
            <span className="flex items-center gap-2">
              Get a Quote
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
            View Gallery
          </button>
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
