
import React from 'react';
import { skills } from '../data/portfolioData';
import { Palette, Code, Bot, ArrowRight, Terminal, Cpu, Layers, Layout, PenTool, Users, Accessibility, Zap, Workflow, Search, Target, Box, Smartphone, MonitorSmartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const strategyItems = [
  {
    title: "UX Strategy & Vision",
    icon: <Target size={24} />,
    points: [
      "Defining product vision through UX principles",
      "Creating long-term UX roadmaps",
      "Aligning design direction with business goals",
      "Opportunity mapping & UX maturity development"
    ]
  },
  {
    title: "End-to-End User Experience Design",
    icon: <Layout size={24} />,
    points: [
      "Translating business requirements into user-centered solutions",
      "Leading entire UX lifecycle (research → flows → design → usability testing)",
      "Information Architecture & navigation strategy",
      "Complex workflow design for enterprise systems"
    ]
  },
  {
    title: "Design Systems & Governance",
    icon: <Layers size={24} />,
    points: [
      "Building scalable design systems",
      "Component libraries and reusable patterns",
      "Ensuring UI consistency across products",
      "Creating governance processes and guidelines"
    ]
  },
  {
    title: "Interaction Design & Micro-interactions",
    icon: <Zap size={24} />,
    points: [
      "Designing smooth, intuitive interaction flows",
      "Micro-interaction strategy to guide user behavior",
      "Motion design principles for UX"
    ]
  },
  {
    title: "User Research & Insights",
    icon: <Search size={24} />,
    points: [
      "Planning and conducting user research",
      "Heuristic evaluation & UX audits",
      "Turning research data into actionable insights",
      "Persona creation & journey mapping"
    ]
  },
  {
    title: "Product Strategy Alignment",
    icon: <Users size={24} />,
    points: [
      "Partnering with product managers & stakeholders",
      "Prioritizing features based on user needs and business value",
      "Facilitating discovery workshops",
      "Defining success metrics and usability KPIs"
    ]
  },
  {
    title: "Accessibility & Inclusive Design",
    icon: <Accessibility size={24} />,
    points: [
      "WCAG 2.1 AA compliance",
      "Designing for accessibility-first experiences",
      "Implementing standards across teams"
    ]
  },
  {
    title: "AI-Driven UX Strategy",
    icon: <Bot size={24} />,
    points: [
      "AI-assisted UX workflows",
      "Generative design strategy",
      "Prompt-engineered design processes",
      "Using AI for content, layout, and exploration",
      "Integrating AI in user journeys"
    ]
  },
  {
    title: "Prototyping & Experimentation",
    icon: <Smartphone size={24} />,
    points: [
      "Rapid prototyping (low-fidelity & high-fidelity)",
      "Design hypothesis testing",
      "A/B testing strategies",
      "Clickable prototypes for stakeholder alignment"
    ]
  },
  {
    title: "Stakeholder Management & Collaboration",
    icon: <Users size={24} />,
    points: [
      "Leading design reviews",
      "Presenting UX strategy to leadership",
      "Cross-functional collaboration with engineering, PM, and business teams",
      "Mentoring designers and guiding design decisions"
    ]
  },
  {
    title: "Design System Architecture & Scaling",
    icon: <Box size={24} />,
    points: [
      "Defining the structural foundation of design systems including tokens, foundations, components, and usage rules.",
      "Ensuring design–dev parity using tools like Figma variables, component libraries, and documentation standards.",
      "Establishing workflows for versioning, contribution, governance, and system scalability across large teams and products."
    ]
  },
  {
    title: "Cross-Platform Consistency & System Adoption",
    icon: <MonitorSmartphone size={24} />,
    points: [
      "Driving adoption of the design system across product teams by ensuring components, patterns, and guidelines work consistently across web, mobile, and enterprise applications.",
      "Creating onboarding materials, workshops, and documentation to help designers and developers integrate the system effectively."
    ]
  }
];

export default function Skills() {
  return (
    <div className="bg-black text-slate-200 min-h-screen pb-20">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
        >
          Skills & Expertise
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
        >
           A hybrid skill set bridging the gap between creative design, technical implementation, and cutting-edge AI tools.
        </motion.p>
      </div>

      {/* Design & Strategy Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="mb-10"
         >
           <h2 className="text-3xl font-bold text-white mb-4 border-l-4 border-purple-500 pl-4">Design & Strategy</h2>
           <p className="text-slate-400 max-w-3xl">Comprehensive approach to solving complex design challenges through strategic thinking and execution.</p>
         </motion.div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategyItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-slate-900/30 border border-white/5 rounded-2xl p-6 hover:bg-slate-900/50 hover:border-purple-500/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
                </div>
                <ul className="space-y-2">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-400 leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-purple-500 mt-2 shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
         </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        
        {/* Core Competencies (Renamed from Design & Strategy) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-900/40 border border-white/5 rounded-3xl p-8 md:p-10 hover:border-blue-500/30 transition-colors group"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
              <Palette size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white">Core Competencies</h2>
          </div>
          
          <div className="space-y-6">
            {skills.designStrategy.map((skill, index) => (
               <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-300">{skill.name}</span>
                    <span className="text-slate-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                     <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: `${skill.level}%` }}
                       viewport={{ once: true }}
                       transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                       className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"
                     />
                  </div>
               </div>
            ))}
          </div>
        </motion.div>

        {/* Development Skills */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-900/40 border border-white/5 rounded-3xl p-8 md:p-10 hover:border-blue-500/30 transition-colors group"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <Terminal size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white">Technical Stack</h2>
          </div>
          
          <div className="space-y-6">
            {skills.development.map((skill, index) => (
               <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-300">{skill.name}</span>
                    <span className="text-slate-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                     <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: `${skill.level}%` }}
                       viewport={{ once: true }}
                       transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                       className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                     />
                  </div>
               </div>
            ))}
          </div>
        </motion.div>

        {/* AI & GenAI */}
        <div className="md:col-span-2 bg-gradient-to-br from-slate-900/60 to-black border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
          
          <div className="flex flex-col md:flex-row gap-12 items-start">
             <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <Bot size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">AI & GenAI Workflow</h2>
                </div>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Leveraging the power of Generative AI to accelerate design iterations, automate routine tasks, and explore new creative frontiers. 
                  My workflow integrates AI tools to enhance productivity without compromising on quality.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {skills.tools.filter(t => ['ChatGPT', 'Midjourney', 'Copilot', 'Gemini', 'Uizard'].some(ai => t.includes(ai))).map(tool => (
                    <span key={tool} className="px-4 py-2 bg-emerald-900/20 border border-emerald-500/20 text-emerald-400 rounded-lg text-sm font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
             </div>
             
             <div className="w-full md:w-1/3 bg-black/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Cpu size={18} className="text-slate-400" /> Tools I Use Daily
                </h3>
                <div className="flex flex-wrap gap-2">
                   {skills.tools.map((t, i) => (
                     <motion.span 
                       key={t} 
                       initial={{ opacity: 0, scale: 0.9 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.02 * i }}
                       whileHover={{ 
                         scale: 1.05, 
                         backgroundColor: "rgba(59, 130, 246, 0.2)", 
                         borderColor: "rgba(59, 130, 246, 0.4)",
                         color: "#ffffff" 
                       }}
                       className="px-3 py-1 bg-slate-800 rounded text-xs text-slate-300 border border-white/5 cursor-default transition-colors duration-200"
                     >
                       {t}
                     </motion.span>
                   ))}
                </div>
             </div>
          </div>
        </div>
        
      </div>
      
      <div className="text-center mt-16">
         <Link to="/contact" className="inline-flex items-center text-white hover:text-blue-400 font-medium transition-colors">
           Let's discuss how I can apply these skills to your project <ArrowRight size={16} className="ml-2" />
         </Link>
      </div>

    </div>
  );
}
