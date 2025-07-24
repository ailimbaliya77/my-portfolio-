import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import img1 from '../assets/WhatsApp Image 2025-06-05 at 00.58.15_45471452.jpg'

const About = () => {
  return (
    <AnimatedSection>
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="animate-on-scroll text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="animate-on-scroll text-gray-300 text-lg mb-6 leading-relaxed">
                I'm a passionate frontend developer with efficiant experience creating stunning web applications. 
                I specialize in React, Javascript, and modern CSS frameworks like tailwind and bootstrap, always staying up-to-date with the latest technologies.
              </p>
              <p className="animate-on-scroll text-gray-300 text-lg mb-8 leading-relaxed">
                My goal is to bridge the gap between design and functionality, creating seamless user experiences 
                that not only look beautiful but perform flawlessly across all devices.
              </p>
              <div className="animate-on-scroll flex space-x-4">
                <a href="https://github.com/ailimbaliya77" className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:scale-110 transition-transform duration-300">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/aatiqah-limbaliya-a508122b1/" className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:aatekalimbaliya910@gmail.com" className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 absolute inset-0" />
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center relative">
                  <div className="animate-on-scroll flex-shrink-0 w-full lg:w-1/2">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 absolute inset-0" />
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center relative overflow-hidden">
                <img 
                  src={img1}
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default About;