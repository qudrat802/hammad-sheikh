
import React from 'react';
import { HAMMAD_INFO } from '../constants';
import { Section } from '../types';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id={Section.HERO} className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 pt-20">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
          <Sparkles size={16} />
          <span>Building the Future of AI in Pakistan</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-300 tracking-tight leading-tight">
          {HAMMAD_INFO.name}
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          {HAMMAD_INFO.tagline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById(Section.CHAT)?.scrollIntoView({behavior:'smooth'})}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105"
          >
            Talk to AI Assistant
            <ArrowRight size={18} />
          </button>
          <button 
             onClick={() => document.getElementById(Section.CONTACT)?.scrollIntoView({behavior:'smooth'})}
            className="px-8 py-4 glass text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
          >
            Get in Touch
          </button>
        </div>
      </div>
      
      <div className="mt-16 animate-bounce text-slate-500">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
