import { Service, Review, BlogPost, GalleryItem } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'implants',
    title: 'Immediate Dental Implants (Single Sitting Procedure)',
    shortDescription: 'Replace missing teeth in a single clinical visit using bio-friendly titanium dental implants placed with computerized precision.',
    fullDescription: 'Immediate dental implants allow for the placement of a titanium implant post directly into the jawbone during a single sitting. This modern protocol minimizes overall healing periods, reduces the need for multiple surgical visits, and, where clinically suitable, enables the immediate fitting of a provisional crown on the same day.',
    benefits: [
      'Reduces overall clinical steps with same-day treatment option',
      'Preserves the surrounding healthy jawbone and natural gum structure',
      'Restores biting, chewing, and speaking stability without delay',
      'Computer-guided precision placement under local anesthesia'
    ],
    procedure: [
      'Comprehensive 3D bone mapping and virtual placement simulation',
      'Gentle tooth extraction and same-session implant insertion',
      'Fabrication and mounting of a secure provisional crown',
      'Subsequent biological monitoring and final ceramic crown fitting'
    ],
    duration: 'Single sitting (subsequent integration checkups)',
    slug: 'dental-implants',
    icon: 'Shield',
    whyChooseCcdc: 'Dr. Vikramaditya Sabharwal holds a specialized Post-Graduate Certificate in Oral Implantology (PGCOI) and offers over 18 years of clinical experience, incorporating precision surgical techniques honed at PGI Rohtak and Apollo Ludhiana.',
    faqs: [
      { question: 'Who is a candidate for immediate dental implants?', answer: 'Candidates generally require sufficient bone density and healthy surrounding gum tissues. A comprehensive clinical evaluation and 3D CBCT scan are conducted to confirm suitability.' },
      { question: 'Is the single-sitting implant procedure painful?', answer: 'The procedure is performed under local anesthesia. Our computerized precision protocols help ensure that post-operative discomfort is minimized.' }
    ]
  },
  {
    id: 'zirconia-crowns',
    title: 'Zirconia Crowns',
    shortDescription: 'Metal-free biocompatible restorations custom-sculpted via digital CAD/CAM technology for premium strength and natural aesthetics.',
    fullDescription: 'Zirconia crowns represent the standard in modern tooth restoration. Free of any metal sub-structure, these crowns eliminate the dark grey margins often visible near the gums with old metal-ceramic caps. Sculpted from solid zirconium dioxide blocks, they are highly bio-compatible and boast exceptional resistance to fracture.',
    benefits: [
      'Metal-free biocompatibility with zero metal allergy risks',
      'Matches the natural translucency and shade of your enamel',
      'Highly resistant to wear, chipping, and masticatory fractures',
      'Computer-designed CAD/CAM structure for a precise marginal fit'
    ],
    procedure: [
      'Precise, conservative preparation of the natural tooth structure',
      'High-definition digital 3D scanning of the prepared arch',
      'Computer-aided design and milling from a monolithic zirconia block',
      'Secure chemical bonding with advanced medical-grade adhesives'
    ],
    duration: '2 sessions (3-5 days apart)',
    slug: 'zirconia-crowns',
    icon: 'Crown',
    whyChooseCcdc: 'During his tenure at Apollo Ludhiana and PGI Rohtak, Dr. Vikramaditya Sabharwal mastered high-precision digital restorative workflows, ensuring perfect bite alignment and marginal health.',
    faqs: [
      { question: 'Do zirconia crowns look natural?', answer: 'Yes. Because zirconia allows light to pass through much like natural enamel, it avoids the opaque, chalky appearance of traditional metal-ceramic crowns.' },
      { question: 'Are zirconia crowns durable?', answer: 'Zirconia is one of the strongest materials in restorative dentistry, designed to withstand heavy chewing forces over many years.' }
    ]
  },
  {
    id: 'veneers',
    title: 'Dental Veneers',
    shortDescription: 'Ultra-thin, custom-fabricated ceramic shells bonded to the front of teeth to correct minor cracks, discoloration, or gaps.',
    fullDescription: 'Dental veneers are ultra-thin shells crafted from premium dental porcelain or composite resins. They are meticulously bonded to the front of teeth to address cosmetic or structural imperfections, such as permanent staining, minor enamel chips, uneven sizes, or superficial gaps.',
    benefits: [
      'Gently masks persistent discoloration, chips, and asymmetrical gaps',
      'Conserves healthy tooth structure with minimal front-surface prep',
      'Features a highly stain-resistant glass-ceramic glaze',
      'Customized shading and contouring to harmonize with adjacent teeth'
    ],
    procedure: [
      'Symmetry consultation and conservative preparation of outer enamel (0.3 - 0.5mm)',
      'Digital 3D impression and meticulous shade selection matching',
      'Precision dental laboratory fabrication by master ceramists',
      'Adhesive resin bonding and meticulous bite alignment check'
    ],
    duration: '2-3 sessions over 7-10 days',
    slug: 'dental-veneers-smile-designing',
    icon: 'Sparkles',
    whyChooseCcdc: 'Dr. Vikramaditya Sabharwal utilizes 18 years of clinical expertise and aesthetic principles developed during his advanced cosmetic postings at Apollo Ludhiana to ensure beautiful, long-lasting porcelain bondings.',
    faqs: [
      { question: 'How long do porcelain veneers typically last?', answer: 'With good oral hygiene and standard preventive checkups, porcelain veneers are highly durable and typically last 10 to 15 years.' },
      { question: 'Is the application of veneers painful?', answer: 'The tooth preparation is minimally invasive. Local anesthesia is applied if needed, ensuring a comfortable, stress-free clinical session.' }
    ]
  },
  {
    id: 'invisalign',
    title: 'Invisalign',
    shortDescription: 'Align misaligned teeth discreetly using a personalized series of clear, medical-grade, removable smart aligners.',
    fullDescription: 'Invisalign utilizes a series of custom-made, virtually invisible, medical-grade polyurethane trays to gradually guide misaligned teeth into their proper positions. Since the trays are fully removable, they allow patients to eat, brush, and floss normally, avoiding the food traps and wire irritations of traditional metal braces.',
    benefits: [
      'Virtually invisible under standard lighting and normal conversation',
      'Removable at any time for easy eating and superior oral hygiene',
      'Smooth material eliminates soft-tissue cuts or orthodontic wire pokes',
      'Digital 3D simulation showcases step-by-step movement before starting'
    ],
    procedure: [
      'High-resolution intraoral scanning with the iTero 3D scanner',
      'Computerized movement planning and timeline visualization',
      'Delivery of a series of custom, numbered transparent trays',
      'Brief, routine progress evaluations in-office every 6-8 weeks'
    ],
    duration: '6-18 months depending on complexity',
    slug: 'invisalign',
    icon: 'Layers',
    whyChooseCcdc: 'Dr. Vikramaditya Sabharwal integrates 18 years of clinical case planning and advanced 3D intraoral diagnostics to program highly predictable aligner movements for complex setups.',
    faqs: [
      { question: 'How many hours a day must I wear the clear aligners?', answer: 'For predictable and timely tooth movement, aligners must be worn for 20 to 22 hours per day, removed only for eating, drinking hot liquids, and brushing.' },
      { question: 'How often do I switch to a new set of aligner trays?', answer: 'Typically, trays are changed every 1 to 2 weeks according to the personalized digital treatment plan.' }
    ]
  },
  {
    id: 'smile-designing',
    title: 'Smile Designing',
    shortDescription: 'A comprehensive visual and clinical blueprint mapping tooth proportions, gum lines, and color harmony for customized facial balance.',
    fullDescription: 'Smile Designing is a multi-disciplinary aesthetic planning sequence. It evaluates the relationships between tooth dimensions, lip symmetry, gum contours, and skin tone. By compiling high-definition photography and study models, a precise restorative blueprint is designed to restore natural facial harmony.',
    benefits: [
      'Provides a comprehensive blueprint tailored to your facial features',
      'Integrates multi-disciplinary approaches like crowns, veneers, and contours',
      'Uses computerized proportions to ensure symmetrical tooth alignment',
      'Focuses on natural-looking transitions that conserve healthy enamel'
    ],
    procedure: [
      'Comprehensive clinical facial analysis and high-definition photography',
      'Digital modeling and computer-aided aesthetic simulation',
      'Temporary diagnostic mock-up placed in-mouth to preview symmetry',
      'Precise clinical execution utilizing conservative restoration methods'
    ],
    duration: '2-3 sessions over 10 days',
    slug: 'dental-veneers-smile-designing',
    icon: 'Sparkles',
    whyChooseCcdc: 'Dr. Vikramaditya Sabharwal’s extensive career—encompassing 18 years of practice, academic training at PGI Rohtak, and 3 years serving as HOD of the Charitable Dental Wing of Bharat Vikas Parishad Chandigarh—delivers a rare balance of aesthetic vision and clinical ethics.',
    faqs: [
      { question: 'What treatments are commonly included in Smile Designing?', answer: 'Depending on your needs, it can incorporate porcelain veneers, metal-free zirconia crowns, dental contouring, or teeth whitening.' },
      { question: 'Can I preview my new smile before the actual procedure starts?', answer: 'Yes! We create physical diagnostic mock-ups directly in your mouth so you can evaluate the look and feel before any preparation occurs.' }
    ]
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment (under microscope)',
    shortDescription: 'High-precision micro-endodontics utilizing rotary instruments and clinical microscope guidance to painlessly clean and save infected teeth.',
    fullDescription: 'Root Canal Treatment (RCT) is a therapeutic procedure designed to save a severely decayed, infected, or fractured tooth by removing infected pulp tissue from the inner canals. Utilizing a specialized clinical microscope allows for the identification of microscopic, hidden accessory canals and micro-fractures, ensuring thorough disinfection and a highly successful, stable result.',
    benefits: [
      'High-precision viewing ensures thorough disinfection of tiny accessory canals',
      'Typically completed in a single, comfortable, and painless sitting',
      'Directly resolves deep tooth pain while saving the natural root',
      'Rotary endodontics and computerized apex locators for predictable sealing'
    ],
    procedure: [
      'Detailed diagnostic radiographic mapping of canal anatomy',
      'Application of highly effective local numbing agents',
      'Microscope-guided access, rotary cleaning, and chemical disinfection of canals',
      'Hermetic sealing with bio-compatible gutta-percha and core restoration'
    ],
    duration: '1 session (45-60 minutes)',
    slug: 'root-canal-treatment',
    icon: 'Activity',
    whyChooseCcdc: 'Dr. Vikramaditya Sabharwal holds a prestigious Endodontics certification from the European Academy, utilizing microscopic rotary technology to complete root canals painlessly in a single visit.',
    faqs: [
      { question: 'Is a single-visit root canal as effective as multiple visits?', answer: 'Yes. With contemporary rotary endodontics, apex locators, and microscopic guidance, single-visit root canals are highly effective and reduce the risk of intermediate infection.' },
      { question: 'Is a crown necessary after a microscope root canal?', answer: 'Generally, yes. A root-filled tooth is no longer nourished by pulp tissue and can become brittle. A Zirconia or ceramic crown is recommended to protect it from fracture.' }
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Colonel Rajesh Kumar (Retd.)',
    rating: 5,
    comment: 'Exceptional service and utmost discipline. As an ECHS beneficiary, the process was seamless. Dr. Sabharwal’s 18 years of expertise shows in his calm, precise approach. He did my dental implant with zero pain. The ECHS army empanelment at Chandimandir makes CCDC the most trusted clinic for defense veterans.',
    date: 'June 14, 2026',
    treatment: 'Dental Implant & Zirconia Crown',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Dr. Meenakshi Sharma',
    rating: 5,
    comment: 'Being a medical professional myself, I was highly selective about my smile designing. Dr. Sabharwal is European Academy certified in Endodontics and extremely precise. My veneers feel natural, look stunning, and have completely elevated my confidence. The clinical hygiene standards are top-notch!',
    date: 'May 28, 2026',
    treatment: 'Smile Designing & Porcelain Veneers',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Sardar Gurpreet Singh',
    rating: 5,
    comment: 'Went to CCDC for a root canal. I was terrified of dental chairs, but Dr. Vikramaditya made it completely painless and finished the entire RCT in just one sitting! He is truly the Best Implant & Laser Dentistry Clinic, fittingly recognized by the PRIME TIME Award. Highly recommend this clinic in Chandigarh.',
    date: 'April 09, 2026',
    treatment: 'Single-Sitting Root Canal',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Ananya Malhotra',
    rating: 5,
    comment: 'Completed my Invisalign treatment here. Dr. Vikramaditya and his team mapped out the entire shift on the 3D scanner, and my teeth got perfectly aligned in 11 months. Very transparent, comfortable, and outstanding care throughout. CCDC is definitely the premier dental care center.',
    date: 'February 20, 2026',
    treatment: 'Invisalign Clear Aligners',
    verified: true
  }
];

export const BLOG_POSTS: BlogPost[] = [];

export const GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Full Arch Dental Implant',
    category: 'Dental Implants',
    beforeLabel: 'Missing lower molars',
    afterLabel: 'Restored chewing with premium implants'
  },
  {
    id: 'gal-2',
    title: 'Chipped Incisors Restoration',
    category: 'Veneers & Smile Design',
    beforeLabel: 'Fractured front teeth',
    afterLabel: 'Natural ultra-thin veneers placed'
  },
  {
    id: 'gal-3',
    title: 'Discolored Anterior RCT Tooth',
    category: 'Zirconia Crowns',
    beforeLabel: 'Dark, grey root-filled tooth',
    afterLabel: 'Highly translucent metal-free Zirconia Crown'
  },
  {
    id: 'gal-4',
    title: 'Crowded Teeth Realignment',
    category: 'Invisalign',
    beforeLabel: 'Moderate lower anterior crowding',
    afterLabel: 'Perfect symmetry after clear aligners'
  }
];
