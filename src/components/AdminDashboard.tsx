import React, { useState } from 'react';
import { 
  LogOut, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Eye,
  Settings,
  BarChart3,
  Users,
  FileText
} from 'lucide-react';
import { Project } from '../App';

interface AdminDashboardProps {
  projects: Project[];
  onAddProject: (project: Omit<Project, 'id'>) => Promise<Project>;
  onUpdateProject: (id: number, updates: Partial<Project>) => Promise<Project>;
  onDeleteProject: (id: number) => Promise<void>;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  projects, 
  onAddProject,
  onUpdateProject,
  onDeleteProject,
  onLogout 
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'portfolio' | 'add' | 'edit' | 'settings'>('overview');
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [newProject, setNewProject] = useState<Partial<Project>>({
    title: '',
    category: '',
    image: '',
    description: '',
    overview: '',
    technologies: [],
    features: [],
    year: '',
    additionalImages: [],
    liveUrl: '',
    caseStudyUrl: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteProject = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        setIsLoading(true);
        await onDeleteProject(id);
      } catch (error) {
        console.error('Failed to delete project:', error);
        alert('Failed to delete project. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleEditProject = (project: Project) => {
    setEditingProject({
      ...project,
      technologies: project.technologies || [],
      features: project.features || [],
      additionalImages: project.additionalImages || [],
      overview: project.overview || '',
      year: project.year || '',
      liveUrl: project.liveUrl || '',
      caseStudyUrl: project.caseStudyUrl || ''
    });
    setActiveTab('edit');
  };

  const handleSaveProject = async () => {
    if (editingProject) {
      try {
        setIsLoading(true);
        await onUpdateProject(editingProject.id, editingProject);
        setEditingProject(null);
        setActiveTab('portfolio');
      } catch (error) {
        console.error('Failed to update project:', error);
        alert('Failed to update project. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleAddProject = async () => {
    if (newProject.title && newProject.category && newProject.description) {
      try {
        setIsLoading(true);
        await onAddProject({
          title: newProject.title,
          category: newProject.category,
          image: newProject.image || '',
          description: newProject.description,
          overview: newProject.overview,
          technologies: newProject.technologies,
          features: newProject.features,
          year: newProject.year,
          additionalImages: newProject.additionalImages,
          liveUrl: newProject.liveUrl,
          caseStudyUrl: newProject.caseStudyUrl
        });
        
        setNewProject({ 
          title: '', 
          category: '', 
          image: '', 
          description: '',
          overview: '',
          technologies: [],
          features: [],
          year: '',
          additionalImages: [],
          liveUrl: '',
          caseStudyUrl: ''
        });
        setActiveTab('portfolio');
      } catch (error) {
        console.error('Failed to add project:', error);
        alert('Failed to add project. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const updateArrayField = (field: 'technologies' | 'features' | 'additionalImages', value: string, isEditing = false) => {
    const items = value.split(',').map(item => item.trim()).filter(item => item);
    if (isEditing && editingProject) {
      setEditingProject({ ...editingProject, [field]: items });
    } else {
      setNewProject({ ...newProject, [field]: items });
    }
  };

  const categories = [...new Set(projects.map(p => p.category))];

  return (
    <div className="min-h-screen bg-grunge-dark font-red-hat">
      {/* Header */}
      <header className="bg-grunge-gray/10 border-b border-grunge-gray/20 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="logo-container">
              <svg 
                className="logo-svg" 
                width="60" 
                height="22" 
                viewBox="0 0 745 266"
                fill="currentColor"
              >
                <path d="M0 132.838V265.676H79.7028H159.406V239.108V212.541H185.973H212.541V132.838V53.1352H185.973H159.406V26.5676V3.8147e-06H79.7028H0V132.838ZM157.192 132.838V212.541H105.163H53.1352V132.838V53.1352H105.163H157.192V132.838Z" fill="currentColor"/>
                <path d="M426.189 53.1352V106.27H399.621H373.053V185.973V265.676H399.621H426.189V185.973V106.27H452.756H479.324V53.1352V3.8147e-06H452.756H426.189V53.1352Z" fill="currentColor"/>
                <path d="M532.459 132.838V265.676H638.73H745V132.838V3.8147e-06H718.432H691.865V106.27V212.541H638.73H585.594V106.27V3.8147e-06H559.027H532.459V132.838Z" fill="currentColor"/>
                <path d="M266.783 79.7028V106.27H293.351H319.918V79.7028V53.1351H293.351H266.783V79.7028Z" fill="currentColor"/>
                <path d="M266.783 185.973V212.541H293.351H319.918V185.973V159.406H293.351H266.783V185.973Z" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-grunge-gray">ADMIN DASHBOARD</h1>
              <p className="text-grunge-gray/60 text-sm">Portfolio Management System</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center space-x-2 bg-grunge-purple text-grunge-gray px-4 py-2 font-semibold hover:bg-grunge-gray hover:text-grunge-dark transition-all duration-300"
          >
            <LogOut size={16} />
            <span>LOGOUT</span>
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-grunge-gray/5 border-r border-grunge-gray/20 min-h-screen">
          <nav className="p-6">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors ${
                    activeTab === 'overview'
                      ? 'bg-grunge-purple text-grunge-gray'
                      : 'text-grunge-gray hover:bg-grunge-gray/10'
                  }`}
                >
                  <BarChart3 size={18} />
                  <span>Overview</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('portfolio')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors ${
                    activeTab === 'portfolio'
                      ? 'bg-grunge-purple text-grunge-gray'
                      : 'text-grunge-gray hover:bg-grunge-gray/10'
                  }`}
                >
                  <Eye size={18} />
                  <span>Manage Portfolio</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('add')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors ${
                    activeTab === 'add'
                      ? 'bg-grunge-purple text-grunge-gray'
                      : 'text-grunge-gray hover:bg-grunge-gray/10'
                  }`}
                >
                  <Plus size={18} />
                  <span>Add Project</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors ${
                    activeTab === 'settings'
                      ? 'bg-grunge-purple text-grunge-gray'
                      : 'text-grunge-gray hover:bg-grunge-gray/10'
                  }`}
                >
                  <Settings size={18} />
                  <span>Settings</span>
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-grunge-gray mb-2">Dashboard Overview</h2>
                <p className="text-grunge-gray/80">Welcome back! Here's what's happening with your portfolio.</p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-grunge-gray/10 border border-grunge-gray/20 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-grunge-gray/80 text-sm">Total Projects</p>
                      <p className="text-3xl font-bold text-grunge-gray">{projects.length}</p>
                    </div>
                    <FileText className="text-grunge-purple" size={32} />
                  </div>
                </div>
                <div className="bg-grunge-gray/10 border border-grunge-gray/20 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-grunge-gray/80 text-sm">Categories</p>
                      <p className="text-3xl font-bold text-grunge-gray">{categories.length}</p>
                    </div>
                    <BarChart3 className="text-grunge-purple" size={32} />
                  </div>
                </div>
                <div className="bg-grunge-gray/10 border border-grunge-gray/20 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-grunge-gray/80 text-sm">Last Updated</p>
                      <p className="text-lg font-bold text-grunge-gray">Today</p>
                    </div>
                    <Users className="text-grunge-purple" size={32} />
                  </div>
                </div>
              </div>

              {/* Recent Projects */}
              <div>
                <h3 className="text-xl font-bold text-grunge-gray mb-4">Recent Projects</h3>
                <div className="space-y-4">
                  {projects.slice(0, 3).map((project) => (
                    <div key={project.id} className="bg-grunge-gray/5 border border-grunge-gray/10 p-4 flex items-center space-x-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-16 h-16 object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="text-grunge-gray font-semibold">{project.title}</h4>
                        <p className="text-grunge-purple text-sm">{project.category}</p>
                      </div>
                      <button
                        onClick={() => handleEditProject(project)}
                        className="text-grunge-gray hover:text-grunge-purple transition-colors"
                      >
                        <Edit size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Portfolio Management Tab */}
          {activeTab === 'portfolio' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-grunge-gray">Portfolio Management</h2>
                <button
                  onClick={() => setActiveTab('add')}
                  className="bg-grunge-purple text-grunge-gray px-6 py-3 font-semibold hover:bg-grunge-gray hover:text-grunge-dark transition-all duration-300 flex items-center space-x-2"
                >
                  <Plus size={20} />
                  <span>ADD PROJECT</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div key={project.id} className="bg-grunge-gray/10 border border-grunge-gray/20 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="text-grunge-purple text-sm font-semibold mb-2">
                        {project.category}
                      </div>
                      <h3 className="text-lg font-bold text-grunge-gray mb-2">
                        {project.title}
                      </h3>
                      <p className="text-grunge-gray/80 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditProject(project)}
                          className="flex-1 bg-grunge-purple text-grunge-gray px-4 py-2 text-sm font-semibold hover:bg-grunge-gray hover:text-grunge-dark transition-all duration-300 flex items-center justify-center space-x-1"
                          disabled={isLoading}
                        >
                          <Edit size={14} />
                          <span>EDIT</span>
                        </button>
                        <button
                          onClick={() => handleDeleteProject(project.id)}
                          className="bg-red-500/20 text-red-400 px-4 py-2 text-sm font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center"
                          disabled={isLoading}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add Project Tab */}
          {activeTab === 'add' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-grunge-gray">Add New Project</h2>
              
              <div className="bg-grunge-gray/10 border border-grunge-gray/20 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-grunge-gray font-medium mb-2">Project Title</label>
                    <input
                      type="text"
                      value={newProject.title || ''}
                      onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray placeholder-grunge-gray/50 focus:outline-none focus:border-grunge-purple"
                      placeholder="PROJECT TITLE"
                    />
                  </div>
                  <div>
                    <label className="block text-grunge-gray font-medium mb-2">Category</label>
                    <input
                      type="text"
                      value={newProject.category || ''}
                      onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray placeholder-grunge-gray/50 focus:outline-none focus:border-grunge-purple"
                      placeholder="Category"
                    />
                  </div>
                  <div>
                    <label className="block text-grunge-gray font-medium mb-2">Year</label>
                    <input
                      type="text"
                      value={newProject.year || ''}
                      onChange={(e) => setNewProject({ ...newProject, year: e.target.value })}
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray placeholder-grunge-gray/50 focus:outline-none focus:border-grunge-purple"
                      placeholder="2024"
                    />
                  </div>
                  <div>
                    <label className="block text-grunge-gray font-medium mb-2">Live URL</label>
                    <input
                      type="url"
                      value={newProject.liveUrl || ''}
                      onChange={(e) => setNewProject({ ...newProject, liveUrl: e.target.value })}
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray placeholder-grunge-gray/50 focus:outline-none focus:border-grunge-purple"
                      placeholder="https://example.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-grunge-gray font-medium mb-2">Main Image URL</label>
                    <input
                      type="url"
                      value={newProject.image || ''}
                      onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray placeholder-grunge-gray/50 focus:outline-none focus:border-grunge-purple"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-grunge-gray font-medium mb-2">Additional Images (comma separated URLs)</label>
                    <input
                      type="text"
                      value={newProject.additionalImages?.join(', ') || ''}
                      onChange={(e) => updateArrayField('additionalImages', e.target.value)}
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray placeholder-grunge-gray/50 focus:outline-none focus:border-grunge-purple"
                      placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-grunge-gray font-medium mb-2">Description</label>
                    <textarea
                      value={newProject.description || ''}
                      onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray placeholder-grunge-gray/50 focus:outline-none focus:border-grunge-purple resize-none"
                      placeholder="Project description..."
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-grunge-gray font-medium mb-2">Project Overview</label>
                    <textarea
                      value={newProject.overview || ''}
                      onChange={(e) => setNewProject({ ...newProject, overview: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray placeholder-grunge-gray/50 focus:outline-none focus:border-grunge-purple resize-none"
                      placeholder="Detailed project overview..."
                    />
                  </div>
                  <div>
                    <label className="block text-grunge-gray font-medium mb-2">Technologies (comma separated)</label>
                    <input
                      type="text"
                      value={newProject.technologies?.join(', ') || ''}
                      onChange={(e) => updateArrayField('technologies', e.target.value)}
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray placeholder-grunge-gray/50 focus:outline-none focus:border-grunge-purple"
                      placeholder="React, TypeScript, CSS3"
                    />
                  </div>
                  <div>
                    <label className="block text-grunge-gray font-medium mb-2">Case Study URL</label>
                    <input
                      type="url"
                      value={newProject.caseStudyUrl || ''}
                      onChange={(e) => setNewProject({ ...newProject, caseStudyUrl: e.target.value })}
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray placeholder-grunge-gray/50 focus:outline-none focus:border-grunge-purple"
                      placeholder="https://example.com/case-study"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-grunge-gray font-medium mb-2">Key Features (comma separated)</label>
                    <input
                      type="text"
                      value={newProject.features?.join(', ') || ''}
                      onChange={(e) => updateArrayField('features', e.target.value)}
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray placeholder-grunge-gray/50 focus:outline-none focus:border-grunge-purple"
                      placeholder="Responsive design, Interactive animations, Modern web standards"
                    />
                  </div>
                </div>
                
                <div className="flex space-x-4 mt-8">
                  <button
                    onClick={handleAddProject}
                    disabled={isLoading}
                    className="bg-grunge-purple text-grunge-gray px-8 py-3 font-semibold hover:bg-grunge-gray hover:text-grunge-dark transition-all duration-300 flex items-center space-x-2 disabled:opacity-50"
                  >
                    <Plus size={20} />
                    <span>{isLoading ? 'ADDING...' : 'ADD PROJECT'}</span>
                  </button>
                  <button
                    onClick={() => setNewProject({ 
                      title: '', 
                      category: '', 
                      image: '', 
                      description: '',
                      overview: '',
                      technologies: [],
                      features: [],
                      year: '',
                      additionalImages: [],
                      liveUrl: '',
                      caseStudyUrl: ''
                    })}
                    className="bg-transparent border border-grunge-gray text-grunge-gray px-8 py-3 font-semibold hover:bg-grunge-gray hover:text-grunge-dark transition-all duration-300"
                  >
                    CLEAR FORM
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Edit Project Tab */}
          {activeTab === 'edit' && editingProject && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-grunge-gray">Edit Project</h2>
                <button
                  onClick={() => {
                    setEditingProject(null);
                    setActiveTab('portfolio');
                  }}
                  className="text-grunge-gray hover:text-grunge-purple transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="bg-grunge-gray/10 border border-grunge-gray/20 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-grunge-gray font-medium mb-2">Project Title</label>
                    <input
                      type="text"
                      value={editingProject.title}
                      onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray focus:outline-none focus:border-grunge-purple"
                    />
                  </div>
                  <div>
                    <label className="block text-grunge-gray font-medium mb-2">Category</label>
                    <input
                      type="text"
                      value={editingProject.category}
                      onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value })}
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray focus:outline-none focus:border-grunge-purple"
                    />
                  </div>
                  <div>
                    <label className="block text-grunge-gray font-medium mb-2">Year</label>
                    <input
                      type="text"
                      value={editingProject.year || ''}
                      onChange={(e) => setEditingProject({ ...editingProject, year: e.target.value })}
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray focus:outline-none focus:border-grunge-purple"
                    />
                  </div>
                  <div>
                    <label className="block text-grunge-gray font-medium mb-2">Live URL</label>
                    <input
                      type="url"
                      value={editingProject.liveUrl || ''}
                      onChange={(e) => setEditingProject({ ...editingProject, liveUrl: e.target.value })}
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray focus:outline-none focus:border-grunge-purple"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-grunge-gray font-medium mb-2">Main Image URL</label>
                    <input
                      type="url"
                      value={editingProject.image}
                      onChange={(e) => setEditingProject({ ...editingProject, image: e.target.value })}
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray focus:outline-none focus:border-grunge-purple"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-grunge-gray font-medium mb-2">Additional Images (comma separated URLs)</label>
                    <input
                      type="text"
                      value={editingProject.additionalImages?.join(', ') || ''}
                      onChange={(e) => updateArrayField('additionalImages', e.target.value, true)}
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray focus:outline-none focus:border-grunge-purple"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-grunge-gray font-medium mb-2">Description</label>
                    <textarea
                      value={editingProject.description}
                      onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray focus:outline-none focus:border-grunge-purple resize-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-grunge-gray font-medium mb-2">Project Overview</label>
                    <textarea
                      value={editingProject.overview || ''}
                      onChange={(e) => setEditingProject({ ...editingProject, overview: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray focus:outline-none focus:border-grunge-purple resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-grunge-gray font-medium mb-2">Technologies (comma separated)</label>
                    <input
                      type="text"
                      value={editingProject.technologies?.join(', ') || ''}
                      onChange={(e) => updateArrayField('technologies', e.target.value, true)}
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray focus:outline-none focus:border-grunge-purple"
                    />
                  </div>
                  <div>
                    <label className="block text-grunge-gray font-medium mb-2">Case Study URL</label>
                    <input
                      type="url"
                      value={editingProject.caseStudyUrl || ''}
                      onChange={(e) => setEditingProject({ ...editingProject, caseStudyUrl: e.target.value })}
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray focus:outline-none focus:border-grunge-purple"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-grunge-gray font-medium mb-2">Key Features (comma separated)</label>
                    <input
                      type="text"
                      value={editingProject.features?.join(', ') || ''}
                      onChange={(e) => updateArrayField('features', e.target.value, true)}
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray focus:outline-none focus:border-grunge-purple"
                    />
                  </div>
                </div>
                
                <div className="flex space-x-4 mt-8">
                  <button
                    onClick={handleSaveProject}
                    disabled={isLoading}
                    className="bg-grunge-purple text-grunge-gray px-8 py-3 font-semibold hover:bg-grunge-gray hover:text-grunge-dark transition-all duration-300 flex items-center space-x-2 disabled:opacity-50"
                  >
                    <Save size={20} />
                    <span>{isLoading ? 'SAVING...' : 'SAVE CHANGES'}</span>
                  </button>
                  <button
                    onClick={() => {
                      setEditingProject(null);
                      setActiveTab('portfolio');
                    }}
                    className="bg-transparent border border-grunge-gray text-grunge-gray px-8 py-3 font-semibold hover:bg-grunge-gray hover:text-grunge-dark transition-all duration-300"
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-grunge-gray">Settings</h2>
              
              <div className="bg-grunge-gray/10 border border-grunge-gray/20 p-8">
                <h3 className="text-xl font-bold text-grunge-gray mb-4">Account Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-grunge-gray font-medium mb-2">Admin Username</label>
                    <input
                      type="text"
                      value="admin"
                      disabled
                      className="w-full px-4 py-3 bg-grunge-gray/5 border border-grunge-gray/20 text-grunge-gray/60"
                    />
                  </div>
                  <div>
                    <label className="block text-grunge-gray font-medium mb-2">Site Title</label>
                    <input
                      type="text"
                      value="D:YU - Digital Designer Portfolio"
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray focus:outline-none focus:border-grunge-purple"
                    />
                  </div>
                  <div>
                    <label className="block text-grunge-gray font-medium mb-2">Contact Email</label>
                    <input
                      type="email"
                      value="usachikdenys@gmail.com"
                      className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray focus:outline-none focus:border-grunge-purple"
                    />
                  </div>
                </div>
                
                <button className="mt-6 bg-grunge-purple text-grunge-gray px-8 py-3 font-semibold hover:bg-grunge-gray hover:text-grunge-dark transition-all duration-300">
                  SAVE SETTINGS
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;