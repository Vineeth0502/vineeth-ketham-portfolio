import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ScrollingBanner from './components/ScrollingBanner';
import IntroSection from './components/IntroSection';
import ParallaxSection from './components/ParallaxSection';
import StatisticsSection from './components/StatisticsSection';
import FAQSection from './components/FAQSection';
import WorkExperienceSection from './components/WorkExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ResearchCertificationsSection from './components/ResearchCertificationsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ScrollingBanner />
      <IntroSection />
      <ParallaxSection />
      <StatisticsSection />
      <FAQSection />
      <WorkExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <ResearchCertificationsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
