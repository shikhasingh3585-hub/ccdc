import React from 'react';
import { Shield, Crown, Sparkles, Layers, Activity, ArrowRight, Check } from 'lucide-react';
import { Service } from '../types';

interface ServicesProps {
  services: Service[];
  onNavigate: (path: string) => void;
}

export default function Services({ services, onNavigate }: ServicesProps) {
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-8 h-8" />;
      case 'Crown': return <Crown className="w-8 h-8" />;
      case 'Sparkles': return <Sparkles className="w-8 h-8" />;
      case 'Layers': return <Layers className="w-8 h-8" />;
      case 'Activity': return <Activity className="w-8 h-8" />;
      default: return <Activity className="w-8 h-8" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16" id="services-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">Clinical Framework</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-950 tracking-tight">
            Comprehensive Dental Specialities
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            CCDC combines state-of-the-art computer-guided surgery and advanced laser sterilization to deliver the safest dental care in Chandigarh, India.
          </p>
        </div>

        {/* Services Grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-slate-100 rounded-3xl p-8 hover:border-teal-500/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div className="space-y-6">
                <div className="bg-teal-50 text-teal-600 w-14 h-14 rounded-2xl flex items-center justify-center font-bold group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                  {getIcon(service.icon)}
                </div>
                <div>
                  <h2 className="font-display font-bold text-slate-950 text-2xl tracking-tight mb-2">
                    {service.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Benefits Quick List */}
                <div className="space-y-2 pb-6 border-b border-slate-50">
                  {service.benefits.slice(0, 2).map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs font-semibold text-slate-600">
                      <Check className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex justify-between items-center text-xs font-bold text-teal-600 uppercase tracking-widest mt-auto">
                <span>Duration: {service.duration}</span>
                <button
                  onClick={() => onNavigate(`/services/${service.slug}`)}
                  className="hover:text-teal-700 flex items-center space-x-1 cursor-pointer"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empanelment Disclaimer Strip */}
        <div className="mt-20 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="space-y-2">
            <span className="text-xs text-teal-400 font-bold uppercase tracking-widest block">ECHS Army Welfare</span>
            <h3 className="font-display text-2xl font-bold tracking-tight">Empanelled Dental Center in Chandigarh</h3>
            <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
              Serving the defense veterans community. Centre For Complete Dental Care is proud to be officially empanelled with the **ECHS Army Chandimandir**, providing standard empanelled dental diagnostics and therapies.
            </p>
          </div>
          <div className="shrink-0">
            <button
              onClick={() => onNavigate('/contact')}
              className="bg-white text-teal-950 hover:bg-slate-100 font-bold px-8 py-3.5 rounded-xl text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              Verify Empanelment & Book
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
