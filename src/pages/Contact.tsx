import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Send } from 'lucide-react';
import emailjs from "emailjs-com";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  // Handle Input Change
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  // Handle Submit
  const sendEmail = (e: any) => {
    e.preventDefault();

    setStatus("sending");

    emailjs
      .send(
        "service_3qycxmg",
        "template_47tl7js",
        form,
        "vAPWH9UvrR8x3_j_2"
      )
      .then(() => {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => setStatus("idle"), 3000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      });
  };

  return (
    <div className="bg-black text-slate-200 min-h-screen pb-20">
      <div className="max-w-5xl mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Get in Touch</h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-stretch">

          {/* LEFT CONTACT INFO */}
          <div className="md:col-span-2 bg-slate-900/40 border border-white/5 rounded-3xl p-8 md:p-10 relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -ml-16 -mb-16"></div>

            <div className="relative z-10 space-y-10">
              
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

          {/* RIGHT FORM SIDE */}
          <div className="md:col-span-3 bg-slate-900/20 border border-white/5 rounded-3xl p-8 md:p-10">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={sendEmail}>
              
              <div className="grid md:grid-cols-2 gap-6">
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Name</label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white focus:border-blue-500 focus:ring-1 placeholder:text-slate-700"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white focus:border-blue-500 focus:ring-1 placeholder:text-slate-700"
                    placeholder="john@example.com"
                  />
                </div>

              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Subject</label>
                <input
                  id="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white focus:border-blue-500 focus:ring-1 placeholder:text-slate-700"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white focus:border-blue-500 focus:ring-1 resize-none placeholder:text-slate-700"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 disabled:opacity-40"
              >
                {status === "sending" ? "Sending..." : "Send Message"} <Send size={18} />
              </button>

              {/* Status Messages */}
              {status === "sent" && (
                <p className="text-green-500 text-center text-sm pt-2">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-center text-sm pt-2">Failed to send message. Try again.</p>
              )}

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
