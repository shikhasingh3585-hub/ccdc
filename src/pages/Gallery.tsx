import React, { useState } from 'react';
import { Camera, ImageOff, Lock, Sparkles, CheckCircle } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryProps {
  galleryItems: GalleryItem[];
}

export default function Gallery({ galleryItems }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Dental Implants', 'Zirconia Crowns', 'Veneers & Smile Design', 'Invisalign'];

  // Categories mapping to show relevant empty slots if activeCategory filter is toggled
  const dummyCases = [
    { id: 'case-1', title: 'Single Sitting Dental Implant', category: 'Dental Implants', sub: 'Immediate restoration' },
    { id: 'case-2', title: 'Anterior Porcelain Veneers', category: 'Veneers & Smile Design', sub: 'Cosmetic spacing correction' },
    { id: 'case-3', title: 'Metal-Free Zirconia Crowns', category: 'Zirconia Crowns', sub: 'Marginal discoloration replacement' },
    { id: 'case-4', title: 'Clear Aligner Treatment', category: 'Invisalign', sub: 'Moderate crowded arches' },
    { id: 'case-5', title: 'Full Arch Oral Rehabilitation', category: 'Dental Implants', sub: 'Functional bite correction' },
    { id: 'case-6', title: 'Translucent Smile Makeover', category: 'Veneers & Smile Design', sub: 'Aesthetic smile designing' }
  ];

  const filteredCases = activeCategory === 'All'
    ? dummyCases
    : dummyCases.filter(c => c.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen py-16" id="smile-gallery-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">Clinical Integrity</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-950 tracking-tight">
            CCDC Smile Gallery
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Witness the functional and cosmetic dental transformations accomplished by Dr. Vikramaditya Sabharwal. We preserve natural teeth structures with translucent, bio-friendly aesthetics.
          </p>
        </div>

        {/* Filter Categories Selector */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Informative Empty State / Photo Notice */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto">
            <Lock className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h2 className="font-display text-2xl font-bold text-slate-950 tracking-tight">
              Gallery photos coming soon
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">
              Our clinical before-and-after photographs represent real patient cases under Dr. Vikramaditya’s care. To protect patient privacy and comply with clinical ethics, real photographic cases are undergoing strict medical sanitation and consent processing prior to upload.
            </p>
          </div>
        </div>

        {/* Empty Responsive Image Wireframe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-350 text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] bg-slate-100 text-slate-600 border border-slate-200 font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Pending Release</span>
                </div>
                
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-base sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs mt-1">
                    {item.sub}
                  </p>
                </div>

                {/* Wireframe Placeholder Boxes (Before / After Grid) */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  
                  {/* Before Placeholder */}
                  <div className="border border-dashed border-slate-200 rounded-2xl bg-slate-50/50 p-4 flex flex-col items-center justify-center min-h-[140px] relative text-center">
                    <ImageOff className="w-6 h-6 text-slate-300" />
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mt-2 block">Before</span>
                    <span className="text-[9px] text-slate-400 block mt-1">Photo Pending</span>
                  </div>

                  {/* After Placeholder */}
                  <div className="border border-dashed border-slate-200 rounded-2xl bg-slate-50/50 p-4 flex flex-col items-center justify-center min-h-[140px] relative text-center">
                    <Camera className="w-6 h-6 text-slate-300" />
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mt-2 block">After</span>
                    <span className="text-[9px] text-slate-400 block mt-1">Photo Pending</span>
                  </div>

                </div>
              </div>

              {/* Status footer for the slot */}
              <div className="border-t border-slate-50 pt-4 mt-6 flex items-center justify-between text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                <span className="flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                  <span>Gallery photos coming soon</span>
                </span>
                <span>Case ID: {item.id.toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote Disclaimer */}
        <div className="max-w-xl mx-auto text-center mt-16 text-xs text-slate-400 italic">
          *No stock photos or generated AI cases are utilized in our gallery to maintain full professional transparency and fairness.
        </div>

      </div>
    </div>
  );
}
