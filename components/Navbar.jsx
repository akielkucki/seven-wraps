'use client';

import Link from 'next/link';
import { useState } from 'react';

/**
 * Navigation component with dropdown menu for services
 * @returns {JSX.Element}
 */
export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    {
      title: 'Window Tint',
      href: '/services/window-tint',
      color: 'text-yellow-400',
      description: 'Premium ceramic films for heat rejection and privacy'
    },
    {
      title: 'Paint Protection',
      href: '/services/paint-protection',
      color: 'text-blue-400',
      description: 'Advanced PPF with self-healing technology'
    },
    {
      title: 'Color Changes',
      href: '/services/color-changes',
      color: 'text-purple-400',
      description: 'Complete vehicle transformation with premium wraps'
    },
    {
      title: 'Trim & Accessories',
      href: '/services/trim-accessories',
      color: 'text-green-400',
      description: 'Custom accent pieces and trim wrapping'
    },
    {
      title: 'Commercial Wraps',
      href: '/services/commercial-wraps',
      color: 'text-orange-400',
      description: 'Professional fleet graphics and advertising'
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <img
              src="/logo.svg"
              alt="SevenWraps Logo"
              className="h-8 md:h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-sm text-gray-300 hover:text-white transition-colors uppercase tracking-wide flex items-center">
                Services
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl transition-all duration-300 ${
                isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
              }`}>
                <div className="p-6">
                  <div className="grid gap-4">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="group flex items-start p-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                      >
                        <div className="flex-1">
                          <div className={`font-semibold text-sm ${service.color} group-hover:text-white transition-colors mb-1`}>
                            {service.title}
                          </div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                            {service.description}
                          </div>
                        </div>
                        <svg
                          className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="#about" className="text-sm text-gray-300 hover:text-white transition-colors uppercase tracking-wide">
              About
            </Link>

            <Link href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors uppercase tracking-wide">
              Contact
            </Link>

            {/* CTA Button */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-lg opacity-30"></div>
              <button className="relative px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-sm rounded-full hover:scale-110 transition-transform duration-300">
                GET QUOTE
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
