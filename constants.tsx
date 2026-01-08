
import React from 'react';
import { 
  Cpu, 
  MessageSquare, 
  GraduationCap, 
  Code2, 
  Globe, 
  Zap 
} from 'lucide-react';
import { ExpertiseItem } from './types';

export const HAMMAD_INFO = {
  name: "Hammad Sheikh bin Nadeem",
  tagline: "AI Engineer | AI Software Developer | AI Teacher | Pakistan 🇵🇰",
  location: "Pakistan",
  fullBio: `Hammad Sheikh bin Nadeem is a professional AI Engineer, AI Software Developer, and AI Teacher based in Pakistan. He focuses on Artificial Intelligence, AI chat applications, and next-generation AI solutions, helping students and professionals grow in the field of AI. His mission is to educate and empower students in Pakistan with advanced AI knowledge.`,
  shortBio: "AI software expert specializing in chat systems and modern AI technologies. Experienced educator helping students master the AI landscape."
};

export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    title: "AI Engineering",
    description: "Developing robust AI architectures and implementing state-of-the-art machine learning models for real-world problems.",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "AI Chat Systems",
    description: "Expertise in LLMs, conversational agents, and building interactive AI interfaces using modern frameworks.",
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    title: "AI Software Dev",
    description: "Bridging the gap between raw AI models and user-friendly software applications with clean, scalable code.",
    icon: <Code2 className="w-6 h-6" />
  },
  {
    title: "AI Education",
    description: "Empowering the next generation of Pakistani developers through specialized courses and hands-on workshops.",
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    title: "Global AI Tech",
    description: "Staying at the forefront of global AI trends and bringing modern software skills to the local ecosystem.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Rapid Prototyping",
    description: "Quickly turning innovative ideas into functional AI products using advanced development tools.",
    icon: <Zap className="w-6 h-6" />
  }
];
