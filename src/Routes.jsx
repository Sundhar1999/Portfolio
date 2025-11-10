import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop.jsx";
import ErrorBoundary from "components/ErrorBoundary.jsx";
import NotFound from "pages/NotFound.jsx";
import HomeLanding from './pages/home-landing';
import SkillsExperience from './pages/skills-experience';
import ProjectsPortfolio from './pages/projects-portfolio';
import ContactEngagement from './pages/contact-engagement';
import NotesIndicator from './components/ui/NotesIndicator';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<HomeLanding />} />
        <Route path="/home-landing" element={<HomeLanding />} />
        <Route path="/skills-experience" element={<SkillsExperience />} />
        <Route path="/projects-portfolio" element={<ProjectsPortfolio />} />
        <Route path="/contact-engagement" element={<ContactEngagement />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      <NotesIndicator />
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;