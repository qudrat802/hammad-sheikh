
import React from 'react';
import { Section } from '../types';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navLinks = [
    { id: Section.HERO, label: 'Home' },
    { id: Section.ABOUT, label: 'About' },
    { id: Section.EXPERTISE, label: 'Expertise' },
    { id: Section.CHAT, label: 'AI Chat' },
    { id: Section.CONTACT, label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 flex justify-between items-center transition-all">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white">H</div>
        <span className="font-bold text-lg hidden sm:inline-block tracking-tight">Hammad Sheikh</span>
      </div>
      
      <div className="flex gap-4 md:gap-8">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={`text-sm font-medium transition-colors hover:text-indigo-400 ${
              activeSection === link.id ? 'text-indigo-400' : 'text-slate-400'
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
