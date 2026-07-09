import React, { useState } from 'react';
import { Calendar, Shield, Crown, Sparkles, Layers, Activity, ChevronRight, CheckCircle, HelpCircle, ChevronDown, ChevronUp, MessageCircle, Phone } from 'lucide-react';
import { Service } from '../types';

interface ServiceDetailProps {
  services: Service[];
  slug: string;
  onNavigate: (path: string) => void;
}

export default function ServiceDetail({ services, slug, onNavigate }: ServiceDetailProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Find standard service or handle combined "dental-veneers-smile-designing"
  let service = services.find((s) => s.slug === slug);

  if (!service && slug !== 'dental-veneers-smile-designing') {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md text-center max-w-md space-y-6">
          <HelpCircle className="w-16 h-16 text-teal-500 mx-auto" />
          <h1 className="font-display text-2xl font-bold text-slate-900">Service Not Found</h1>
          <p className="text-slate-500 text-sm leading-relaxed">
            The requested clinical speciality has either been modified or resides under another terminology.
          </p>
          <button
            onClick={() => onNavigate('/services')}
            className="w-full bg-slate-950 hover:bg-slate-900 text-white font-bold py-3 rounded-xl text-sm transition-all cursor-pointer"
          >
            Browse Clinical Specialties
          </button>
        </div>
      </div>
    );
  }

  // Define data values, substituting combined data if slug is "dental-veneers-smile-designing"
  let title = service?.title || '';
  let duration = service?.duration || '';
  let iconName = service?.icon || 'Sparkles';
  let fullDescription = service?.fullDescription || '';
  let benefits = service?.benefits || [];
  let procedure = service?.procedure || [];
  let whyChooseCcdc = service?.whyChooseCcdc || '';
  let faqs = service?.faqs || [];

  if (slug === 'dental-veneers-smile-designing') {
    title = 'Dental Veneers & Smile Designing (Combined)';
    duration = '2-3 sessions over 7-10 days';
    iconName = 'Sparkles';
    fullDescription = 'Dental Veneers and Smile Designing are complementary clinical procedures that harmonize tooth structure and overall facial aesthetics. Dental Veneers are ultra-thin, personalized shells crafted from premium glass-ceramic or composite resin and bonded directly to the front of teeth to address superficial enamel chips, permanent discoloration, or minor gaps. Smile Designing is a comprehensive visual planning sequence that evaluates tooth proportions, gum lines, lip alignment, and skin tone to map out a balanced, natural-looking tooth restoration plan.';
    benefits = [
      'Addresses permanent stains, gaps, minor chips, and asymmetrical wear',
      'Minimally invasive front-surface preparation that preserves maximum natural enamel',
      'Uses premium glass-ceramics that mimic natural light transmission',
      'Computerized facial symmetry planning tailored strictly to individual lip and smile lines'
    ];
    procedure = [
      'Symmetry consultation, clinical photography, and intraoral study modeling',
      'Computerized smile analysis and custom visual preview using diagnostic mockups',
      'Conservative preparation of outer enamel (typically 0.3 - 0.5mm)',
      'Fabrication by expert dental ceramists and precise chemical bonding'
    ];
    whyChooseCcdc = 'Dr. Vikramaditya Sabharwal applies his 18 years of clinical expertise—drawing on specialized restorative and cosmetic dental techniques refined during his clinical training at PGI Rohtak and his work at Apollo Ludhiana—to design balanced, safe, and beautifully contoured smiles.';
    faqs = [
      { question: 'What is the distinction between veneers and smile designing?', answer: 'Dental veneers are a specific restorative material (thin porcelain or composite shells) bonded to individual teeth. Smile designing is the overarching clinical blueprint that plans how veneers, crowns, or minor contouring combine to achieve perfect harmony with your unique facial features.' },
      { question: 'Are porcelain veneers permanent?', answer: 'Veneers are bonded using high-strength adhesives. While the physical veneer typically lasts between 10 to 15 years with standard oral hygiene, the process is generally non-reversible because a tiny micro-layer of natural enamel is carefully prepared beforehand.' }
    ];
  }

  const getIcon = (name: string) => {
    switch (name) {
      case 'Shield': return <Shield className="w-12 h-12" />;
      case 'Crown': return <Crown className="w-12 h-12" />;
      case 'Sparkles': return <Sparkles className="w-12 h-12" />;
      case 'Layers': return <Layers className="w-12 h-12" />;
      case 'Activity': return <Activity className="w-12 h-12" />;
      default: return <Sparkles className="w-12 h-12" />;
    }
  };

  // WhatsApp click handler utilizing CCDC's real number
  const handleWhatsAppClick = () => {
    const formattedText = encodeURIComponent(`Hello CCDC, I would like to inquire about the ${title} treatment.`);
    window.open(`https://wa.me/919815152345?text=${formattedText}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16" id={`service-detail-${slug}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <div className="mb-8 text-left">
          <button
            onClick={() => onNavigate('/services')}
            className="inline-flex items-center space-x-1 text-sm font-bold text-teal-600 hover:text-teal-700 cursor-pointer"
          >
            <span>← Back to Services Overview</span>
          </button>
        </div>

        {/* Hero Card */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden text-left space-y-10">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-8 border-b border-slate-100">
            <div className="bg-teal-50 text-teal-600 p-4.5 rounded-2xl shrink-0">
              {getIcon(iconName)}
            </div>
            <div>
              <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-1">
                Clinical Treatment Detail
              </span>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight leading-tight">
                {title}
              </h1>
              <p className="text-sm font-medium text-slate-500 mt-2 flex flex-wrap items-center gap-2">
                <span>Standard Treatment Duration:</span>
                <span className="font-bold text-teal-600 bg-teal-50 px-2.5 py-0.5 rounded text-xs">{duration}</span>
              </p>
            </div>
          </div>

          {/* Plain Language Clinical Overview */}
          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-slate-950">
              Factual Clinical Description
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {fullDescription}
            </p>
          </div>

          {/* Why Choose CCDC Section (Real Experience Citation) */}
          {whyChooseCcdc && (
            <div className="bg-teal-50/40 border border-teal-500/10 rounded-2xl p-6 sm:p-8 space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-teal-500/5 rounded-full blur-xl pointer-events-none"></div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-teal-600" />
                <h3 className="font-display text-sm font-bold text-teal-900 uppercase tracking-wider">
                  Why Choose CCDC For This Procedure?
                </h3>
              </div>
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
                {whyChooseCcdc}
              </p>
            </div>
          )}

          {/* Benefits */}
          <div className="space-y-5 bg-slate-50/50 p-6 sm:p-8 rounded-2xl border border-slate-100">
            <h2 className="font-display text-lg font-bold text-slate-950">
              Key Procedural Benefits
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start space-x-3 text-sm text-slate-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Procedure Timeline Steps */}
          <div className="space-y-6">
            <h2 className="font-display text-xl font-bold text-slate-950">
              Our Clinical Protocol
            </h2>
            <div className="relative border-l border-teal-100 pl-6 ml-3.5 space-y-8 py-2">
              {procedure.map((step, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-[32px] top-1 bg-teal-500 text-white w-5.5 h-5.5 rounded-full flex items-center justify-center text-[10px] font-extrabold border-4 border-white shadow">
                    {idx + 1}
                  </span>
                  <h3 className="font-display font-bold text-slate-900 text-base leading-none mb-1.5">
                    Stage {idx + 1}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Service FAQ Accordion */}
          {faqs && faqs.length > 0 && (
            <div className="space-y-5 pt-4">
              <h2 className="font-display text-xl font-bold text-slate-950">
                Frequently Asked Procedural Questions
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="border border-slate-100 rounded-2xl overflow-hidden bg-white"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full text-left px-5 py-4 font-bold text-slate-900 hover:bg-slate-50 flex justify-between items-center text-sm sm:text-base focus:outline-none"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? <ChevronUp className="w-5 h-5 text-teal-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-50 bg-slate-50/20">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Combined WhatsApp & Contact CTA Card */}
          <div className="bg-gradient-to-r from-teal-800 to-sky-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2.5 text-center md:text-left max-w-lg">
              <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block">Direct Clinical Contact</span>
              <h3 className="font-display font-bold text-2xl tracking-tight">Have Questions About This Treatment?</h3>
              <p className="text-sky-100 text-sm leading-relaxed">
                Connect directly with our clinic on WhatsApp for fast, plain-language procedural information or request a booking session online.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0 justify-center">
              <button
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-6 py-4 rounded-xl text-sm shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>Chat on WhatsApp</span>
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="bg-white text-teal-950 hover:bg-slate-50 font-bold px-6 py-4 rounded-xl text-sm shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer border border-transparent"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
