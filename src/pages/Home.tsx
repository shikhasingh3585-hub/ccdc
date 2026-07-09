import React from 'react';
import { Calendar, Award, Shield, Star, CheckCircle, ArrowRight, MessageSquare, Heart } from 'lucide-react';
import { Service, Review, BlogPost } from '../types';

interface HomeProps {
  services: Service[];
  reviews: Review[];
  blogPosts: BlogPost[];
  onNavigate: (path: string) => void;
  doctorPhotoUrl?: string;
}

export default function Home({ services, reviews, blogPosts, onNavigate, doctorPhotoUrl }: HomeProps) {
  // Grab a few services for the snapshot grid
  const featuredServices = services.slice(0, 3);
  const recentBlogs = blogPosts.slice(0, 3);
  const featuredReviews = reviews.slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen" id="home-page">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-teal-50/20 to-transparent py-20 lg:py-32 border-b border-sky-100/50">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
          {/* Elegant geometric blueprint accent background */}
          <svg className="w-full h-full text-teal-600" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start">
            
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              {/* Doctor's Photo (Mobile Only: Visible below lg) */}
              <div className="block lg:hidden">
                <div className="mx-auto max-w-sm rounded-3xl overflow-hidden border border-slate-100 shadow-md bg-white p-2">
                  <img
                    src={doctorPhotoUrl || 'https://lh3.googleusercontent.com/d/1c26KmvrkLJPv9cmNxHR12GTcsVk_Ewj-=w1000'}
                    alt="Dr. Vikramaditya Sabharwal"
                    className="w-full h-auto rounded-2xl"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                </div>
              </div>

              <div className="space-y-3.5 flex flex-col items-start">
                {/* Small Credential Strip */}
                <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-teal-600/90">
                  <span>18+ Years Experience</span>
                  <span className="w-1 h-1 rounded-full bg-teal-400"></span>
                  <span>Est. 2008</span>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-teal-100/60 text-teal-800 text-xs font-bold px-3 py-1.5 rounded-full border border-teal-200">
                  <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping"></span>
                  <span>Chandigarh's Elite Laser & Implant Dentistry</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-950 tracking-tight leading-none">
                Centre For Complete <br />
                <span className="bg-gradient-to-r from-teal-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
                  Dental Care (CCDC)
                </span>
              </h1>

              {/* Tagline */}
              <p className="font-display text-lg sm:text-xl font-semibold text-slate-700 max-w-xl leading-relaxed">
                18 Years of Painless, Precision Dentistry in Chandigarh
              </p>

              <p className="text-slate-600 text-base max-w-lg leading-relaxed">
                Led by Dr. Vikramaditya Sabharwal, BDS, PGCOI. Experience state-of-the-art computer-guided implants, European Academy-certified root canals, and micro-surgical laser aesthetics in Chandigarh.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('/contact')}
                  className="flex items-center justify-center space-x-2.5 bg-slate-950 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-slate-900 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </button>

                <a
                  href="https://wa.me/919876768558"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-emerald-50 text-emerald-800 font-bold px-8 py-4 rounded-xl border border-emerald-200 hover:bg-emerald-100/65 transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5 fill-emerald-600 stroke-none" />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Accent */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                {/* Doctor's Photo (Desktop Only: Visible on lg and up) */}
                <div className="hidden lg:block mb-6 rounded-3xl overflow-hidden border border-slate-100 shadow-md bg-white p-2">
                  <img
                    src={doctorPhotoUrl || 'https://lh3.googleusercontent.com/d/1c26KmvrkLJPv9cmNxHR12GTcsVk_Ewj-=w1000'}
                    alt="Dr. Vikramaditya Sabharwal"
                    className="w-full h-auto rounded-2xl"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                </div>
                {/* Elegant Minimal Card representing Dr. Sabharwal's Clinic */}
                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl relative overflow-hidden text-left">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl -z-10"></div>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-teal-50 p-3 rounded-2xl">
                      <Heart className="w-8 h-8 text-teal-600 fill-teal-100" />
                    </div>
                    <div>
                      <span className="block font-display font-bold text-slate-950 text-xl">Dr. Vikramaditya</span>
                      <span className="block text-xs font-semibold text-teal-600 uppercase tracking-wider">BDS, PGCOI (Implantology)</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    "We combine clinical precision with absolute safety to provide painless dental treatments. Your comfort is our primary mandate."
                  </p>

                  <div className="space-y-3.5 border-t border-slate-100 pt-6">
                    {[
                      '18+ Years Expert Dentistry',
                      'Certified in Endodontics — European Academy',
                      'ECHS Army Chandimandir Empanelled',
                      'Apollo Ludhiana clinical pedigree'
                    ].map((feat) => (
                      <div key={feat} className="flex items-center space-x-2.5 text-sm font-medium text-slate-700">
                        <CheckCircle className="w-4 h-4 text-teal-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST BAR / VERIFIED CLINIC STATS */}
      <section className="bg-white py-12 border-b border-slate-100 shadow-sm relative z-10" id="trust-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="flex items-start space-x-4">
              <div className="bg-sky-50 p-3 rounded-2xl text-sky-600 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="block font-display font-bold text-slate-950 text-lg leading-tight">Est. 2008</span>
                <span className="block text-xs font-medium text-slate-500 mt-0.5">Over 18 years serving Chandigarh</span>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-teal-50 p-3 rounded-2xl text-teal-600 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="block font-display font-bold text-slate-950 text-lg leading-tight">PRIME TIME Award</span>
                <span className="block text-xs font-medium text-slate-500 mt-0.5">Best Implant & Laser Dentistry Clinic</span>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-indigo-50 p-3 rounded-2xl text-indigo-600 shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="block font-display font-bold text-slate-950 text-lg leading-tight">Army Empanelled</span>
                <span className="block text-xs font-medium text-slate-500 mt-0.5">ECHS Army Chandimandir empanelled</span>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-600 shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="block font-display font-bold text-slate-950 text-lg leading-tight">Certified Endodontics</span>
                <span className="block text-xs font-medium text-slate-500 mt-0.5">European Academy certified RCT care</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES SNAPSHOT GRID */}
      <section className="py-20 lg:py-28" id="services-snapshot">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">World-Class Specialities</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              Clinically Advanced Dental Treatments
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We focus on minimally invasive protocols, metal-free biosecure materials, and maximum preservation of your natural smile architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-slate-100 rounded-3xl p-8 hover:border-teal-500/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-left group relative"
              >
                <div className="bg-teal-50 text-teal-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 font-bold text-xl group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <h3 className="font-display font-bold text-slate-950 text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {service.shortDescription}
                </p>
                <div className="pt-4 border-t border-slate-50 flex justify-between items-center text-xs font-bold text-teal-600 uppercase tracking-widest">
                  <button 
                    onClick={() => onNavigate(`/services/${service.slug}`)}
                    className="hover:text-teal-700 flex items-center space-x-1.5 cursor-pointer"
                  >
                    <span>Explore details</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div>
            <button
              onClick={() => onNavigate('/services')}
              className="inline-flex items-center space-x-2 text-sm font-bold text-slate-900 border-b-2 border-slate-950 pb-1.5 hover:text-teal-600 hover:border-teal-600 transition-all cursor-pointer"
            >
              <span>View All 12 Clinical Services Overview</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS STRIP */}
      <section className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden" id="testimonials">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/20 to-sky-950/20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-16">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block">Patient Stories</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Why Patients Trust Dr. Sabharwal
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Real patients, real reviews. Documenting pain-free transformations and military veterans' oral health rehabilitation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {featuredReviews.map((review) => (
              <div
                key={review.id}
                className="bg-slate-850/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm italic leading-relaxed">
                    "{review.comment}"
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-800 mt-6 flex justify-between items-center">
                  <div>
                    <span className="block text-sm font-bold text-white">{review.name}</span>
                    <span className="block text-xs text-slate-500">{review.treatment}</span>
                  </div>
                  {review.verified && (
                    <span className="text-[10px] bg-teal-500/10 text-teal-400 font-bold px-2 py-0.5 rounded border border-teal-500/20 uppercase tracking-wider">
                      Verified Patient
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div>
            <button
              onClick={() => onNavigate('/reviews')}
              className="inline-flex items-center space-x-2 text-sm font-bold text-teal-400 hover:text-teal-300 transition-colors cursor-pointer"
            >
              <span>Read More Verified Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* BLOG TEASER SECTION */}
      <section className="py-20 lg:py-28" id="blog-teasers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">Clinical Wisdom & Research</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              Patient Dental Health Education
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Empowering you with knowledge about computerized surgery, laser disinfection, and proactive smiles from CCDC Chandigarh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentBlogs.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden hover:border-teal-500/20 shadow-sm hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div className="p-8 space-y-4">
                  <div className="flex items-center space-x-2 text-xs font-bold text-teal-600 uppercase tracking-widest">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span className="text-slate-400">{post.readTime}</span>
                  </div>
                  <h3 className="font-display font-bold text-slate-950 text-lg leading-snug hover:text-teal-600 cursor-pointer" onClick={() => onNavigate(`/blog/${post.slug}`)}>
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="p-8 pt-0 border-t border-slate-50 flex justify-between items-center mt-auto">
                  <span className="text-xs text-slate-400 font-medium">{post.date}</span>
                  <button
                    onClick={() => onNavigate(`/blog/${post.slug}`)}
                    className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center space-x-1 uppercase tracking-wider cursor-pointer"
                  >
                    <span>Read article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div>
            <button
              onClick={() => onNavigate('/blog')}
              className="inline-flex items-center space-x-2 text-sm font-bold text-slate-900 border-b-2 border-slate-950 pb-1.5 hover:text-teal-600 hover:border-teal-600 transition-all cursor-pointer"
            >
              <span>Explore All Dental Blogs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CONTACT CTA */}
      <section className="bg-gradient-to-r from-teal-800 to-sky-900 text-white py-20 relative overflow-hidden" id="final-contact-cta">
        <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 relative z-10 space-y-8">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Ready to Begin Your Painless Journey?
          </h2>
          <p className="text-sky-100 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Experience clinical accuracy with personalized patient care. Submit our online scheduling request or talk directly to our team on WhatsApp today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="w-full sm:w-auto bg-white text-teal-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-slate-50 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Book Dental Consultation
            </button>
            <a
              href="https://wa.me/919876768558"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-600 transition-all flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-5 h-5 fill-current stroke-none" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
          <div className="pt-6 text-xs text-sky-200 uppercase tracking-widest font-semibold flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span>✓ Certified Endodontics</span>
            <span>✓ PGCOI Implantology</span>
            <span>✓ ECHS Empanelled</span>
            <span>✓ Est. 2008</span>
          </div>
        </div>
      </section>
    </div>
  );
}
