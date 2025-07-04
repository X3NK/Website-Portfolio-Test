import React from 'react';
import { Code, Palette, Monitor, Layers } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Palette size={24} />, title: 'Graphic Design', desc: 'Visual identity, posters, print design' },
    { icon: <Monitor size={24} />, title: 'UI/UX Design', desc: 'User interface design, prototyping' },
    { icon: <Layers size={24} />, title: 'Brand Identity', desc: 'Logo design, brand guidelines, typography' },
  ];

  return (
    <section id="about" className="py-20 bg-grunge-dark relative grunge-texture">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-grunge-gray mb-6">
                ABOUT THE <span className="text-grunge-purple">PROJECT</span>
              </h2>
              <p className="text-grunge-gray/80 text-lg leading-relaxed mb-6">
                Welcome to my digital utopia – a space where analog warmth meets digital precision. 
                I'm Denys, a designer who believes in the power of unexpected combinations.
              </p>
              <p className="text-grunge-gray/80 leading-relaxed mb-8">
                My work spans from traditional graphic design to cutting-edge digital experiences. 
                I love creating pieces that feel both nostalgic and futuristic, combining the texture 
                and imperfection of analog processes with the precision of digital tools.
              </p>
              <div className="flex items-center space-x-4 text-grunge-purple">
                <span className="text-3xl font-bold">5+</span>
                <span className="text-grunge-gray">Years of Experience</span>
              </div>
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-grunge-gray/10 border border-grunge-gray/20 p-6 hover:bg-grunge-gray/20 hover:border-grunge-purple/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-grunge-purple mt-1">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-grunge-gray mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-grunge-gray/80">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;