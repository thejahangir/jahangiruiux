
import React, { useEffect, useState } from 'react';
import ImageModal from "../components/ImageModal";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Layers, Lightbulb, Trophy, Code2, Briefcase, ChevronRight, ChevronLeft, Monitor, Smartphone, MousePointer2 } from 'lucide-react';
import Slider from 'react-slick';
import { caseStudies } from '../data/portfolioData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';



// Custom Arrows for Carousel
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/20 border border-white/10 text-white hover:bg-black/60 hover:border-white/30 transition-all backdrop-blur-md"
    >
      <ChevronRight size={20} />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/20 border border-white/10 text-white hover:bg-black/60 hover:border-white/30 transition-all backdrop-blur-md"
    >
      <ChevronLeft size={20} />
    </button>
  );
}

export default function CaseStudy() {
  const [modalOpen, setModalOpen] = useState(false);
const [selectedImage, setSelectedImage] = useState<string | null>(null);

const openModal = (img: string) => {
  setSelectedImage(img);
  setModalOpen(true);
};

const closeModal = () => {
  setModalOpen(false);
  setSelectedImage(null);
};

  const { id } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  
  const study = caseStudies.find(s => s.id === id);
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Scroll Spy for TOC
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      // Default to first section if at top
      if (window.scrollY < 100) {
        setActiveSection('overview');
        return;
      }

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        // Offset of 150px to trigger active state just before section hits top
        if (window.scrollY >= (sectionTop - 250)) {
          current = section.getAttribute('id') || '';
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  if (!study) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center bg-black text-white">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
      </div>
    );
  }

  // Find next project for navigation
  const currentIndex = caseStudies.findIndex(s => s.id === id);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: false,
    dotsClass: "slick-dots !bottom-8",
    customPaging: (i: number) => (
      <div className="w-2 h-2 rounded-full bg-white/30 hover:bg-white transition-colors mt-2 cursor-pointer" />
    )
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const sections = [
    { id: 'overview', label: 'Overview' },
    ...(study?.challenge ? [{ id: 'challenge', label: 'The Challenge' }] : []),
    { id: 'visuals', label: 'Visual Evolution' },
    ...(study?.responsibilities && study.responsibilities.length > 0 ? [{ id: 'responsibilities', label: 'Role & Process' }] : []),
    ...(study?.outcomes ? [{ id: 'outcomes', label: 'Outcomes' }] : []),
  ];

  return (
    <div className="bg-black text-slate-200 pb-20">
      
      {/* Hero Header */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-white/5">
        <div className={`absolute inset-0 bg-gradient-to-b ${study.color} opacity-[0.15]`}></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/work" className="inline-flex items-center text-slate-400 hover:text-white mb-8 font-medium text-sm transition-colors group">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Projects
          </Link>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight max-w-4xl"
          >
            {study.title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-x-12 gap-y-6 text-sm md:text-base border-t border-white/10 pt-8"
          >
            <div>
              <span className="block text-slate-500 mb-1">Client</span>
              <span className="font-medium text-white text-lg">{study.client}</span>
            </div>
            <div>
              <span className="block text-slate-500 mb-1">Role</span>
              <span className="font-medium text-white text-lg">{study.role}</span>
            </div>
            <div>
              <span className="block text-slate-500 mb-1">Timeline</span>
              <span className="font-medium text-white text-lg">20XX — 20XX</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Content */}
          <div className="lg:col-span-9 space-y-32">
            
            {/* Overview */}
            <section id="overview" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6 hidden">Overview</h2>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                {study.overview}
              </p>
              
              <div className="mt-12 flex flex-wrap gap-3">
                {study.tech.map((t: string) => (
                  <span key={t} className="px-4 py-2 bg-slate-900/50 border border-white/10 rounded-full text-sm text-slate-300 hover:bg-slate-800 hover:border-white/20 transition-colors cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </section>

            {/* Challenge */}
            {study.challenge && (
              <section id="challenge" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                    <Lightbulb className="text-amber-500" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-white">The Challenge</h2>
                </div>
                <div className="prose prose-invert prose-lg max-w-none text-slate-400">
                  <p>{study.challenge}</p>
                </div>
              </section>
            )}

            {/* Visual Evolution (Before/After or Gallery) */}
            <section id="visuals" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Monitor className="text-blue-500" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">Visual Evolution</h2>
              </div>

              {/* Main Gallery Slider */}
              <div className="w-full bg-slate-900/50 rounded-3xl border border-white/10 overflow-hidden relative shadow-2xl mb-12">
                {study.images && study.images.length > 0 ? (
                  <Slider {...sliderSettings} className="case-study-slider">
                    {study.images.map((img: string, idx: number) => (
                      <div key={idx} className="outline-none">
                        <div className="aspect-[16/10] relative bg-slate-950/50 flex items-center justify-center p-8 md:p-12">
                          <ImageWithFallback 
                            src={img} 
                            alt={`${study.title} design ${idx + 1}`} 
                            className="w-full h-full object-contain rounded-lg shadow-lg"
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                ) : (
                   <div className="w-full aspect-video bg-slate-900 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black opacity-50"></div>
                      <span className="text-slate-500 font-medium relative z-10 flex flex-col items-center gap-3">
                        <Layers size={48} className="opacity-50" />
                        Project Visuals
                      </span>
                   </div>
                )}
              </div>

              {/* Comparison Grid (Simulated Before/After) */}
              {study.showComparison && (
                <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-slate-900 rounded-xl border border-white/5 p-1">
                    <div className="aspect-video bg-slate-950 relative rounded-lg overflow-hidden group">
                       {study.images && study.images[0] ? (
                         <ImageWithFallback 
                           src={study.images[0]} 
                           alt="Previous Interface" 
                           className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer" 
                           onClick={() => openModal(study.images[0])}
                         />
                       ) : <div className="w-full h-full bg-slate-800" />}
                       <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs font-medium text-white border border-white/10">
                         Before
                       </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-slate-400">Legacy Interface</h3>
                  <p className="text-sm text-slate-500">The original system suffered from outdated interaction patterns and poor accessibility.</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-900 rounded-xl border border-white/5 p-1">
                    <div className="aspect-video bg-slate-950 relative rounded-lg overflow-hidden group">
                       {study.images && study.images[0] ? (
                         <ImageWithFallback 
                           src={study.images[0]} 
                           alt="New Interface" 
                           className="w-full h-full object-cover transition-all duration-500 cursor-pointer" 
                           onClick={() => openModal(study.images[0])}
                         />
                       ) : <div className="w-full h-full bg-slate-800" />}
                       <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-md px-3 py-1 rounded text-xs font-medium text-white shadow-lg ">
                         After
                       </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-white">Modernized Experience</h3>
                  <p className="text-sm text-slate-400">A streamlined, accessible, and component-driven interface designed for scale.</p>
                </div>
              </div>
              )}
              
            </section>

            {/* Responsibilities */}
            {study.responsibilities && study.responsibilities.length > 0 && (
              <section id="responsibilities" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                    <Briefcase className="text-purple-500" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Role & Responsibilities</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {study.responsibilities.map((resp, i) => (
                    <div key={i} className="flex gap-4 p-6 bg-slate-900/30 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-purple-400 font-bold text-sm">
                        {i + 1}
                      </div>
                      <p className="text-slate-300 leading-relaxed">{resp}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Outcomes */}
            {study.outcomes && (
              <section id="outcomes" className="scroll-mt-32">
                <div className="bg-gradient-to-br from-emerald-950 to-black border border-emerald-900/50 p-10 rounded-3xl relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                  {/* Glow Effect */}
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] group-hover:bg-emerald-500/30 transition-all duration-700"></div>
                  
                  <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 flex-shrink-0 shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]">
                      <Trophy className="text-emerald-400" size={32} />
                    </div>
                    
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-4">Key Outcomes</h2>
                      <div className="flex items-start gap-4">
                         <CheckCircle2 className="text-emerald-500 flex-shrink-0 mt-1.5" size={24} />
                         <p className="text-xl text-slate-200 leading-relaxed font-light">{study.outcomes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
            
          </div>

          {/* Right Sidebar (Sticky TOC) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32">
              <div className="mb-8">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Contents</h3>
                <nav className="space-y-1 border-l border-white/10">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left px-4 py-2 text-sm transition-all border-l-2 -ml-[1px] ${
                        activeSection === section.id
                          ? 'border-blue-500 text-white font-medium'
                          : 'border-transparent text-slate-500 hover:text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Mini Info Card */}
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.tech.slice(0, 4).map((t) => (
                      <span key={t} className="text-xs text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/5">
                        {t}
                      </span>
                    ))}
                    {study.tech.length > 4 && (
                      <span className="text-xs text-slate-500 px-1 py-1">
                        +{study.tech.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Project Type</h4>
                  <span className="text-sm text-white">Enterprise / Web App</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Next Project Navigation */}
      <div className="border-t border-white/10 bg-slate-950 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-4 block">Next Case Study</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 hover:text-blue-400 transition-colors cursor-pointer" onClick={() => navigate(`/work/${nextStudy.id}`)}>
            {nextStudy.title}
          </h2>
          <Link 
            to={`/work/${nextStudy.id}`}
            className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-slate-200 transition-all"
          >
            View Case Study <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>

        <ImageModal 
  isOpen={modalOpen} 
  image={selectedImage} 
  onClose={closeModal} 
/>
      </div>
    </div>
  );
  
}


