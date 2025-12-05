


import exampleProjectImage from 'figma:asset/fallback-pic.png';
import prAfter from '../assets/projects/prometric/prometric-modern.png';
import prBefore from '../assets/projects/prometric/prometric-legacy.png';

export const caseStudies = [
  {
    id: "gps-navigation",
    title: "GPS Navigation",
    client: "DCLI",
    showComparison: true,
    overview: "Web UI Development and Mobile App Development.",
    role: "Lead UX Designer",
    tech: ["Figma", "ChatGPT"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Designed prototype in Figma",
      "Created Design System",
      "Mentored UI Team"
    ],
    challenge: "Creating a unified navigation experience across web and mobile platforms.",
    outcomes: "Established a robust design system and delivered high-fidelity prototypes.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: "iaminterviewed",
    title: "IAmInterviewed",
    client: "Antern Technology",
    showComparison: true,
    overview: "UI Modernization and Mobile App Development.",
    role: "Lead UX Designer",
    tech: ["Figma", "HTML", "SCSS", "React"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Designed prototype in Figma",
      "Designed and developed UI components aligned with modern UX patterns.",
      "UX Research and Heuristic Evaluation",
      "Improved interaction flows to ensure smoother user navigation."
    ],
    challenge: "Modernizing the UI and developing a mobile app experience.",
    outcomes: "Delivered a modern UI and improved user navigation flows.",
    color: "from-purple-600 to-indigo-600"
  },
  {
    id: "prometric",
    title: "Prometric Exam Creation",
    client: "Prometric",
    showComparison: true,
    overview: "Migration of legacy Flex modules into a fully modernized React-based application.",
    role: "Lead UX Designer",
    tech: ["Figma", "HTML", "SCSS", "KendoReact"],

    beforeImage: [prAfter],
    afterImage: [prBefore],

    images: [prBefore, prAfter],
    responsibilities: [
      "Designed and developed UI components aligned with modern UX patterns.",
      "Improved interaction flows to ensure smoother user navigation.",
      "Enhanced accessibility and performed WCAG 2.1 AA compliance checks."
    ],
    challenge: "Legacy Flex modules were outdated and difficult to maintain, requiring a complete modernization to React.",
    outcomes: "Successfully migrated to a modern React application with improved accessibility and user experience.",
    color: "from-blue-600 to-cyan-500"
  },
  {
    id: "officer-track",
    title: "Off Duty Management",
    client: "OfficerTRACK",
    showComparison: true,
    overview: "UI redesign and development for a law enforcement activity tracking system.",
    role: "Product Designer",
    tech: ["Figma", "HTML", "CSS", "jQuery"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Refined UI layouts for clarity and operational efficiency.",
      "Conducted accessibility evaluation based on WCAG 2.1 AA.",
      "Improved user flow consistency across modules."
    ],
    challenge: "The existing system needed a clarity and operational efficiency overhaul.",
    outcomes: "Delivered a more consistent and accessible user interface.",
    color: "from-slate-700 to-slate-900"
  },
  {
    id: "riverbed-support",
    title: "Riverbed Support",
    client: "Riverbed",
    showComparison: true,
    overview: "Enhancements and maintenance of Riverbed’s global support portal.",
    role: "UX/UI Designer",
    tech: ["Adobe XD", "Figma", "AEM"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Designed UI enhancements and contributed to UX refinements.",
      "Integrated front-end features with AEM and managed publish workflows.",
      "Supported backend teams in UI-related implementation and coordinated with onsite team."
    ],
    challenge: "Maintaining and enhancing a global support portal with complex integrations.",
    outcomes: "Streamlined UI enhancements and improved collaboration with backend teams.",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "sabre-inc",
    title: "Sabre Inc.",
    client: "Sabre",
    showComparison: true,
    overview: "UI enhancement and accessibility improvements for Sabre client website.",
    role: "UI Designer",
    tech: ["Figma", "WCAG 2.0"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Conducted accessibility reviews aligned with WCAG 2.0 AA.",
      "Enhanced interface structure for improved usability.",
      "Ensured consistent styling and interaction across pages."
    ],
    challenge: "Ensuring the client website met strict WCAG 2.0 AA accessibility standards.",
    outcomes: "Improved usability and accessibility compliance.",
    color: "from-red-600 to-pink-600"
  },
  {
    id: "my-hyundai",
    title: "My Hyundai",
    client: "Hyundai America",
    showComparison: true,
    overview: "Hyundai Owner Profile interface used by Hyundai vehicle customers.",
    role: "Senior UI/UX Designer",
    tech: ["Figma", "HTML", "CSS", "jQuery", "AEM"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Designed user-friendly interface components and navigational flows.",
      "Developed responsive front-end screens for AEM integration.",
      "Ensured consistent UI patterns across user dashboard features."
    ],
    challenge: "Creating a seamless dashboard experience for vehicle owners.",
    outcomes: "Delivered a responsive and user-friendly owner profile interface.",
    color: "from-indigo-600 to-blue-600"
  },
  {
    id: "cpo-hyundai",
    title: "CPO Hyundai",
    client: "Hyundai America",
    showComparison: true,
    overview: "Portal showcasing Hyundai Certified Pre-Owned vehicles.",
    role: "Senior UI/UX Designer",
    tech: ["Figma", "HTML", "CSS", "jQuery", "AEM"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Designed clean UI layouts supporting vehicle search and filtering.",
      "Developed responsive front-end templates for AEM components.",
      "Improved UX across listing and detail pages."
    ],
    challenge: "Optimizing the vehicle search and filtering experience for pre-owned cars.",
    outcomes: "Enhanced the user experience for browsing and filtering vehicles.",
    color: "from-blue-800 to-indigo-900"
  },
  {
    id: "ncr-com",
    title: "NCR.com",
    client: "NCR",
    showComparison: true,
    overview: "NCR’s official corporate website.",
    role: "UI Designer & Front-End Lead",
    tech: ["Figma", "HTML", "CSS", "jQuery", "Java", "AEM"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Developed front-end modules ensuring brand consistency.",
      "Improved UI responsiveness across enterprise-level pages.",
      "Ensured proper integration with AEM components."
    ],
    challenge: "Maintaining brand consistency across a large corporate website.",
    outcomes: "Improved responsiveness and brand consistency.",
    color: "from-emerald-600 to-green-500"
  },
  {
    id: "netapp-software",
    title: "NetApp – Software Download Portal",
    client: "NetApp",
    showComparison: true,
    overview: "Software download portal for NetApp’s product ecosystem.",
    role: "UX Researcher & Designer",
    tech: ["HTML", "CSS", "jQuery", "Java", "Figma"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Designed UI layouts for simplified software discovery.",
      "Developed front-end screens ensuring smooth user workflows.",
      "Structured pages for future AEM integration."
    ],
    challenge: "Simplifying software discovery in a complex product ecosystem.",
    outcomes: "Smoother user workflows and simplified software discovery.",
    color: "from-blue-700 to-cyan-600"
  },
  {
    id: "costco-tires",
    title: "Costco Tires",
    client: "Costco",
    showComparison: true,
    overview: "E-commerce portal for Costco tires.",
    role: "UI Designer",
    tech: ["HTML", "CSS", "ASP.Net", "Adobe XD"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Implemented accessibility features aligned with WCAG 2.0 A.",
      "Improved overall UI layout and ordering experience.",
      "Enhanced visual structure for easier product exploration."
    ],
    challenge: "Improving the tire ordering experience and visual structure.",
    outcomes: "Enhanced visual structure and ordering experience.",
    color: "from-blue-900 to-slate-800"
  },
  {
    id: "elcom",
    title: "ELCOM",
    client: "ELCOM UK",
    showComparison: true,
    overview: "E-procurement and e-funding solution interface.",
    role: "UI/UX Designer",
    tech: ["HTML", "CSS", "Classic ASP", "Java", "Adobe XD"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Created structured UI designs to support complex workflows.",
      "Analyzed UX issues and implemented usability improvements.",
      "Simplified the navigation experience for enterprise users."
    ],
    challenge: "Supporting complex workflows in an e-procurement system.",
    outcomes: "Simplified navigation and improved usability for enterprise users.",
    color: "from-slate-600 to-gray-700"
  },
  {
    id: "genesis-cpo",
    title: "Genesis CPO",
    client: "Hyundai USA",
    showComparison: true,
    overview: "Genesis Certified Pre-Owned vehicle showcase platform.",
    role: "UI Designer",
    tech: ["HTML5", "CSS3", "jQuery", "Bootstrap", "Java", "AEM", "Adobe XD"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Designed UI layouts optimized for premium vehicle browsing.",
      "Developed templates compatible with AEM.",
      "Improved UX of search, filter, and detail pages."
    ],
    challenge: "Creating a premium browsing experience for luxury vehicles.",
    outcomes: "Optimized UI for premium vehicle browsing.",
    color: "from-slate-800 to-black"
  },
  {
    id: "ams-ui-ux",
    title: "AMS UI/UX Upgradation",
    client: "NCR",
    showComparison: true,
    overview: "UI modernization for AMS system.",
    role: "Lead UI/UX Designer",
    tech: ["HTML5", "CSS3", "jQuery", "ASP.NET", "Adobe XD"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Led UI/UX team through redesign and improvements.",
      "Streamlined layout for better functional clarity.",
      "Enhanced interface for ease of use across modules."
    ],
    challenge: "Modernizing the AMS system for better clarity and ease of use.",
    outcomes: "Streamlined layout and enhanced functional clarity.",
    color: "from-emerald-700 to-green-800"
  },
  {
    id: "discover",
    title: "Discover",
    client: "Trisept Solutions, USA",
    showComparison: true,
    overview: "Travel booking system for agents.",
    role: "UI Developer",
    tech: ["XHTML", "CSS", "jQuery", "MVC", "Adobe XD"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Developed UI layouts ensuring operational efficiency.",
      "Created clear, structured page templates.",
      "Improved consistency in booking flow interactions."
    ],
    challenge: "Ensuring operational efficiency for travel agents.",
    outcomes: "Improved consistency and efficiency in booking flows.",
    color: "from-orange-600 to-yellow-600"
  },
  {
    id: "propel",
    title: "Propel (Web & Mobile)",
    client: "HP",
    showComparison: true,
    overview: "IT request management and provisioning system.",
    role: "UI Designer",
    tech: ["HTML5", "CSS3", "jQuery", "C#", "MVC3", "XML", "SQL Server", "Adobe XD"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Designed UI for both web and mobile versions.",
      "Built interactive front-end screens using modern web standards.",
      "Structured workflows to improve request submission experience."
    ],
    challenge: "Designing a unified experience for both web and mobile platforms.",
    outcomes: "Improved request submission experience across devices.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: "hershey-hrs",
    title: "Hershey – HRS System",
    client: "Hershey, USA",
    showComparison: true,
    overview: "Customer vacation booking and package management system.",
    role: "UI Designer",
    tech: ["XHTML", "CSS", "jQuery", "C#", "ASP.NET", "XML", "SQL Server", "Adobe XD"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Designed interface screens for seamless trip planning.",
      "Improved UX for inventory selection and booking sections.",
      "Ensured visual consistency across modules."
    ],
    challenge: "Creating a seamless trip planning experience for customers.",
    outcomes: "Improved UX for booking and inventory selection.",
    color: "from-amber-800 to-amber-900"
  },
  {
    id: "hotel-solution-direct",
    title: "Hotel Solution Direct",
    client: "HSD UK",
    showComparison: true,
    overview: "Room booking and travel management system.",
    role: "UI Designer",
    tech: ["XHTML", "CSS", "Java", "JSF", "Richfaces", "JavaScript", "MySQL", "XML", "WebSphere", "Adobe XD"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Created UI layouts enhancing user navigation.",
      "Conducted UX analysis to optimize booking steps.",
      "Improved page structure for large content modules."
    ],
    challenge: "Optimizing booking steps and handling large content modules.",
    outcomes: "Enhanced user navigation and optimized booking steps.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: "video-travel-deals",
    title: "Video Travel Deals",
    client: "Trisept Solutions, USA",
    showComparison: true,
    overview: "Video-driven luxury travel planning platform.",
    role: "UI Designer",
    tech: ["XHTML", "CSS", "JavaScript", "MOSS 2007", "ASP.NET 3.5", "WCF", "Adobe Photoshop"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Designed media-rich UI screens for high-impact storytelling.",
      "Improved UX for video browsing and package exploration.",
      "Structured content layouts for better engagement."
    ],
    challenge: "Designing a media-rich platform for high-impact storytelling.",
    outcomes: "Improved engagement through better video browsing and content layouts.",
    color: "from-pink-600 to-rose-600"
  },
  {
    id: "voyage",
    title: "Voyage",
    client: "Trisept Solutions, USA",
    showComparison: true,
    overview: "Luxury lifestyle and travel inspiration platform.",
    role: "UI Designer",
    tech: ["XHTML", "CSS", "JavaScript", "MOSS 2007", "ASP.NET 3.5", "WCF", "Adobe Photoshop"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Designed UI elements supporting rich media content.",
      "Structured layouts for editorial-style browsing.",
      "Enhanced usability across multiple content categories."
    ],
    challenge: "Creating an editorial-style browsing experience for luxury travel.",
    outcomes: "Enhanced usability and visual appeal for rich media content.",
    color: "from-violet-600 to-purple-600"
  },
  {
    id: "disney-magical-celebrations",
    title: "Disney Magical Celebrations",
    client: "Walt Disney World, USA",
    showComparison: true,
    overview: "Celebration and event experience booking interface.",
    role: "UI Designer",
    tech: ["XHTML", "CSS", "Java", "JSF", "Richfaces", "JavaScript", "XML", "WebSphere", "Adobe Photoshop"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Designed interactive UI screens aligned with Disney brand style.",
      "Developed user-friendly layouts for event scheduling.",
      "Improved the clarity of content-heavy pages."
    ],
    challenge: "Aligning interactive UI screens with the Disney brand style.",
    outcomes: "User-friendly layouts for event scheduling and improved clarity.",
    color: "from-blue-400 to-pink-400"
  },
  {
    id: "door2tour",
    title: "Door2Tour",
    client: "Door2Tour, UK",
    showComparison: true,
    overview: "UK-based travel and tour booking portal.",
    role: "UI Designer",
    tech: ["XHTML", "CSS", "JavaScript", "C#", "ASP.NET", "XML", "SQL Server", "Kentico CMS", "Adobe Photoshop"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Designed UI for fast tour discovery and booking.",
      "Enhanced navigation and filter usability.",
      "Improved overall consistency across pages."
    ],
    challenge: "Facilitating fast tour discovery and booking.",
    outcomes: "Enhanced navigation and filter usability.",
    color: "from-green-600 to-teal-600"
  },
  {
    id: "ihml",
    title: "IHML",
    client: "IHML UK",
    showComparison: true,
    overview: "Hotel reservations and travel package management platform.",
    role: "UI Designer",
    tech: ["XHTML", "CSS", "Java", "J2EE", "XML", "WebSphere", "Adobe Photoshop"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Designed interfaces for hotel reservation management.",
      "Ensured seamless integration with Java backend systems.",
      "Optimized UI for operational efficiency."
    ],
    challenge: "Designing for a complex hotel reservation and package management system.",
    outcomes: "Optimized UI for better operational efficiency.",
    color: "from-cyan-700 to-blue-700"
  }
];

export const experience = [
  {
    company: "Infogain",
    role: "Consultant",
    period: "May 2016 - July 2025",
    description: "Leading design strategy for enterprise SaaS products and implementing GenAI workflows."
  },
  {
    company: "HP Enterprise (Bluestar/Infogain)",
    role: "Senior UX Engineer",
    period: "Aug 2011 - May 2016",
    description: "Designed responsive web applications and marketing sites for enterprise clients."
  },
  {
    company: "Blue Star Infotech",
    role: "Senior Visualizer",
    period: "Sept 2009 - Aug 2011",
    description: "Focused on visual design and user interface creation."
  },
  {
    company: "Bob Technology (Blue Star Infotech)",
    role: "Software Engineer",
    period: "June 2008 - Aug 2009",
    description: "Development and design of software interfaces."
  },
  {
    company: "Subhuti Technologies Pvt. Ltd",
    role: "UI Designer",
    period: "Jan 2005 - May 2008",
    description: "Started career designing user interfaces for web applications."
  }
];

export const skills = {
  designStrategy: [
    { name: "UI/UX Design & Research", level: 95 },
    { name: "Accessibility (WCAG 2.1)", level: 90 },
    { name: "Information Architecture", level: 85 },
    { name: "Wireframes & Mockups", level: 95 },
    { name: "Personalization", level: 80 }
  ],
  development: [
    { name: "React & Front-End", level: 75 },
    { name: "AEM Development", level: 85 },
    { name: "WordPress Customization", level: 80 },
    { name: "HTML/CSS/Responsive", level: 95 },
    { name: "Performance Tuning", level: 70 }
  ],
  leadership: [
    { name: "Facilitating Design Sprints", level: 85 },
    { name: "Agile Leadership / Mentoring", level: 90 },
    { name: "Competition & Auditing", level: 80 },
    { name: "GenAI Integration", level: 85 }
  ],
  tools: [
    "Figma", "Adobe XD", "Google Stitch", "ChatGPT", "Lovaable", "Uizard", "GravityWrite", "Copilot", "Gemini", "Perplexity", "Adobe Creative Suite"
  ],
  tech: [
    "HTML", "CSS", "SCSS", "JavaScript", "jQuery", "React", "AEM", "Bootstrap"
  ]
};
