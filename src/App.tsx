import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import ProjectDetail from './components/ProjectDetail';
import { useProjects } from './hooks/useProjects';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  overview?: string;
  technologies?: string[];
  features?: string[];
  year?: string;
  additionalImages?: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
}

function App() {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Use Supabase hook for projects
  const { projects, loading, error, addProject, updateProject, deleteProject } = useProjects();

  const handleAdminAccess = () => {
    setShowAdminLogin(true);
  };

  const handleAdminLogin = (success: boolean) => {
    if (success) {
      setIsAdminAuthenticated(true);
      setShowAdminLogin(false);
    }
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleBackToPortfolio = () => {
    setSelectedProject(null);
  };

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-grunge-dark font-red-hat flex items-center justify-center">
        <div className="text-grunge-gray text-xl">Loading...</div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-grunge-dark font-red-hat flex items-center justify-center">
        <div className="text-red-400 text-xl">Error: {error}</div>
      </div>
    );
  }

  // If project is selected, show project detail page
  if (selectedProject) {
    return (
      <ProjectDetail 
        project={selectedProject}
        onBack={handleBackToPortfolio}
      />
    );
  }

  // If admin is authenticated, show dashboard
  if (isAdminAuthenticated) {
    return (
      <AdminDashboard 
        projects={projects}
        onAddProject={addProject}
        onUpdateProject={updateProject}
        onDeleteProject={deleteProject}
        onLogout={handleAdminLogout}
      />
    );
  }

  // If admin login is requested, show login page
  if (showAdminLogin) {
    return (
      <AdminLogin 
        onLogin={handleAdminLogin}
        onCancel={() => setShowAdminLogin(false)}
      />
    );
  }

  // Default public site
  return (
    <div className="min-h-screen bg-grunge-dark font-red-hat">
      <Header onAdminAccess={handleAdminAccess} />
      <main>
        <Hero />
        <Portfolio projects={projects} onProjectClick={handleProjectClick} />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;