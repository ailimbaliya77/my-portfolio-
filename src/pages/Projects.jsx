import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import img1 from '../assets/portfolio background.jpeg';
import img2 from '../assets/blogging.jpeg';
import img3 from '../assets/clinic management.webp';
import img4 from '../assets/catering reservation.jpg';

const Projects = () => {
  const projects = [
    {
      title: "MyWeddingTour",
      description: "Modern e-commerce website to help foreigners to attend our indian wedding and to join our culture",
      tech: ["React", "tailwindcss", "wordpress"],
      image: img1,
      github: "https://ailimbaliya77.github.io/MyWeddingTour/",
    },
    {
      title: "Blogg-website",
      description: "exploring the world of different type of blogs",
      tech: ["React", "tailwindcss", "Firebase"],
      image: img2,
      github: "https://ailimbaliya77.github.io/goops-blog/",
    },
    {
      title: "Clinic management website",
      description: "modern e-commerce platform for docter and patients",
      tech: ["React", "tailwind", "Firebase"],
      image: img3,
      github: "https://ailimbaliya77.github.io/clinic-managementt/",
    },
    {
      title: "catering reservation website",
      description: "website where users can book their catering needs and make their days memorable",
      tech: ["React", "tailwind", "Firebase"],
      image:img4,
      github: "https://ailimbaliya77.github.io/catering-reservation/",
    }
  ];

  return (
    <AnimatedSection>
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="animate-on-scroll text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="animate-on-scroll group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                    <a href={project.github} className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Projects;