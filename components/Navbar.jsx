'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Navigation component with dropdown menu for services and full-screen mobile menu
 * @returns {JSX.Element}
 */
export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  function handleMenuToggle(e,bool) {
    if (bool === undefined) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    } else {
      setIsMobileMenuOpen(bool);
    }
    smoothScrollToLink(e);
  }
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

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
      }
    },
    open: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };

  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };
  function smoothScrollToLink(e) {
    const href = e.target.getAttribute('data-href');
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
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

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Services Dropdown */}
              <div
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="text-sm text-gray-300 hover:text-white transition-colors uppercase tracking-wide flex items-center" data-href={'#services'} onClick={(e) => smoothScrollToLink(e)}>
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

              <button data-href="#about" className="text-sm text-gray-300 hover:text-white transition-colors uppercase tracking-wide" onClick={(e) => smoothScrollToLink(e)}>
                About
              </button>

              <button data-href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors uppercase tracking-wide" onClick={(e) => smoothScrollToLink(e)}>
                Contact
              </button>

              {/* CTA Button */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-lg opacity-30"></div>
                <button className="relative px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-sm rounded-full hover:scale-110 transition-transform duration-300">
                  GET QUOTE
                </button>
              </div>
            </div>

            {/* Mobile Menu Button with Logo Animation */}
            <button
                className="md:hidden text-white p-2 relative z-50"
                onClick={() => handleMenuToggle(!isMobileMenuOpen)}
            >
              <motion.svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  animate={isMobileMenuOpen ? 'open' : 'closed'}
                  className="overflow-visible"
              >
                {/* Top hamburger line - becomes top bar of "7" */}
                <motion.path
                    variants={{
                      closed: {
                        d: 'M 6 10 L 26 10',
                        strokeWidth: 2
                      },
                      open: {
                        d: 'M 8 10 L 24 10 L 24 11',
                        strokeWidth: 2.5
                      }
                    }}
                    stroke="white"
                    strokeLinecap="round"
                    fill="none"
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                />

                {/* Middle line - becomes diagonal of "7" */}
                <motion.path
                    variants={{
                      closed: {
                        d: 'M 6 16 L 26 16',
                        strokeWidth: 2
                      },
                      open: {
                        d: 'M 23 11 L 14 24',
                        strokeWidth: 2.5
                      }
                    }}
                    stroke="white"
                    strokeLinecap="round"
                    fill="none"
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                />

                {/* Bottom line - fades or becomes subtle accent */}
                <motion.path
                    variants={{
                      closed: {
                        d: 'M 6 22 L 26 22',
                        strokeWidth: 2,
                        opacity: 1
                      },
                      open: {
                        d: 'M 13 24 L 15 24',
                        strokeWidth: 2,
                        opacity: 0.3
                      }
                    }}
                    stroke="white"
                    strokeLinecap="round"
                    fill="none"
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                />
              </motion.svg>
            </button>
          </div>
        </div>

        {/* Full Screen Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
              <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={menuVariants}
                  className="fixed inset-0 bg-black min-h-screen z-40 md:hidden"
              >
                {/* Background Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-orange-500/5 to-purple-500/5" />

                <motion.div
                    variants={containerVariants}
                    className="relative h-full flex flex-col justify-center px-8 py-20"
                >
                  {/* Services Section */}
                  <motion.div variants={itemVariants} className="mb-8">
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">Services</div>
                    <div className="space-y-4">
                      {services.map((service, index) => (
                          <motion.div key={index} variants={itemVariants}>
                            <Link
                                href={service.href}
                                onClick={() => handleMenuToggle(false)}
                                className="group block"
                            >
                              <div className="flex items-center justify-between py-3 border-b border-white/10">
                                <div>
                                  <div className={`text-2xl font-semibold ${service.color} group-hover:text-white transition-colors mb-1`}>
                                    {service.title}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {service.description}
                                  </div>
                                </div>
                                <svg
                                    className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </Link>
                          </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Main Navigation */}
                  <motion.div variants={itemVariants} className="space-y-4 mb-8">
                    <button
                        data-href="#about"
                        onClick={(e) => handleMenuToggle(e, false)}
                        className="block text-3xl font-light text-white hover:text-yellow-400 transition-colors py-2"
                    >
                      About
                    </button>
                    <button
                        data-href="#contact"
                        onClick={(e) => handleMenuToggle(e, false)}
                        className="block text-3xl font-light text-white hover:text-yellow-400 transition-colors py-2"
                    >
                      Contact
                    </button>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div variants={itemVariants}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => handleMenuToggle(e,false)}
                        className="w-full py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg rounded-full shadow-lg"
                        data-href={'#quote'}
                    >
                      GET QUOTE
                    </motion.button>
                  </motion.div>

                  {/* Social Links or Additional Info */}
                  <motion.div
                      variants={itemVariants}
                      className="mt-auto pt-8 text-center text-gray-500 text-sm"
                  >
                    <p>© 2024 SevenWraps. All rights reserved.</p>
                  </motion.div>
                </motion.div>
              </motion.div>
          )}
        </AnimatePresence>
      </nav>
  );
}