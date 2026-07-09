import { Service, Review, BlogPost, GalleryItem } from '../types';

// Convert Google Drive link to lh3.googleusercontent.com format
export function convertToLh3Url(url: string): string {
  if (!url) return '';
  if (url.includes('lh3.googleusercontent.com')) {
    return url;
  }
  
  // Regex to extract Google Drive file ID
  const dRegex = /\/file\/d\/([a-zA-Z0-9_-]+)/;
  const idRegex = /[?&]id=([a-zA-Z0-9_-]+)/;
  
  const dMatch = url.match(dRegex);
  if (dMatch && dMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${dMatch[1]}`;
  }
  
  const idMatch = url.match(idRegex);
  if (idMatch && idMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${idMatch[1]}`;
  }
  
  return url;
}

// Parse CSV Helper
export function parseCSV(text: string): string[][] {
  const lines: string[][] = [];
  let row: string[] = [];
  let inQuotes = false;
  let currentVal = '';

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentVal += '"';
        i++; // skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      row.push(currentVal.trim());
      currentVal = '';
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      row.push(currentVal.trim());
      lines.push(row);
      row = [];
      currentVal = '';
    } else {
      currentVal += char;
    }
  }
  if (currentVal || row.length > 0) {
    row.push(currentVal.trim());
    lines.push(row);
  }
  return lines.filter(r => r.length > 0 && r.some(cell => cell !== ''));
}

// Fetch doctor photo from Google Sheet
export async function fetchDoctorPhotoUrl(): Promise<string> {
  try {
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vScWF_8oRomF04WW8zFmhuVNcBFMpoxxJYmHevZTYyJ8wKlP3aP5oCRMzeJ_NVH4dv08onAmarJ1KPf/pub?gid=0&single=true&output=csv';
    const response = await fetch(url);
    if (!response.ok) {
      console.error('Failed to fetch doctor photo sheet client-side, status:', response.status);
      return '';
    }
    const csvText = await response.text();
    const lines = parseCSV(csvText);
    if (lines && lines.length > 1) {
      const headers = lines[0].map(h => h.trim().toLowerCase());
      const photoUrlIdx = headers.indexOf('photo_url');
      if (photoUrlIdx !== -1) {
        const photoUrl = lines[1][photoUrlIdx]?.trim();
        return convertToLh3Url(photoUrl || '');
      }
    }
  } catch (err) {
    console.error('Error in fetchDoctorPhotoUrl:', err);
  }
  return '';
}

// Fetch Google Sheet tab content directly from client-side
export async function fetchAndParseCmsData(sheetId: string) {
  const fetchTab = async (tabName: string) => {
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(tabName)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch tab ${tabName}`);
    const csvText = await response.text();
    return parseCSV(csvText);
  };

  try {
    const [servicesRows, reviewsRows, blogRows, galleryRows] = await Promise.all([
      fetchTab('Services').catch(() => null),
      fetchTab('Testimonials').catch(() => fetchTab('Reviews')).catch(() => null),
      fetchTab('Blog_Posts').catch(() => fetchTab('Blog')).catch(() => null),
      fetchTab('SmileGallery').catch(() => null)
    ]);

    const result: {
      services?: Service[];
      reviews?: Review[];
      blogPosts?: BlogPost[];
      gallery?: GalleryItem[];
    } = {};

    // Parse Services
    if (servicesRows && servicesRows.length > 1) {
      const headers = servicesRows[0].map(h => h.toLowerCase());
      result.services = servicesRows.slice(1).map((row, idx) => {
        const item: any = {};
        headers.forEach((header, colIdx) => {
          if (row[colIdx] !== undefined) {
            if (header === 'benefits' || header === 'procedure') {
              item[header] = row[colIdx].split('|').map(s => s.trim()).filter(Boolean);
            } else if (header === 'faqs') {
              item[header] = row[colIdx].split('|').map(faq => {
                const parts = faq.split('?');
                return {
                  question: parts[0]?.trim() || '',
                  answer: parts[1]?.trim() || ''
                };
              }).filter((f: any) => f.question);
            } else {
              item[header] = row[colIdx];
            }
          }
        });
        return {
          id: item.id || `sheet-service-${idx}`,
          title: item.title || 'Untitled Service',
          shortDescription: item.shortdescription || item.short_description || '',
          fullDescription: item.fulldescription || item.full_description || '',
          benefits: item.benefits || [],
          procedure: item.procedure || [],
          duration: item.duration || '1 session',
          faqs: item.faqs || [],
          slug: item.slug || `service-${idx}`,
          icon: item.icon || 'Activity',
          whyChooseCcdc: item.whychooseccdc || item.why_choose_ccdc || ''
        };
      });
    }

    // Parse Reviews
    if (reviewsRows && reviewsRows.length > 1) {
      const headers = reviewsRows[0].map(h => h.toLowerCase());
      result.reviews = reviewsRows.slice(1).map((row, idx) => {
        const item: any = {};
        headers.forEach((header, colIdx) => {
          if (row[colIdx] !== undefined) {
            item[header] = row[colIdx];
          }
        });
        return {
          id: item.id || `sheet-review-${idx}`,
          name: item.name || 'Anonymous',
          rating: Number(item.rating) || 5,
          comment: item.comment || '',
          date: item.date || new Date().toLocaleDateString(),
          treatment: item.treatment || '',
          verified: item.verified === 'true' || item.verified === '1' || item.verified === true
        };
      });
    }

    // Parse Blog Posts
    if (blogRows && blogRows.length > 1) {
      const headers = blogRows[0].map(h => h.toLowerCase());
      result.blogPosts = blogRows.slice(1).map((row, idx) => {
        const item: any = {};
        headers.forEach((header, colIdx) => {
          if (row[colIdx] !== undefined) {
            item[header] = row[colIdx];
          }
        });
        return {
          id: item.id || `sheet-blog-${idx}`,
          title: item.title || 'Untitled Post',
          excerpt: item.excerpt || '',
          content: item.content || '',
          date: item.date || new Date().toLocaleDateString(),
          author: item.author || 'Dr. Vikramaditya Sabharwal',
          readTime: item.readtime || item.read_time || '5 min read',
          category: item.category || 'General',
          slug: item.slug || `post-${idx}`
        };
      });
    }

    // Parse Gallery
    if (galleryRows && galleryRows.length > 1) {
      const headers = galleryRows[0].map(h => h.toLowerCase());
      result.gallery = galleryRows.slice(1).map((row, idx) => {
        const item: any = {};
        headers.forEach((header, colIdx) => {
          if (row[colIdx] !== undefined) {
            item[header] = row[colIdx];
          }
        });
        return {
          id: item.id || `sheet-gallery-${idx}`,
          title: item.title || '',
          category: item.category || 'General',
          beforeLabel: item.beforelabel || item.before_label || '',
          afterLabel: item.afterlabel || item.after_label || ''
        };
      });
    }

    return result;
  } catch (error) {
    console.error('Error parsing Google Sheets client-side:', error);
    return null;
  }
}
