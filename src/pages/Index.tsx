
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ResearchSection from '@/components/ResearchSection';
import PublicationsSection from '@/components/PublicationsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import LeadershipSection from '@/components/LeadershipSection';
import ContactSection from '@/components/ContactSection';
import DataAnalysisSection from '@/components/DataAnalysisSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <AboutSection />
      <ResearchSection />
      <PublicationsSection />
      <ExperienceSection />
      <ProjectsSection />
      <DataAnalysisSection />
      <SkillsSection />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
