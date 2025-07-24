import React from 'react';
import { Code, Palette, Zap, Monitor } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Skills = () => {
  const skills = [
    { name: "HTML", level: 95, icon: <Code className="w-6 h-6" /> },
    { name: "CSS", level: 90, icon: <Zap className="w-6 h-6" /> },
    { name: "JavaScript", level: 85, icon: <Code className="w-6 h-6" /> },
    { name: "React", level: 80, icon: <Monitor className="w-6 h-6" /> },
    { name: "GSAP", level: 85, icon: <Palette className="w-6 h-6" /> },
    { name: "CSS/Tailwind/Bootstrap", level: 95, icon: <Palette className="w-6 h-6" /> }
  ];

  return (
    <AnimatedSection>
      <section id="skills" className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="animate-on-scroll text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="animate-on-scroll bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="text-purple-400 mr-3">{skill.icon}</div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="text-sm text-gray-400">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Skills;