import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { FieldObservationsSection } from './sections/FieldObservationsSection';
import { ProblemIdentifiedSection } from './sections/ProblemIdentifiedSection';
import { ProposedSolutionSection } from './sections/ProposedSolutionSection';
import { MethodologySection } from './sections/MethodologySection';
import { SatelliteDataSection } from './sections/SatelliteDataSection';
import { InteractiveMapSection } from './sections/InteractiveMapSection';
import { FieldValidationSection } from './sections/FieldValidationSection';
import { ApplicationsSection } from './sections/ApplicationsSection';
import { TechStackSection } from './sections/TechStackSection';
import { OutcomesSection } from './sections/OutcomesSection';
import { ConclusionSection } from './sections/ConclusionSection';
import { AboutSection } from './sections/AboutSection';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'field-observations',
        'problem',
        'solution',
        'methodology',
        'satellite-data',
        'interactive-demo',
        'validation',
        'applications',
        'tech-stack',
        'outcomes',
        'conclusion',
        'about'
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans antialiased">
      {/* Top Fixed Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Flow */}
      <main className="space-y-0">
        <HeroSection />
        <FieldObservationsSection />
        <ProblemIdentifiedSection />
        <ProposedSolutionSection />
        <MethodologySection />
        <SatelliteDataSection />
        <InteractiveMapSection />
        <FieldValidationSection />
        <ApplicationsSection />
        <TechStackSection />
        <OutcomesSection />
        <ConclusionSection />
        <AboutSection />
      </main>

      {/* Academic Citation & Project Footer */}
      <Footer />
    </div>
  );
};

export default App;
