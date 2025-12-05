import exampleProjectImage from 'figma:asset/fallback-pic.png';

import prBefore from '../assets/projects/prometric/prometric-legacy.png';
import prAfter from '../assets/projects/prometric/prometric-modern.png';
import prOne from '../assets/projects/prometric/prometric-1.png';
import prTwo from '../assets/projects/prometric/prometric-2.png';
import prThree from '../assets/projects/prometric/prometric-3.png';
import prFour from '../assets/projects/prometric/prometric-4.png';

import gpsBefore from '../assets/projects/dcli/dcli-legacy.png';
import gpsAfter from '../assets/projects/dcli/dcli-modern.png';
import gpsOne from '../assets/projects/dcli/dcli-modern.png';
import gpsTwo from '../assets/projects/dcli/dcli-2.png';
import gpsThree from '../assets/projects/dcli/dcli-3.png';

import iaiBefore from '../assets/projects/iai/iai-legacy.png';
import iaiAfter from '../assets/projects/iai/iai-modern.png';
import iaiOne from '../assets/projects/iai/iai-2.png';
import iaiTwo from '../assets/projects/iai/iai-3.png';
import iaiThree from '../assets/projects/iai/iai-4.png';
import iaiFour from '../assets/projects/iai/iai-5.png';

import otBefore from '../assets/projects/ot/ot-legacy.png';
import otAfter from '../assets/projects/ot/ot-modern.png';
import otOne from '../assets/projects/ot/ot-modern.png';
import otTwo from '../assets/projects/ot/ot-2.png';
import otThree from '../assets/projects/ot/ot-3.png';

import riverbedBefore from '../assets/projects/riverbed/riverbed-legacy.png';
import riverbedAfter from '../assets/projects/riverbed/riverbed-modern.png';
import riverbedOne from '../assets/projects/riverbed/riverbed-modern.png';
import riverbedTwo from '../assets/projects/riverbed/riverbed2.png';
import riverbedThree from '../assets/projects/riverbed/riverbed3.png';
import riverbedFour from '../assets/projects/riverbed/riverbed4.png';
import riverbedFive from '../assets/projects/riverbed/riverbed5.png';

import hyundaiOne from '../assets/projects/hyundai/hyundai1.png';
import hyundaiTwo from '../assets/projects/hyundai/hyundai2.png';
import hyundaiThree from '../assets/projects/hyundai/hyundai3.png';
import hyundaiFour from '../assets/projects/hyundai/hyundai4.png';

import costcoOne from '../assets/projects/costco/costco-tires1.png';
import costcoThree from '../assets/projects/costco/costco-tires1.png';
import costcoFour from '../assets/projects/costco/costco-tires1.png';

import genesisOne from '../assets/projects/genesis/genesis1.png';
import genesisTwo from '../assets/projects/genesis/genesis2.png';
import genesisThree from '../assets/projects/genesis/genesis3.png';



export const caseStudies = [
    {
    id: "prometric",
    title: "Prometric Test Creation",
    client: "Prometric Inc",
    showComparison: true,
    overview: "The existing Flex-based modules relied on deprecated technologies and lacked long-term maintainability. As technical debt accumulated, enhancements became costly and inefficient. To ensure scalability, improve performance, and align with modern development standards, a complete migration to React was required.",
    role: "Lead UX Designer",
    tech: ["Figma", "HTML", "SCSS", "KendoReact", "WCAG 2.1"],

    beforeImage: prBefore,
    afterImage: prAfter,

    images: [prOne, prTwo, prThree, prFour],
    responsibilities: [
      "Designed and developed UI components aligned with modern UX patterns.",
      "Improved interaction flows to ensure smoother user navigation.",
      "Enhanced accessibility and performed WCAG 2.1 AA compliance checks."
    ],
    challenge: "The legacy Flex modules were relying on obsolete technology and posed significant maintenance challenges. To improve performance, maintainability, and future scalability, we undertook a complete modernization initiative, transitioning the entire system to React.",
    outcomes: "The migration to a modern React application was completed successfully, introducing a more accessible, responsive, and intuitive interface. This overhaul not only improved usability but also enabled faster iteration, better performance, and long-term maintainability.",
    color: "from-blue-600 to-cyan-500"
  },
  {
    id: "gps-navigation",
    title: "GPS Navigation",
    client: "DCLI",
    showComparison: true,
    overview: "An overview of GPS navigation solutions, with responsibilities spanning Web UI development as well as mobile application development to deliver a seamless cross-platform experience.",
    role: "UX Architect",
    tech: ["Figma", "ChatGPT"],
    beforeImage: gpsBefore,
    afterImage: gpsAfter,
    images: [gpsOne, gpsTwo, gpsThree],
    responsibilities: [
      "Designed prototype in Figma",
      "Created Design System",
      "Mentored UI Team"
    ],
    challenge: "A key challenge involved establishing a unified navigation framework that delivered a consistent, intuitive experience across web and mobile applications, despite differences in screen sizes, interaction models, and user expectations.",
    outcomes: "Developed a scalable design system and delivered high-fidelity prototypes, enabling cohesive user experiences, faster implementation, and improved cross-team collaboration.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: "iaminterviewed",
    title: "IAmInterviewed",
    client: "Antern Technology",
    showComparison: true,
    overview: "An end-to-end initiative involving UI modernization and mobile app development to enhance usability, improve performance, and deliver a seamless cross-platform experience.",
    role: "Lead UX Designer",
    tech: ["Figma", "HTML", "SCSS", "React"],
    beforeImage: iaiBefore,
    afterImage: iaiAfter,
    images: [iaiAfter, iaiOne, iaiTwo, iaiThree, iaiFour],
    responsibilities: [
      "Designed prototype in Figma",
      "Designed and developed UI components aligned with modern UX patterns.",
      "UX Research and Heuristic Evaluation",
      "Improved interaction flows to ensure smoother user navigation."
    ],
    challenge: "A key challenge involved overhauling the outdated UI and creating a well-integrated mobile app experience that aligns with modern usability standards and user expectations.",
    outcomes: "Achieved a fully modernized UI and redesigned navigation flows, resulting in improved usability, clearer task paths, and a more seamless overall user experience.",
    color: "from-purple-600 to-indigo-600"
  },
  {
    id: "officer-track",
    title: "Off Duty Management",
    client: "OfficerTRACK",
    showComparison: true,
    overview: "A complete UI redesign and front-end development initiative for a law enforcement activity tracking system, complemented by a thorough accessibility review to ensure compliance and inclusive user experiences.",
    role: "Product Designer",
    tech: ["Figma", "HTML", "CSS", "jQuery", "WCAG 2.1"],
    beforeImage: otBefore,
    afterImage: otAfter,
    images: [otOne, otTwo, otThree],
    responsibilities: [
      "Refined UI layouts for clarity and operational efficiency.",
      "Conducted accessibility evaluation based on WCAG 2.1 AA.",
      "Improved user flow consistency across modules."
    ],
    challenge: "The legacy system lacked clarity in its interface and suffered from inefficient workflows, creating the need for a comprehensive redesign to improve usability and operational effectiveness.",
    outcomes: "Achieved a cohesive and accessibility-enhanced user interface, resulting in improved user confidence, clearer workflows, and a more inclusive experience.",
    color: "from-slate-700 to-slate-900"
  },
  {
    id: "riverbed-support",
    title: "Riverbed Support",
    client: "Riverbed",
    showComparison: true,
    overview: "Oversaw major enhancements and sustained maintenance efforts for Riverbed’s corporate website and global support portal, ensuring improved performance, usability, and reliability across platforms.",
    role: "UX/UI Designer",
    tech: ["Adobe XD", "Figma", "HTML", "CSS", "JavaScript", "AEM"],
    beforeImage: riverbedBefore,
    afterImage: riverbedAfter,
    images: [riverbedOne, riverbedTwo, riverbedThree, riverbedFour, riverbedFive],
    responsibilities: [
      "Designed UI enhancements and contributed to UX refinements.",
      "Integrated front-end features with AEM and managed publish workflows.",
      "Supported backend teams in UI-related implementation and coordinated with onsite team."
    ],
    challenge: "A key challenge was to continuously maintain and enhance Riverbed’s corporate site and global support portal, ensuring seamless functionality amid numerous complex third-party and backend integrations.",
    outcomes: "Achieved more efficient UI enhancement processes and significantly improved collaboration with backend teams, resulting in faster delivery, reduced friction, and more cohesive product improvements.",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "sabre-inc",
    title: "Sabre Inc.",
    client: "Sabre",
    showComparison: false,
    overview: "Led UI enhancement initiatives and implemented accessibility improvements for the Sabre client website, ensuring a more user-friendly, compliant, and inclusive digital experience.",
    role: "Accesibility Analyst",
    tech: ["Figma", "WCAG 2.0"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Conducted accessibility reviews aligned with WCAG 2.0 AA.",
      "Enhanced interface structure for improved usability.",
      "Ensured consistent styling and interaction across pages."
    ],
    challenge: "A key challenge involved bringing the client website into full alignment with WCAG 2.0 AA accessibility requirements, ensuring inclusivity for users with diverse abilities while maintaining design and functional integrity.",
    outcomes: "Delivered significant improvements in overall usability and successfully elevated the website to meet WCAG accessibility compliance, resulting in a more inclusive and user-friendly experience.",
    color: "from-red-600 to-pink-600"
  },
  {
    id: "my-hyundai",
    title: "My Hyundai",
    client: "Hyundai America",
    showComparison: false,
    overview: "A customer-facing interface that allows Hyundai vehicle owners to access and manage their Hyundai Owner Profile, including personal details, vehicle information, and connected services.",
    role: "Senior UI/UX Designer",
    tech: ["Figma", "HTML", "CSS", "jQuery", "AEM"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Designed user-friendly interface components and navigational flows.",
      "Developed responsive front-end screens for AEM integration.",
      "Ensured consistent UI patterns across user dashboard features."
    ],
    challenge: "A key challenge involved designing a unified, intuitive dashboard experience that enables Hyundai vehicle owners to easily access and manage their profile, vehicle data, and related services.",
    outcomes: "Achieved a fully responsive and user-centric owner profile interface, enhancing usability, improving navigation, and providing a smoother experience for Hyundai vehicle owners across devices.",
    color: "from-indigo-600 to-blue-600"
  },
  {
    id: "cpo-hyundai",
    title: "CPO Hyundai",
    client: "Hyundai America",
    showComparison: false,
    overview: "A customer-facing portal that highlights Hyundai’s Certified Pre-Owned vehicle lineup, providing detailed listings, vehicle insights, and a streamlined browsing experience for prospective buyers.",
    role: "Senior UI/UX Designer",
    tech: ["Figma", "HTML", "CSS", "jQuery", "AEM"],
    images: [hyundaiOne, hyundaiTwo, hyundaiThree, hyundaiFour],
    responsibilities: [
      "Designed clean UI layouts supporting vehicle search and filtering.",
      "Developed responsive front-end templates for AEM components.",
      "Improved UX across listing and detail pages."
    ],
    challenge: "A key challenge involved enhancing the search and filtering experience to ensure users could efficiently discover Hyundai Certified Pre-Owned vehicles based on their preferences, budget, and feature requirements.",
    outcomes: "Delivered a significantly improved browsing and filtering experience, allowing prospective buyers to seamlessly explore Hyundai Certified Pre-Owned vehicles and make more informed decisions.",
    color: "from-blue-800 to-indigo-900"
  },
  {
    id: "ncr-com",
    title: "NCR.com",
    client: "NCR",
    showComparison: false,
    overview: "The official corporate website for NCR, serving as the primary digital touchpoint for showcasing the company’s solutions, services, and brand presence.",
    role: "UI Designer & Front-End Lead",
    tech: ["Figma", "HTML", "CSS", "jQuery", "Java", "AEM"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Developed front-end modules ensuring brand consistency.",
      "Improved UI responsiveness across enterprise-level pages.",
      "Ensured proper integration with AEM components."
    ],
    challenge: "A key challenge involved maintaining and optimizing NCR’s large-scale corporate website, balancing complex content structures, multiple stakeholder requirements, and the need for consistent brand representation across all digital touchpoints.",
    outcomes: "Delivered a more consistent and user-friendly corporate website through ongoing UI enhancements, refined content presentation, and improved collaboration with cross-functional teams, strengthening NCR’s digital presence.",
    color: "from-emerald-600 to-green-500"
  },
  {
    id: "netapp-software",
    title: "NetApp – Software Download Portal",
    client: "NetApp",
    showComparison: false,
    overview: "A comprehensive software download portal designed to serve NetApp’s product ecosystem, enabling customers to securely access software packages, updates, and related resources.",
    role: "UX Researcher & Designer",
    tech: ["HTML", "CSS", "jQuery", "Java", "Figma"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Designed UI layouts for simplified software discovery.",
      "Developed front-end screens ensuring smooth user workflows.",
      "Structured pages for future AEM integration."
    ],
    challenge: "A key challenge involved streamlining the user experience within a large and highly technical software download portal, simplifying navigation, reducing friction, and ensuring users could efficiently locate and download the appropriate NetApp software and updates.",
    outcomes: "Achieved a significantly improved download experience through enhanced navigation, clearer information architecture, and streamlined user flows-resulting in faster access to software and greater user satisfaction.",
    color: "from-blue-700 to-cyan-600"
  },
  {
    id: "costco-tires",
    title: "Costco Tires",
    client: "Costco",
    showComparison: false,
    overview: "Led the implementation of WCAG accessibility standards for the Costco Tires e-commerce portal, enhancing compliance, usability, and accessibility for a diverse customer base.",
    role: "Accessibility Specialist",
    tech: ["HTML", "CSS", "ASP.Net", "Adobe XD"],
    images: [costcoOne, costcoThree, costcoFour],
    responsibilities: [
      "Implemented accessibility features aligned with WCAG 2.0 A.",
      "Improved overall UI layout and ordering experience.",
      "Enhanced visual structure for easier product exploration."
    ],
    challenge: "A key challenge involved ensuring that the Costco Tires e-commerce experience adhered to WCAG accessibility standards, requiring updates to UI components, interaction patterns, and underlying code to support an inclusive and compliant shopping experience.",
    outcomes: "Delivered a more accessible and compliant e-commerce experience by implementing WCAG standards, resulting in improved usability, reduced barriers for customers with disabilities, and alignment with industry accessibility best practices.",
    color: "from-blue-900 to-slate-800"
  },
  {
    id: "elcom",
    title: "ELCOM",
    client: "ELCOM UK",
    showComparison: false,
    overview: "A comprehensive interface for Elcom’s e-procurement and e-funding solutions, enabling organizations to manage purchasing, funding requests, and financial workflows efficiently and transparently.",
    role: "UI/UX Designer",
    tech: ["HTML", "CSS", "Classic ASP", "Java", "Adobe XD"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Created structured UI designs to support complex workflows.",
      "Analyzed UX issues and implemented usability improvements.",
      "Simplified the navigation experience for enterprise users."
    ],
    challenge: "A key challenge involved simplifying intricate procurement and funding processes, transforming them into an intuitive and efficient user experience that supports seamless decision-making and reduces operational bottlenecks.",
    outcomes: "Achieved a significantly more usable and streamlined interface, providing clearer workflows, enhanced task efficiency, and a smoother user experience across Elcom’s e-procurement and e-funding operations.",
    color: "from-slate-600 to-gray-700"
  },
  {
    id: "genesis-cpo",
    title: "Genesis CPO",
    client: "Hyundai USA",
    showComparison: false,
    overview: "A comprehensive showcase platform for Genesis Certified Pre-Owned vehicles, enabling prospective buyers to explore detailed listings, compare models, and access essential vehicle information within a premium brand experience.",
    role: "UI/UX Designer",
    tech: ["HTML5", "CSS3", "jQuery", "Bootstrap", "Java", "AEM", "Adobe XD"],
    images: [genesisTwo, genesisOne, genesisThree],
    responsibilities: [
      "Designed UI layouts optimized for premium vehicle browsing.",
      "Developed templates compatible with AEM.",
      "Improved UX of search, filter, and detail pages."
    ],
    challenge: "A key challenge involved crafting a premium, brand-aligned digital experience that allowed users to seamlessly browse Genesis Certified Pre-Owned vehicles, ensuring the interface met luxury design standards while remaining highly functional and user-centric.",
    outcomes: "Achieved a premium, intuitive browsing experience that elevated the presentation of Genesis Certified Pre-Owned vehicles, enhanced user engagement, and aligned closely with the brand’s luxury design ethos.",
    color: "from-slate-800 to-black"
  },
  {
    id: "ams-ui-ux",
    title: "AMS UI/UX Upgradation",
    client: "NCR",
    showComparison: false,
    overview: "A comprehensive UI modernization initiative for the AMS system, aimed at enhancing usability, streamlining workflows, and delivering a more intuitive and visually consistent user experience.",
    role: "Lead UI/UX Designer",
    tech: ["HTML5", "CSS3", "jQuery", "ASP.NET", "Adobe XD"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Led UI/UX team through redesign and improvements.",
      "Streamlined layout for better functional clarity.",
      "Enhanced interface for ease of use across modules."
    ],
    challenge: "A key challenge involved transforming a dated AMS interface into a modern, user-centric experience by resolving navigation complexities, improving workflow efficiency, and establishing consistent design standards.",
    outcomes: "Achieved a fully modernized and cohesive AMS interface that improved user efficiency, reduced friction in daily workflows, and established a scalable design foundation for future enhancements.",
    color: "from-emerald-700 to-green-800"
  },
  {
    id: "discover",
    title: "Discover",
    client: "Trisept Solutions, USA",
    showComparison: false,
    overview: "A specialized travel booking system built for travel agents, enabling them to search, book, and manage travel itineraries efficiently across multiple destinations and services.",
    role: "UI Developer",
    tech: ["XHTML", "CSS", "jQuery", "MVC", "Adobe XD"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Developed UI layouts ensuring operational efficiency.",
      "Created clear, structured page templates.",
      "Improved consistency in booking flow interactions."
    ],
    challenge: "A key challenge involved simplifying the multi-step travel booking process for agents-reducing friction, minimizing errors, and enabling quick access to essential travel options across flights, hotels, and packages.",
    outcomes: "Achieved a more streamlined and agent-friendly booking experience, enhancing workflow efficiency, reducing booking time, and enabling agents to deliver better service to their customers.",
    color: "from-orange-600 to-yellow-600"
  },
  {
    id: "propel",
    title: "Propel (Web & Mobile)",
    client: "HP",
    showComparison: false,
    overview: "A comprehensive IT request management and provisioning platform available on both web and mobile, enabling employees to submit, track, and manage IT service requests efficiently while improving operational visibility for IT teams.",
    role: "UI Designer",
    tech: ["HTML5", "CSS3", "jQuery", "C#", "MVC3", "XML", "SQL Server", "Adobe XD"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Designed UI for both web and mobile versions.",
      "Built interactive front-end screens using modern web standards.",
      "Structured workflows to improve request submission experience."
    ],
    challenge: "A key challenge involved designing a unified, cross-platform experience that simplified IT request submission, tracking, and provisioning. This required harmonizing workflows, reducing user friction, and ensuring consistency between the web and mobile applications.",
    outcomes: "Achieved a cohesive web and mobile experience with streamlined workflows, improved request visibility, and enhanced usability-empowering employees to manage IT requests with greater ease while enabling IT teams to respond more efficiently.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: "hershey-hrs",
    title: "Hershey - HRS System",
    client: "Hershey, USA",
    showComparison: false,
    overview: "A comprehensive vacation booking and package management platform that enables customers to explore destinations, customize packages, and manage their travel itineraries with ease.",
    role: "UI Designer",
    tech: ["XHTML", "CSS", "jQuery", "C#", "ASP.NET", "XML", "SQL Server", "Adobe XD"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Designed interface screens for seamless trip planning.",
      "Improved UX for inventory selection and booking sections.",
      "Ensured visual consistency across modules."
    ],
    challenge: "A key challenge involved transforming a complex vacation booking workflow into an intuitive, user-centric experience-making it easier for customers to browse destinations, tailor packages, and manage their travel details with confidence and clarity.",
    outcomes: "Achieved a streamlined, user-friendly booking experience with simplified workflows, improved package customization, and greater visibility into travel details-leading to higher customer satisfaction and smoother end-to-end interactions.",
    color: "from-amber-800 to-amber-900"
  },
  {
    id: "hotel-solution-direct",
    title: "Hotel Solution Direct",
    client: "HSD UK",
    showComparison: false,
    overview: "A comprehensive room booking and travel management platform that enables users to search accommodations, make reservations, and manage their travel itineraries efficiently and seamlessly.",
    role: "UI Designer",
    tech: ["XHTML", "CSS", "Java", "JSF", "Richfaces", "JavaScript", "MySQL", "XML", "WebSphere", "Adobe XD"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Created UI layouts enhancing user navigation.",
      "Conducted UX analysis to optimize booking steps.",
      "Improved page structure for large content modules."
    ],
    challenge: "A key challenge involved simplifying complex booking and travel management workflows-ensuring users could effortlessly search for rooms, compare options, make reservations, and manage their travel details within a clear and user-friendly interface.",
    outcomes: "Achieved a streamlined, intuitive booking experience with optimized workflows and clearer navigation-enabling users to manage accommodations and travel plans more confidently and efficiently.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: "video-travel-deals",
    title: "Video Travel Deals",
    client: "Trisept Solutions, USA",
    showComparison: false,
    overview: "A visually rich, video-driven platform designed to help users discover and plan luxury travel experiences by showcasing destinations, offers, and curated itineraries through immersive video content.",
    role: "UI Designer",
    tech: ["XHTML", "CSS", "JavaScript", "MOSS 2007", "ASP.NET 3.5", "WCF", "Adobe Photoshop"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Designed media-rich UI screens for high-impact storytelling.",
      "Improved UX for video browsing and package exploration.",
      "Structured content layouts for better engagement."
    ],
    challenge: "A key challenge involved building a visually rich, video-centric interface that inspired users to explore luxury travel options-ensuring smooth playback, clear navigation, and an engaging content experience ",
    outcomes: "Achieved a highly engaging luxury travel planning experience by integrating seamless video content, intuitive navigation, and visually appealing layouts-resulting in stronger user interest and more informed travel decisions.",
    color: "from-pink-600 to-rose-600"
  },
  {
    id: "voyage",
    title: "Voyage",
    client: "Trisept Solutions, USA",
    showComparison: false,
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
    showComparison: false,
    overview: "A specialized booking interface that enables guests to explore, customize, and reserve Disney celebration and event experiences, delivering a seamless and magical planning journey aligned with the Disney brand.",
    role: "UI Designer",
    tech: ["XHTML", "CSS", "Java", "JSF", "Richfaces", "JavaScript", "XML", "WebSphere", "Adobe Photoshop"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Designed interactive UI screens aligned with Disney brand style.",
      "Developed user-friendly layouts for event scheduling.",
      "Improved the clarity of content-heavy pages."
    ],
    challenge: "A key challenge involved crafting a user-friendly, emotionally engaging interface that reflected the Disney brand’s sense of magic and wonder-while ensuring guests could easily explore celebration options, customize experiences, and complete bookings without friction.",
    outcomes: "Achieved a seamless, delightfully immersive booking experience that elevated the planning of Disney celebrations-improving usability, enhancing visual appeal, and reinforcing the brand’s signature sense of magic and joy.",
    color: "from-blue-400 to-pink-400"
  },
  {
    id: "door2tour",
    title: "Door2Tour",
    client: "Door2Tour, UK",
    showComparison: false,
    overview: "A comprehensive UK-based travel and tour booking portal that enables users to browse, compare, and reserve a wide range of coach tours and travel experiences with ease.",
    role: "UI Designer",
    tech: ["XHTML", "CSS", "JavaScript", "C#", "ASP.NET", "XML", "SQL Server", "Kentico CMS", "Adobe Photoshop"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Designed UI for fast tour discovery and booking.",
      "Enhanced navigation and filter usability.",
      "Improved overall consistency across pages."
    ],
    challenge: "A key challenge involved transforming a complex tour discovery and booking journey into an intuitive, user-friendly experience-allowing customers to effortlessly browse tours, compare details, and complete bookings across a wide variety of travel offerings.",
    outcomes: "Achieved a significantly enhanced booking experience with streamlined navigation, improved tour presentation, and more intuitive workflows-helping users find and reserve the right UK tour experiences with greater ease.",
    color: "from-green-600 to-teal-600"
  },
  {
    id: "ihml",
    title: "IHML",
    client: "IHML UK",
    showComparison: false,
    overview: "A comprehensive hotel reservation and travel package management platform that allows users to search accommodations, customize packages, and manage travel itineraries seamlessly.",
    role: "UI Designer",
    tech: ["XHTML", "CSS", "Java", "J2EE", "XML", "WebSphere", "Adobe Photoshop"],
    images: [exampleProjectImage, exampleProjectImage, exampleProjectImage],
    responsibilities: [
      "Designed interfaces for hotel reservation management.",
      "Ensured seamless integration with Java backend systems.",
      "Optimized UI for operational efficiency."
    ],
    challenge: "A key challenge involved transforming complex hotel booking and travel package management workflows into a clear, intuitive experience-making it easier for users to explore options, customize packages, and manage itineraries without confusion or friction.",
    outcomes: "Achieved a more streamlined and user-friendly experience with optimized booking flows, clearer navigation, and improved task efficiency-helping users manage hotel reservations and travel packages with greater ease and confidence.",
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
