import React from 'react';
import { Calendar, Award, Shield, CheckCircle, Clock } from 'lucide-react';

interface AboutProps {
  onNavigate: (path: string) => void;
  doctorPhotoUrl?: string;
}

export default function About({ onNavigate, doctorPhotoUrl }: AboutProps) {
  return (
    <div className="bg-slate-50 min-h-screen py-16" id="about-page">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Profile Card Header */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden text-left space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-8 border-b border-slate-100">
            {doctorPhotoUrl ? (
              <img
                src={doctorPhotoUrl}
                alt="Dr. Vikramaditya Sabharwal"
                className="w-24 h-auto rounded-2xl border-2 border-teal-500 shadow-md shrink-0"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            ) : (
              <div className="bg-teal-50 text-teal-600 p-5 rounded-2xl shrink-0">
                <Award className="w-12 h-12" />
              </div>
            )}
            <div>
              <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-1">
                Clinical Director & Chief Surgeon
              </span>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight leading-none">
                Dr. Vikramaditya Sabharwal
              </h1>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1.5">
                BDS, PGCOI • Certified Endodontist (European Academy)
              </p>
            </div>
          </div>

          {/* Professional Credentials & Timeline (Verified Facts ONLY) */}
          <div className="space-y-6">
            <h2 className="font-display text-xl font-bold text-slate-950">
              Clinical Path & Timeline
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Dr. Vikramaditya Sabharwal's professional path is defined by standard-setting institutions, dedicated community service, and advanced European dental specialization.
            </p>

            {/* Structured Verified Milestones */}
            <div className="relative border-l border-slate-200 pl-6 ml-3 space-y-8 py-2 text-left">
              
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 bg-teal-600 w-4.5 h-4.5 rounded-full border-4 border-white shadow"></span>
                <h3 className="font-display font-bold text-slate-900 text-base leading-none">PGI Rohtak</h3>
                <p className="text-xs text-teal-600 font-semibold uppercase tracking-wider mt-1">Initial Clinical Training</p>
                <p className="text-slate-500 text-sm mt-1">
                  Acquired extensive hands-on experience and foundational dental expertise at the prestigious PGI Rohtak.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 bg-teal-600 w-4.5 h-4.5 rounded-full border-4 border-white shadow"></span>
                <h3 className="font-display font-bold text-slate-900 text-base leading-none">Apollo Ludhiana</h3>
                <p className="text-xs text-teal-600 font-semibold uppercase tracking-wider mt-1">Advanced Dental Practice</p>
                <p className="text-slate-500 text-sm mt-1">
                  Served as a dental clinician at Apollo Ludhiana, delivering multi-specialty patient care and executing complex clinical protocols.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 bg-teal-600 w-4.5 h-4.5 rounded-full border-4 border-white shadow"></span>
                <h3 className="font-display font-bold text-slate-900 text-base leading-none">Bharat Vikas Parishad Chandigarh</h3>
                <p className="text-xs text-teal-600 font-semibold uppercase tracking-wider mt-1">HOD, Charitable Dental Wing</p>
                <p className="text-slate-500 text-sm mt-1">
                  Headed the charitable dental wing for 3 years, leading clinical services and offering vital oral healthcare to families in Chandigarh.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 bg-teal-600 w-4.5 h-4.5 rounded-full border-4 border-white shadow"></span>
                <h3 className="font-display font-bold text-slate-900 text-base leading-none">European Academy Endodontics</h3>
                <p className="text-xs text-teal-600 font-semibold uppercase tracking-wider mt-1">Specialized Endodontic Certification</p>
                <p className="text-slate-500 text-sm mt-1">
                  Achieved specialized postgraduate certification in Endodontics, implementing micro-surgical root canal treatments and modern tooth preservation techniques.
                </p>
              </div>

            </div>
          </div>

          {/* Verified Institutional & Award Badges */}
          <div className="border-t border-slate-100 pt-8 space-y-6">
            <h2 className="font-display text-xl font-bold text-slate-950">
              Institutional Empanelment & Recognition
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-slate-50 p-5 rounded-2xl flex items-start space-x-3.5 border border-slate-100">
                <Shield className="w-6 h-6 text-teal-600 shrink-0 mt-0.5" />
                <div className="text-left">
                  <span className="block font-bold text-slate-900 text-sm">Army Empanelled Status</span>
                  <span className="block text-xs text-slate-500 mt-1">
                    CCDC is empanelled with the **ECHS Army Chandimandir**, serving defense personnel, veterans, and their dependents.
                  </span>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl flex items-start space-x-3.5 border border-slate-100">
                <Award className="w-6 h-6 text-teal-600 shrink-0 mt-0.5" />
                <div className="text-left">
                  <span className="block font-bold text-slate-900 text-sm">PRIME TIME Award Winner</span>
                  <span className="block text-xs text-slate-500 mt-1">
                    Conferred the prestige award for **Best Implant & Laser Dentistry Clinic**, recognizing Dr. Sabharwal's clinical safety benchmarks.
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Core Philosophy Callout */}
          <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6 sm:p-8 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full blur-xl pointer-events-none"></div>
            <h3 className="font-display font-bold text-teal-900 text-sm uppercase tracking-wider mb-3">
              Personal Message from Dr. Vikramaditya
            </h3>
            <blockquote className="text-slate-800 text-sm sm:text-base leading-relaxed italic border-l-4 border-teal-600 pl-4">
              "We are strongly concerned to a patient's pain and its dental complaints throughout the dental treatment and try to make the procedures easy, painless and comfortable for the patient so that a relation of full faith and fairness can be built between patient and the doctor! So Smile, because the world Smiles with YOU!!"
            </blockquote>
          </div>

          {/* Book Appointment Inline Button */}
          <div className="pt-4 text-center">
            <button
              onClick={() => onNavigate('/contact')}
              className="bg-slate-950 hover:bg-slate-900 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-md cursor-pointer"
            >
              Request Consultation with Dr. Sabharwal
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
