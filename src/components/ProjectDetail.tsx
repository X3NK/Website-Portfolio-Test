import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, Tag } from 'lucide-react';
import { Project } from '../App';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  // Use project's additional images or fallback to main image
  const projectImages = [
    project.image,
    ...(project.additionalImages || [])
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
            {project.additionalImages && project.additionalImages.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {project.additionalImages.map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden bg-grunge-gray/10">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 2}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            )}
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
                  <span>{project.year || '2024'}</span>
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
              {project.overview && (
                <div>
                  <h3 className="text-xl font-bold text-grunge-gray mb-4">Project Overview</h3>
                  <p className="text-grunge-gray/80 leading-relaxed">
                    {project.overview}
                  </p>
                </div>
              )}

              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-grunge-gray mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray px-3 py-1 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-grunge-gray mb-4">Key Features</h3>
                  <ul className="space-y-2 text-grunge-gray/80">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-grunge-purple mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-6">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-grunge-purple text-grunge-gray px-8 py-3 font-semibold hover:bg-grunge-gray hover:text-grunge-dark transition-all duration-300 flex items-center space-x-2"
                  >
                    <ExternalLink size={20} />
                    <span>VIEW LIVE</span>
                  </a>
                )}
                {project.caseStudyUrl && (
                  <a
                    href={project.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border border-grunge-gray text-grunge-gray px-8 py-3 font-semibold hover:bg-grunge-gray hover:text-grunge-dark transition-all duration-300"
                  >
                    CASE STUDY
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;