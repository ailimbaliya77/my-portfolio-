import React, { useEffect, useRef } from 'react';

const AnimatedSection = ({ children, className = '' }) => {
  const sectionRef = useRef(null);

  const animateElement = (element, animation) => {
    if (!element) return;
    
    switch (animation.type) {
      case 'fadeInUp':
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = `opacity ${animation.duration}s ease, transform ${animation.duration}s ease`;
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, animation.delay * 1000);
        break;
      case 'fadeInLeft':
        element.style.opacity = '0';
        element.style.transform = 'translateX(-50px)';
        element.style.transition = `opacity ${animation.duration}s ease, transform ${animation.duration}s ease`;
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateX(0)';
        }, animation.delay * 1000);
        break;
    }
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-on-scroll');
          elements.forEach((el, index) => {
            animateElement(el, { type: 'fadeInUp', duration: 0.6, delay: index * 0.1 });
          });
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;