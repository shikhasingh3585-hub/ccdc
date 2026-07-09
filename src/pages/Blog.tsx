import React from 'react';
import { BookOpen, User, Calendar, Clock, ArrowLeft, ArrowRight, Shield, Newspaper, AlertCircle, FileText } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogProps {
  blogPosts: BlogPost[];
  activeSlug?: string;
  onNavigate: (path: string) => void;
}

export default function Blog({ blogPosts, activeSlug, onNavigate }: BlogProps) {
  
  // If we are looking at an individual blog post
  if (activeSlug) {
    const post = blogPosts.find(p => p.slug === activeSlug);
    
    if (!post) {
      return (
        <div className="bg-slate-50 min-h-screen flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md text-center max-w-md space-y-6">
            <BookOpen className="w-16 h-16 text-teal-500 mx-auto" />
            <h1 className="font-display text-2xl font-bold text-slate-900">Article Not Found</h1>
            <p className="text-slate-500 text-sm leading-relaxed">
              The dental educational article you are seeking is either restricted or has been moved.
            </p>
            <button
              onClick={() => onNavigate('/blog')}
              className="w-full bg-slate-950 hover:bg-slate-900 text-white font-bold py-3 rounded-xl text-sm transition-all cursor-pointer"
            >
              Browse Educational Blog
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-slate-50 min-h-screen py-16 text-left" id={`blog-detail-${post.id}`}>
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          
          {/* Back link */}
          <div className="mb-8">
            <button
              onClick={() => onNavigate('/blog')}
              className="inline-flex items-center space-x-1 text-sm font-bold text-teal-600 hover:text-teal-700 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Articles</span>
            </button>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
            {/* Header metadata */}
            <div className="space-y-4">
              <span className="inline-block text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400 border-b border-slate-50 pb-6">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-teal-500" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-teal-500" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-teal-500" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Content body */}
            <div className="prose prose-teal max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
              {post.content.split('\n\n').map((para, i) => {
                if (para.startsWith('###')) {
                  return (
                    <h3 key={i} className="font-display font-bold text-slate-900 text-lg sm:text-xl pt-4">
                      {para.replace('###', '').trim()}
                    </h3>
                  );
                }
                if (para.startsWith('*') || para.startsWith('-')) {
                  return (
                    <ul key={i} className="list-disc list-inside pl-4 space-y-2 font-medium">
                      {para.split('\n').map((item, idx) => (
                        <li key={idx}>
                          {item.replace(/^[\s*-]+/, '').trim()}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return <p key={i}>{para}</p>;
              })}
            </div>

            {/* Educational Disclaimer */}
            <div className="border-t border-slate-100 pt-8 flex items-start space-x-3 text-xs text-slate-400 italic">
              <Shield className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span>
                Disclaimer: The contents of this blog are for educational and informational purposes only. It does not substitute professional in-clinic diagnostic assessment or surgical consultation with Dr. Vikramaditya Sabharwal.
              </span>
            </div>

          </div>
        </article>
      </div>
    );
  }

  // Blog list view
  const hasPosts = blogPosts && blogPosts.length > 0;

  return (
    <div className="bg-slate-50 min-h-screen py-16" id="blog-listings-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">Educational wisdom</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-950 tracking-tight">
            Clinic Blogs & Dental Wisdom
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Acquire insights into dental implants, modern microscopic endodontics, aesthetic smiles, and guidelines for long-term oral vitality.
          </p>
        </div>

        {hasPosts ? (
          /* Blogs list */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 text-left flex flex-col justify-between group"
              >
                {/* Clean, high-fidelity featured image placeholder */}
                <div className="aspect-[16/10] bg-slate-100 flex flex-col items-center justify-center p-6 relative overflow-hidden border-b border-slate-50">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] bg-white text-slate-900 border border-slate-200/80 font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {post.category}
                    </span>
                  </div>
                  
                  <div className="absolute top-4 right-4 z-10">
                    <span className="flex items-center space-x-1 text-[10px] bg-slate-950 text-white font-semibold px-2.5 py-1 rounded-full">
                      <Clock className="w-3 h-3 text-teal-400" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-teal-600 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-6 h-6 text-teal-600" />
                  </div>
                  
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-3.5 block">
                    Featured Educational Guide
                  </span>
                </div>

                <div className="p-8 space-y-4">
                  <h2 
                    onClick={() => onNavigate(`/blog/${post.slug}`)}
                    className="font-display font-bold text-slate-950 text-lg sm:text-xl leading-snug hover:text-teal-600 cursor-pointer transition-colors line-clamp-2"
                  >
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="p-8 pt-0 border-t border-slate-50/50 flex justify-between items-center mt-auto">
                  <span className="text-xs text-slate-400 font-medium">{post.date}</span>
                  <button
                    onClick={() => onNavigate(`/blog/${post.slug}`)}
                    className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center space-x-1.5 uppercase tracking-wider cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Graceful "New articles coming soon" Placeholder state */
          <div className="bg-white border-2 border-dashed border-slate-200 rounded-3xl p-10 sm:p-16 text-center max-w-3xl mx-auto space-y-8">
            <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto">
              <Newspaper className="w-8 h-8" />
            </div>
            
            <div className="space-y-2">
              <h3 className="font-display text-2xl font-bold text-slate-900 tracking-tight">
                New articles coming soon
              </h3>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                We are currently compiling evidence-based clinical articles, patient dental care tips, and diagnostic insights from Dr. Vikramaditya's practice.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl max-w-lg mx-auto border border-slate-100 text-left space-y-4">
              <div className="flex items-start space-x-3 text-xs text-slate-600">
                <AlertCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800 block mb-1">Clinic Dynamic Sync:</span>
                  <p className="leading-relaxed">
                    Once educational articles are ready and added to the **Blog_Posts** (or **Blog**) sheet tab in your connected Google Sheet, they will automatically sync and populate here with a modern card layout.
                  </p>
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-400 border-t border-slate-200/60 pt-3 flex flex-wrap gap-2">
                <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Title</span>
                <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Excerpt</span>
                <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Content</span>
                <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Category</span>
                <span className="bg-white px-2 py-0.5 rounded border border-slate-200">ReadTime</span>
                <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Slug</span>
                <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Date</span>
                <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Author</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
