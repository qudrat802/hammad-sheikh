
import React from 'react';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export enum Section {
  HERO = 'hero',
  ABOUT = 'about',
  EXPERTISE = 'expertise',
  EDUCATION = 'education',
  CHAT = 'chat',
  CONTACT = 'contact'
}

export interface ExpertiseItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}