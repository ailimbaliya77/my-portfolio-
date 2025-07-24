import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  return (
    <AnimatedSection>
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="animate-on-scroll text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="animate-on-scroll text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
          </p>
          <div className="animate-on-scroll">
            <a 
              href="mailto:aatekalimbaliya910@gmail.com" 
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300"
            >
              <Mail className="w-6 h-6 mr-2" />
              Get In Touch
            </a>
          </div>
          <div className="animate-on-scroll mt-12 flex justify-center space-x-8">
            <a href="https://github.com/ailimbaliya77" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/aatiqah-limbaliya-a508122b1/" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:aatekalimbaliya910@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Contact;