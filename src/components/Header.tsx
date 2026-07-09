import React, { useState } from 'react';
import { Menu, X, Phone, Calendar, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const mainNav = [
    { name: 'Home', path: '/' },
    { name: 'About Dr. Vikramaditya', path: '/about' },
    { name: 'Smile Gallery', path: '/gallery' },
    { name: 'Patient Reviews', path: '/reviews' },
    { name: 'Blog', path: '/blog' },
  ];

  const serviceSubpages = [
    { name: 'Services Overview', path: '/services' },
    { name: 'Dental Implants', path: '/services/dental-implants' },
    { name: 'Zirconia Crowns', path: '/services/zirconia-crowns' },
    { name: 'Dental Veneers & Smile Designing', path: '/services/dental-veneers-smile-designing' },
    { name: 'Invisalign Clear Aligners', path: '/services/invisalign' },
    { name: 'Root Canal Treatment (RCT)', path: '/services/root-canal-treatment' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const isServiceActive = currentPath.startsWith('/services');

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm" id="main-header">
      {/* Top Notification Bar / Verified Facts */}
      <div className="bg-gradient-to-r from-teal-800 to-sky-900 text-white text-[10px] sm:text-xs py-2 px-4" id="announcement-bar">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 gap-y-1 text-center font-medium">
            <span className="flex items-center">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
              ECHS Army Chandimandir Empanelled
            </span>
            <span className="hidden sm:inline text-teal-400/60">•</span>
            <span>Est. 2008</span>
            <span className="hidden md:inline text-teal-400/60">•</span>
            <span className="text-sky-200">PRIME TIME Award: Best Implant & Laser Dentistry</span>
          </div>
          <div className="flex items-center">
            <a href="tel:+919876768558" className="hover:text-sky-200 flex items-center space-x-1 bg-white/10 px-2 py-0.5 rounded sm:bg-transparent sm:p-0 transition-colors">
              <Phone className="w-3 h-3" />
              <span>+91 98767 68558</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Branding */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleLinkClick('/')}>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="bg-gradient-to-br from-teal-600 to-sky-600 p-2 sm:p-2.5 rounded-xl text-white shadow-md">
                <span className="font-display font-bold text-lg sm:text-xl tracking-tight">CCDC</span>
              </div>
              <div className="max-w-[180px] sm:max-w-xs">
                <span className="block font-display font-bold text-slate-950 text-sm sm:text-base lg:text-lg tracking-tight leading-tight">
                  Centre For Complete Dental Care
                </span>
                <span className="block text-[8px] sm:text-[10px] lg:text-xs font-medium text-slate-500 uppercase tracking-wider sm:tracking-widest mt-0.5">
                  Chandigarh • Dr. Vikramaditya
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-0.5 lg:space-x-1">
            <button
              onClick={() => handleLinkClick('/')}
              className={`px-2 py-2 lg:px-3 rounded-lg text-xs lg:text-sm font-semibold transition-all ${
                currentPath === '/' 
                  ? 'text-teal-600 bg-teal-50/50' 
                  : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleLinkClick('/about')}
              className={`px-2 py-2 lg:px-3 rounded-lg text-xs lg:text-sm font-semibold transition-all ${
                currentPath === '/about' 
                  ? 'text-teal-600 bg-teal-50/50' 
                  : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
              }`}
            >
              <span className="md:hidden lg:inline">About Dr. Vikramaditya</span>
              <span className="hidden md:inline lg:hidden">About</span>
            </button>

            {/* Services Dropdown Trigger */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center px-2 py-2 lg:px-3 rounded-lg text-xs lg:text-sm font-semibold transition-all ${
                  isServiceActive 
                    ? 'text-teal-600 bg-teal-50/50' 
                    : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="ml-1 w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-200" />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div 
                  className="absolute left-0 mt-1 w-60 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50 animate-fade-in"
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  {serviceSubpages.map((service) => (
                    <button
                      key={service.path}
                      onClick={() => handleLinkClick(service.path)}
                      className={`block w-full text-left px-4 py-2 text-xs lg:text-sm font-medium transition-colors ${
                        currentPath === service.path 
                          ? 'text-teal-600 bg-teal-50/70 font-semibold' 
                          : 'text-slate-600 hover:bg-slate-50 hover:text-teal-600'
                      }`}
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('/gallery')}
              className={`px-2 py-2 lg:px-3 rounded-lg text-xs lg:text-sm font-semibold transition-all ${
                currentPath === '/gallery' 
                  ? 'text-teal-600 bg-teal-50/50' 
                  : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
              }`}
            >
              <span className="md:hidden lg:inline">Smile Gallery</span>
              <span className="hidden md:inline lg:hidden">Gallery</span>
            </button>

            <button
              onClick={() => handleLinkClick('/reviews')}
              className={`px-2 py-2 lg:px-3 rounded-lg text-xs lg:text-sm font-semibold transition-all ${
                currentPath === '/reviews' 
                  ? 'text-teal-600 bg-teal-50/50' 
                  : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
              }`}
            >
              <span className="md:hidden lg:inline">Patient Reviews</span>
              <span className="hidden md:inline lg:hidden">Reviews</span>
            </button>

            <button
              onClick={() => handleLinkClick('/blog')}
              className={`px-2 py-2 lg:px-3 rounded-lg text-xs lg:text-sm font-semibold transition-all ${
                currentPath === '/blog' 
                  ? 'text-teal-600 bg-teal-50/50' 
                  : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
              }`}
            >
              Blog
            </button>

            <div className="pl-2">
              <button
                onClick={() => handleLinkClick('/contact')}
                className="flex items-center space-x-1.5 bg-gradient-to-r from-teal-600 to-sky-600 text-white px-3 py-2 lg:px-4 lg:py-2.5 rounded-xl text-xs lg:text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => handleLinkClick('/contact')}
              className="bg-teal-600 text-white p-2 rounded-xl shadow-md hover:bg-teal-700 transition-colors"
              title="Book Appointment"
            >
              <Calendar className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-slate-100 text-slate-600 hover:bg-slate-50 transition-colors focus:outline-none"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-inner animate-slide-down">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <button
              onClick={() => handleLinkClick('/')}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                currentPath === '/' ? 'bg-teal-50 text-teal-600' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleLinkClick('/about')}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                currentPath === '/about' ? 'bg-teal-50 text-teal-600' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              About Dr. Vikramaditya
            </button>

            {/* Mobile Expandable Services */}
            <div className="space-y-1">
              <span className="block px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Dental Specialities
              </span>
              {serviceSubpages.map((service) => (
                <button
                  key={service.path}
                  onClick={() => handleLinkClick(service.path)}
                  className={`block w-full text-left pl-8 pr-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    currentPath === service.path ? 'bg-teal-50/50 text-teal-600 font-semibold' : 'text-slate-600 hover:bg-slate-50/30'
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleLinkClick('/gallery')}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                currentPath === '/gallery' ? 'bg-teal-50 text-teal-600' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Smile Gallery
            </button>

            <button
              onClick={() => handleLinkClick('/reviews')}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                currentPath === '/reviews' ? 'bg-teal-50 text-teal-600' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Patient Reviews
            </button>

            <button
              onClick={() => handleLinkClick('/blog')}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                currentPath === '/blog' ? 'bg-teal-50 text-teal-600' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Blog
            </button>

            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => handleLinkClick('/contact')}
                className="w-full text-center bg-gradient-to-r from-teal-600 to-sky-600 text-white py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all"
              >
                Book Painless Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
