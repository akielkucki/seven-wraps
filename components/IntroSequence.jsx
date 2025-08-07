'use client';

/**
 * SevenWraps Intro Sequence - 5-second animated intro
 * Fast vertical text transitions showcasing services, then company branding
 * @param {{ onComplete: () => void }} props - Callback when animation completes
 * @returns {JSX.Element}
 */
export default function IntroSequence({ onComplete }) {
  return (
    <>
      <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
        {/* Service Text Sequence */}
        <div className="text-center w-full px-4">
          {/* Rapid Service Text Animations */}
          <div className="relative w-full flex flex-col items-center h-full" style={{ transform: 'translateY(-20%)' }}>
            {/* DETAILING */}
            <div className="absolute text-3xl md:text-5xl lg:text-6xl font-bold text-white opacity-0 intro-text-1 whitespace-nowrap" >
              DETAILING
            </div>

            {/* WINDOW TINTING */}
            <div className="absolute text-3xl md:text-5xl lg:text-6xl font-bold text-white opacity-0 intro-text-2 whitespace-nowrap">
              WINDOW TINTING
            </div>

            {/* PAINT PROTECTION */}
            <div className="absolute text-3xl md:text-5xl lg:text-6xl font-bold text-white opacity-0 intro-text-3 whitespace-nowrap" >
              PAINT PROTECTION
            </div>

            {/* COLOR CHANGES */}
            <div className="absolute text-3xl md:text-5xl lg:text-6xl font-bold text-white opacity-0 intro-text-4 whitespace-nowrap" >
              COLOR CHANGES
            </div>

            {/* TRIM & ACCESSORIES */}
            <div className="absolute text-3xl md:text-5xl lg:text-6xl font-bold text-white opacity-0 intro-text-5 whitespace-nowrap">
              TRIM & ACCESSORIES
            </div>

            {/* COMMERCIAL WRAPS */}
            <div className="absolute text-3xl md:text-5xl lg:text-6xl font-bold text-white opacity-0 intro-text-6 whitespace-nowrap">
              COMMERCIAL WRAPS
            </div>

            {/* & MORE */}
            <div className="absolute text-3xl md:text-5xl lg:text-6xl font-bold text-yellow-400 opacity-0 intro-text-7 whitespace-nowrap">
              & MORE
            </div>
          </div>

          {/* Company Logo Transition */}
          <div className="relative w-full flex flex-col items-center">
            <div className="opacity-0 intro-company z-10 flex items-center justify-center">
              <img
                src="/logo.svg"
                alt="SevenWraps Logo"
                className="h-16 md:h-24 lg:h-32 w-auto"
              />
            </div>

          </div>
        </div>

        {/* Complete Sequence Fade Out */}
        <div
          className="absolute inset-0 bg-black opacity-0 pointer-events-none intro-fadeout"
          onAnimationEnd={onComplete}>
        </div>
      </div>

      <style jsx global>{`
        .intro-text-1 { animation: slideUpWheel 0.6s ease-out 0s forwards, fadeOut 0.25s ease-out 0.45s forwards; }
        .intro-text-2 { animation: slideUpWheel 0.6s ease-out 0.5s forwards, fadeOut 0.25s ease-out 0.85s forwards; }
        .intro-text-3 { animation: slideUpWheel 0.6s ease-out 0.9s forwards, fadeOut 0.25s ease-out 1.25s forwards; }
        .intro-text-4 { animation: slideUpWheel 0.6s ease-out 1.3s forwards, fadeOut 0.25s ease-out 1.65s forwards; }
        .intro-text-5 { animation: slideUpWheel 0.6s ease-out 1.7s forwards, fadeOut 0.25s ease-out 2.05s forwards; }
        .intro-text-6 { animation: slideUpWheel 0.6s ease-out 2.1s forwards, fadeOut 0.25s ease-out 2.45s forwards; }
        .intro-text-7 { animation: slideUpWheel 0.6s ease-out 2.5s forwards, fadeOut 0.3s ease-out 2.8s forwards; }
        .intro-company { animation: fadeInScale 1s ease-out 3.3s forwards; }
        .intro-fadeout { animation: fadeIn 0.5s ease-out 4.8s forwards; }
        
        @keyframes slideUpWheel {
          0% {
            transform: translateY(80px);
            opacity: 0;
          }
          20% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
            transform: translateY(0);
          }
          80% {
            opacity: 1;
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(-30px);
            opacity: 0.8;
          }
        }
        
        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.95) translateY(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </>
  );
}
