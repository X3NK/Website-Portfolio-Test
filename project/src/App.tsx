import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

function App() {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: 'ANALOG SYNTHESIS',
      category: 'Graphic Design',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A series of posters exploring the intersection of analog and digital aesthetics.',
    },
    {
      id: 2,
      title: 'DIGITAL UTOPIA',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Interactive web experience combining retro computing with modern design.',
    },
    {
      id: 3,
      title: 'HYPERSIGIL BRAND',
      category: 'Brand Identity',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete brand identity for a digital art collective.',
    },
    {
      id: 4,
      title: 'GLITCH POETRY',
      category: 'Typography',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Experimental typography series exploring digital corruption as art.',
    },
    {
      id: 5,
      title: 'RETRO FUTURE',
      category: 'UI/UX',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Mobile app interface inspired by 80s computer terminals.',
    },
    {
      id: 6,
      title: 'NOISE PATTERNS',
      category: 'Illustration',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Digital illustrations using procedural noise and glitch techniques.',
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
        <Portfolio projects={projects} />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;