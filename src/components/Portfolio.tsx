import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../App';

interface PortfolioProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ projects, onProjectClick }) => {
  return (
    <section id="portfolio" className="py-20 bg-grunge-dark relative grunge-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-grunge-gray mb-4">
            PORT<span className="text-grunge-purple">FOLIO</span>
          </h2>
          <p className="text-grunge-gray/80 max-w-2xl mx-auto">
            A collection of projects where analog aesthetics meet digital innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden bg-grunge-gray/10 hover:bg-grunge-gray/20 transition-all duration-500 transform hover:scale-105 cursor-pointer"
              onClick={() => onProjectClick(project)}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-grunge-dark via-transparent to-transparent opacity-60"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-grunge-purple/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <button className="p-3 bg-grunge-gray text-grunge-dark rounded-full hover:bg-grunge-dark hover:text-grunge-gray transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="text-grunge-purple text-sm font-semibold mb-2 tracking-wide">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-grunge-gray mb-3 group-hover:text-grunge-purple transition-colors">
                  {project.title}
                </h3>
                <p className="text-grunge-gray/80 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;