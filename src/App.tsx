import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import { Service, Review, BlogPost, GalleryItem } from './types';
import { SERVICES, REVIEWS, BLOG_POSTS, GALLERY } from './data/fallbackData';
import { fetchDoctorPhotoUrl, fetchAndParseCmsData } from './utils/csv';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [services, setServices] = useState<Service[]>(SERVICES);
  const [reviews, setReviews] = useState<Review[]>(REVIEWS);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(GALLERY);
  const [cmsLoading, setCmsLoading] = useState<boolean>(true);
  const [isUsingSheetReviews, setIsUsingSheetReviews] = useState<boolean>(false);
  const [doctorPhotoUrl, setDoctorPhotoUrl] = useState<string>('https://lh3.googleusercontent.com/d/1c26KmvrkLJPv9cmNxHR12GTcsVk_Ewj-=w1000');

  // 1. HTML5 History pushState SPA Routing
  useEffect(() => {
    // Sync initial browser path
    setCurrentPath(window.location.pathname);

    // Handle back/forward actions
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Client-Side dynamic SEO tags updates
  useEffect(() => {
    const path = currentPath === "/" ? "/" : currentPath.replace(/\/$/, "");
    let title = "Centre For Complete Dental Care (CCDC) | Dr. Vikramaditya Sabharwal Chandigarh";
    let description = "Welcome to CCDC Chandigarh. Dr. Vikramaditya Sabharwal offers immediate dental implants, zirconia crowns, veneers, invisalign, & microscope-guided root canals.";

    if (path === '/' || path === '/home') {
      title = "Centre For Complete Dental Care (CCDC) | Dr. Vikramaditya Sabharwal Chandigarh";
      description = "Welcome to CCDC Chandigarh. Dr. Vikramaditya Sabharwal offers immediate dental implants, zirconia crowns, veneers, invisalign, & microscope-guided root canals.";
    } else if (path === '/about') {
      title = "About Dr. Vikramaditya Sabharwal | Chief Surgeon at CCDC Chandigarh";
      description = "Learn about Dr. Vikramaditya Sabharwal, chief endodontics clinician and PGCOI oral implantologist with 18+ years of expertise. Empanelled with ECHS Army Chandimandir.";
    } else if (path === '/services') {
      title = "Advanced Dental Care Services | CCDC Chandigarh";
      description = "Explore our premium dental treatments in Chandigarh including computerized immediate implants, CAD/CAM zirconia crowns, porcelain veneers, and microscopic root canals.";
    } else if (path.startsWith('/services/')) {
      const slug = path.replace('/services/', '');
      const svc = services.find(s => s.slug === slug);
      if (svc) {
        title = `${svc.title} Chandigarh | Advanced CCDC Restoration`;
        description = svc.shortDescription;
      }
    } else if (path === '/gallery') {
      title = "Smile Gallery & Before-After Transformations | CCDC Chandigarh";
      description = "Browse clinical dental restorations and smile transformation cases achieved at Centre For Complete Dental Care Chandigarh. Zero stock photos or AI-generated cases.";
    } else if (path === '/reviews') {
      title = "Patient Reviews & Testimonials | CCDC Chandigarh";
      description = "Read real, verified clinical feedback and testimonials from Chandigarh families, medical professionals, and ECHS army veterans who have experienced CCDC's care.";
    } else if (path === '/blog') {
      title = "Clinical Dental Blog & Educational Oral Care Articles | CCDC";
      description = "Access evidence-based clinical articles, oral care tips, and diagnostic dental insights written by Dr. Vikramaditya Sabharwal to help maintain your long-term dental health.";
    } else if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '');
      const post = blogPosts.find(p => p.slug === slug);
      if (post) {
        title = `${post.title} | CCDC Chandigarh Educational Blog`;
        description = post.excerpt;
      }
    } else if (path === '/contact') {
      title = "Contact CCDC & Book Dental Appointment Chandigarh | Phone & Location";
      description = "Book your dental appointment with Dr. Vikramaditya Sabharwal at CCDC Sector 22 Chandigarh. View real clinical hours, phone numbers, and interactive Google Map location.";
    }

    // Update browser title
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', window.location.href);

    // Update basic social Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', window.location.href);

    // Update dynamic doctor photo og:image and twitter:image on client side
    if (doctorPhotoUrl) {
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) ogImage.setAttribute('content', doctorPhotoUrl);

      const twitterImage = document.querySelector('meta[name="twitter:image"]');
      if (twitterImage) twitterImage.setAttribute('content', doctorPhotoUrl);
    }

  }, [currentPath, services, blogPosts, doctorPhotoUrl]);

  const handleNavigation = (path: string) => {
    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 2. Fetch live CMS data (from Google Sheet or Fallback)
  useEffect(() => {
    async function loadCmsData() {
      try {
        // Fetch doctor photo directly from Doctor_Info Google Sheet CSV published URL
        const photoUrl = await fetchDoctorPhotoUrl();
        if (photoUrl) {
          setDoctorPhotoUrl(photoUrl);
          console.log('Doctor photo synced successfully client-side:', photoUrl);
        } else {
          console.log('Doctor photo sheet empty or failed, showing clean placeholder.');
        }

        // Fetch other CMS tabs if GOOGLE_SHEET_ID is configured in environment variables
        const sheetId = (import.meta as any).env?.VITE_GOOGLE_SHEET_ID || (import.meta as any).env?.GOOGLE_SHEET_ID;
        if (sheetId) {
          console.log('Fetching other CMS tabs directly on the client from sheet ID:', sheetId);
          const data = await fetchAndParseCmsData(sheetId);
          if (data) {
            if (data.services && data.services.length > 0) setServices(data.services);
            if (data.reviews && data.reviews.length > 0) {
              setReviews(data.reviews);
              setIsUsingSheetReviews(true);
            }
            if (data.blogPosts && data.blogPosts.length > 0) setBlogPosts(data.blogPosts);
            if (data.gallery && data.gallery.length > 0) setGalleryItems(data.gallery);
            console.log('CCDC CMS synced successfully client-side from Google Sheets!');
          }
        }
      } catch (error) {
        console.error("Failed to load clinical CMS data client-side, using local fallback:", error);
      } finally {
        setCmsLoading(false);
      }
    }
    loadCmsData();
  }, []);

  // 3. Page Router Matcher
  const renderPage = () => {
    const path = currentPath;

    // Admin Panel
    if (path === '/admin') {
      return <Admin />;
    }

    // Home Page
    if (path === '/' || path === '/home') {
      return (
        <Home
          services={services}
          reviews={reviews}
          blogPosts={blogPosts}
          onNavigate={handleNavigation}
          doctorPhotoUrl={doctorPhotoUrl}
        />
      );
    }

    // About Page
    if (path === '/about') {
      return <About onNavigate={handleNavigation} doctorPhotoUrl={doctorPhotoUrl} />;
    }

    // Services Page
    if (path === '/services') {
      return <Services services={services} onNavigate={handleNavigation} />;
    }

    // Service Detail pages (Dental Implants, Crowns, Veneers, Invisalign, RCT)
    if (path.startsWith('/services/')) {
      const slug = path.replace('/services/', '');
      return <ServiceDetail services={services} slug={slug} onNavigate={handleNavigation} />;
    }

    // Gallery Page
    if (path === '/gallery') {
      return <Gallery galleryItems={galleryItems} />;
    }

    // Reviews Page
    if (path === '/reviews') {
      return <Reviews reviews={reviews} isUsingSheetReviews={isUsingSheetReviews} />;
    }

    // Blog Page (Individual Post or List)
    if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '');
      return <Blog blogPosts={blogPosts} activeSlug={slug} onNavigate={handleNavigation} />;
    }
    if (path === '/blog') {
      return <Blog blogPosts={blogPosts} onNavigate={handleNavigation} />;
    }

    // Contact & Book Page
    if (path === '/contact') {
      return <Contact />;
    }

    // 404 Fallback - redirect or show clean message
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center p-4">
        <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-md text-center max-w-sm space-y-6">
          <span className="text-4xl">🔍</span>
          <h1 className="font-display text-2xl font-bold text-slate-900">Page Not Found</h1>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            The requested clinic subpage doesn't exist or is undergoing routine sterilization maintenance.
          </p>
          <button
            onClick={() => handleNavigation('/')}
            className="w-full bg-slate-950 hover:bg-slate-900 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Return to CCDC Home
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 relative">
      {/* Top Header Navigation */}
      <Header currentPath={currentPath} onNavigate={handleNavigation} />

      {/* Main Clinical Stage */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Persistent Floating WhatsApp widget */}
      <FloatingWhatsApp />

      {/* Consistent Footer */}
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}
