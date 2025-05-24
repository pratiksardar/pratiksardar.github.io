'use client';
import React from 'react';
import Header from '../components/layout/Header';
import Scene from '../components/three/Scene';
import Hero from '../components/ui/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import Volunteering from '../components/Volunteering';
import Education from '../components/Education';
import BackToTop from '../components/ui/BackToTop';

export default function Home() {
  return (
    <main className="min-h-screen text-purple-500 relative overflow-hidden">
      <Scene />
      <Header />
      <div className="container mx-auto px-6 pt-32">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Publications />
        <Volunteering />
        <Education />
      </div>
      <BackToTop />
    </main>
  );
}
