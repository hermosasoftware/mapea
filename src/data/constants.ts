export const COMPANY_INFO = {
  name: 'MAPEA',
  slogan: 'Aerial precision, terrestrial results',
  mission: 'We transform traditional topography with cutting-edge LiDAR technology, offering precise mapping and territorial analysis that drives sustainable development.',
  description: 'We are specialists in topographic surveys with LiDAR drones, providing innovative and precise solutions for territorial analysis.',
  email: 'info@mapea.cr',
  phone: '+506-8712-3676',
  address: 'Costa Rica',
  website: 'https://mapea.cr',
  socialMedia: {
    facebook: 'https://facebook.com/mapea',
    instagram: 'https://instagram.com/mapea',
    linkedin: 'https://linkedin.com/company/mapea',
    twitter: 'https://twitter.com/mapea'
  }
};

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'mission', label: 'Our Mission', href: '#mission' },
  { id: 'services', label: 'Services', href: '#services' },
  //{ id: 'clients', label: 'Clients', href: '#clients' },
  { id: 'contact', label: 'Contact', href: '#contact' }
];

// SEO Data para diferentes secciones
export const SEO_DATA = {
  home: {
    title: "MAPEA - Advanced LiDAR Surveying with Drones | Costa Rica",
    description: "Professional topographic surveying services using cutting-edge LiDAR drone technology. Get precise 3D mapping, cadastral reports, and territorial analysis in Costa Rica.",
    keywords: "LiDAR surveying, drone mapping, topographic surveys, cadastral reports, territorial analysis, Costa Rica, precision mapping, 3D modeling, land surveying"
  },
  mission: {
    title: "Our Mission - MAPEA LiDAR Surveying | Costa Rica",
    description: "Discover MAPEA's mission to revolutionize territorial mapping with precision LiDAR technology and sustainable development solutions in Costa Rica.",
    keywords: "mission, precision mapping, LiDAR technology, sustainable development, territorial analysis, Costa Rica, innovation"
  },
  services: {
    title: "LiDAR Surveying Services - MAPEA | Costa Rica",
    description: "Comprehensive LiDAR surveying services including 3D mapping, cadastral reports, territorial analysis, and property advisory. Professional drone technology solutions.",
    keywords: "LiDAR services, 3D mapping, cadastral reports, territorial analysis, property advisory, drone surveying, Costa Rica"
  },
  clients: {
    title: "Our Clients - MAPEA LiDAR Surveying | Costa Rica", 
    description: "Trusted by leading organizations across Costa Rica for precision LiDAR surveying and territorial mapping solutions. See our client success stories.",
    keywords: "MAPEA clients, LiDAR projects, surveying clients, Costa Rica projects, territorial mapping clients"
  },
  contact: {
    title: "Contact MAPEA - LiDAR Surveying Experts | Costa Rica",
    description: "Get in touch with MAPEA for professional LiDAR surveying services in Costa Rica. Request a quote for your topographic mapping project today.",
    keywords: "contact MAPEA, LiDAR quote, surveying consultation, Costa Rica surveying, topographic mapping contact"
  }
};

// Schema.org structured data
export const SCHEMA_DATA = {
  organization: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MAPEA",
    "url": "https://mapea.cr",
    "logo": "https://mapea.cr/logo.png",
    "description": "Professional LiDAR surveying services using cutting-edge drone technology for precise 3D mapping and territorial analysis.",
    "telephone": "+506-8712-3676",
    "email": "info@mapea.cr",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Costa Rica"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.7489",
      "longitude": "-83.7534"
    },
    "openingHours": "Mo-Fr 08:00-17:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "Country", 
      "name": "Costa Rica"
    }
  },
  services: [
    {
      "@type": "Service",
      "name": "3D LiDAR Mapping",
      "description": "High-precision 3D mapping using LiDAR drone technology for accurate topographic surveys and territorial analysis."
    },
    {
      "@type": "Service", 
      "name": "Cadastral Reports",
      "description": "Professional cadastral surveying and reporting services for property boundaries and land registration."
    },
    {
      "@type": "Service",
      "name": "Territorial Analysis", 
      "description": "Comprehensive territorial analysis and land use planning using advanced LiDAR data processing."
    },
    {
      "@type": "Service",
      "name": "Property Advisory",
      "description": "Expert property consulting and advisory services based on precise LiDAR surveying data."
    }
  ]
};

export const COLORS = {
  black: '#000000',
  darkGray: '#3c3c3c',
  lightGray: '#b5b5b5',
  olive: '#888c71',
  blue: '#3737dd',
  white: '#FFFFFF'
};

