
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';
import { caseStudies } from '../data/portfolioData';

export default function Work() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-slate-200 min-h-screen pb-20">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">All Projects</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
           A comprehensive collection of my work in UI/UX design, front-end development, and accessibility modernization.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid gap-6">
        {caseStudies.map((study) => (
           <ProjectCard key={study.id} study={study} />
        ))}
      </div>
      
      <div className="text-center mt-16">
         <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-slate-200 transition-colors">
           Let's Start a Project <ArrowRight size={18} className="ml-2" />
         </Link>
      </div>

    </div>
  );
}

function ProjectCard({ study }: { study: any }) {
  return (
    <Link to={`/work/${study.id}`} className="block group">
      <div className="bg-slate-900/30 border border-white/5 rounded-xl p-8 hover:bg-slate-900/60 hover:border-blue-500/30 transition-all flex flex-col md:flex-row gap-8 items-center">
         {/* Thumbnail Placeholder */}
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
             {study.tech && study.tech.slice(0, 4).map((t: string) => (
               <span key={t} className="text-xs text-slate-500 font-medium px-2 py-1 bg-slate-950 rounded border border-white/5">{t}</span>
             ))}
             {study.tags && study.tags.slice(0, 4).map((t: string) => (
               <span key={t} className="text-xs text-slate-500 font-medium px-2 py-1 bg-slate-950 rounded border border-white/5">{t}</span>
             ))}
           </div>
        </div>
        
        <div className="flex-shrink-0 hidden md:block">
           <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white text-slate-500 transition-all transform group-hover:translate-x-1">
             <ArrowRight size={18} />
           </div>
        </div>
      </div>
    </Link>
  );
}
