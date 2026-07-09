import { next } from '@vercel/edge';

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vScWF_8oRomF04WW8zFmhuVNcBFMpoxxJYmHevZTYyJ8wKlP3aP5oCRMzeJ_NVH4dv08onAmarJ1KPf/pub?gid=0&single=true&output=csv';
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200';

function convertToLh3Url(url: string): string {
  if (!url) return '';
  if (url.includes('lh3.googleusercontent.com')) {
    return url;
  }
  
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

function parseCSV(text: string): string[][] {
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
        i++;
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

async function fetchDoctorPhotoUrl(): Promise<string> {
  try {
    const response = await fetch(SHEET_URL);
    if (!response.ok) return '';
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
    console.error('Error in fetchDoctorPhotoUrl inside middleware:', err);
  }
  return '';
}

export default async function middleware(request: Request) {
  const userAgent = request.headers.get('user-agent') || '';
  
  // Detect known social media crawlers
  const isCrawler = /whatsapp|facebookexternalhit|twitterbot|facebot|linkedinbot|slackbot|telegram|discordbot/i.test(userAgent);
  
  if (isCrawler) {
    const canonicalUrl = request.url;
    const photoUrl = await fetchDoctorPhotoUrl();
    const imageUrl = photoUrl || FALLBACK_IMAGE;
    
    const title = "Centre For Complete Dental Care (CCDC) — Dr. Vikramaditya Sabharwal";
    const description = "18 years of painless, precision dentistry in Chandigarh. Est. 2008 — Best Implant & Laser Dentistry Clinic, ECHS Army empanelled.";
    
    // Construct pre-rendered HTML for the crawler
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <meta name="description" content="${description}">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${imageUrl}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="${canonicalUrl}">
  <meta property="twitter:title" content="${title}">
  <meta property="twitter:description" content="${description}">
  <meta property="twitter:image" content="${imageUrl}">
</head>
<body>
  <h1>${title}</h1>
  <p>${description}</p>
</body>
</html>`;

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  }
  
  // Regular users continue to standard index.html (client-side rendered SPA)
  return next();
}
