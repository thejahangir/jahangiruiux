
import React from 'react';
import jahangirPhoto from 'figma:asset/077135f68a21c72637562af7fb23a96c9f28708c.png';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { experience } from '../data/portfolioData';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-slate-200">
      {/* Header Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-24 items-start">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
             Driven by Design, <br/>
             <span className="text-slate-500">Empowered by Technology.</span>
          </h1>
          <div className="prose prose-invert prose-lg text-slate-400 leading-relaxed">
            <p className="mb-6">
              Hello! I'm <strong>Jahangir Alam</strong>, a UX Design Specialist and Front-End Developer based in Bangalore, India. 
              With over 15 years of experience, I bridge the gap between creative vision and technical execution.
            </p>
            <p className="mb-6">
              My career has evolved from traditional visual design to complex enterprise UX architecture. 
              Currently, I am passionate about integrating <strong>Generative AI</strong> into design workflows, helping organizations build smarter, faster, and more intuitive products.
            </p>
            <p>
              Whether it's modernizing a legacy system for a Fortune 500 client or crafting a pixel-perfect interface for a startup, my goal remains the same: 
              <strong> to solve complex problems with simple, elegant solutions.</strong>
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
           <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-3xl rounded-full -z-10"></div>
           <div className="w-full max-w-sm aspect-[4/5] bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
             <ImageWithFallback 
               src={jahangirPhoto} 
               alt="Jahangir Alam" 
               className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
             />
          </div>
        </div>
      </div>

      {/* My Philosophy Quote Card */}
      <div className="mb-24">
        <div className="bg-gradient-to-br from-slate-900 to-black p-10 rounded-3xl border border-white/10 relative overflow-hidden text-center shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px]"></div>
          
          <h2 className="text-2xl font-bold text-white mb-8 relative z-10">My Philosophy</h2>
          
          <blockquote className="relative z-10">
            <p className="text-xl md:text-3xl text-slate-200 font-light leading-relaxed max-w-3xl mx-auto mb-6 font-serif italic">
              "Good design is obvious. Great design is transparent."
            </p>
            <footer className="text-slate-500 font-medium tracking-wide text-sm uppercase">
              — Joe Sparano
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Design Philosophy */}
      <div className="mb-24">
        <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
          <span className="w-8 h-1 bg-blue-500 rounded-full block"></span>
          Design Philosophy
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">Minimalism</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              I believe in removing the unnecessary so the necessary may speak. Clean interfaces reduce cognitive load and improve task efficiency.
            </p>
          </div>
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">Inclusivity</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Accessibility is not an afterthought. I design with WCAG standards in mind to ensure digital experiences are usable by everyone.
            </p>
          </div>
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">Scalability</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building for today while planning for tomorrow. I create modular design systems that grow with the product and the team.
            </p>
          </div>
        </div>
      </div>

      {/* Full Experience Timeline */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
          <span className="w-8 h-1 bg-purple-500 rounded-full block"></span>
          Professional Journey
        </h2>
        <div className="space-y-8 border-l border-slate-800 ml-3 pl-10 py-2 relative">
          {experience.map((item, index) => (
            <div key={index} className="relative group">
              <div className="absolute -left-[45px] top-1 w-3 h-3 rounded-full bg-slate-900 border-2 border-slate-600 group-hover:border-purple-500 group-hover:bg-purple-500 transition-colors"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{item.role}</h3>
                <span className="text-xs font-mono text-slate-500 bg-slate-900 border border-white/5 px-2 py-1 rounded">{item.period}</span>
              </div>
              
              <div className="text-blue-400 font-medium mb-2 text-sm">{item.company}</div>
              <p className="text-slate-400 text-base leading-relaxed max-w-2xl">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
