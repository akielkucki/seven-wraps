'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Services() {
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

        // Handle initial position
        handleMouseMove(e);
    };
    return (
        <>
            <div className="text-center mb-20" id={"services"}>
                <h2 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter">
                    <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                        SERVICES
                    </span>
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"></div>
                <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
                    Where precision meets artistry in automotive transformation
                </p>
            </div>

            {/* Services Flow */}
            <div className="max-w-7xl mx-auto">

                {/* Service 1 - Window Tint */}
                <div className="relative mb-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -top-8 -left-8 text-9xl font-black text-yellow-400/20">01</div>
                                <div className="relative z-10">
                                    <h3 className="text-5xl font-bold text-yellow-400 mb-6 tracking-tight">WINDOW TINT</h3>
                                    <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
                                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                        Premium ceramic and carbon films engineered for maximum heat rejection, UV protection, and privacy enhancement. Professional installation with precision that exceeds industry standards.
                                    </p>
                                    <Link href="/services/window-tint" className="flex items-center text-yellow-400 font-semibold text-lg group cursor-pointer">
                                        <span>DISCOVER MORE</span>
                                        <div className="ml-4 w-12 h-px bg-yellow-400 group-hover:w-20 transition-all duration-300"></div>
                                        <div className="w-3 h-3 bg-yellow-400 rotate-45 ml-2 group-hover:ml-4 transition-all duration-300"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative overflow-hidden rounded-3xl">
                                <img
                                    src="/tint.jpg"
                                    alt="Window Tint Service"
                                    className="w-full h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-black/15"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service 2 - Paint Protection */}
                <div className="relative mb-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-3xl">
                                <img
                                    src="/ppf.jpg"
                                    alt="Paint Protection Service"
                                    className="w-full h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-black/15"></div>
                            </div>
                        </div>
                        <div>
                            <div className="relative">
                                <div className="absolute -top-8 -right-8 text-9xl font-black text-blue-400/20">02</div>
                                <div className="relative z-10">
                                    <h3 className="text-5xl font-bold text-blue-400 mb-6 tracking-tight">PAINT PROTECTION</h3>
                                    <div className="w-20 h-1 bg-blue-400 mb-8"></div>
                                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                        Advanced PPF technology with self-healing properties to safeguard your vehicle's finish from environmental damage. Ultimate protection that preserves your investment.
                                    </p>
                                    <Link href="/services/paint-protection" className="flex items-center text-blue-400 font-semibold text-lg group cursor-pointer">
                                        <span>DISCOVER MORE</span>
                                        <div className="ml-4 w-12 h-px bg-blue-400 group-hover:w-20 transition-all duration-300"></div>
                                        <div className="w-3 h-3 bg-blue-400 rotate-45 ml-2 group-hover:ml-4 transition-all duration-300"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service 3 - Color Changes (Featured) */}
                <div className="relative mb-32">
                    <div className="text-center mb-16">
                        <div className="relative inline-block">
                            <div className="absolute -top-12 -left-12 text-9xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent opacity-30">03</div>
                            <h3 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-6 tracking-tight relative z-10">
                                COLOR CHANGES
                            </h3>
                        </div>
                        <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
                        <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
                            Complete vehicle transformation with premium vinyl wraps. From subtle elegance to bold statements, we bring your vision to life with unmatched precision and creativity.
                        </p>
                    </div>

                    {/* Before/After Slider */}
                    <div
                        className="relative h-96 rounded-3xl overflow-hidden group cursor-ew-resize"
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

                        {/* BEFORE Label - Above photos */}
                        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full z-20">
                            <span className="text-white font-bold text-sm">BEFORE</span>
                        </div>

                        {/* AFTER Label - Above photos */}
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

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

                        {/* Instructions */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm px-6 py-2 rounded-full">
                            <span className="text-white font-semibold text-sm">← Drag to Compare →</span>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <Link href="/services/color-changes" className="inline-flex items-center text-purple-400 font-semibold text-lg group cursor-pointer">
                            <span>EXPLORE TRANSFORMATIONS</span>
                            <div className="ml-4 w-16 h-px bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-24 transition-all duration-300"></div>
                            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rotate-45 ml-2 group-hover:ml-4 transition-all duration-300"></div>
                        </Link>
                    </div>
                </div>

                {/* Service 4 - Trim & Accessories */}
                <div className="relative mb-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -top-8 -left-8 text-9xl font-black text-green-400/20">04</div>
                                <div className="relative z-10">
                                    <h3 className="text-5xl font-bold text-green-400 mb-6 tracking-tight">TRIM & ACCESSORIES</h3>
                                    <div className="w-20 h-1 bg-green-400 mb-8"></div>
                                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                        Custom accent pieces and trim wrapping for personalized vehicle aesthetics with premium materials and expert craftsmanship that elevates every detail.
                                    </p>
                                    <Link href="/services/trim-accessories" className="flex items-center text-green-400 font-semibold text-lg group cursor-pointer">
                                        <span>DISCOVER MORE</span>
                                        <div className="ml-4 w-12 h-px bg-green-400 group-hover:w-20 transition-all duration-300"></div>
                                        <div className="w-3 h-3 bg-green-400 rotate-45 ml-2 group-hover:ml-4 transition-all duration-300"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative overflow-hidden rounded-3xl">
                                <img
                                    src="/trim.jpg"
                                    alt="Trim & Accessories Service"
                                    className="w-full h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-black/15"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service 5 - Commercial Wraps */}
                <div className="relative mb-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-3xl">
                                <img
                                    src="/Commerical.jpg"
                                    alt="Commercial Wraps Service"
                                    className="w-full h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-black/15"></div>
                            </div>
                        </div>
                        <div>
                            <div className="relative">
                                <div className="absolute -top-8 -right-8 text-9xl font-black text-orange-400/20">05</div>
                                <div className="relative z-10">
                                    <h3 className="text-5xl font-bold text-orange-400 mb-6 tracking-tight">COMMERCIAL WRAPS</h3>
                                    <div className="w-20 h-1 bg-orange-400 mb-8"></div>
                                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                        Professional fleet graphics and advertising solutions for maximum business visibility and impactful brand presence that drives results on the road.
                                    </p>
                                    <Link href="/services/commercial-wraps" className="flex items-center text-orange-400 font-semibold text-lg group cursor-pointer">
                                        <span>DISCOVER MORE</span>
                                        <div className="ml-4 w-12 h-px bg-orange-400 group-hover:w-20 transition-all duration-300"></div>
                                        <div className="w-3 h-3 bg-orange-400 rotate-45 ml-2 group-hover:ml-4 transition-all duration-300"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}