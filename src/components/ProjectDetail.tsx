import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, Tag } from 'lucide-react';
import { Project } from '../App';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  // Mock additional images for the project
  const projectImages = [
    project.image,
    'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  return (
    <div className="min-h-screen bg-grunge-dark font-red-hat">
      {/* Header */}
      <header className="bg-grunge-gray/10 border-b border-grunge-gray/20 px-6 py-4">
        <div className="container mx-auto">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-grunge-gray hover:text-grunge-purple transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Project Images */}
          <div className="space-y-6">
            <div className="aspect-square overflow-hidden bg-grunge-gray/10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Additional Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              {projectImages.slice(1).map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden bg-grunge-gray/10">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 2}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Project Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-grunge-purple text-grunge-gray px-3 py-1 text-sm font-semibold">
                  {project.category}
                </span>
                <div className="flex items-center space-x-2 text-grunge-gray/60 text-sm">
                  <Calendar size={16} />
                  <span>2024</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-grunge-gray mb-6">
                {project.title}
              </h1>
              
              <p className="text-grunge-gray/80 text-lg leading-relaxed mb-8">
                {project.description}
              </p>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-grunge-gray mb-4">Project Overview</h3>
                <p className="text-grunge-gray/80 leading-relaxed">
                  This project explores the intersection of analog and digital aesthetics, 
                  combining traditional design principles with modern digital techniques. 
                  The work represents a unique approach to visual communication that bridges 
                  the gap between nostalgic and futuristic design elements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-grunge-gray mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {['Adobe Photoshop', 'Illustrator', 'After Effects', 'Figma'].map((tech) => (
                    <span
                      key={tech}
                      className="bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-grunge-gray mb-4">Key Features</h3>
                <ul className="space-y-2 text-grunge-gray/80">
                  <li className="flex items-start space-x-2">
                    <span className="text-grunge-purple mt-1">•</span>
                    <span>Innovative blend of analog and digital aesthetics</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-grunge-purple mt-1">•</span>
                    <span>Custom typography and visual elements</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-grunge-purple mt-1">•</span>
                    <span>Experimental approach to visual communication</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-grunge-purple mt-1">•</span>
                    <span>Cohesive brand identity development</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-6">
                <button className="bg-grunge-purple text-grunge-gray px-8 py-3 font-semibold hover:bg-grunge-gray hover:text-grunge-dark transition-all duration-300 flex items-center space-x-2">
                  <ExternalLink size={20} />
                  <span>VIEW LIVE</span>
                </button>
                <button className="bg-transparent border border-grunge-gray text-grunge-gray px-8 py-3 font-semibold hover:bg-grunge-gray hover:text-grunge-dark transition-all duration-300">
                  CASE STUDY
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;