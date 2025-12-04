
import React from 'react';
import { Mail, Download, Send, MapPin, Phone, Linkedin, Github, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-black text-slate-200 min-h-screen pb-20">
      <div className="max-w-5xl mx-auto px-6 py-20">
        
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Get in Touch</h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-stretch">
          
          {/* Contact Info Side */}
          <div className="md:col-span-2 bg-slate-900/40 border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Decor elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
            
            <div className="relative z-10 space-y-10">
              <div>
                <h3 className="text-xl font-bold text-white mb-8">Contact Information</h3>
                <ul className="space-y-8">
                  <li className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                       <Mail size={18} />
                    </div>
                    <div>
                      <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1 font-bold">Email</span>
                      <a href="mailto:jahangirxl@gmail.com" className="text-white hover:text-blue-400 transition-colors">jahangirxl@gmail.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                       <Phone size={18} />
                    </div>
                    <div>
                      <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1 font-bold">Phone</span>
                      <span className="text-white">09620959290</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                       <MapPin size={18} />
                    </div>
                    <div>
                      <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1 font-bold">Location</span>
                      <span className="text-white">Bangalore, India</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-8 border-t border-white/5">
                 <h4 className="text-sm font-bold text-slate-400 mb-4">Connect Socially</h4>
                 <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                       <Linkedin size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all">
                       <Github size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all">
                       <Globe size={18} />
                    </a>
                 </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-3 bg-slate-900/20 border border-white/5 rounded-3xl p-8 md:p-10">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wide">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-700"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wide">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-700"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold text-slate-500 uppercase tracking-wide">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-700"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wide">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none placeholder:text-slate-700"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
