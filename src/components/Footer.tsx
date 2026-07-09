import React from 'react';
import { MapPin, Phone, Mail, Clock, Shield, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 border-t border-slate-850" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: About & Empanelment */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-teal-600 p-2 rounded-lg text-white">
                <span className="font-display font-bold text-lg">CCDC</span>
              </div>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                Centre For Complete Dental Care
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Led by Dr. Vikramaditya Sabharwal, delivering 18 years of painless, laser-assisted, and computer-guided precision dental healthcare in Chandigarh, India.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center space-x-2 bg-slate-800 text-teal-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-teal-500/20">
                <Shield className="w-3.5 h-3.5" />
                <span>ECHS Army Chandimandir Empanelled</span>
              </span>
            </div>
          </div>

          {/* Column 2: Clinical Specialties */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-white mb-5">
              Specialized Care
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Dental Implants (PGCOI)', path: '/services/dental-implants' },
                { name: 'Zirconia Crowns', path: '/services/zirconia-crowns' },
                { name: 'Dental Veneers & Smile Designing', path: '/services/dental-veneers-smile-designing' },
                { name: 'Invisalign Clear Aligners', path: '/services/invisalign' },
                { name: 'Endodontic Root Canal (RCT)', path: '/services/root-canal-treatment' },
              ].map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => handleLinkClick(link.path, e)}
                    className="hover:text-teal-400 transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Clinical Information */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-white mb-1 text-left">
              Clinic Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-teal-400 mt-1 shrink-0" />
                <span className="text-slate-400">
                  Sector 22-B, Chandigarh, 160022, India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="tel:+919876768558" className="text-slate-400 hover:text-teal-400 transition-colors">
                  +91 98767 68558
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-slate-400">contact@ccdcchandigarh.com</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 bg-teal-950/40 text-teal-300 text-xs p-2.5 rounded-lg border border-teal-500/10">
              <Award className="w-4 h-4 shrink-0 text-amber-400" />
              <span>PRIME TIME Award for Best Implant Clinic</span>
            </div>
          </div>

          {/* Column 4: Hours & Schedule */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-white mb-5">
              Clinical Timings
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <div>
                  <span className="block text-white font-medium">Monday – Saturday</span>
                  <span className="block text-xs text-slate-400">10:00 AM – 1:30 PM</span>
                  <span className="block text-xs text-slate-400">04:30 PM – 8:00 PM</span>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
                *Prior appointment is highly recommended. Sundays closed.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Required Bottom Copyright Bar */}
      <div className="border-t border-slate-850 bg-slate-950 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 space-y-3 sm:space-y-0">
          <div>
            &copy; {new Date().getFullYear()} Centre For Complete Dental Care (CCDC). All Rights Reserved.
          </div>
          <div>
            <a
              href="https://zeradental.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors font-medium border-b border-dashed border-slate-700 hover:border-teal-400"
            >
              Designed & Developed by Zera Dental
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
