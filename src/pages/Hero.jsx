import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import img1 from '../assets/portfolio background.jpeg'

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const animateElement = (element, animation) => {
      if (!element) return;
      element.style.opacity = '0';
      element.style.transform = 'translateY(50px)';
      element.style.transition = `opacity ${animation.duration}s ease, transform ${animation.duration}s ease`;
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, animation.delay * 1000);
    };

    const heroElements = heroRef.current?.querySelectorAll('.animate-element');
    heroElements?.forEach((el, index) => {
      animateElement(el, { duration: 0.8, delay: index * 0.2 });
    });
  }, []);

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ 
            backgroundImage: {img1},
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
      <ParticleBackground />
      
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <h1 className="animate-element text-2xl md:text-8xl from-neutral-200 mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          Aateqah Limbaliya
        </h1>
        <p>--Frontend developer</p>
        <br />
        <hr />
        <br />
        <p className="animate-element text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Crafting beautiful, interactive web experiences with modern technologies and elegant animations
        </p>
        <div className="animate-element flex justify-center space-x-6 mb-12">
          <a href="#projects" className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
            View My Work
          </a>
          <a href="#contact" className="border border-purple-500 px-8 py-3 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300">
            Get In Touch
          </a>
        </div>
        <div className="animate-element">
          <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;