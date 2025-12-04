
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Layers, Code, CheckCircle2, Mail, Smartphone, MapPin, Linkedin } from 'lucide-react';
import { caseStudies, experience, skills } from '../data/portfolioData';
import jahangirPhoto from 'figma:asset/077135f68a21c72637562af7fb23a96c9f28708c.png';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#work') {
      const element = document.getElementById('work');
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  // Only show top 5 featured studies
  const featuredStudies = caseStudies.slice(0, 5);

  return (
    <div className="bg-black text-slate-200">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="flex-1 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for new projects
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">Jahangir.</span>
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-400 tracking-tight mb-8 leading-tight">
            Designing experiences that matter.
          </p>

          <h2 className="text-lg md:text-xl font-medium text-blue-400 mb-6">
            GenAI UX Design Specialist · UI/UX Designer · Front-End Developer
          </h2>
          
          <p className="text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 text-lg">
            Blending human-centered design with AI-powered workflows. UI/UX Designer and GenAI UX Design Specialist with 15+ years of experience creating modern, clean, and intelligent digital experiences. 
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
            <a href="#work" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-slate-200 transition-colors flex items-center gap-2 min-w-[160px] justify-center">
              Explore Case Studies <ArrowRight size={18} />
            </a>
            <Link to="/contact" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-colors flex items-center gap-2 min-w-[160px] justify-center">
              Contact Me
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8 max-w-md mx-auto lg:mx-0">
            <div>
              <h3 className="text-3xl font-bold text-white">16+</h3>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wide mt-1">Years of Exp</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">50+</h3>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wide mt-1">Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">20+</h3>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wide mt-1">Clients</p>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 relative w-full max-w-md lg:max-w-[480px]">
          <div className="aspect-[4/5] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl relative z-10 bg-slate-900 mx-auto w-80 h-80 lg:w-[400px] lg:h-[400px]">
             {/* Gradient overlay on bottom of image */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20"></div>
             <ImageWithFallback 
               src={jahangirPhoto} 
               alt="Jahangir Alam" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>
      </section>
      
      {/* Featured Work Section */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Work</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of 5 key case studies highlighting my expertise in enterprise UI/UX, GenAI-driven workflows, and frontend modernization.
          </p>
        </div>

        <div className="grid gap-6">
          {featuredStudies.map((study) => (
             <FeaturedProjectCard key={study.id} study={study} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <Link to="/work" className="inline-flex items-center text-slate-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
             View All Case Studies <ArrowRight size={16} className="ml-2" />
           </Link>
        </div>
      </section>

      {/* Expertise & Toolset Preview */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Expertise & Toolset</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Bridging the gap between creative design, technical implementation, and AI-driven workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Column 1: Design */}
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-8 backdrop-blur-sm hover:bg-slate-900/80 transition-colors">
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Layers size={20} /></div>
               <h3 className="text-lg font-bold text-white">UX & Design Strategy</h3>
            </div>
            <div className="space-y-4">
               <p className="text-slate-400 text-sm mb-4">
                 Creating intuitive user journeys and scalable design systems for complex enterprise applications.
               </p>
               <div className="flex flex-wrap gap-2">
                 {['Figma', 'Adobe XD', 'Wireframing', 'Prototyping'].map(t => (
                   <span key={t} className="px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-300 border border-white/5">{t}</span>
                 ))}
               </div>
            </div>
          </div>

          {/* Column 2: Development */}
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-8 backdrop-blur-sm hover:bg-slate-900/80 transition-colors">
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><Code size={20} /></div>
               <h3 className="text-lg font-bold text-white">Development</h3>
            </div>
            <div className="space-y-4">
               <p className="text-slate-400 text-sm mb-4">
                 Translating designs into clean, responsive, and accessible code using modern frameworks.
               </p>
               <div className="flex flex-wrap gap-2">
                 {['React', 'HTML/CSS', 'Tailwind', 'AEM'].map(t => (
                   <span key={t} className="px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-300 border border-white/5">{t}</span>
                 ))}
               </div>
            </div>
          </div>

          {/* Column 3: AI */}
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-8 backdrop-blur-sm hover:bg-slate-900/80 transition-colors">
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400"><CheckCircle2 size={20} /></div>
               <h3 className="text-lg font-bold text-white">GenAI Integration</h3>
            </div>
            <div className="space-y-4">
               <p className="text-slate-400 text-sm mb-4">
                 Leveraging AI tools to accelerate workflows and enhance design precision.
               </p>
               <div className="flex flex-wrap gap-2">
                 {['ChatGPT', 'Midjourney', 'Copilot', 'Automation'].map(t => (
                   <span key={t} className="px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-300 border border-white/5">{t}</span>
                 ))}
               </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
           <Link to="/skills" className="text-blue-400 hover:text-white font-medium transition-colors text-sm">
             View Full Skillset &rarr;
           </Link>
        </div>
      </section>

      {/* Experience Section - Compact */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-t border-white/5 bg-slate-900/10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Experience Timeline</h2>
        
        <div className="space-y-8 relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-slate-800"></div>
          
          {experience.slice(0, 3).map((exp, index) => (
            <div key={index} className="relative pl-10 group">
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-black border-2 border-slate-600 group-hover:border-blue-500 group-hover:bg-blue-500 transition-colors z-10"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/40 border border-white/5 p-4 rounded-xl hover:border-white/10 transition-colors">
                <div>
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <p className="text-slate-400 text-sm">{exp.company}</p>
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300 font-mono border border-white/5 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
            </div>
          ))}
          
          <div className="pl-10 pt-4">
            <Link to="/about" className="text-sm text-slate-500 hover:text-white transition-colors">
              + View full history in About page
            </Link>
          </div>
        </div>
      </section>

      {/* Footer / Contact CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
         <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1">
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                 Let's build something <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">amazing together.</span>
               </h2>
               <p className="text-slate-400 text-lg mb-10 max-w-md leading-relaxed">
                 I'm currently available for freelance projects and consulting. If you have a project that needs a blend of creative design and technical excellence, feel free to reach out.
               </p>
               
               <div className="space-y-4">
                  <div className="flex items-center gap-4 text-slate-300">
                     <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400"><Mail size={18}/></div>
                     <div>
                       <div className="text-xs text-slate-500 uppercase font-bold">Email</div>
                       <div className="text-white">jahangirxl@gmail.com</div>
                     </div>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                     <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400"><Smartphone size={18}/></div>
                     <div>
                       <div className="text-xs text-slate-500 uppercase font-bold">Phone</div>
                       <div className="text-white">09620959290</div>
                     </div>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                     <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400"><MapPin size={18}/></div>
                     <div>
                       <div className="text-xs text-slate-500 uppercase font-bold">Location</div>
                       <div className="text-white">Bangalore, India</div>
                     </div>
                  </div>
               </div>

               <div className="flex gap-4 mt-10">
                  <a href="#" className="p-3 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"><Linkedin size={20} /></a>
               </div>
            </div>

            {/* Mini Form */}
            <div className="w-full lg:w-1/2 max-w-lg bg-black border border-white/10 rounded-2xl p-8 shadow-2xl">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                   <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Name</label>
                   <input type="text" className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors placeholder:text-slate-600" placeholder="John Doe" />
                </div>
                <div>
                   <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Email</label>
                   <input type="email" className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors placeholder:text-slate-600" placeholder="john@example.com" />
                </div>
                <div>
                   <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Message</label>
                   <textarea rows={4} className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors resize-none placeholder:text-slate-600" placeholder="Tell me about your project..."></textarea>
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-blue-900/20">
                   Send Message
                </button>
              </form>
            </div>
         </div>
      </section>
    </div>
  );
}

function FeaturedProjectCard({ study }: { study: any }) {
  return (
    <Link to={`/work/${study.id}`} className="block group">
      <div className="bg-slate-900/30 border border-white/5 rounded-xl p-8 hover:bg-slate-900/60 hover:border-blue-500/30 transition-all flex flex-col md:flex-row gap-8 items-center">
         {/* Fake Thumbnail Placeholder - can replace with real image if available later */}
        <div className="w-full md:w-48 h-32 bg-gradient-to-br from-slate-800 to-black rounded-lg flex items-center justify-center flex-shrink-0 border border-white/5 group-hover:border-blue-500/20 transition-colors">
           <Layers className="text-slate-600 group-hover:text-blue-500 transition-colors" size={32} />
        </div>

        <div className="flex-1 w-full">
           <div className="flex flex-wrap items-center gap-3 mb-2">
             <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{study.title}</h3>
             {study.client && (
               <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px] uppercase tracking-wide border border-white/5">
                 {study.client}
               </span>
             )}
           </div>
           <p className="text-slate-400 text-sm mb-4 line-clamp-2">{study.overview}</p>
           <div className="flex flex-wrap gap-2">
             {study.tech.slice(0, 4).map((t: string) => (
               <span key={t} className="text-xs text-slate-500 font-medium px-2 py-1 bg-slate-950 rounded border border-white/5">{t}</span>
             ))}
           </div>
        </div>
        
        <div className="flex-shrink-0 hidden md:block">
           <div className="px-6 py-3 rounded-full border border-white/10 bg-slate-800/50 flex items-center gap-3 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white text-slate-400 transition-all">
             <span className="text-sm font-bold">View Case Study</span>
             <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
           </div>
        </div>
      </div>
    </Link>
  );
}
