import React from 'react';
import { Star, Quote, Shield, Award, CheckCircle, ExternalLink, MessageSquare, AlertCircle } from 'lucide-react';
import { Review } from '../types';

interface ReviewsProps {
  reviews: Review[];
  isUsingSheetReviews?: boolean;
}

export default function Reviews({ reviews, isUsingSheetReviews = false }: ReviewsProps) {
  // We only show reviews if they are from the live Google Sheet (real user testimonials)
  // Otherwise, we leave the section empty with a friendly placeholder.
  const hasRealTestimonials = isUsingSheetReviews && reviews && reviews.length > 0;

  return (
    <div className="bg-slate-50 min-h-screen py-16" id="patient-reviews-page">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">Patient Experiences</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-950 tracking-tight">
            Patient Satisfaction Reviews
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            At Centre For Complete Dental Care (CCDC), clinical integrity and gentle patient care guide every dental restoration. Explore patient feedback and testimonials.
          </p>
        </div>

        {/* Central Prominent Google Reviews CTA Button */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm text-center max-w-2xl mx-auto mb-16 space-y-6">
          <div className="flex justify-center items-center space-x-2">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Verified Clinic Reviews</span>
          </div>
          
          <h2 className="font-display text-2xl font-bold text-slate-950">
            Read Patient Feedback on Google
          </h2>
          
          <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Many of our patients share their dental experiences and reviews directly on our Google Business Profile. Tap below to view all of them.
          </p>

          <div className="pt-2">
            <a
              href="https://share.google/t1abCeX7RiKtKkCd8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2.5 bg-slate-950 hover:bg-slate-900 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-md group cursor-pointer"
            >
              <span>Read Our Reviews on Google</span>
              <ExternalLink className="w-4.5 h-4.5 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="space-y-8" id="testimonials-section">
          <div className="border-b border-slate-200 pb-4 text-left">
            <h2 className="font-display text-xl font-bold text-slate-950">
              Clinical Testimonials
            </h2>
          </div>

          {hasRealTestimonials ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between relative group"
                >
                  <div className="absolute top-6 right-8 text-teal-500/10 pointer-events-none">
                    <Quote className="w-12 h-12" />
                  </div>

                  <div className="space-y-6">
                    {/* Render stars if explicitly defined in the review data */}
                    {review.rating > 0 && (
                      <div className="flex space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                    )}

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic">
                      "{review.comment}"
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-50 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="block text-slate-900 font-bold text-base leading-tight">{review.name}</span>
                      {review.treatment && (
                        <span className="block text-xs font-semibold text-teal-600 mt-1 uppercase tracking-wider">{review.treatment}</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      {review.date && <span className="text-xs text-slate-400 font-medium">{review.date}</span>}
                      {review.verified && (
                        <span className="flex items-center space-x-1 bg-teal-50 text-teal-700 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-teal-100">
                          <CheckCircle className="w-3 h-3 text-teal-500" />
                          <span>Verified</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Friendly Empty Placeholder State */
            <div className="bg-white border-2 border-dashed border-slate-200 rounded-3xl p-10 sm:p-16 text-center max-w-3xl mx-auto space-y-6">
              <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto">
                <MessageSquare className="w-8 h-8" />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-display text-xl font-bold text-slate-900">
                  Testimonials Coming Soon
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-lg mx-auto">
                  We are currently organizing and reviewing patient consent forms for our clinical testimonials. Real patient feedback will automatically populate this section once they are added to the **Testimonials** sheet tab in your connected Google Sheet.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl max-w-md mx-auto border border-slate-100 text-left space-y-3">
                <div className="flex items-start space-x-2.5 text-xs text-slate-600">
                  <AlertCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block">Adding Testimonials:</span>
                    <span className="block mt-0.5 leading-relaxed">
                      Simply create a sheet tab named **Testimonials** (or **Reviews**) with columns: `Name`, `Comment`, `Treatment`, `Rating`, `Date`, and `Verified`. Any rows you add there will automatically sync and display here in real-time.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quality Standards Block */}
        <div className="mt-20 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-lg text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs text-teal-400 font-bold uppercase tracking-widest block">Award-Winning Standard</span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">Best Implant & Laser Dentistry Clinic</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                Centre For Complete Dental Care is proud to be recognized by the **PRIME TIME Awards** for clinical excellence. This award stands as a testament to our zero-compromise policies on absolute sterilization, multi-specialty laser equipment, and painless micro-surgical procedures led by Dr. Vikramaditya.
              </p>
            </div>
            
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-4 rounded-2xl text-center border border-slate-750">
                <span className="block font-display text-2xl font-bold text-teal-400">18+</span>
                <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mt-1">Years Experience</span>
              </div>
              <div className="bg-slate-800 p-4 rounded-2xl text-center border border-slate-750">
                <span className="block font-display text-2xl font-bold text-teal-400">ECHS</span>
                <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mt-1">Army Empanelled</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
