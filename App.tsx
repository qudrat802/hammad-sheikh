
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChatBot from './components/ChatBot';
import { EXPERTISE_ITEMS, HAMMAD_INFO } from './constants';
import { Section } from './types';
import { Mail, Phone, MapPin, ExternalLink, Linkedin, Github, Twitter } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(Section.HERO);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} />

      <Hero />

      {/* About Section */}
      <section id={Section.ABOUT} className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative aspect-square overflow-hidden rounded-3xl glass flex items-center justify-center p-8">
                <img 
                  src="https://picsum.photos/seed/hammad/800/800" 
                  alt="Hammad Sheikh bin Nadeem" 
                  className="w-full h-full object-cover rounded-2xl opacity-90"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">About Hammad</h2>
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>{HAMMAD_INFO.fullBio}</p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="glass p-4 rounded-xl border-l-4 border-indigo-500">
                    <div className="text-2xl font-bold text-white">Pakistan</div>
                    <div className="text-sm text-slate-400">Base of Operations</div>
                  </div>
                  <div className="glass p-4 rounded-xl border-l-4 border-cyan-500">
                    <div className="text-2xl font-bold text-white">AI Focus</div>
                    <div className="text-sm text-slate-400">Specialization</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id={Section.EXPERTISE} className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Expertise</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Professional skills honed through years of development and teaching in the AI field.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERTISE_ITEMS.map((item, idx) => (
              <div key={idx} className="glass p-8 rounded-2xl hover:bg-slate-800/50 transition-all group">
                <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section id={Section.CHAT} className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] -z-10"></div>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Interactive AI Assistant</h2>
            <p className="text-slate-400">Powered by Gemini - Ask anything about Hammad's journey and expertise.</p>
          </div>
          <ChatBot />
        </div>
      </section>

      {/* Contact Section */}
      <section id={Section.CONTACT} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Connect</h2>
                <p className="text-slate-400 mb-8">Interested in learning AI or working together on a project? I'm always open to discussing new opportunities and educational partnerships.</p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 rounded-lg bg-indigo-600/10 flex items-center justify-center text-indigo-400">
                      <Mail size={20} />
                    </div>
                    <span>hammad.ai@example.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 rounded-lg bg-indigo-600/10 flex items-center justify-center text-indigo-400">
                      <Phone size={20} />
                    </div>
                    <span>+92 3XX XXXXXXX</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 rounded-lg bg-indigo-600/10 flex items-center justify-center text-indigo-400">
                      <MapPin size={20} />
                    </div>
                    <span>Pakistan</span>
                  </div>
                </div>

                <div className="flex gap-4 mt-12">
                  <button className="w-12 h-12 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-indigo-400 transition-colors">
                    <Linkedin size={20} />
                  </button>
                  <button className="w-12 h-12 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-indigo-400 transition-colors">
                    <Github size={20} />
                  </button>
                  <button className="w-12 h-12 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-indigo-400 transition-colors">
                    <Twitter size={20} />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <textarea 
                  rows={4} 
                  placeholder="How can Hammad help you?" 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                ></textarea>
                <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-600/20">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 text-center text-slate-500 px-6">
        <p>© {new Date().getFullYear()} Hammad Sheikh bin Nadeem. All Rights Reserved.</p>
        <p className="text-xs mt-2 font-mono">Empowering Pakistan through Artificial Intelligence</p>
      </footer>
    </div>
  );
};

export default App;
