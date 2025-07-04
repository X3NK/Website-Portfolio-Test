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
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: 'ANALOG SYNTHESIS',
      category: 'Graphic Design',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A series of posters exploring the intersection of analog and digital aesthetics.',
      overview: 'This project explores the intersection of analog and digital aesthetics, combining traditional design principles with modern digital techniques.',
      technologies: ['Adobe Photoshop', 'Illustrator', 'After Effects'],
      features: ['Innovative blend of analog and digital aesthetics', 'Custom typography and visual elements'],
      year: '2024',
      additionalImages: [
        'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      liveUrl: '',
      caseStudyUrl: ''
    },
    {
      id: 2,
      title: 'DIGITAL UTOPIA',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Interactive web experience combining retro computing with modern design.',
      overview: 'Interactive web experience that bridges retro computing aesthetics with contemporary design principles.',
      technologies: ['React', 'TypeScript', 'CSS3'],
      features: ['Responsive design', 'Interactive animations', 'Modern web standards'],
      year: '2024',
      additionalImages: [
        'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      liveUrl: '',
      caseStudyUrl: ''
    },
    {
      id: 3,
      title: 'HYPERSIGIL BRAND',
      category: 'Brand Identity',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete brand identity for a digital art collective.',
      overview: 'Comprehensive brand identity development for a forward-thinking digital art collective.',
      technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
      features: ['Logo design', 'Brand guidelines', 'Typography system'],
      year: '2024',
      additionalImages: [],
      liveUrl: '',
      caseStudyUrl: ''
    },
    {
      id: 4,
      title: 'GLITCH POETRY',
      category: 'Typography',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Experimental typography series exploring digital corruption as art.',
      overview: 'An experimental typography series that explores digital corruption and glitch aesthetics as artistic expression.',
      technologies: ['Adobe After Effects', 'Photoshop', 'Custom Scripts'],
      features: ['Experimental typography', 'Digital corruption effects', 'Artistic expression'],
      year: '2024',
      additionalImages: [],
      liveUrl: '',
      caseStudyUrl: ''
    },
    {
      id: 5,
      title: 'RETRO FUTURE',
      category: 'UI/UX',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Mobile app interface inspired by 80s computer terminals.',
      overview: 'Mobile application interface design inspired by 1980s computer terminals and retro-futuristic aesthetics.',
      technologies: ['Figma', 'Principle', 'Adobe XD'],
      features: ['Retro-inspired UI', 'Mobile-first design', 'Interactive prototypes'],
      year: '2024',
      additionalImages: [],
      liveUrl: '',
      caseStudyUrl: ''
    },
    {
      id: 6,
      title: 'NOISE PATTERNS',
      category: 'Illustration',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Digital illustrations using procedural noise and glitch techniques.',
      overview: 'A series of digital illustrations created using procedural noise generation and glitch art techniques.',
      technologies: ['Processing', 'Adobe Illustrator', 'Custom Algorithms'],
      features: ['Procedural generation', 'Glitch techniques', 'Digital art'],
      year: '2024',
      additionalImages: [],
      liveUrl: '',
      caseStudyUrl: ''
    },
  ]);

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
        setProjects={setProjects}
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